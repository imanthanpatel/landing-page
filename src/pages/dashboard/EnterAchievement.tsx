
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
import { Award, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EnterAchievement = () => {
  const { toast } = useToast();
  const [achievements, setAchievements] = useState([
    {
      id: "ach-001",
      title: "Best Innovation Award",
      category: "Competition",
      description: "Won first place in the National Innovation Challenge 2024",
      date: "2024-12-15",
      organization: "Innovation Council of India"
    },
    {
      id: "ach-002",
      title: "Patent Filed",
      category: "Intellectual Property",
      description: "Filed patent for IoT-based smart farming solution",
      date: "2024-11-20",
      organization: "Indian Patent Office"
    }
  ]);

  const [newAchievement, setNewAchievement] = useState({
    title: "",
    category: "",
    description: "",
    date: "",
    organization: ""
  });

  const achievementCategories = [
    "Competition",
    "Research Paper",
    "Patent",
    "Certification",
    "Award",
    "Publication",
    "Intellectual Property",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const achievement = {
      id: `ach-${Date.now()}`,
      ...newAchievement
    };

    setAchievements([achievement, ...achievements]);
    setNewAchievement({
      title: "",
      category: "",
      description: "",
      date: "",
      organization: ""
    });

    toast({
      title: "Achievement Added",
      description: "Your achievement has been successfully recorded.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Enter Achievement</h1>
        <p className="text-muted-foreground">Record your accomplishments, awards, and milestones.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Add New Achievement Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add New Achievement
            </CardTitle>
            <CardDescription>Fill in the details of your achievement</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Achievement Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Best Innovation Award"
                  value={newAchievement.title}
                  onChange={(e) => setNewAchievement({...newAchievement, title: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select 
                  value={newAchievement.category}
                  onValueChange={(value) => setNewAchievement({...newAchievement, category: value})}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {achievementCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization">Organization/Institution *</Label>
                <Input
                  id="organization"
                  placeholder="e.g., Innovation Council of India"
                  value={newAchievement.organization}
                  onChange={(e) => setNewAchievement({...newAchievement, organization: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={newAchievement.date}
                  onChange={(e) => setNewAchievement({...newAchievement, date: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your achievement in detail..."
                  value={newAchievement.description}
                  onChange={(e) => setNewAchievement({...newAchievement, description: e.target.value})}
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full bg-guiitar-primary hover:bg-guiitar-primary/90">
                Add Achievement
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Achievements List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              My Achievements ({achievements.length})
            </CardTitle>
            <CardDescription>Your recorded accomplishments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="border-l-4 border-guiitar-primary pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {achievement.category} • {new Date(achievement.date).toLocaleDateString()}
                      </p>
                      {achievement.description && (
                        <p className="text-sm mt-2">{achievement.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {achievements.length === 0 && (
                <div className="text-center py-6">
                  <Award className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-muted-foreground">No achievements recorded yet</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EnterAchievement;
