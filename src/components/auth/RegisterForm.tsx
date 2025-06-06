
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RegisterFormProps {
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  registerData: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  setRegisterData: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>>;
}

const RegisterForm = ({ 
  isLoading, 
  onSubmit, 
  registerData, 
  setRegisterData 
}: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            className="pl-10"
            value={registerData.name}
            onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="register-email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            id="register-email"
            type="email"
            placeholder="you@example.com"
            className="pl-10"
            value={registerData.email}
            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="register-password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            id="register-password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="pl-10"
            value={registerData.password}
            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            required
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            id="confirm-password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className={cn("pl-10", {
              "border-red-500": 
                registerData.confirmPassword && 
                registerData.password !== registerData.confirmPassword
            })}
            value={registerData.confirmPassword}
            onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
            required
          />
        </div>
        {registerData.confirmPassword && registerData.password !== registerData.confirmPassword && (
          <p className="text-xs text-red-500">Passwords do not match</p>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            className="h-4 w-4 text-guiitar-primary focus:ring-guiitar-primary border-gray-300 rounded"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-xs text-gray-600">
            I agree to the <Link to="/terms-conditions" className="text-guiitar-primary hover:underline">Terms and Conditions</Link> and <Link to="/privacy-policy" className="text-guiitar-primary hover:underline">Privacy Policy</Link>
          </label>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-guiitar-accent hover:bg-guiitar-accent/90"
        disabled={isLoading}
      >
        {isLoading ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
};

export default RegisterForm;
