
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section-padding bg-guiitar-primary text-white">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Idea Into Reality?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join GUIITAR COUNCIL's incubation program and get the support, funding, and resources you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-guiitar-primary hover:bg-gray-100">
              Apply Now
            </Button>
          
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
