
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import { User, Mail, UserPlus, X, CheckCircle, Trash2, Edit } from 'lucide-react';

// Mock team data
const mockTeamMembers = [
  {
    id: "member-001",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "Project Lead",
    status: "Active",
    avatar: "RS",
    applications: ["SSIP Grant Application"],
    bio: "Ph.D. in Computer Science with 5+ years of experience in AI research."
  },
  {
    id: "member-002",
    name: "Priya Patel",
    email: "priya@example.com",
    role: "Technical Lead",
    status: "Active",
    avatar: "PP",
    applications: ["SSIP Grant Application", "IPR Filing Support"],
    bio: "Expert in machine learning and data analytics."
  },
  {
    id: "member-003",
    name: "Dr. Sanjay Desai",
    email: "sanjay@gtu.edu",
    role: "Principal Investigator",
    status: "Pending",
    avatar: "SD",
    applications: ["Nodal Center Proposal"],
    bio: "Professor of Engineering with expertise in innovation ecosystem development."
  },
  {
    id: "member-004",
    name: "Dr. Meera Shah",
    email: "meera@gtu.edu",
    role: "Co-Investigator",
    status: "Active",
    avatar: "MS",
    applications: ["Nodal Center Proposal"],
    bio: "Associate Professor with research focus on entrepreneurship education."
  }
];

const TeamMembers = () => {
  const { toast } = useToast();
  const [teamMembers, setTeamMembers] = useState(mockTeamMembers);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "",
    bio: ""
  });

  const handleAddMember = () => {
    // Validate form
    if (!newMember.name || !newMember.email || !newMember.role) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Add new member
    const avatar = newMember.name.split(' ').map(n => n[0]).join('');
    
    const member = {
      id: `member-${Date.now()}`,
      name: newMember.name,
      email: newMember.email,
      role: newMember.role,
      status: "Pending",
      avatar,
      applications: [],
      bio: newMember.bio
    };
    
    setTeamMembers([...teamMembers, member]);
    
    // Show success toast
    toast({
      title: "Team Member Added",
      description: `${newMember.name} has been added to your team.`,
    });
    
    // Reset form and close dialog
    setNewMember({
      name: "",
      email: "",
      role: "",
      bio: ""
    });
    setIsDialogOpen(false);
  };

  const handleDeleteMember = (id: string) => {
    const member = teamMembers.find(m => m.id === id);
    setTeamMembers(teamMembers.filter(m => m.id !== id));
    
    toast({
      title: "Team Member Removed",
      description: `${member?.name} has been removed from your team.`,
    });
  };

  const handleResendInvite = (id: string) => {
    const member = teamMembers.find(m => m.id === id);
    
    toast({
      title: "Invitation Resent",
      description: `We've resent the invitation to ${member?.name}.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team Members</h1>
          <p className="text-muted-foreground">Manage your team and collaborators</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="mt-4 md:mt-0 bg-guiitar-primary hover:bg-guiitar-primary/90">
              <UserPlus className="mr-2 h-4 w-4" /> Add Team Member
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add Team Member</DialogTitle>
              <DialogDescription>
                Add a new team member to collaborate on your applications.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={newMember.email}
                  onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <Input
                  id="role"
                  value={newMember.role}
                  onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Textarea
                  id="bio"
                  value={newMember.bio}
                  onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
                  className="col-span-3"
                  placeholder="Brief description of team member's qualifications"
                />
              </div>
            </div>
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => setIsDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleAddMember} 
                className="bg-guiitar-primary hover:bg-guiitar-primary/90"
              >
                Add Member
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Team</CardTitle>
          <CardDescription>
            Manage team members and their access to your applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            {teamMembers.length > 0 ? (
              teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-lg border"
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-10 h-10 bg-guiitar-primary text-white rounded-full flex items-center justify-center font-medium">
                      {member.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{member.name}</p>
                        {member.status === "Pending" ? (
                          <span className="bg-yellow-100 text-yellow-800 text-xs py-0.5 px-2 rounded">
                            Pending
                          </span>
                        ) : (
                          <span className="bg-green-100 text-green-800 text-xs py-0.5 px-2 rounded">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Mail className="h-3.5 w-3.5 mr-1" />
                        {member.email}
                      </div>
                      {member.applications.length > 0 && (
                        <div className="mt-1 text-xs text-muted-foreground">
                          <span className="font-medium">Applications:</span>{" "}
                          {member.applications.join(", ")}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 self-end md:self-auto">
                    {member.status === "Pending" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => handleResendInvite(member.id)}
                      >
                        <Mail className="h-3.5 w-3.5 mr-1.5" />
                        Resend Invite
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteMember(member.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <User className="h-6 w-6 text-gray-500" />
                </div>
                <h3 className="mt-2 text-lg font-medium">No team members yet</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Add your first team member to collaborate on applications
                </p>
                <div className="mt-6">
                  <Button 
                    onClick={() => setIsDialogOpen(true)}
                    className="bg-guiitar-primary hover:bg-guiitar-primary/90"
                  >
                    <UserPlus className="mr-2 h-4 w-4" /> Add Team Member
                  </Button>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Pending Invitations</CardTitle>
          <CardDescription>
            Team member invitations awaiting acceptance
          </CardDescription>
        </CardHeader>
        <CardContent>
          {teamMembers.filter(m => m.status === "Pending").length > 0 ? (
            <div className="space-y-4">
              {teamMembers
                .filter(m => m.status === "Pending")
                .map((member) => (
                  <div
                    key={member.id}
                    className="flex justify-between items-center p-4 rounded-lg border border-yellow-200 bg-yellow-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-yellow-100 text-yellow-800 rounded-full flex items-center justify-center font-medium">
                        {member.avatar}
                      </div>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => handleResendInvite(member.id)}
                      >
                        <Mail className="h-3.5 w-3.5 mr-1.5" />
                        Resend
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteMember(member.id)}
                      >
                        <X className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-8">
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mt-2 text-sm font-medium">No pending invitations</h3>
                <p className="mt-1 text-sm text-gray-500">
                  All team members have accepted their invitations
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamMembers;
