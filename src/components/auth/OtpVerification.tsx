
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  InputOTP, 
  InputOTPGroup, 
  InputOTPSlot 
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface OtpVerificationProps {
  email: string;
  purpose: "account-creation" | "password-reset";
  onVerificationComplete: (otp: string) => void;
}

const OtpVerification = ({ email, purpose, onVerificationComplete }: OtpVerificationProps) => {
  const [otp, setOtp] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState<number>(60);
  const { toast } = useToast();
  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Set up the countdown timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSubmit = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API verification
    setTimeout(() => {
      setIsLoading(false);
      onVerificationComplete(otp);
    }, 1500);
  };

  const handleResendOtp = () => {
    setRemainingTime(60);
    
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    toast({
      title: "OTP Resent",
      description: `A new verification code has been sent to ${email}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          {purpose === "account-creation" ? "Verify Your Account" : "Verify Your Email"}
        </h2>
        <p className="text-sm text-gray-600">
          We've sent a 6-digit verification code to<br />
          <span className="font-medium text-guiitar-primary">{email}</span>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4">
        <InputOTP 
          maxLength={6}
          value={otp}
          onChange={(value) => setOtp(value)}
          render={({ slots }) => (
            <InputOTPGroup className="gap-2">
              {slots.map((slot, index) => (
                <InputOTPSlot 
                  key={index} 
                  index={index}
                  className={`w-12 h-14 text-xl border-gray-300 focus:border-guiitar-primary focus:ring-guiitar-primary`} 
                />
              ))}
            </InputOTPGroup>
          )}
        />
        
        <p className="text-sm text-gray-500">
          {remainingTime > 0 ? (
            <>Didn't receive the code? Resend in {remainingTime}s</>
          ) : (
            <button 
              onClick={handleResendOtp} 
              className="text-guiitar-primary hover:underline"
            >
              Resend code
            </button>
          )}
        </p>
      </div>

      <div className="flex flex-col space-y-3">
        <Button 
          onClick={handleSubmit}
          className="w-full bg-guiitar-primary hover:bg-guiitar-primary/90"
          disabled={otp.length !== 6 || isLoading}
        >
          {isLoading ? "Verifying..." : "Verify"}
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate('/auth')}
          className="w-full"
        >
          Back to Login
        </Button>
      </div>
    </div>
  );
};

export default OtpVerification;
