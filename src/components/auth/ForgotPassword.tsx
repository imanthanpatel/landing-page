
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface ForgotPasswordProps {
  onEmailSubmit: (email: string) => void;
}

const ForgotPassword = ({ onEmailSubmit }: ForgotPasswordProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowConfirmation(true);
      
      // After showing the confirmation dialog, we'll handle the email submission
      onEmailSubmit(email);
    }, 1500);
  };

  return (
    <>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Forgot Password</h2>
          <p className="text-sm text-gray-600">
            Enter your email address and we'll send you a code to reset your password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="flex flex-col space-y-3">
            <Button 
              type="submit" 
              className="w-full bg-guiitar-primary hover:bg-guiitar-primary/90"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Reset Code"}
            </Button>
            
            <Button
              variant="outline"
              onClick={() => navigate('/auth')}
              className="w-full"
            >
              Back to Login
            </Button>
          </div>
        </form>
      </div>

      {/* Email Sent Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-[425px] text-center">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Email Sent!</DialogTitle>
            <DialogDescription className="pt-2">
              We've sent a verification code to <span className="font-medium">{email}</span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => {
                setShowConfirmation(false);
                // We'll handle navigation from the parent component
              }}
              className="bg-guiitar-primary hover:bg-guiitar-primary/90"
            >
              Continue to Verification
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ForgotPassword;
