
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import AuthHeader from '@/components/auth/AuthHeader';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import OtpVerification from '@/components/auth/OtpVerification';
import ForgotPassword from '@/components/auth/ForgotPassword';
import ResetPassword from '@/components/auth/ResetPassword';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentView, setCurrentView] = useState<'main' | 'otp-verification' | 'forgot-password' | 'reset-password'>('main');
  const [otpPurpose, setOtpPurpose] = useState<'account-creation' | 'password-reset'>('account-creation');
  const [userEmail, setUserEmail] = useState('');
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Check if user is already logged in
  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "You have been logged in successfully.",
      });
      
      // Store login state in localStorage for demo purposes
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', loginData.email);
      
      navigate('/dashboard');
    }, 1500);
  };
  
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Store the email and set OTP purpose
      setUserEmail(registerData.email);
      setOtpPurpose('account-creation');
      // Switch to OTP verification view
      setCurrentView('otp-verification');
    }, 1500);
  };

  const handleForgotPasswordClick = () => {
    setCurrentView('forgot-password');
  };

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email);
    setOtpPurpose('password-reset');
    setCurrentView('otp-verification');
  };

  const handleOtpVerificationComplete = (otp: string) => {
    // Simulating a successful OTP verification
    if (otpPurpose === 'account-creation') {
      // Set login state for newly registered user
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', userEmail);
      
      toast({
        title: "Account Verified!",
        description: "Your account has been successfully verified.",
      });
      navigate('/dashboard');
    } else {
      // For password reset, navigate to reset password screen
      setCurrentView('reset-password');
    }
  };

  // Render the appropriate view based on the current state
  const renderCurrentView = () => {
    switch (currentView) {
      case 'otp-verification':
        return (
          <OtpVerification 
            email={userEmail} 
            purpose={otpPurpose} 
            onVerificationComplete={handleOtpVerificationComplete} 
          />
        );
      case 'forgot-password':
        return (
          <ForgotPassword onEmailSubmit={handleEmailSubmit} />
        );
      case 'reset-password':
        return (
          <ResetPassword email={userEmail} />
        );
      default:
        return (
          <div className="space-y-8">
            <AuthHeader />
            
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-6">
                <LoginForm 
                  isLoading={isLoading}
                  onSubmit={handleLoginSubmit}
                  onForgotPasswordClick={handleForgotPasswordClick}
                  loginData={loginData}
                  setLoginData={setLoginData}
                />
              </TabsContent>
              
              <TabsContent value="register" className="space-y-6">
                <RegisterForm 
                  isLoading={isLoading}
                  onSubmit={handleRegisterSubmit}
                  registerData={registerData}
                  setRegisterData={setRegisterData}
                />
              </TabsContent>
            </Tabs>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        {renderCurrentView()}
      </div>
    </div>
  );
};

export default Auth;
