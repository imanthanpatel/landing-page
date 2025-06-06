
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink, Rocket, Award, Users } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

type Startup = {
  id: number;
  name: string;
  founders: string[];
  founderPhotos: string[];
  sector: string;
  fundingReceived: string;
  description: string;
  logo: string;
};

const SupportedStartups = () => {
  const startups: Startup[] = [
    {
      id: 1,
      name: "EcoWaste Solutions",
      founders: ["Anjali Sharma", "Rohan Gupta"],
      founderPhotos: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=200",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&h=200"
      ],
      sector: "CleanTech",
      fundingReceived: "₹15 Lakhs",
      description: "Developing sustainable solutions for waste management in urban areas through IoT-enabled smart waste bins.",
      logo: "/placeholder.svg"
    },
    {
      id: 2,
      name: "AgriTech Innovations",
      founders: ["Vikram Patel", "Meera Desai"],
      founderPhotos: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=200&h=200",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&h=200"
      ],
      sector: "Agriculture",
      fundingReceived: "₹20 Lakhs",
      description: "Revolutionizing farming with drone technology and AI-driven crop analytics for small and medium farmers.",
      logo: "/placeholder.svg"
    },
    {
      id: 3,
      name: "MediConnect",
      founders: ["Raj Malhotra"],
      founderPhotos: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&h=200"
      ],
      sector: "HealthTech",
      fundingReceived: "₹18 Lakhs",
      description: "Platform connecting patients in rural areas with specialized medical professionals through telemedicine.",
      logo: "/placeholder.svg"
    },
    {
      id: 4,
      name: "EduReach",
      founders: ["Priya Joshi", "Karan Singh"],
      founderPhotos: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&h=200",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=200&h=200"
      ],
      sector: "EdTech",
      fundingReceived: "₹12 Lakhs",
      description: "Bridging educational gaps for underprivileged students through personalized learning applications.",
      logo: "/placeholder.svg"
    },
    {
      id: 5,
      name: "RenewPower",
      founders: ["Amit Kumar"],
      founderPhotos: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&h=200"
      ],
      sector: "Energy",
      fundingReceived: "₹25 Lakhs",
      description: "Innovative energy storage solutions using advanced materials for renewable energy systems.",
      logo: "/placeholder.svg"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Startups</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            These innovative startups have received funding and mentorship support through our various programs, 
            successfully translating ideas into thriving businesses that address real-world challenges.
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
              {startups.map((startup) => (
                <CarouselItem key={startup.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-16 h-16 bg-white rounded-lg p-2 shadow-sm">
                          <img 
                            src={startup.logo} 
                            alt={startup.name} 
                            className="w-full h-full object-contain" 
                          />
                        </div>
                        <Badge className="bg-guiitar-accent">{startup.sector}</Badge>
                      </div>
                      
                      <h3 className="font-bold text-xl mb-3">{startup.name}</h3>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <Award className="h-4 w-4 text-guiitar-primary" />
                        <span className="font-semibold text-sm">{startup.fundingReceived}</span>
                      </div>
                      
                      <p className="text-gray-700 text-sm mb-4">{startup.description}</p>
                      
                      <div className="border-t pt-4 mt-4">
                        <h4 className="text-sm font-semibold mb-2 flex items-center">
                          <Users className="h-4 w-4 mr-1" /> Founders
                        </h4>
                        <div className="flex -space-x-4">
                          {startup.founders.map((founder, index) => (
                            <Avatar key={index} className="h-10 w-10 border-2 border-white">
                              <AvatarImage src={startup.founderPhotos[index]} alt={founder} />
                              <AvatarFallback>{founder.substring(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                        <div className="mt-2">
                          {startup.founders.map((founder, index) => (
                            <span key={index} className="text-xs">
                              {founder}{index < startup.founders.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full mt-4 border-guiitar-primary text-guiitar-primary hover:bg-guiitar-primary hover:text-white"
                      >
                        View Startup <ExternalLink size={14} className="ml-1" />
                      </Button>
                    </CardContent>
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
            <Button className="bg-guiitar-secondary hover:bg-guiitar-secondary/90 text-white">
              Explore All Startups <ExternalLink size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedStartups;
