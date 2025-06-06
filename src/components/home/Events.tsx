
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";

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
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Workshops & Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhance your skills and expand your network through our specialized workshops and networking events.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-guiitar-accent text-white text-xs font-bold px-2.5 py-1 rounded">
                  {event.category}
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <CalendarDays size={14} className="mr-1.5" />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {event.location}
                </p>
                <Button variant="outline" className="w-full border-gray-300 hover:border-guiitar-primary hover:text-guiitar-primary">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild className="bg-guiitar-primary hover:bg-guiitar-primary/90 text-white">
            <Link to="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
