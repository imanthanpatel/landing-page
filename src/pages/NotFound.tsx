
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="text-guiitar-accent text-9xl font-bold mb-4">404</div>
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
            <div className="space-y-4">
              <Button asChild className="bg-guiitar-primary hover:bg-guiitar-primary/90 text-white px-6 py-2.5">
                <Link to="/">Return to Home</Link>
              </Button>
              <div className="pt-6 border-t border-gray-200 mt-6">
                <p className="text-gray-600 mb-4">Looking for something specific?</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild variant="outline" className="border-guiitar-primary text-guiitar-primary hover:bg-guiitar-primary/10">
                    <Link to="/events">Events & Workshops</Link>
                  </Button>
                  <Button asChild variant="outline" className="border-guiitar-primary text-guiitar-primary hover:bg-guiitar-primary/10">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
