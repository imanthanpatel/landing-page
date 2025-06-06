
import { 
  Lightbulb, 
  DollarSign, 
  Award, 
  BookOpen, 
  Users, 
  Rocket
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Lightbulb size={36} className="text-guiitar-primary" />,
      title: "Innovation Support",
      description: "Access resources to transform your innovative ideas into viable products and services."
    },
    {
      icon: <DollarSign size={36} className="text-guiitar-primary" />,
      title: "Funding Opportunities",
      description: "Multiple grant programs including SSIP, Nodal, and IPR grants for startups."
    },
    {
      icon: <Award size={36} className="text-guiitar-primary" />,
      title: "Mentorship",
      description: "Guidance from industry experts and successful entrepreneurs to navigate your journey."
    },
    {
      icon: <BookOpen size={36} className="text-guiitar-primary" />,
      title: "Workshops & Training",
      description: "Regular workshops on emerging technologies like drones and 3D printing."
    },
    {
      icon: <Users size={36} className="text-guiitar-primary" />,
      title: "Networking",
      description: "Connect with potential investors, partners, and fellow entrepreneurs."
    },
    {
      icon: <Rocket size={36} className="text-guiitar-primary" />,
      title: "Incubation",
      description: "Full-cycle support from ideation to market penetration for your startup."
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            GUIITAR COUNCIL provides comprehensive support to nurture innovation and entrepreneurship 
            through our specialized services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
