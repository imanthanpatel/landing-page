
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RegisterEvent = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  // Mock events data
  const events = [
    {
      id: "event-001",
      title: "Startup Pitch Competition",
      description: "Present your innovative ideas to industry experts and investors.",
      date: "2025-06-15",
      time: "10:00 AM - 4:00 PM",
      location: "Innovation Hub, Main Campus",
      type: "Competition",
      maxParticipants: 50,
      registeredCount: 23,
      isRegistered: false
    },
    {
      id: "event-002",
      title: "Entrepreneurship Workshop",
      description: "Learn the fundamentals of starting and scaling a business.",
      date: "2025-06-20",
      time: "2:00 PM - 5:00 PM",
      location: "Conference Hall A",
      type: "Workshop",
      maxParticipants: 100,
      registeredCount: 67,
      isRegistered: true
    },
    {
      id: "event-003",
      title: "Tech Innovation Seminar",
      description: "Explore cutting-edge technologies and their applications.",
      date: "2025-06-25",
      time: "9:00 AM - 12:00 PM",
      location: "Auditorium",
      type: "Seminar",
      maxParticipants: 200,
      registeredCount: 145,
      isRegistered: false
    }
  ];

  const handleRegister = (eventId: string, eventTitle: string) => {
    toast({
      title: "Registration Successful",
      description: `You have successfully registered for "${eventTitle}".`,
    });
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Register for Event</h1>
        <p className="text-muted-foreground">Discover and register for upcoming workshops, seminars, and competitions.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="mt-2">{event.description}</CardDescription>
                </div>
                <Badge variant={event.type === 'Competition' ? 'default' : 'secondary'}>
                  {event.type}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(event.date).toLocaleDateString()} at {event.time}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2" />
                  {event.registeredCount}/{event.maxParticipants} registered
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-guiitar-primary h-2 rounded-full" 
                  style={{ width: `${(event.registeredCount / event.maxParticipants) * 100}%` }}
                ></div>
              </div>

              <Button 
                className="w-full" 
                disabled={event.isRegistered || event.registeredCount >= event.maxParticipants}
                onClick={() => handleRegister(event.id, event.title)}
              >
                {event.isRegistered ? 'Already Registered' : 
                 event.registeredCount >= event.maxParticipants ? 'Event Full' : 'Register Now'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
          <p className="text-gray-500">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default RegisterEvent;
