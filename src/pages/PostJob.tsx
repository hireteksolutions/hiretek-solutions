import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate job posting
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "Your job has been posted successfully.",
      });
      navigate('/jobs');
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Post a New Job</CardTitle>
            <CardDescription>Fill in the details to create a job listing</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" placeholder="e.g. Senior React Developer" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Your company name" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g. San Francisco, CA" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Job Type</Label>
                  <select id="type" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" required>
                    <option value="">Select type...</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="remote">Remote</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="salary-min">Min Salary</Label>
                  <Input id="salary-min" type="number" placeholder="50000" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary-max">Max Salary</Label>
                  <Input id="salary-max" type="number" placeholder="100000" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the role, responsibilities, and what you're looking for..." 
                  rows={6}
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea 
                  id="requirements" 
                  placeholder="List the required skills and qualifications..." 
                  rows={4}
                  required 
                />
              </div>

              <div className="flex gap-4">
                <Button type="button" variant="outline" onClick={() => navigate(-1)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Posting..." : "Post Job"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostJob;
