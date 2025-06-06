
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, Upload, Plus, Users } from "lucide-react";

// Define application forms for each type
const applicationForms = {
  ssip: {
    title: "SSIP Grant Application",
    description: "Apply for Student Startup & Innovation Policy grant funding",
    sections: [
      {
        title: "Project Information",
        fields: [
          { name: "projectTitle", label: "Project Title", type: "text", description: "Name of your innovative project", required: true },
          { name: "projectSummary", label: "Project Summary", type: "textarea", description: "Brief overview of your project (max 500 characters)", required: true },
          { name: "problemStatement", label: "Problem Statement", type: "textarea", description: "What problem does your project solve?", required: true },
          { name: "proposedSolution", label: "Proposed Solution", type: "textarea", description: "How does your project solve this problem?", required: true },
          { name: "innovationAspect", label: "Innovation Aspect", type: "textarea", description: "What makes your solution innovative?", required: true },
        ]
      },
      {
        title: "Financial Information",
        fields: [
          { name: "requestedAmount", label: "Requested Amount (₹)", type: "number", description: "Amount of funding you are requesting (in INR)", required: true },
          { name: "budgetJustification", label: "Budget Justification", type: "textarea", description: "Explain how the funds will be utilized", required: true },
          { name: "projectDuration", label: "Project Duration (in months)", type: "number", description: "Expected duration to complete the project", required: true }
        ]
      },
      {
        title: "Supporting Documents",
        fields: [
          { name: "projectProposal", label: "Project Proposal", type: "file", description: "Upload a detailed project proposal (PDF)", required: true },
          { name: "budgetPlan", label: "Budget Plan", type: "file", description: "Upload a detailed budget plan (Excel/PDF)", required: true }
        ]
      }
    ]
  },
  nodal: {
    title: "Nodal Center Application",
    description: "Apply to establish an innovation center at your institution",
    sections: [
      {
        title: "Institution Information",
        fields: [
          { name: "institutionName", label: "Institution Name", type: "text", description: "Name of your educational institution", required: true },
          { name: "institutionType", label: "Institution Type", type: "text", description: "Type of institution (e.g., University, College, Polytechnic)", required: true },
          { name: "institutionAddress", label: "Institution Address", type: "textarea", description: "Complete address of your institution", required: true },
          { name: "establishmentYear", label: "Year of Establishment", type: "number", description: "Year the institution was established", required: true },
        ]
      },
      {
        title: "Nodal Center Proposal",
        fields: [
          { name: "centerVision", label: "Vision for the Center", type: "textarea", description: "What is your vision for this nodal center?", required: true },
          { name: "expectedOutcomes", label: "Expected Outcomes", type: "textarea", description: "What outcomes do you expect from this center?", required: true },
          { name: "infrastructurePlan", label: "Infrastructure Plan", type: "textarea", description: "Describe the planned infrastructure for the center", required: true },
          { name: "sustainabilityPlan", label: "Sustainability Plan", type: "textarea", description: "How will the center sustain after the initial funding period?", required: true },
        ]
      },
      {
        title: "Financial Information",
        fields: [
          { name: "requestedAmount", label: "Requested Amount (₹)", type: "number", description: "Amount of funding you are requesting (in INR)", required: true },
          { name: "matchingContribution", label: "Matching Contribution (₹)", type: "number", description: "Amount your institution will contribute", required: true },
        ]
      },
      {
        title: "Supporting Documents",
        fields: [
          { name: "detailedProposal", label: "Detailed Proposal", type: "file", description: "Upload a detailed center proposal (PDF)", required: true },
          { name: "institutionApproval", label: "Institution Approval Letter", type: "file", description: "Upload approval from institution head (PDF)", required: true },
          { name: "infrastructureDetails", label: "Infrastructure Details", type: "file", description: "Upload infrastructure details (PDF)", required: true }
        ]
      }
    ]
  },
  ipr: {
    title: "IPR Filing Support Application",
    description: "Apply for support to file patents or protect intellectual property",
    sections: [
      {
        title: "Innovation Details",
        fields: [
          { name: "innovationTitle", label: "Innovation Title", type: "text", description: "Title of your innovation/invention", required: true },
          { name: "innovationType", label: "Type of Innovation", type: "text", description: "Type of IPR (Patent, Design, Copyright, etc.)", required: true },
          { name: "innovationDescription", label: "Innovation Description", type: "textarea", description: "Detailed description of your innovation", required: true },
          { name: "noveltyAspects", label: "Novelty Aspects", type: "textarea", description: "What makes your innovation novel and unique?", required: true },
        ]
      },
      {
        title: "IPR Details",
        fields: [
          { name: "iprType", label: "IPR Type", type: "text", description: "Patent/Copyright/Trademark/Industrial Design", required: true },
          { name: "priorArtSearch", label: "Prior Art Search Conducted", type: "textarea", description: "Details of any prior art search conducted", required: true },
          { name: "commercialPotential", label: "Commercial Potential", type: "textarea", description: "Describe the commercial potential of this innovation", required: true },
        ]
      },
      {
        title: "Financial Information",
        fields: [
          { name: "requestedAmount", label: "Requested Amount (₹)", type: "number", description: "Amount of funding you are requesting (in INR)", required: true },
          { name: "costBreakdown", label: "Cost Breakdown", type: "textarea", description: "Detailed breakdown of expected costs", required: true },
        ]
      },
      {
        title: "Supporting Documents",
        fields: [
          { name: "detailedDescription", label: "Detailed Description", type: "file", description: "Upload a detailed description of your innovation (PDF)", required: true },
          { name: "drawingsImages", label: "Drawings/Images", type: "file", description: "Upload drawings or images of your innovation (PDF/JPG)", required: true },
          { name: "priorArtSearchReport", label: "Prior Art Search Report", type: "file", description: "Upload prior art search report if available (PDF)", required: false }
        ]
      }
    ]
  }
};

const ApplicationForm = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentSection, setCurrentSection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get the form configuration based on the application type
  const formConfig = type && (type as keyof typeof applicationForms) in applicationForms 
    ? applicationForms[type as keyof typeof applicationForms]
    : null;
    
  if (!formConfig) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-lg text-muted-foreground">Invalid application type. Please go back and select a valid type.</p>
      </div>
    );
  }
  
  // Create a form schema based on the current section's fields
  const currentSectionFields = formConfig.sections[currentSection].fields;
  
  // Create a dynamic schema object
  const schemaObj: Record<string, z.ZodType<any>> = {};
  
  currentSectionFields.forEach(field => {
    if (field.required) {
      if (field.type === 'text' || field.type === 'textarea') {
        schemaObj[field.name] = z.string().min(1, { message: `${field.label} is required` });
      } else if (field.type === 'number') {
        schemaObj[field.name] = z.coerce.number().min(1, { message: `${field.label} is required` });
      } else if (field.type === 'file') {
        // For file fields, we'll handle validation separately
        schemaObj[field.name] = z.any().optional();
      }
    } else {
      if (field.type === 'text' || field.type === 'textarea') {
        schemaObj[field.name] = z.string().optional();
      } else if (field.type === 'number') {
        schemaObj[field.name] = z.coerce.number().optional();
      } else if (field.type === 'file') {
        schemaObj[field.name] = z.any().optional();
      }
    }
  });
  
  const formSchema = z.object(schemaObj);
  
  // Create form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  
  // File upload state
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File | null>>({});
  
  // Handle file change
  const handleFileChange = (fieldName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFiles({
        ...uploadedFiles,
        [fieldName]: e.target.files[0]
      });
    }
  };
  
  // Navigate to next section or submit form
  const onNext = async (values: z.infer<typeof formSchema>) => {
    // For the current section, check if all required files are uploaded
    const fileFields = currentSectionFields.filter(field => field.type === 'file' && field.required);
    const allFilesUploaded = fileFields.every(field => uploadedFiles[field.name]);
    
    if (fileFields.length > 0 && !allFilesUploaded) {
      toast({
        title: "Missing files",
        description: "Please upload all required documents",
        variant: "destructive"
      });
      return;
    }
    
    // If this is the last section, submit the form
    if (currentSection === formConfig.sections.length - 1) {
      // Submit form
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        toast({
          title: "Application Submitted",
          description: "Your application has been submitted successfully!"
        });
        navigate("/dashboard/applications");
      }, 1500);
    } else {
      // Move to next section
      setCurrentSection(currentSection + 1);
    }
  };
  
  // Navigate to previous section
  const onPrevious = () => {
    setCurrentSection(Math.max(0, currentSection - 1));
  };
  
  // Navigate to team members page
  const onAddTeamMembers = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Team member management will be available in the next update."
    });
    // navigate('/dashboard/team');
  };
  
  const currentSectionData = formConfig.sections[currentSection];
  
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <Button
            variant="ghost"
            onClick={() => navigate("/dashboard/applications/new")}
            className="mb-2 pl-0 hover:bg-transparent hover:text-guiitar-primary"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Application Types
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">{formConfig.title}</h1>
          <p className="text-muted-foreground">{formConfig.description}</p>
        </div>
        <Button 
          onClick={onAddTeamMembers} 
          variant="outline"
          className="flex items-center gap-2"
        >
          <Users className="h-4 w-4" />
          <span>Add Team Members</span>
        </Button>
      </div>

      <div className="flex mb-6">
        {formConfig.sections.map((section, index) => (
          <div key={section.title} className="flex items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                index <= currentSection
                  ? "bg-guiitar-primary text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {index + 1}
            </div>
            <div
              className={`text-sm ${
                index <= currentSection ? "text-guiitar-primary font-medium" : "text-gray-500"
              } mx-2`}
            >
              {section.title}
            </div>
            {index < formConfig.sections.length - 1 && (
              <div
                className={`flex-grow h-0.5 ${
                  index < currentSection ? "bg-guiitar-primary" : "bg-gray-200"
                } mx-1`}
                style={{ width: "20px" }}
              ></div>
            )}
          </div>
        ))}
      </div>

      <Card className="border-t-4 border-t-guiitar-primary">
        <CardHeader>
          <CardTitle>{currentSectionData.title}</CardTitle>
          <CardDescription>Please fill all required fields to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="space-y-6"
              onSubmit={form.handleSubmit(onNext)}
            >
              {currentSectionData.fields.map((field) => (
                <div key={field.name}>
                  {field.type === "file" ? (
                    <div className="mb-6">
                      <FormLabel>
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </FormLabel>
                      <div className="mt-1">
                        <label
                          htmlFor={field.name}
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-3 text-gray-400" />
                            <p className="mb-1 text-sm text-gray-500">
                              {uploadedFiles[field.name] 
                                ? uploadedFiles[field.name]?.name 
                                : "Click to upload or drag and drop"}
                            </p>
                            <p className="text-xs text-gray-500">{field.description}</p>
                          </div>
                          <input
                            id={field.name}
                            type="file"
                            className="hidden"
                            onChange={(e) => handleFileChange(field.name, e)}
                          />
                        </label>
                      </div>
                    </div>
                  ) : (
                    <FormField
                      control={form.control}
                      name={field.name}
                      render={({ field: formField }) => (
                        <FormItem>
                          <FormLabel>
                            {field.label} {field.required && <span className="text-red-500">*</span>}
                          </FormLabel>
                          <FormControl>
                            {field.type === "textarea" ? (
                              <Textarea
                                {...formField}
                                placeholder={`Enter ${field.label.toLowerCase()}`}
                                className="resize-none"
                              />
                            ) : (
                              <Input
                                {...formField}
                                type={field.type}
                                placeholder={`Enter ${field.label.toLowerCase()}`}
                              />
                            )}
                          </FormControl>
                          <FormDescription className="text-xs">{field.description}</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}
                </div>
              ))}

              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onPrevious}
                  disabled={currentSection === 0}
                >
                  Previous
                </Button>
                <Button 
                  type="submit"
                  className="bg-guiitar-primary hover:bg-guiitar-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? "Processing..." 
                    : currentSection === formConfig.sections.length - 1 
                      ? "Submit Application" 
                      : "Next Section"
                  }
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationForm;
