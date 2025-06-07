
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Programs = () => {
  const fundingPrograms = [
    {
      title: "SSIP Grant",
      description: "Student Startup and Innovation Policy grants to support student-led innovations up to ₹2 lakhs.",
      color: "bg-guiitar-primary/10 border-l-4 border-guiitar-primary"
    },
    {
      title: "Nodal Grant",
      description: "Funding for established startups looking to scale their operations and impact up to ₹10 lakhs.",
      color: "bg-guiitar-secondary/10 border-l-4 border-guiitar-secondary"
    },
    {
      title: "IPR Grant",
      description: "Support for patent filing and intellectual property protection for innovative solutions.",
      color: "bg-guiitar-accent/10 border-l-4 border-guiitar-accent"
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Funding Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access financial support for your innovative ideas and ventures through our diverse funding opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {fundingPrograms.map((program, index) => (
            <Card key={index} className={`${program.color} overflow-hidden shadow-sm hover:shadow-md transition-shadow`}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <Button variant="outline" className="border-gray-300 hover:bg-guiitar-primary hover:text-white" >
                   <Link to="/funding">
                  Learn More
                   </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button asChild className="bg-guiitar-primary hover:bg-guiitar-primary/90 text-white">
            <Link to="/funding">Explore All Funding Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
