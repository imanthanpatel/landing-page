
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus, Search, Menu, File, Eye, ChartLine, Users } from "lucide-react";

// Mock application data for the current user
const mockApplications = [
  {
    id: "app-001",
    title: "SSIP Grant Application",
    type: "SSIP",
    status: "Pending",
    submittedDate: "2025-05-05",
    amount: "₹10,00,000",
    teamMembers: 3,
    isLeader: true
  },
  {
    id: "app-002",
    title: "Nodal Center Proposal",
    type: "Nodal",
    status: "Approved",
    submittedDate: "2025-04-12",
    amount: "₹50,00,000",
    teamMembers: 5,
    isLeader: true
  },
  {
    id: "app-003",
    title: "IPR Filing Support",
    type: "IPR",
    status: "Under Review",
    submittedDate: "2025-03-22",
    amount: "₹2,00,000",
    teamMembers: 2,
    isLeader: false
  },
];

const MyApplications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [applications, setApplications] = useState(mockApplications);

  // Filter applications based on search term
  const filteredApplications = applications.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Status badge component
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
          <h1 className="text-3xl font-bold tracking-tight">My Applications</h1>
          <p className="text-muted-foreground">Track and manage all your funding applications.</p>
        </div>
        <Button asChild className="mt-4 md:mt-0 bg-guiitar-primary hover:bg-guiitar-primary/90">
          <Link to="/dashboard/applications/new" className="flex items-center gap-2">
            <Plus size={16} />
            <span>New Application</span>
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search applications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Application Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Team Size</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Submitted</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredApplications.length > 0 ? (
              filteredApplications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.title}</TableCell>
                  <TableCell>{app.type}</TableCell>
                  <TableCell><StatusBadge status={app.status} /></TableCell>
                  <TableCell>{app.amount}</TableCell>
                  <TableCell>{app.teamMembers} members</TableCell>
                  <TableCell>
                    <span className={`text-xs px-2 py-1 rounded ${app.isLeader ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                      {app.isLeader ? 'Leader' : 'Member'}
                    </span>
                  </TableCell>
                  <TableCell>{new Date(app.submittedDate).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Menu className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                          <Link to={`/dashboard/applications/${app.id}`} className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            <span>View Details</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to={`/dashboard/applications/${app.id}/funding`} className="flex items-center gap-2">
                            <ChartLine className="h-4 w-4" />
                            <span>Funding Progress</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to={`/dashboard/applications/${app.id}/team`} className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>Team Members</span>
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-6">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <File className="h-8 w-8 text-gray-400" />
                    <p className="text-muted-foreground">No applications found</p>
                    <Button asChild variant="outline" className="mt-2">
                      <Link to="/dashboard/applications/new">Create a new application</Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MyApplications;
