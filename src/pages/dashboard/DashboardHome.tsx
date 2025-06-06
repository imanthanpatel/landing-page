
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { File, Calendar, Award, Users, Plus, Eye, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DashboardHome = () => {
  // Mock data for applications
  const myApplications = [
    { 
      id: "app-001",
      title: "SSIP Grant Application",
      type: "SSIP",
      status: "Pending",
      submittedDate: "2025-05-05",
      amount: "₹10,00,000"
    },
    { 
      id: "app-002",
      title: "Nodal Center Proposal",
      type: "Nodal",
      status: "Approved",
      submittedDate: "2025-04-12",
      amount: "₹50,00,000"
    },
    { 
      id: "app-003",
      title: "IPR Filing Support",
      type: "IPR",
      status: "Under Review",
      submittedDate: "2025-03-22",
      amount: "₹2,00,000"
    }
  ];

  const quickActions = [
    {
      title: "Register for Event",
      description: "Join upcoming workshops and seminars",
      icon: Calendar,
      link: "/dashboard/events",
      color: "blue"
    },
    {
      title: "Enter Achievement",
      description: "Record your accomplishments and milestones",
      icon: Award,
      link: "/dashboard/achievements",
      color: "green"
    },
    {
      title: "Request Mentoring",
      description: "Connect with experienced mentors",
      icon: Users,
      link: "/dashboard/mentoring",
      color: "purple"
    },
    {
      title: "Request Refund",
      description: "Submit refund requests for bootcamps and training",
      icon: DollarSign,
      link: "/dashboard/refund",
      color: "orange"
    }
  ];

  const StatusBadge = ({ status }: { status: string }) => {
    let bgColor = "bg-gray-100 text-gray-800";
    if (status === "Approved") bgColor = "bg-green-100 text-green-800";
    if (status === "Pending") bgColor = "bg-yellow-100 text-yellow-800";
    if (status === "Under Review") bgColor = "bg-blue-100 text-blue-800";
    if (status === "Rejected") bgColor = "bg-red-100 text-red-800";
    
    return (
      <span className={`${bgColor} text-xs px-2.5 py-0.5 rounded`}>
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Manage your applications and explore opportunities.</p>
        </div>
        <Button asChild className="mt-4 md:mt-0 bg-guiitar-primary hover:bg-guiitar-primary/90">
          <Link to="/dashboard/applications/new" className="flex items-center gap-2">
            <Plus size={16} />
            <span>New Application</span>
          </Link>
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => (
          <Card key={action.title} className="hover:shadow-md transition-shadow cursor-pointer">
            <Link to={action.link}>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-full ${
                    action.color === 'blue' ? 'bg-blue-100' :
                    action.color === 'green' ? 'bg-green-100' :
                    action.color === 'purple' ? 'bg-purple-100' :
                    'bg-orange-100'
                  }`}>
                    <action.icon className={`h-5 w-5 ${
                      action.color === 'blue' ? 'text-blue-600' :
                      action.color === 'green' ? 'text-green-600' :
                      action.color === 'purple' ? 'text-purple-600' :
                      'text-orange-600'
                    }`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription className="text-sm">{action.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Link>
          </Card>
        ))}
      </div>

      {/* My Applications Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>My Applications</CardTitle>
            <CardDescription>Your recent funding applications</CardDescription>
          </div>
          <Button asChild variant="outline">
            <Link to="/dashboard/applications" className="flex items-center gap-2">
              <Eye size={16} />
              View All
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {myApplications.slice(0, 3).map((app) => (
              <div key={app.id} className="flex justify-between items-center border-b pb-3 last:border-b-0">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{app.title}</h4>
                    <StatusBadge status={app.status} />
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                    <span>Type: {app.type}</span>
                    <span>Amount: {app.amount}</span>
                    <span>Submitted: {new Date(app.submittedDate).toLocaleDateString()}</span>
                  </div>
                </div>
                <Button asChild variant="ghost" size="sm">
                  <Link to={`/dashboard/applications/${app.id}`}>
                    <Eye size={14} />
                  </Link>
                </Button>
              </div>
            ))}
            {myApplications.length === 0 && (
              <div className="text-center py-6">
                <File className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <p className="text-muted-foreground mb-3">No applications yet</p>
                <Button asChild>
                  <Link to="/dashboard/applications/new">Create Your First Application</Link>
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
