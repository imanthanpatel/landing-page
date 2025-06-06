
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

interface LoginFormProps {
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onForgotPasswordClick: () => void;
  loginData: {
    email: string;
    password: string;
  };
  setLoginData: React.Dispatch<React.SetStateAction<{
    email: string;
    password: string;
  }>>;
}

const LoginForm = ({ 
  isLoading, 
  onSubmit, 
  onForgotPasswordClick, 
  loginData, 
  setLoginData 
}: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store login state in localStorage for demo purposes
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', loginData.email);
    // Call the original submit handler
    onSubmit(e);
    // Navigate to dashboard instead of homepage
    navigate('/dashboard');
  };
  
  return (
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
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="password">Password</Label>
          <button 
            type="button"
            onClick={onForgotPasswordClick}
            className="text-xs text-guiitar-primary hover:underline"
          >
            Forgot password?
          </button>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="pl-10"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
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
      
      <Button 
        type="submit" 
        className="w-full bg-guiitar-primary hover:bg-guiitar-primary/90"
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
};

export default LoginForm;
