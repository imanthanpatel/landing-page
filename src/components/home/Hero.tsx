
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-guiitar-light via-white to-white">
      <div className="container mx-auto px-4 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-guiitar-dark mb-6 leading-tight">
              Innovate, Incubate, <span className="text-guiitar-accent">Inspire</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              GUIITAR COUNCIL by GSFC University is Vadodara's premier incubation center empowering visionaries to transform ideas into impactful ventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-guiitar-primary hover:bg-guiitar-primary/90 text-white">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-guiitar-primary text-guiitar-primary hover:bg-guiitar-primary/10 flex items-center">
                Learn More <ChevronRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="animate-slide-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-guiitar-accent rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-guiitar-primary rounded-full opacity-20"></div>
              <div className="relative bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex justify-center mb-8">
                  <div className="h-20 w-20 rounded-full bg-guiitar-light flex items-center justify-center">
                    <div className="text-guiitar-primary font-bold text-4xl">G</div>
                  </div>
                </div>
                <h3 className="text-center font-semibold text-xl mb-6 text-guiitar-dark">Why Choose GUIITAR?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-guiitar-light text-guiitar-primary flex items-center justify-center mr-3 mt-0.5">1</span>
                    <span className="text-gray-700">Expert mentorship from industry leaders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-guiitar-light text-guiitar-primary flex items-center justify-center mr-3 mt-0.5">2</span>
                    <span className="text-gray-700">Access to state-of-the-art infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-guiitar-light text-guiitar-primary flex items-center justify-center mr-3 mt-0.5">3</span>
                    <span className="text-gray-700">Multiple funding opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-guiitar-light text-guiitar-primary flex items-center justify-center mr-3 mt-0.5">4</span>
                    <span className="text-gray-700">Specialized workshops and events</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button size="sm" className="w-full bg-guiitar-accent hover:bg-guiitar-accent/90 text-white">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
