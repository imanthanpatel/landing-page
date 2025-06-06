
import { useParams, useNavigate, Link } from "react-router-dom";
import { ChevronLeft, Calendar, User, Download, FileCheck, Clock, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Mock application data
const mockApplications = {
  "app-001": {
    id: "app-001",
    title: "SSIP Grant Application",
    type: "SSIP",
    status: "Pending",
    submittedDate: "2025-05-05",
    amount: "₹10,00,000",
    description: "A student startup focused on developing an AI-powered waste management solution for campuses.",
    timeline: [
      { date: "2025-05-05", event: "Application submitted", status: "Completed" },
      { date: "2025-05-12", event: "Initial review", status: "Completed" },
      { date: "2025-05-28", event: "Committee evaluation", status: "Pending" },
      { date: "2025-06-15", event: "Final decision", status: "Upcoming" },
    ],
    team: [
      { name: "Rahul Sharma", role: "Project Lead", email: "rahul@example.com" },
      { name: "Priya Patel", role: "Technical Lead", email: "priya@example.com" },
    ],
    documents: [
      { name: "Project Proposal", type: "pdf", size: "2.4 MB", url: "#" },
      { name: "Budget Plan", type: "xlsx", size: "1.1 MB", url: "#" },
    ]
  },
  "app-002": {
    id: "app-002",
    title: "Nodal Center Proposal",
    type: "Nodal",
    status: "Approved",
    submittedDate: "2025-04-12",
    amount: "₹50,00,000",
    description: "Proposal to establish a state-of-the-art innovation center at Gujarat Technological University.",
    timeline: [
      { date: "2025-04-12", event: "Application submitted", status: "Completed" },
      { date: "2025-04-20", event: "Initial review", status: "Completed" },
      { date: "2025-05-05", event: "Committee evaluation", status: "Completed" },
      { date: "2025-05-15", event: "Final approval", status: "Completed" },
      { date: "2025-06-01", event: "First installment release", status: "Pending" },
    ],
    team: [
      { name: "Dr. Sanjay Desai", role: "Principal Investigator", email: "sanjay@gtu.edu" },
      { name: "Dr. Meera Shah", role: "Co-Investigator", email: "meera@gtu.edu" },
      { name: "Vikram Patel", role: "Project Manager", email: "vikram@gtu.edu" },
    ],
    documents: [
      { name: "Detailed Proposal", type: "pdf", size: "4.7 MB", url: "#" },
      { name: "Institution Approval Letter", type: "pdf", size: "0.8 MB", url: "#" },
      { name: "Infrastructure Details", type: "pdf", size: "2.2 MB", url: "#" },
    ]
  },
  "app-003": {
    id: "app-003",
    title: "IPR Filing Support",
    type: "IPR",
    status: "Pending",
    submittedDate: "2025-03-22",
    amount: "₹2,00,000",
    description: "Support for filing patent for a novel IoT-based water quality monitoring system.",
    timeline: [
      { date: "2025-03-22", event: "Application submitted", status: "Completed" },
      { date: "2025-04-05", event: "Initial review", status: "Completed" },
      { date: "2025-04-25", event: "Patent evaluation", status: "Completed" },
      { date: "2025-05-10", event: "Technical committee review", status: "Pending" },
      { date: "2025-05-30", event: "Final decision", status: "Upcoming" },
    ],
    team: [
      { name: "Dr. Amit Patel", role: "Inventor", email: "amit@research.org" },
      { name: "Nikhil Mehta", role: "Co-Inventor", email: "nikhil@research.org" },
    ],
    documents: [
      { name: "Detailed Description", type: "pdf", size: "3.2 MB", url: "#" },
      { name: "Drawings/Images", type: "zip", size: "5.8 MB", url: "#" },
      { name: "Prior Art Search Report", type: "pdf", size: "1.5 MB", url: "#" },
    ]
  }
};

const ApplicationView = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Get application data based on ID
  const application = id && id in mockApplications 
    ? mockApplications[id as keyof typeof mockApplications] 
    : null;
    
  if (!application) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">Application not found.</p>
          <Button 
            onClick={() => navigate("/dashboard/applications")} 
            variant="outline"
          >
            Back to Applications
          </Button>
        </div>
      </div>
    );
  }

  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    let bgColor = "bg-gray-100 text-gray-800";
    if (status === "Completed") bgColor = "bg-green-100 text-green-800";
    if (status === "Pending") bgColor = "bg-yellow-100 text-yellow-800";
    if (status === "Upcoming") bgColor = "bg-blue-100 text-blue-800";
    
    return (
      <span className={`${bgColor} text-xs px-2.5 py-0.5 rounded`}>
        {status}
      </span>
    );
  };
  
  return (
    <div className="space-y-6">
      <div>
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard/applications")}
          className="mb-2 pl-0 hover:bg-transparent hover:text-guiitar-primary"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Applications
        </Button>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">{application.title}</h1>
              <StatusBadge status={application.status} />
            </div>
            <p className="text-muted-foreground">
              Submitted on {new Date(application.submittedDate).toLocaleDateString()} | 
              Reference ID: {application.id}
            </p>
          </div>
          <div className="flex gap-2">
            <Button asChild className="bg-guiitar-primary hover:bg-guiitar-primary/90">
              <Link to="/dashboard/team" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Manage Team</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Application Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Description</h4>
                  <p>{application.description}</p>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium text-muted-foreground">Application Type</h4>
                    <p>{application.type}</p>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium text-muted-foreground">Requested Amount</h4>
                    <p>{application.amount}</p>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium text-muted-foreground">Submission Date</h4>
                    <p>{new Date(application.submittedDate).toLocaleDateString()}</p>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="text-sm font-medium text-muted-foreground">Status</h4>
                    <StatusBadge status={application.status} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {application.timeline.find(item => item.status === "Pending") ? (
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-medium">Awaiting: {application.timeline.find(item => item.status === "Pending")?.event}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Expected by {application.timeline.find(item => item.status === "Pending")?.date}
                    </p>
                  </div>
                ) : (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium">All steps completed!</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your application has been fully processed.
                    </p>
                  </div>
                )}
                
                <div className="space-y-2">
                  <h3 className="font-medium">Required Actions</h3>
                  
                  {application.status === "Approved" ? (
                    <div className="flex items-center gap-2 p-3 border rounded-lg bg-green-50">
                      <FileCheck className="h-6 w-6 text-green-600" />
                      <div>
                        <p className="font-medium">Application Approved</p>
                        <p className="text-sm text-muted-foreground">
                          No further action required. Funding will be processed shortly.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 p-3 border rounded-lg">
                      <Clock className="h-6 w-6 text-yellow-600" />
                      <div>
                        <p className="font-medium">Application Under Review</p>
                        <p className="text-sm text-muted-foreground">
                          Please check back for updates or respond to any requests for additional information.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Application Timeline</CardTitle>
              <CardDescription>Track the progress of your application</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="relative border-l border-gray-200">
                {application.timeline.map((item, index) => (
                  <li key={index} className="mb-10 ml-6">
                    <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ${
                      item.status === "Completed" 
                        ? "bg-green-100 ring-white ring-8" 
                        : item.status === "Pending" 
                        ? "bg-yellow-100 ring-white ring-8" 
                        : "bg-gray-100 ring-white ring-8"
                    }`}>
                      <Calendar className={`w-3 h-3 ${
                        item.status === "Completed" 
                          ? "text-green-800" 
                          : item.status === "Pending" 
                          ? "text-yellow-800" 
                          : "text-gray-800"
                      }`} />
                    </span>
                    <div className="flex items-center">
                      <h3 className="flex items-center text-lg font-semibold">{item.event}</h3>
                      <StatusBadge status={item.status} />
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                      {new Date(item.date).toLocaleDateString()}
                    </time>
                    <p className="text-base font-normal text-muted-foreground">
                      {item.status === "Completed" 
                        ? "This step has been completed successfully." 
                        : item.status === "Pending" 
                        ? "This step is currently in progress." 
                        : "This step is scheduled for the future."}
                    </p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>People working on this application</CardDescription>
              </div>
              <Button variant="outline" className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Add Member</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {application.team.map((member, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-guiitar-primary text-white rounded-full flex items-center justify-center">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {member.email}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="documents">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Application Documents</CardTitle>
                <CardDescription>Files submitted with your application</CardDescription>
              </div>
              <Button variant="outline" className="flex items-center gap-1">
                <File className="h-4 w-4" />
                <span>Add Document</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {application.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                        <File className="h-5 w-5 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">{doc.type.toUpperCase()} • {doc.size}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                      <span className="sr-only">Download</span>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ApplicationView;
