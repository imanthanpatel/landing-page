
import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FileText, Users, ChevronDown } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";

// Define types for team members
type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
  resume?: string;
  bio?: string;
};

type TeamCategory = {
  id: string;
  name: string;
  members: TeamMember[];
};

const TeamCarousel = () => {
  const isMobile = useIsMobile();
  const [activeTeam, setActiveTeam] = useState("bod");
  const [isOpen, setIsOpen] = useState(false);
  
  // Sample data - in a real app this would come from an API or database
  const [teamCategories] = useState<TeamCategory[]>([
    {
      id: "bod",
      name: "Board of Directors",
      members: [
        {
          id: 1,
          name: "Dr. Anand Kumar",
          position: "Executive Director",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          resume: "#resume-link",
          bio: "Dr. Anand Kumar brings over 20 years of experience in innovation management and technology leadership."
        },
        {
          id: 2,
          name: "Dr. Priya Patel",
          position: "Head of Innovation",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          resume: "#resume-link",
          bio: "Dr. Priya Patel is an accomplished researcher with expertise in sustainable technology development."
        },
        {
          id: 3,
          name: "Rajesh Sharma",
          position: "Technology Officer",
          image: "https://randomuser.me/api/portraits/men/46.jpg",
          resume: "#resume-link",
          bio: "Rajesh Sharma has led multiple technology initiatives and partnerships with industry leaders."
        },
        {
          id: 4,
          name: "Anita Desai",
          position: "Operations Manager",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          resume: "#resume-link",
          bio: "Anita Desai oversees the day-to-day operations and ensures smooth functioning of all initiatives."
        }
      ]
    },
    {
      id: "advisory",
      name: "Advisory Board",
      members: [
        {
          id: 5,
          name: "Dr. Rakesh Mishra",
          position: "Industry Expert",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          resume: "#resume-link",
          bio: "Dr. Rakesh Mishra is a veteran in chemical engineering with multiple patents to his name."
        },
        {
          id: 6,
          name: "Meena Gupta",
          position: "Financial Advisor",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          resume: "#resume-link",
          bio: "Meena Gupta provides strategic financial guidance to help startups navigate funding challenges."
        },
        {
          id: 7,
          name: "Vijay Malhotra",
          position: "Entrepreneurship Mentor",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          resume: "#resume-link",
          bio: "Vijay Malhotra has successfully founded three startups and mentors budding entrepreneurs."
        },
        {
          id: 8,
          name: "Dr. Leela Nair",
          position: "Academic Liaison",
          image: "https://randomuser.me/api/portraits/women/54.jpg",
          resume: "#resume-link",
          bio: "Dr. Leela Nair bridges the gap between academic research and industry applications."
        }
      ]
    },
    {
      id: "student-team",
      name: "Student Team",
      members: [
        {
          id: 9,
          name: "Rohan Singh",
          position: "Student Coordinator",
          image: "https://randomuser.me/api/portraits/men/72.jpg",
          resume: "#resume-link",
          bio: "Rohan Singh leads the student initiatives and coordinates with various departments."
        },
        {
          id: 10,
          name: "Neha Verma",
          position: "Technical Lead",
          image: "https://randomuser.me/api/portraits/women/82.jpg",
          resume: "#resume-link",
          bio: "Neha Verma manages technical aspects of student projects and provides guidance."
        },
        {
          id: 11,
          name: "Karan Patel",
          position: "Event Coordinator",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          resume: "#resume-link",
          bio: "Karan Patel organizes workshops, hackathons, and other events for student engagement."
        },
        {
          id: 12,
          name: "Priti Joshi",
          position: "Outreach Executive",
          image: "https://randomuser.me/api/portraits/women/76.jpg",
          resume: "#resume-link",
          bio: "Priti Joshi manages social media presence and builds relationships with other institutions."
        }
      ]
    }
  ]);
  
  // Find the active category
  const activeCategory = teamCategories.find(cat => cat.id === activeTeam);

  const handleCategoryChange = (categoryId: string) => {
    setActiveTeam(categoryId);
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      {isMobile ? (
        <div className="mb-8">
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-guiitar-light rounded-lg text-left">
              <span className="font-medium text-lg">{activeCategory?.name}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 bg-white rounded-lg shadow-md overflow-hidden">
              {teamCategories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left p-3 ${category.id === activeTeam ? 'bg-guiitar-light text-guiitar-primary' : 'hover:bg-gray-50'}`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  <span className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    {category.name}
                  </span>
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      ) : (
        <Tabs defaultValue="bod" value={activeTeam} onValueChange={setActiveTeam} className="w-full">
          <TabsList className="grid w-full mb-8 md:grid-cols-3">
            {teamCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                <span className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  {category.name}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      {activeCategory && (
        <div className="py-4">
          <h3 className="text-2xl font-semibold mb-6">{activeCategory.name}</h3>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {activeCategory.members.map((member) => (
                <CarouselItem key={member.id} className="pl-2 md:pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <div className="h-48 sm:h-60 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-xl mb-1">{member.name}</h4>
                      <p className="text-gray-600 mb-4">{member.position}</p>
                      
                      {member.bio && (
                        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{member.bio}</p>
                      )}
                      
                      <div className="flex justify-center space-x-3">
                        <a href="#" className="text-gray-400 hover:text-guiitar-primary">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76c-1.15 0-2.07-.9-2.07-2.01 0-1.11.92-2.01 2.07-2.01 1.14 0 2.06.9 2.06 2.01 0 1.11-.92 2.01-2.06 2.01zm14.62 12.34h-3.6v-5.61c0-1.33-.02-3.05-1.87-3.05-1.88 0-2.16 1.45-2.16 2.95v5.71h-3.6V9.24h3.45v1.58h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.38 4.3 5.45v5.7z"></path>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-guiitar-primary">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                          </svg>
                        </a>
                      </div>
                    </CardContent>
                    {member.resume && (
                      <CardFooter className="justify-center pt-2 pb-4">
                        <Button variant="outline" className="w-full">
                          <FileText className="mr-2 h-4 w-4" />
                          View Resume
                        </Button>
                      </CardFooter>
                    )}
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 space-x-4">
              <CarouselPrevious className="relative static transform-none" />
              <CarouselNext className="relative static transform-none" />
            </div>
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default TeamCarousel;
