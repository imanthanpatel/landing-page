import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import StudentProjects from "@/components/funding/StudentProjects";
import SupportedStartups from "@/components/funding/SupportedStartups";

const Funding = () => {
  const fundingPrograms = [
    {
      title: "SSIP Grant",
      description: "Student Startup and Innovation Policy grants for student entrepreneurs.",
      amount: "Up to ₹2.5 Lakhs",
      color: "border-guiitar-primary",
      eligibility: [
        "Current students or recent graduates (within 3 years)",
        "Innovative product or service idea with market potential",
        "Working prototype or proof of concept",
        "Team of at least 2 members"
      ],
      process: [
        "Submit application form with project proposal",
        "Initial screening by GUIITAR COUNCIL team",
        "Pitch presentation to selection committee",
        "Due diligence and documentation",
        "Fund disbursement in milestone-based tranches"
      ]
    },
    {
      title: "Nodal Grant",
      description: "Funding support for established startups looking to scale their operations.",
      amount: "Up to ₹30 Lakhs",
      color: "border-guiitar-secondary",
      eligibility: [
        "Registered startup with operational history of at least 1 year",
        "Innovative product or service with validated market traction",
        "Clear growth strategy and expansion plans",
        "Revenue-generating business model"
      ],
      process: [
        "Submit detailed business plan and scaling strategy",
        "Financial assessment and business model evaluation",
        "Due diligence by external experts",
        "Presentation to investment committee",
        "Milestone-based fund disbursement with monitoring"
      ]
    },
    {
      title: "IPR Grant",
      description: "Support for intellectual property protection including patents, trademarks, and copyrights.",
      amount: "Up to ₹5 Lakhs",
      color: "border-guiitar-accent",
      eligibility: [
        "Novel invention, design, or creative work with commercial potential",
        "Clear IP ownership or assignment documentation",
        "Detailed plan for IP commercialization",
        "Commitment to share IP benefits with GUIITAR COUNCIL"
      ],
      process: [
        "Submit detailed IP description and commercialization plan",
        "Initial novelty assessment by IP experts",
        "IP strategy development and documentation",
        "Filing of appropriate IP protection documents",
        "Monitoring and support throughout IP prosecution process"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Funding Header */}
        <section className="bg-guiitar-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Funding Opportunities</h1>
              <p className="text-lg md:text-xl opacity-90">
                Access capital to fuel your innovation journey through our diverse funding programs designed for entrepreneurs at various stages.
              </p>
            </div>
          </div>
        </section>

        {/* Funding Overview */}
        <section className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Funding Programs</h2>
              <p className="text-gray-700">
                GUIITAR COUNCIL offers various funding options to support innovators and entrepreneurs at different 
                stages of their journey. Our programs are designed to provide not just financial support, but also 
                mentorship and resources to ensure your success.
              </p>
            </div>
            
            <div className="space-y-12">
              {fundingPrograms.map((program, index) => (
                <Card key={index} className={`overflow-hidden border-t-4 ${program.color} hover:shadow-md transition-shadow`}>
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-2xl">{program.title}</CardTitle>
                    <CardDescription className="text-base">{program.description}</CardDescription>
                    <div className="mt-4 bg-guiitar-light inline-block py-2 px-4 rounded-full text-guiitar-primary font-semibold">
                      {program.amount}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Eligibility Criteria</h3>
                        <ul className="space-y-3">
                          {program.eligibility.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="text-guiitar-primary mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Application Process</h3>
                        <ol className="space-y-3 list-decimal list-inside">
                          {program.process.map((item, idx) => (
                            <li key={idx} className="text-gray-700">{item}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      <Button className="bg-guiitar-primary hover:bg-guiitar-primary/90 text-white">
                        Apply for {program.title}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Student Projects Section */}
        <StudentProjects />

        {/* Supported Startups Section */}
        <SupportedStartups />

        {/* Additional Resources */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Additional Resources</h2>
              
              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">Mentorship & Support</h3>
                <p className="text-gray-700 mb-6">
                  Beyond funding, we provide comprehensive support to help you succeed in your entrepreneurial journey:
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-guiitar-primary mr-2 h-5 w-5 mt-0.5" />
                    <span className="text-gray-700">Business model development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-guiitar-primary mr-2 h-5 w-5 mt-0.5" />
                    <span className="text-gray-700">Market research assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-guiitar-primary mr-2 h-5 w-5 mt-0.5" />
                    <span className="text-gray-700">Product development guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-guiitar-primary mr-2 h-5 w-5 mt-0.5" />
                    <span className="text-gray-700">Legal and regulatory compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-guiitar-primary mr-2 h-5 w-5 mt-0.5" />
                    <span className="text-gray-700">Networking with industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-guiitar-primary mr-2 h-5 w-5 mt-0.5" />
                    <span className="text-gray-700">Investor pitch preparation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Funding FAQs</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">How long does the application process take?</h4>
                    <p className="text-gray-700">
                      The typical application process takes 4-6 weeks from initial submission to final decision. 
                      This includes screening, evaluation, presentations, and due diligence.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Can I apply for multiple funding programs?</h4>
                    <p className="text-gray-700">
                      Yes, you can apply for multiple programs if you meet the eligibility criteria for each. 
                      However, we recommend focusing on the most suitable program for your current stage.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Is equity participation required?</h4>
                    <p className="text-gray-700">
                      SSIP and IPR grants do not require equity participation. For Nodal grants, a small equity 
                      stake (typically 2-5%) may be requested depending on the funding amount and business valuation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Funding;