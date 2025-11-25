import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Briefcase, Users, FileText, Eye, Trash2 } from "lucide-react";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  status: string;
  created_at: string;
}

interface Application {
  id: string;
  applicant_name: string;
  email: string;
  phone: string;
  status: string;
  created_at: string;
  job_id: string;
  jobs: {
    title: string;
  };
}

const EmployerDashboard = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<Application[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  useEffect(() => {
    if (statusFilter === "all") {
      setFilteredApplications(applications);
    } else {
      setFilteredApplications(applications.filter(app => app.status === statusFilter));
    }
  }, [statusFilter, applications]);

  const fetchDashboardData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to view this page",
          variant: "destructive",
        });
        navigate("/auth");
        return;
      }

      // Fetch jobs
      const { data: jobsData, error: jobsError } = await supabase
        .from("jobs")
        .select("*")
        .eq("employer_id", user.id)
        .order("created_at", { ascending: false });

      if (jobsError) throw jobsError;
      setJobs(jobsData || []);

      // Fetch applications
      const { data: appsData, error: appsError } = await supabase
        .from("applications")
        .select(`
          *,
          jobs!inner (
            title,
            employer_id
          )
        `)
        .eq("jobs.employer_id", user.id)
        .order("created_at", { ascending: false });

      if (appsError) throw appsError;
      setApplications(appsData || []);
      setFilteredApplications(appsData || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateApplicationStatus = async (applicationId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from("applications")
        .update({ status: newStatus })
        .eq("id", applicationId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Application status updated",
      });

      fetchDashboardData();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteJob = async (jobId: string) => {
    if (!confirm("Are you sure you want to delete this job posting?")) return;

    try {
      const { error } = await supabase
        .from("jobs")
        .delete()
        .eq("id", jobId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Job deleted successfully",
      });

      fetchDashboardData();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const toggleJobStatus = async (jobId: string, currentStatus: string) => {
    const newStatus = currentStatus === "active" ? "closed" : "active";
    
    try {
      const { error } = await supabase
        .from("jobs")
        .update({ status: newStatus })
        .eq("id", jobId);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Job ${newStatus === "active" ? "activated" : "closed"}`,
      });

      fetchDashboardData();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  const stats = [
    {
      title: "Active Jobs",
      value: jobs.filter(j => j.status === "active").length,
      icon: Briefcase,
    },
    {
      title: "Total Applications",
      value: applications.length,
      icon: Users,
    },
    {
      title: "Pending Review",
      value: applications.filter(a => a.status === "pending").length,
      icon: FileText,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Employer Dashboard</h1>
        <p className="text-muted-foreground">Manage your job postings and applications</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="applications" className="space-y-6">
        <TabsList>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="jobs">My Job Postings</TabsTrigger>
        </TabsList>

        <TabsContent value="applications" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Applications</CardTitle>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Applications</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="reviewed">Reviewed</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              {filteredApplications.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No applications found
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Applicant</TableHead>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Applied</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredApplications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell className="font-medium">{app.applicant_name}</TableCell>
                          <TableCell>{app.jobs.title}</TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{app.email}</div>
                              {app.phone && <div className="text-muted-foreground">{app.phone}</div>}
                            </div>
                          </TableCell>
                          <TableCell>
                            {new Date(app.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                app.status === "accepted"
                                  ? "default"
                                  : app.status === "rejected"
                                  ? "destructive"
                                  : "secondary"
                              }
                            >
                              {app.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Select
                              value={app.status}
                              onValueChange={(value) => updateApplicationStatus(app.id, value)}
                            >
                              <SelectTrigger className="w-[130px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="reviewed">Reviewed</SelectItem>
                                <SelectItem value="accepted">Accepted</SelectItem>
                                <SelectItem value="rejected">Rejected</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>My Job Postings</CardTitle>
                <Button onClick={() => navigate("/post-job")}>
                  Post New Job
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {jobs.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No jobs posted yet
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Job Title</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Posted</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {jobs.map((job) => (
                        <TableRow key={job.id}>
                          <TableCell className="font-medium">{job.title}</TableCell>
                          <TableCell>{job.location}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{job.type}</Badge>
                          </TableCell>
                          <TableCell>
                            {new Date(job.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <Badge variant={job.status === "active" ? "default" : "secondary"}>
                              {job.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => navigate(`/jobs/${job.id}`)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => toggleJobStatus(job.id, job.status)}
                              >
                                {job.status === "active" ? "Close" : "Activate"}
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => deleteJob(job.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EmployerDashboard;
