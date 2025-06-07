import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Users, Clock } from "lucide-react";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    {
      id: 1,
      title: "Drone Technology Workshop",
      date: "June 15, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "GUIITAR COUNCIL Innovation Hub",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=1000",
      category: "Workshop",
      seats: 30,
      description: "Learn about the latest drone technologies and their applications in various industries. This hands-on workshop will cover drone assembly, flight control, and programming basics."
    },
    {
      id: 2,
      title: "3D Printing Masterclass",
      date: "July 10, 2025",
      time: "9:30 AM - 4:00 PM",
      location: "Tech Lab, GSFC University",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000",
      category: "Workshop",
      seats: 25,
      description: "A comprehensive workshop on 3D printing technologies, covering design principles, material selection, and practical printing techniques. Create your own 3D printed prototype by the end of the session."
    },
    {
      id: 3,
      title: "Startup Pitch Day",
      date: "August 5, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Auditorium, GSFC University",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000",
      category: "Event",
      seats: 100,
      description: "An opportunity for startups to pitch their ideas to a panel of investors and industry experts. Selected startups will get a chance to receive funding and mentorship from leading business minds."
    },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "AI in Healthcare Symposium",
      date: "March 22, 2025",
      location: "Conference Hall, GUIITAR COUNCIL",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
      category: "Event",
      description: "A discussion on the applications of artificial intelligence in healthcare, featuring speakers from medical institutions and AI development companies."
    },
    {
      id: 5,
      title: "IoT Bootcamp",
      date: "February 15, 2025",
      location: "GUIITAR COUNCIL Innovation Hub",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      category: "Workshop",
      description: "An intensive two-day bootcamp covering Internet of Things (IoT) concepts, hardware, software, and practical applications through hands-on projects."
    },
    {
      id: 6,
      title: "Entrepreneurship Summit",
      date: "January 10, 2025",
      location: "Auditorium, GSFC University",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000",
      category: "Event",
      description: "A gathering of entrepreneurs, investors, and industry leaders to discuss current trends, challenges, and opportunities in the startup ecosystem."
    },
    {
      id: 7,
      title: "Blockchain Technology Workshop",
      date: "December 18, 2024",
      location: "Tech Lab, GSFC University",
      image: "https://images.unsplash.com/photo-1639322531621-2f2061e26e3a?auto=format&fit=crop&q=80&w=1000",
      category: "Workshop",
      description: "An introduction to blockchain technology, covering its principles, applications, and potential impact on various industries through practical demonstrations."
    },
  ];

  const workshopDetails = [
    {
      title: "Drone Technology Workshop",
      description: "This comprehensive workshop covers all aspects of drone technology, from the basic principles of flight to advanced programming and applications. Participants will learn about drone assembly, flight control systems, and practical applications in various industries.",
      topics: [
        "Introduction to drone technology and its applications",
        "Understanding drone components and assembly",
        "Flight principles and control systems",
        "Programming autonomous flight paths",
        "Data collection and analysis using drones",
        "Regulations and safety considerations",
      ],
      outcomes: [
        "Build and configure a basic drone",
        "Program flight paths and autonomous operations",
        "Understand data collection and processing from drone sensors",
        "Knowledge of drone regulations and safety protocols"
      ],
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "3D Printing Workshop",
      description: "This hands-on workshop introduces participants to the world of 3D printing, covering everything from design principles to practical printing techniques. Learn how to create, modify, and print your own 3D models using industry-standard tools and equipment.",
      topics: [
        "Introduction to 3D printing technologies",
        "3D design principles and software tools",
        "Material selection and properties",
        "Slicing software and print optimization",
        "Post-processing techniques",
        "Practical applications and case studies",
      ],
      outcomes: [
        "Design 3D models using CAD software",
        "Prepare models for printing using slicing software",
        "Successfully print and post-process 3D objects",
        "Understand material properties and selection criteria"
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Events Header */}
        <section className="bg-guiitar-primary text-white py-6 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Workshops & Events</h1>
              <p className="text-base md:text-lg opacity-90">
                Enhance your skills, expand your network, and stay updated with the latest trends through our specialized workshops and networking events.
              </p>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section id="events" className="section-padding bg-gray-100">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
              <TabsList className="flex justify-center w-full mb-6 rounded-lg bg-gray-200 p-1">
                <TabsTrigger
                  value="upcoming"
                  className="flex-1 text-center text-sm md:text-base font-medium py-2 px-4 rounded-lg transition-all duration-200 data-[state=active]:bg-white data-[state=active]:text-guiitar-primary data-[state=active]:shadow-sm hover:bg-gray-300"
                >
                  Upcoming Events
                </TabsTrigger>
                <TabsTrigger
                  value="past"
                  className="flex-1 text-center text-sm md:text-base font-medium py-2 px-4 rounded-lg transition-all duration-200 data-[state=active]:bg-white data-[state=active]:text-guiitar-primary data-[state=active]:shadow-sm hover:bg-gray-300"
                >
                  Past Events
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden border-gray-100 transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-48 md:h-60 overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <Badge className="absolute top-4 right-4 bg-guiitar-accent text-white">
                          {event.category}
                        </Badge>
                      </div>
                      <CardContent className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{event.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2 text-sm md:text-base">{event.description}</p>
                        
                        <div className="space-y-2 mb-4 md:mb-5">
                          <div className="flex items-center text-gray-600 text-sm md:text-base">
                            <CalendarDays size={16} className="mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm md:text-base">
                            <Clock size={16} className="mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm md:text-base">
                            <MapPin size={16} className="mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm md:text-base">
                            <Users size={16} className="mr-2" />
                            <span>{event.seats} seats available</span>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-guiitar-primary hover:bg-guiitar-primary/90 text-white text-sm md:text-base">
                          Register Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="past" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {pastEvents.map((event) => (
                    <Card key={event.id} className="overflow-hidden border-gray-100 transition-all duration-300 hover:shadow-md">
                      <div className="relative h-40 md:h-48 overflow-hidden">
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                          <span className="text-white font-bold text-sm md:text-lg px-3 py-1 border-2 border-white rounded-full">Completed</span>
                        </div>
                      </div>
                      <CardContent className="p-3 md:p-4">
                        <Badge variant="outline" className="mb-2 bg-gray-50 border-guiitar-accent text-guiitar-accent text-xs md:text-sm">
                          {event.category}
                        </Badge>
                        <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3">{event.title}</h3>
                        <div className="space-y-1 md:space-y-2 mb-2 md:mb-3">
                          <div className="flex items-center text-gray-600 text-xs md:text-sm">
                            <CalendarDays size={14} className="mr-1.5" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-xs md:text-sm">
                            <MapPin size={14} className="mr-1.5" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full border-guiitar-primary text-guiitar-primary hover:bg-guiitar-primary/10 text-xs md:text-sm">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Workshops */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Featured Workshops</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Explore our specialized workshops designed to provide hands-on experience with cutting-edge technologies.
              </p>
            </div>
            
            <div className="space-y-12 md:space-y-16 max-w-5xl mx-auto">
              {workshopDetails.map((workshop, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="lg:col-span-1 h-48 lg:h-full">
                      <img 
                        src={workshop.image} 
                        alt={workshop.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="lg:col-span-2 p-4 md:p-6 lg:p-8">
                      <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">{workshop.title}</h3>
                      <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">{workshop.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                        <div>
                          <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-guiitar-primary">Workshop Topics</h4>
                          <ul className="space-y-1 md:space-y-2">
                            {workshop.topics.map((topic, i) => (
                              <li key={i} className="flex items-start text-sm md:text-base">
                                <span className="text-guiitar-accent mr-2">•</span>
                                <span className="text-gray-700">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-guiitar-primary">Learning Outcomes</h4>
                          <ul className="space-y-1 md:space-y-2">
                            {workshop.outcomes.map((outcome, i) => (
                              <li key={i} className="flex items-start text-sm md:text-base">
                                <span className="text-guiitar-accent mr-2">•</span>
                                <span className="text-gray-700">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <Button className="bg-guiitar-primary hover:bg-guiitar-primary/90 text-white text-sm md:text-base">
                        Learn More & Register
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;