
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageSquare, FileText, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FileGrievance = () => {
  const { toast } = useToast();
  const [grievances, setGrievances] = useState([
    {
      id: "grv-001",
      title: "Application Review Delay",
      category: "Application Process",
      status: "Under Review",
      description: "My SSIP application has been pending for over 2 months without any update.",
      submittedDate: "2025-04-15",
      ticketNumber: "GRV2025001"
    },
    {
      id: "grv-002",
      title: "Funding Disbursement Issue",
      category: "Financial",
      status: "Resolved",
      description: "First installment of approved funding was not received as per schedule.",
      submittedDate: "2025-03-20",
      ticketNumber: "GRV2025002"
    }
  ]);

  const [newGrievance, setNewGrievance] = useState({
    title: "",
    category: "",
    description: "",
    urgency: ""
  });

  const grievanceCategories = [
    "Application Process",
    "Financial",
    "Technical Support",
    "Documentation",
    "Communication",
    "Mentoring",
    "Events",
    "Other"
  ];

  const urgencyLevels = [
    "Low",
    "Medium", 
    "High",
    "Critical"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const grievance = {
      id: `grv-${Date.now()}`,
      ...newGrievance,
      status: "Submitted",
      submittedDate: new Date().toISOString().split('T')[0],
      ticketNumber: `GRV2025${String(grievances.length + 1).padStart(3, '0')}`
    };

    setGrievances([grievance, ...grievances]);
    setNewGrievance({
      title: "",
      category: "",
      description: "",
      urgency: ""
    });

    toast({
      title: "Grievance Submitted",
      description: `Your grievance has been submitted with ticket number ${grievance.ticketNumber}.`,
    });
  };

  const StatusBadge = ({ status }: { status: string }) => {
    let bgColor = "bg-gray-100 text-gray-800";
    if (status === "Resolved") bgColor = "bg-green-100 text-green-800";
    if (status === "Under Review") bgColor = "bg-yellow-100 text-yellow-800";
    if (status === "Submitted") bgColor = "bg-blue-100 text-blue-800";
    
    return (
      <span className={`${bgColor} text-xs px-2.5 py-0.5 rounded`}>
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">File a Grievance</h1>
        <p className="text-muted-foreground">Report issues, concerns, or complaints regarding any services or processes.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* File New Grievance Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Submit New Grievance
            </CardTitle>
            <CardDescription>Describe your issue in detail for quick resolution</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Grievance Title *</Label>
                <Input
                  id="title"
                  placeholder="Brief title describing your issue"
                  value={newGrievance.title}
                  onChange={(e) => setNewGrievance({...newGrievance, title: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select 
                  value={newGrievance.category}
                  onValueChange={(value) => setNewGrievance({...newGrievance, category: value})}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {grievanceCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="urgency">Urgency Level *</Label>
                <Select 
                  value={newGrievance.urgency}
                  onValueChange={(value) => setNewGrievance({...newGrievance, urgency: value})}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency level" />
                  </SelectTrigger>
                  <SelectContent>
                    {urgencyLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a detailed description of your grievance, including any relevant dates, reference numbers, or documentation..."
                  value={newGrievance.description}
                  onChange={(e) => setNewGrievance({...newGrievance, description: e.target.value})}
                  rows={5}
                  required
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm text-yellow-800">
                    Please ensure all information is accurate. You will receive a ticket number for tracking.
                  </span>
                </div>
              </div>

              <Button type="submit" className="w-full bg-guiitar-primary hover:bg-guiitar-primary/90">
                Submit Grievance
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Grievances History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              My Grievances ({grievances.length})
            </CardTitle>
            <CardDescription>Track your submitted grievances</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {grievances.map((grievance) => (
                <div key={grievance.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="font-medium">{grievance.title}</h4>
                      <p className="text-sm text-muted-foreground">Ticket: {grievance.ticketNumber}</p>
                    </div>
                    <StatusBadge status={grievance.status} />
                  </div>
                  
                  <div className="text-sm space-y-1">
                    <p><span className="font-medium">Category:</span> {grievance.category}</p>
                    <p><span className="font-medium">Submitted:</span> {new Date(grievance.submittedDate).toLocaleDateString()}</p>
                    <p className="text-muted-foreground mt-2">{grievance.description}</p>
                  </div>
                </div>
              ))}
              
              {grievances.length === 0 && (
                <div className="text-center py-6">
                  <MessageSquare className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-muted-foreground">No grievances filed yet</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FileGrievance;
