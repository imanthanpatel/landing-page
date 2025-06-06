
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, Receipt, DollarSign, CalendarDays } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RequestRefund = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    refundType: "",
    eventName: "",
    eventDate: "",
    totalAmount: "",
    transportationCost: "",
    accommodationCost: "",
    description: ""
  });

  const [uploadedFiles, setUploadedFiles] = useState<{
    certificate: File | null;
    transportBills: File | null;
    accommodationBills: File | null;
  }>({
    certificate: null,
    transportBills: null,
    accommodationBills: null
  });

  const handleFileUpload = (type: keyof typeof uploadedFiles, file: File | null) => {
    setUploadedFiles(prev => ({
      ...prev,
      [type]: file
    }));
  };

  const handleSubmit = () => {
    if (!formData.refundType || !formData.eventName || !formData.totalAmount) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (!uploadedFiles.certificate) {
      toast({
        title: "Missing Certificate",
        description: "Please upload your attendance certificate.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Refund Request Submitted",
      description: "Your refund request has been submitted successfully. You will receive an update within 5-7 business days.",
    });

    // Reset form
    setFormData({
      refundType: "",
      eventName: "",
      eventDate: "",
      totalAmount: "",
      transportationCost: "",
      accommodationCost: "",
      description: ""
    });
    setUploadedFiles({
      certificate: null,
      transportBills: null,
      accommodationBills: null
    });
  };

  const FileUploadSection = ({ 
    title, 
    description, 
    type, 
    required = false 
  }: { 
    title: string; 
    description: string; 
    type: keyof typeof uploadedFiles; 
    required?: boolean;
  }) => (
    <div className="space-y-2">
      <Label className="flex items-center gap-1">
        {title} {required && <span className="text-red-500">*</span>}
      </Label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
        <input
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={(e) => handleFileUpload(type, e.target.files?.[0] || null)}
          className="hidden"
          id={`file-${type}`}
        />
        <label htmlFor={`file-${type}`} className="cursor-pointer">
          <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
          <p className="text-sm text-gray-600 mb-1">{description}</p>
          <p className="text-xs text-gray-500">PDF, JPG, PNG (Max 10MB)</p>
        </label>
        {uploadedFiles[type] && (
          <div className="mt-2 p-2 bg-green-50 rounded border">
            <p className="text-sm text-green-800 flex items-center gap-1">
              <FileText className="h-4 w-4" />
              {uploadedFiles[type]?.name}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Request Refund</h1>
        <p className="text-muted-foreground">Submit refund requests for bootcamps, workshops, and training programs you attended.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Refund Request Form
          </CardTitle>
          <CardDescription>
            Fill out this form to request reimbursement for educational events and training programs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Information */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="refundType">Refund Type *</Label>
              <Select value={formData.refundType} onValueChange={(value) => setFormData({...formData, refundType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select refund type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bootcamp">Bootcamp/Training Program</SelectItem>
                  <SelectItem value="workshop">Workshop/Seminar</SelectItem>
                  <SelectItem value="conference">Conference/Summit</SelectItem>
                  <SelectItem value="certification">Certification Course</SelectItem>
                  <SelectItem value="competition">Competition/Hackathon</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="eventName">Event/Program Name *</Label>
              <Input
                id="eventName"
                placeholder="Enter the name of the event"
                value={formData.eventName}
                onChange={(e) => setFormData({...formData, eventName: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="eventDate">Event Date *</Label>
              <Input
                id="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="totalAmount">Total Refund Amount (₹) *</Label>
              <Input
                id="totalAmount"
                type="number"
                placeholder="Enter total amount"
                value={formData.totalAmount}
                onChange={(e) => setFormData({...formData, totalAmount: e.target.value})}
              />
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Cost Breakdown</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="transportationCost">Transportation Cost (₹)</Label>
                <Input
                  id="transportationCost"
                  type="number"
                  placeholder="Enter transportation expenses"
                  value={formData.transportationCost}
                  onChange={(e) => setFormData({...formData, transportationCost: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="accommodationCost">Accommodation Cost (₹)</Label>
                <Input
                  id="accommodationCost"
                  type="number"
                  placeholder="Enter accommodation expenses"
                  value={formData.accommodationCost}
                  onChange={(e) => setFormData({...formData, accommodationCost: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <Label htmlFor="description">Additional Details</Label>
            <Textarea
              id="description"
              placeholder="Provide any additional information about your request..."
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="min-h-[100px]"
            />
          </div>

          {/* File Uploads */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Required Documents</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <FileUploadSection
                title="Attendance Certificate"
                description="Upload your certificate of completion/attendance"
                type="certificate"
                required={true}
              />
              
              <FileUploadSection
                title="Transportation Bills"
                description="Upload receipts for travel expenses"
                type="transportBills"
              />
              
              <FileUploadSection
                title="Accommodation Bills"
                description="Upload hotel/accommodation receipts"
                type="accommodationBills"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button 
              onClick={handleSubmit}
              className="w-full bg-guiitar-primary hover:bg-guiitar-primary/90"
            >
              Submit Refund Request
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestRefund;
