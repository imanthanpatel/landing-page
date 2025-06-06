
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, MapPin, Calendar, Clock, Star, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RequestMentoring = () => {
  const { toast } = useToast();
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    topic: "",
    description: "",
    preferredDate: "",
    preferredTime: "",
    sessionType: ""
  });

  // Mock mentors data
  const mentors = [
    {
      id: "mentor-001",
      name: "Dr. Rajesh Kumar",
      expertise: ["AI & Machine Learning", "Startup Strategy", "Technology Innovation"],
      experience: "15+ years",
      location: "Ahmedabad",
      rating: 4.8,
      sessions: 150,
      bio: "Former CTO at tech startup, now professor at IIT. Specializes in AI applications in business.",
      availability: "Weekdays 2-6 PM"
    },
    {
      id: "mentor-002", 
      name: "Priya Sharma",
      expertise: ["Business Development", "Marketing", "Fundraising"],
      experience: "12+ years",
      location: "Mumbai",
      rating: 4.9,
      sessions: 120,
      bio: "Serial entrepreneur with 3 successful exits. Expert in scaling startups and fundraising.",
      availability: "Flexible"
    },
    {
      id: "mentor-003",
      name: "Amit Patel",
      expertise: ["Product Management", "UX Design", "Agile Development"],
      experience: "10+ years", 
      location: "Bangalore",
      rating: 4.7,
      sessions: 95,
      bio: "Product leader at Fortune 500 company. Passionate about building user-centric products.",
      availability: "Weekends preferred"
    }
  ];

  const handleSubmitRequest = () => {
    if (!selectedMentor || !formData.topic || !formData.description) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields and select a mentor.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Mentoring Request Sent",
      description: "Your mentoring request has been sent successfully. The mentor will respond within 24 hours.",
    });

    // Reset form
    setSelectedMentor(null);
    setFormData({
      topic: "",
      description: "",
      preferredDate: "",
      preferredTime: "",
      sessionType: ""
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Request Mentoring</h1>
        <p className="text-muted-foreground">Connect with experienced mentors to guide your entrepreneurial journey.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Available Mentors */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Available Mentors</h2>
          {mentors.map((mentor) => (
            <Card 
              key={mentor.id} 
              className={`cursor-pointer transition-all ${
                selectedMentor === mentor.id ? 'ring-2 ring-guiitar-primary' : 'hover:shadow-md'
              }`}
              onClick={() => setSelectedMentor(mentor.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-guiitar-primary text-white rounded-full flex items-center justify-center">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{mentor.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {mentor.location}
                        <span>•</span>
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {mentor.rating}
                        <span>•</span>
                        {mentor.sessions} sessions
                      </div>
                    </div>
                  </div>
                  {selectedMentor === mentor.id && (
                    <Badge className="bg-guiitar-primary">Selected</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{mentor.bio}</p>
                <div>
                  <p className="text-sm font-medium mb-1">Expertise:</p>
                  <div className="flex flex-wrap gap-1">
                    {mentor.expertise.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {mentor.availability}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    {mentor.experience} experience
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Request Form */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Request Details</h2>
          <Card>
            <CardHeader>
              <CardTitle>Mentoring Session Request</CardTitle>
              <CardDescription>Provide details about what you'd like to discuss</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="topic">Session Topic *</Label>
                <Input
                  id="topic"
                  placeholder="e.g., Startup pitch feedback, Technical guidance"
                  value={formData.topic}
                  onChange={(e) => setFormData({...formData, topic: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe what specific help you're looking for..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="time">Preferred Time</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="sessionType">Session Type</Label>
                <Select value={formData.sessionType} onValueChange={(value) => setFormData({...formData, sessionType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose session type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="video-call">Video Call (1 hour)</SelectItem>
                    <SelectItem value="phone-call">Phone Call (30 minutes)</SelectItem>
                    <SelectItem value="in-person">In-Person Meeting</SelectItem>
                    <SelectItem value="email-consultation">Email Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={handleSubmitRequest}
                className="w-full bg-guiitar-primary hover:bg-guiitar-primary/90"
                disabled={!selectedMentor}
              >
                Send Mentoring Request
              </Button>

              {!selectedMentor && (
                <p className="text-sm text-muted-foreground text-center">
                  Please select a mentor from the list above
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RequestMentoring;
