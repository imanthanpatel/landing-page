
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Network, Building, Handshake } from "lucide-react";

const Associations = () => {
  // Sample logos for various organizations
  // In a production site, you'd use actual logo images
  const associationLogos = [
    { name: "Gujarat State Government", type: "government" },
    { name: "SSIP Gujarat", type: "government" },
    { name: "Ministry of Electronics & IT", type: "government" },
    { name: "GSFC Ltd", type: "industry" },
    { name: "L&T Technology Services", type: "industry" },
    { name: "Tata Consultancy Services", type: "industry" },
    { name: "IBM", type: "industry" },
    { name: "Microsoft", type: "industry" },
    { name: "IIT Bombay", type: "academic" },
    { name: "IIM Ahmedabad", type: "academic" },
    { name: "Gujarat Technological University", type: "academic" },
    { name: "Amazon Web Services", type: "industry" },
    { name: "Reliance Industries", type: "industry" },
    { name: "Department of Science & Technology", type: "government" },
    { name: "AICTE", type: "government" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Prestigious Associations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            GUIITAR COUNCIL collaborates with leading industry partners, government organizations, 
            and academic institutions to foster innovation and entrepreneurship.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="bg-guiitar-primary/5 border-l-4 border-guiitar-primary overflow-hidden shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Building size={36} className="text-guiitar-primary mr-3" />
                <h3 className="text-xl font-semibold">Industry Partners</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Collaborations with leading companies providing mentorship, resources, and industry expertise.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-guiitar-secondary/5 border-l-4 border-guiitar-secondary overflow-hidden shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Handshake size={36} className="text-guiitar-secondary mr-3" />
                <h3 className="text-xl font-semibold">Government Organizations</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Partnerships with government bodies for policy support, funding, and regulatory assistance.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-guiitar-accent/5 border-l-4 border-guiitar-accent overflow-hidden shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Network size={36} className="text-guiitar-accent mr-3" />
                <h3 className="text-xl font-semibold">Academic Institutions</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Academic collaborations for research, talent acquisition, and knowledge exchange.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-wrap justify-center gap-5 mt-10">
          {associationLogos.map((logo, index) => (
            <div 
              key={index} 
              className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center min-w-[180px]"
            >
              <div className="text-center">
                <div className={`w-10 h-10 mx-auto rounded-full mb-2 flex items-center justify-center
                  ${logo.type === 'government' ? 'bg-guiitar-secondary/10 text-guiitar-secondary' : 
                  logo.type === 'industry' ? 'bg-guiitar-primary/10 text-guiitar-primary' : 
                  'bg-guiitar-accent/10 text-guiitar-accent'}`}
                >
                  {logo.type === 'government' ? 
                    <Handshake size={20} /> : 
                    logo.type === 'industry' ? 
                    <Building size={20} /> : 
                    <Network size={20} />
                  }
                </div>
                <span className="text-sm font-medium">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Our network includes over 25 prestigious organizations across industry, government, and academia.
          </p>
          <Button asChild className="bg-guiitar-primary hover:bg-guiitar-primary/90 text-white">
            <Link to="/about">Learn About Our Collaborations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Associations;
