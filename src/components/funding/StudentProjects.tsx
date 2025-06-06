
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
import { ExternalLink, Award, Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Type definition for project data
type StudentProject = {
  id: number;
  name: string;
  grant: string;
  mentor: string;
  usp: string;
  studentPhoto: string;
  studentName: string;
};

const StudentProjects = () => {
  // Sample project data - in production, this would come from an API or database
  const [projects] = useState<StudentProject[]>([
    {
      id: 1,
      name: "Smart Healthcare Monitoring System",
      grant: "₹1.8 Lakhs",
      mentor: "Dr. Priya Sharma",
      usp: "AI-powered health monitoring for rural areas with limited access to healthcare",
      studentPhoto: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=200",
      studentName: "Rahul Kumar"
    },
    {
      id: 2,
      name: "Sustainable Waste Management Platform",
      grant: "₹1.5 Lakhs",
      mentor: "Dr. Rajesh Patel",
      usp: "Mobile app to connect waste generators with recyclers to reduce landfill waste",
      studentPhoto: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=200",
      studentName: "Priya Singh"
    },
    {
      id: 3,
      name: "Agricultural Drone Monitoring",
      grant: "₹2 Lakhs",
      mentor: "Dr. Anita Desai",
      usp: "Low-cost drone solution for small farmers to monitor crop health and optimize resources",
      studentPhoto: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&h=200",
      studentName: "Amit Patel"
    },
    {
      id: 4,
      name: "EdTech for Differently-abled",
      grant: "₹1.75 Lakhs",
      mentor: "Dr. Vikram Singh",
      usp: "Adaptive learning platform with specialized interfaces for differently-abled students",
      studentPhoto: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=200",
      studentName: "Neha Sharma"
    },
    {
      id: 5,
      name: "Smart Water Quality Monitor",
      grant: "₹1.6 Lakhs",
      mentor: "Dr. Meera Joshi",
      usp: "IoT-based solution for real-time monitoring of water quality in rivers and lakes",
      studentPhoto: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&h=200",
      studentName: "Vijay Mehta"
    },
    {
      id: 6,
      name: "Renewable Energy Storage",
      grant: "₹2.2 Lakhs",
      mentor: "Dr. Sanjay Mehta",
      usp: "Novel battery technology using sustainable materials for efficient energy storage",
      studentPhoto: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=200",
      studentName: "Aisha Khan"
    },
  ]);

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
                  <Card className="h-full border-t-4 border-guiitar-primary hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex items-center space-x-4 mb-4">
                        <Avatar className="h-12 w-12 border-2 border-guiitar-primary">
                          <AvatarImage src={project.studentPhoto} alt={project.studentName} />
                          <AvatarFallback>{project.studentName.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-sm">{project.studentName}</p>
                          <Badge className="mt-1 bg-guiitar-accent text-xs">
                            {project.grant}
                          </Badge>
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-xl mb-3">{project.name}</h3>
                      
                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Users size={16} className="mr-1" />
                        <span>Mentor: {project.mentor}</span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-700">{project.usp}</p>
                      </div>
                      
                      <div className="flex items-center space-x-3 mt-4">
                        <div className="w-10 h-10">
                          <img 
                            src="/placeholder.svg" 
                            alt="GSFC University" 
                            className="w-full h-full object-contain"
                            title="GSFC University"
                          />
                        </div>
                        <div className="w-10 h-10">
                          <img 
                            src="/placeholder.svg" 
                            alt="GUIITAR Council" 
                            className="w-full h-full object-contain"
                            title="GUIITAR Council"
                          />
                        </div>
                        <div className="w-10 h-10">
                          <img 
                            src="/placeholder.svg" 
                            alt="SSIP" 
                            className="w-full h-full object-contain"
                            title="SSIP"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4">
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
