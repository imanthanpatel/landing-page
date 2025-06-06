
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChartLine, Calendar, Download, FileText } from "lucide-react";

// Mock funding data
const mockFundingData = [
  {
    id: "app-002",
    application: "Nodal Center Proposal",
    totalAmount: "₹50,00,000",
    released: "₹25,00,000",
    pending: "₹25,00,000",
    percentComplete: 50,
    milestones: [
      {
        name: "Project Setup",
        description: "Initial setup and infrastructure development",
        amount: "₹25,00,000",
        status: "Completed",
        releaseDate: "2025-06-01",
        documents: [
          { name: "Fund Utilization Certificate", type: "pdf", size: "1.2 MB" },
          { name: "Progress Report - Phase 1", type: "pdf", size: "2.8 MB" },
        ]
      },
      {
        name: "Center Operations",
        description: "Operational activities and program implementation",
        amount: "₹15,00,000",
        status: "Pending",
        expectedDate: "2025-12-15",
        requirements: [
          "Six-month progress report",
          "Audit of expenses",
          "Photographs of established center"
        ]
      },
      {
        name: "Final Phase",
        description: "Completion of projects and report submission",
        amount: "₹10,00,000",
        status: "Upcoming",
        expectedDate: "2026-06-01",
        requirements: [
          "Annual report",
          "Final audit statement",
          "Success metrics and outcomes"
        ]
      }
    ]
  }
];

const FundingTrack = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Funding Track</h1>
        <p className="text-muted-foreground">Monitor your approved funding and upcoming milestones</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Approved</CardTitle>
            <ChartLine className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹50,00,000</div>
            <p className="text-xs text-muted-foreground">Across 1 approved application</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Funds Released</CardTitle>
            <ChartLine className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹25,00,000</div>
            <p className="text-xs text-muted-foreground">50% of approved funding</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Release</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Dec 15, 2025</div>
            <p className="text-xs text-muted-foreground">₹15,00,000 pending milestone</p>
          </CardContent>
        </Card>
      </div>
      
      {mockFundingData.map(funding => (
        <Card key={funding.id}>
          <CardHeader>
            <CardTitle>{funding.application}</CardTitle>
            <CardDescription>Track funding milestones and requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex justify-between mb-1 items-center">
                <span className="text-sm font-medium">Funding Progress</span>
                <span className="text-sm font-medium">{funding.percentComplete}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-guiitar-primary h-2.5 rounded-full" 
                  style={{ width: `${funding.percentComplete}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Released: {funding.released}</span>
                <span>Pending: {funding.pending}</span>
              </div>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="milestones">Milestones</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Funding Summary</h3>
                    <div className="grid gap-2 md:grid-cols-2">
                      <div className="p-3 border rounded-md">
                        <p className="text-sm text-muted-foreground">Total Approved</p>
                        <p className="text-lg font-bold">{funding.totalAmount}</p>
                      </div>
                      <div className="p-3 border rounded-md">
                        <p className="text-sm text-muted-foreground">Released So Far</p>
                        <p className="text-lg font-bold">{funding.released}</p>
                      </div>
                      <div className="p-3 border rounded-md">
                        <p className="text-sm text-muted-foreground">Pending Amount</p>
                        <p className="text-lg font-bold">{funding.pending}</p>
                      </div>
                      <div className="p-3 border rounded-md">
                        <p className="text-sm text-muted-foreground">Next Milestone</p>
                        <p className="text-lg font-bold">Dec 15, 2025</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Upcoming Requirements</h3>
                    <ul className="space-y-2">
                      {funding.milestones
                        .find(m => m.status === "Pending")
                        ?.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-5 h-5 mr-2 rounded-full bg-yellow-100 text-yellow-800">
                            {i + 1}
                          </span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="milestones" className="space-y-4">
                <div className="space-y-6">
                  {funding.milestones.map((milestone, index) => (
                    <div key={index} className={`p-4 border rounded-lg ${
                      milestone.status === "Completed" 
                        ? "border-green-200 bg-green-50"
                        : milestone.status === "Pending"
                        ? "border-yellow-200 bg-yellow-50"
                        : "border-gray-200"
                    }`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{milestone.name}</h3>
                          <p className="text-sm text-muted-foreground">{milestone.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{milestone.amount}</p>
                          <p className="text-xs text-muted-foreground">
                            {milestone.status === "Completed" 
                              ? `Released on ${new Date(milestone.releaseDate).toLocaleDateString()}` 
                              : `Expected on ${new Date(milestone.expectedDate).toLocaleDateString()}`}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <span className={`text-xs px-2 py-1 rounded ${
                          milestone.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : milestone.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                        }`}>
                          {milestone.status}
                        </span>
                        
                        {milestone.status === "Completed" && (
                          <Button variant="outline" size="sm" className="text-xs">
                            View Details
                          </Button>
                        )}
                        
                        {milestone.status === "Pending" && (
                          <Button size="sm" className="bg-guiitar-primary hover:bg-guiitar-primary/90 text-xs">
                            Submit Requirements
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="documents" className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Submitted Documents</h3>
                  <div className="space-y-2">
                    {funding.milestones
                      .filter(m => m.status === "Completed" && m.documents)
                      .flatMap(m => m.documents || [])
                      .map((doc, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">{doc.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {doc.type.toUpperCase()} • {doc.size}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Required Documents (Next Milestone)</h3>
                    <div className="space-y-2">
                      {funding.milestones
                        .find(m => m.status === "Pending")
                        ?.requirements.map((req, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border border-dashed rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-yellow-50 rounded-lg flex items-center justify-center">
                              <FileText className="h-5 w-5 text-yellow-500" />
                            </div>
                            <div>
                              <p className="font-medium">{req}</p>
                              <p className="text-xs text-muted-foreground">
                                Required by {new Date(funding.milestones.find(m => m.status === "Pending")?.expectedDate || "").toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Upload
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FundingTrack;
