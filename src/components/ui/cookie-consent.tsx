
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { X, Cookie } from 'lucide-react';
import { cn } from '@/lib/utils';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  
  useEffect(() => {
    // Check if user already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    
    if (!hasConsented) {
      // Wait a moment before showing the consent popup
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptCookies = () => {
    setClosing(true);
    localStorage.setItem('cookie-consent', 'true');
    
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 300);
  };
  
  const declineCookies = () => {
    setClosing(true);
    localStorage.setItem('cookie-consent', 'false');
    
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 300);
  };
  
  if (!visible) return null;
  
  return (
    <div 
      className={cn(
        "fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-lg z-50 transition-all duration-300",
        {
          "opacity-0 translate-y-8": closing,
          "opacity-100 translate-y-0": !closing
        }
      )}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 md:p-6">
        <div className="flex items-start">
          <Cookie className="text-guiitar-accent mr-3 mt-1 flex-shrink-0" size={24} />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium text-lg">Cookie Consent</h3>
              <button 
                onClick={declineCookies} 
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              We use cookies to enhance your experience on our website. By continuing to use our site, you consent to our use of cookies in accordance with our 
              <Link to="/privacy-policy" className="text-guiitar-primary hover:underline mx-1">
                Privacy Policy
              </Link>
              and 
              <Link to="/terms-conditions" className="text-guiitar-primary hover:underline ml-1">
                Terms of Service
              </Link>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 justify-end">
              <Button 
                variant="outline" 
                size="sm"
                onClick={declineCookies}
                className="sm:order-1"
              >
                Decline
              </Button>
              <Button 
                size="sm"
                className="bg-guiitar-accent hover:bg-guiitar-accent/90 sm:order-2"
                onClick={acceptCookies}
              >
                Accept All Cookies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
