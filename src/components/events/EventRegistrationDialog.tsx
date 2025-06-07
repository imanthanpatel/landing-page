
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface EventRegistrationDialogProps {
  eventTitle: string;
  children: React.ReactNode;
}

const EventRegistrationDialog = ({ eventTitle, children }: EventRegistrationDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enrollmentNumber: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (isStudent && !formData.enrollmentNumber) {
      toast({
        title: "Missing Enrollment Number",
        description: "Please provide your enrollment number.",
        variant: "destructive"
      });
      return;
    }

    // Simulate registration
    toast({
      title: "Registration Successful!",
      description: `You have been registered for "${eventTitle}".`
    });
    
    // Reset form and close dialog
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      enrollmentNumber: ""
    });
    setIsStudent(false);
    setOpen(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] mx-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">Register for Event</DialogTitle>
          <DialogDescription className="text-sm">
            Please fill in your details to register for "{eventTitle}".
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Enter first name"
                className="text-sm"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Enter last name"
                className="text-sm"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter email address"
              className="text-sm"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Enter phone number"
              className="text-sm"
              required
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="isStudent"
              checked={isStudent}
              onCheckedChange={(checked) => setIsStudent(checked as boolean)}
            />
            <Label htmlFor="isStudent" className="text-sm">I am a student</Label>
          </div>
          
          {isStudent && (
            <div className="space-y-2">
              <Label htmlFor="enrollmentNumber" className="text-sm">Enrollment Number *</Label>
              <Input
                id="enrollmentNumber"
                value={formData.enrollmentNumber}
                onChange={(e) => handleInputChange("enrollmentNumber", e.target.value)}
                placeholder="Enter enrollment number"
                className="text-sm"
                required
              />
            </div>
          )}
          
          <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button type="submit" className="bg-guiitar-primary hover:bg-guiitar-primary/90 w-full sm:w-auto">
              Register
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EventRegistrationDialog;