import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Type definition for team member
type TeamMember = {
  name: string;
  photo: string;
  role?: string;
};

// Type definition for project data
type StudentProject = {
  id: number;
  name: string;
  grant: string;
  mentor: string;
  usp: string;
  teamMembers: TeamMember[];
};

const StudentProjects = () => {
  // Sample project data with multiple team members
  const [projects] = useState<StudentProject[]>([
    {
      id: 1,
      name: "Smart Healthcare Monitoring System",
      grant: "₹1.8 Lakhs",
      mentor: "Dr. Priya Sharma",
      usp: "AI-powered health monitoring for rural areas with limited access to healthcare",
      teamMembers: [
        { name: "Rahul Kumar", photo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=200", role: "Team Lead" },
        { name: "Anita Singh", photo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=200" },
        { name: "Vikram Patel", photo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&h=200" }
      ]
    },
    {
      id: 2,
      name: "Sustainable Waste Management Platform",
      grant: "₹1.5 Lakhs",
      mentor: "Dr. Rajesh Patel",
      usp: "Mobile app to connect waste generators with recyclers to reduce landfill waste",
      teamMembers: [
        { name: "Priya Singh", photo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=200", role: "Team Lead" },
        { name: "Amit Sharma", photo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=200" },
        { name: "Neha Gupta", photo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&h=200" },
        { name: "Ravi Kumar", photo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=200" }
      ]
    },
    {
      id: 3,
      name: "Agricultural Drone Monitoring",
      grant: "₹2 Lakhs",
      mentor: "Dr. Anita Desai",
      usp: "Low-cost drone solution for small farmers to monitor crop health and optimize resources",
      teamMembers: [
        { name: "Amit Patel", photo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&h=200", role: "Team Lead" },
        { name: "Sneha Joshi", photo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=200" },
        { name: "Karan Singh", photo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=200" },
        { name: "Maya Sharma", photo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&h=200" },
        { name: "Rohit Gupta", photo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=200" }
      ]
    },
    {
      id: 4,
      name: "EdTech for Differently-abled",
      grant: "₹1.75 Lakhs",
      mentor: "Dr. Vikram Singh",
      usp: "Adaptive learning platform with specialized interfaces for differently-abled students",
      teamMembers: [
        { name: "Neha Sharma", photo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=200", role: "Team Lead" },
        { name: "Arjun Mehta", photo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&h=200" }
      ]
    },
    {
      id: 5,
      name: "Smart Water Quality Monitor",
      grant: "₹1.6 Lakhs",
      mentor: "Dr. Meera Joshi",
      usp: "IoT-based solution for real-time monitoring of water quality in rivers and lakes",
      teamMembers: [
        { name: "Vijay Mehta", photo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&h=200", role: "Team Lead" },
        { name: "Kavya Patel", photo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=200" },
        { name: "Ankit Singh", photo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=200" },
        { name: "Divya Sharma", photo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=200" },
        { name: "Rajesh Kumar", photo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&h=200" },
        { name: "Priyanka Joshi", photo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&h=200" }
      ]
    },
    {
      id: 6,
      name: "Renewable Energy Storage",
      grant: "₹2.2 Lakhs",
      mentor: "Dr. Sanjay Mehta",
      usp: "Novel battery technology using sustainable materials for efficient energy storage",
      teamMembers: [
        { name: "Aisha Khan", photo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=200", role: "Team Lead" },
        { name: "Sameer Patel", photo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&h=200" },
        { name: "Tanvi Singh", photo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=200" },
        { name: "Harsh Gupta", photo: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=200" }
      ]
    },
  ]);

  // Function to render team member avatars in a grid layout
  const renderTeamAvatars = (members: TeamMember[]) => {
    const maxVisible = 6;
    const visibleMembers = members.slice(0, maxVisible);
    const remainingCount = Math.max(0, members.length - maxVisible);

    // Determine grid layout based on number of members
    const getGridClass = (count: number) => {
      if (count === 1) return "grid-cols-1 justify-center";
      if (count === 2) return "grid-cols-2";
      if (count === 3) return "grid-cols-3";
      if (count === 4) return "grid-cols-2";
      if (count === 5) return "grid-cols-3";
      return "grid-cols-3"; // 6 or more
    };

    return (
      <div className={`grid gap-2 ${getGridClass(visibleMembers.length)}`}>
        {visibleMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <Avatar className="h-12 w-12 border-2 border-guiitar-primary">
              <AvatarImage src={member.photo} alt={member.name} />
              <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-xs mt-1 text-center font-medium">
              {member.name.split(' ')[0]}
            </span>
            {member.role && (
              <span className="text-xs text-guiitar-primary font-semibold">
                {member.role}
              </span>
            )}
          </div>
        ))}
        {remainingCount > 0 && (
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 border-2 border-guiitar-primary rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-xs font-semibold text-gray-600">+{remainingCount}</span>
            </div>
            <span className="text-xs mt-1 text-center text-gray-500">more</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Funded Student Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover innovative projects from talented students that have received funding through our various grant programs. 
            These projects showcase the creativity and problem-solving abilities of our next generation of entrepreneurs.
          </p>
        </div>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project) => (
                <CarouselItem 
                  key={project.id} 
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="border-t-4 border-guiitar-primary hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-bold text-xl mb-2">{project.name}</h3>
                        <Badge className="bg-guiitar-accent text-xs">
                          {project.grant}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Users size={16} className="mr-1" />
                        <span>Mentor: {project.mentor}</span>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-gray-700">{project.usp}</p>
                      </div>
                      
                      {/* Team Members Section */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-3 text-gray-800">Team Members ({project.teamMembers.length})</h4>
                        {renderTeamAvatars(project.teamMembers)}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4 mt-auto">
                      <Button 
                        className="w-full bg-guiitar-primary hover:bg-guiitar-primary/90 text-white"
                      >
                        View Project <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static transform-none mx-2" />
              <CarouselNext className="relative static transform-none mx-2" />
            </div>
          </Carousel>
          
          <div className="text-center mt-10">
            <Button 
              className="bg-guiitar-secondary hover:bg-guiitar-secondary/90 text-white"
            >
              View All Projects <ExternalLink size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProjects;