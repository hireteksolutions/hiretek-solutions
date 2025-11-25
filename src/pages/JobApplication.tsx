import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText } from "lucide-react";

const JobApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Your application has been sent successfully. We'll be in touch soon.",
    });
    setTimeout(() => navigate("/jobs"), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Apply for Position</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below to submit your application
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Resume * (PDF or DOCX)</Label>
                  <div 
                    onClick={handleUploadClick}
                    className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"
                  >
                    {selectedFile ? (
                      <>
                        <FileText className="h-8 w-8 mx-auto mb-2 text-primary" />
                        <p className="text-sm font-medium text-foreground">
                          {selectedFile.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Click to change file
                        </p>
                      </>
                    ) : (
                      <>
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PDF or DOCX (max 5MB)
                        </p>
                      </>
                    )}
                    <Input
                      ref={fileInputRef}
                      id="resume"
                      type="file"
                      accept=".pdf,.docx"
                      className="hidden"
                      onChange={handleFileChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    placeholder="Tell us why you're a great fit for this position..."
                    rows={6}
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" size="lg" className="flex-1">
                    Submit Application
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;
