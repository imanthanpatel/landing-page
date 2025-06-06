
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, File, FileCheck } from "lucide-react";

const NewApplication = () => {
  const applicationTypes = [
    {
      id: "ssip",
      title: "SSIP Grant",
      description: "Student Startup & Innovation Policy grant for innovative student projects.",
      icon: <FileText className="h-12 w-12 text-blue-500" />,
      amount: "Up to ₹10,00,000",
      duration: "1-2 years",
      complexity: "Medium"
    },
    {
      id: "nodal",
      title: "Nodal Center",
      description: "Establish a center for innovation and entrepreneurship at your institution.",
      icon: <FileCheck className="h-12 w-12 text-purple-500" />,
      amount: "Up to ₹50,00,000",
      duration: "3-5 years",
      complexity: "High"
    },
    {
      id: "ipr",
      title: "IPR Support",
      description: "Get financial assistance for filing patents and protecting intellectual property.",
      icon: <File className="h-12 w-12 text-green-500" />,
      amount: "Up to ₹2,00,000",
      duration: "6-12 months",
      complexity: "Low"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">New Application</h1>
        <p className="text-muted-foreground">Select the type of funding you'd like to apply for.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {applicationTypes.map((type) => (
          <Card key={type.id} className="hover:shadow-md transition-all">
            <CardHeader>
              <div className="flex justify-center mb-4">
                {type.icon}
              </div>
              <CardTitle className="text-center">{type.title}</CardTitle>
              <CardDescription className="text-center">{type.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Funding Amount:</span>
                  <span className="font-medium">{type.amount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{type.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Complexity:</span>
                  <span className="font-medium">{type.complexity}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                asChild 
                className="w-full bg-guiitar-primary hover:bg-guiitar-primary/90"
              >
                <Link to={`/dashboard/applications/form/${type.id}`}>Apply Now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewApplication;
