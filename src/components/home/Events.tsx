
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import EventRegistrationDialog from "@/components/events/EventRegistrationDialog";

const Events = () => {
  const events = [
    {
      title: "Drone Technology Workshop",
      date: "June 15, 2025",
      location: "GUIITAR COUNCIL Innovation Hub",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=1000",
      category: "Workshop"
    },
    {
      title: "3D Printing Masterclass",
      date: "July 10, 2025",
      location: "Tech Lab, GSFC University",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000",
      category: "Workshop"
    },
    {
      title: "Startup Pitch Day",
      date: "August 5, 2025",
      location: "Auditorium, GSFC University",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000",
      category: "Event"
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">Upcoming Workshops & Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Enhance your skills and expand your network through our specialized workshops and networking events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-guiitar-accent text-white text-xs font-bold px-2 py-1 sm:px-2.5 sm:py-1 rounded">
                  {event.category}
                </div>
              </div>
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                  <CalendarDays size={14} className="mr-1.5" />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">{event.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {event.location}
                </p>
                <EventRegistrationDialog eventTitle={event.title}>
                  <Button className="w-full bg-guiitar-primary hover:bg-guiitar-primary/90 text-white text-sm sm:text-base">
                    Register Now
                  </Button>
                </EventRegistrationDialog>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-10">
          <Button asChild className="bg-guiitar-primary hover:bg-guiitar-primary/90 text-white w-full sm:w-auto">
            <Link to="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;