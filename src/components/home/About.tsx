
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 border-2 border-guiitar-primary opacity-20 rounded"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 border-2 border-guiitar-accent opacity-20 rounded"></div>
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
                  alt="GUIITAR COUNCIL" 
                  className="rounded w-full"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-guiitar-primary">GUIITAR</span> <span className="text-guiitar-accent">COUNCIL</span>
              </h2>
              <p className="text-gray-700 mb-4">
                GUIITAR COUNCIL is a non-profit incubation center founded by GSFC University, located in Vadodara, Gujarat. 
                We are dedicated to fostering innovation, entrepreneurship, and technological advancement in the region.
              </p>
              <p className="text-gray-700 mb-6">
                Our state-of-the-art facilities and expert mentorship programs help startups and innovators transform 
                their ideas into successful ventures, contributing to the entrepreneurial ecosystem of Gujarat.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-guiitar-light p-4 rounded">
                  <div className="text-2xl font-bold text-guiitar-primary mb-1">50+</div>
                  <div className="text-sm text-gray-600">Startups Incubated</div>
                </div>
                <div className="bg-guiitar-light p-4 rounded">
                  <div className="text-2xl font-bold text-guiitar-primary mb-1">₹10Cr+</div>
                  <div className="text-sm text-gray-600">Funding Facilitated</div>
                </div>
                <div className="bg-guiitar-light p-4 rounded">
                  <div className="text-2xl font-bold text-guiitar-primary mb-1">100+</div>
                  <div className="text-sm text-gray-600">Workshops Conducted</div>
                </div>
                <div className="bg-guiitar-light p-4 rounded">
                  <div className="text-2xl font-bold text-guiitar-primary mb-1">25+</div>
                  <div className="text-sm text-gray-600">Expert Mentors</div>
                </div>
              </div>
              <Button asChild className="bg-guiitar-primary hover:bg-guiitar-primary/90 text-white">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
