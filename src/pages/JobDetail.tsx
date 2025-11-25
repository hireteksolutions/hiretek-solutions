import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  Building2,
  Users,
  Heart,
  Share2,
  CheckCircle2,
} from "lucide-react";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock job data - in real app, fetch based on ID
  const job = {
    id: id || "1",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    posted: "2 days ago",
    description: `We are seeking an experienced Senior Frontend Developer to join our innovative team. In this role, you will be responsible for building and maintaining cutting-edge web applications that serve millions of users worldwide.

You will work closely with our design and backend teams to create seamless, responsive, and performant user experiences. This is an excellent opportunity for someone who is passionate about frontend development and wants to make a significant impact.`,
    responsibilities: [
      "Develop and maintain high-quality frontend code using React, TypeScript, and modern web technologies",
      "Collaborate with designers to implement pixel-perfect, responsive UI components",
      "Optimize application performance and ensure excellent user experience across all devices",
      "Write clean, maintainable, and well-documented code following best practices",
      "Participate in code reviews and mentor junior developers",
      "Stay up-to-date with the latest frontend technologies and industry trends",
    ],
    requirements: [
      "5+ years of professional experience in frontend development",
      "Expert knowledge of React, TypeScript, and modern JavaScript",
      "Strong understanding of HTML5, CSS3, and responsive design principles",
      "Experience with state management libraries (Redux, Zustand, etc.)",
      "Proficiency with Git and modern development workflows",
      "Excellent problem-solving and communication skills",
      "Bachelor's degree in Computer Science or related field, or equivalent experience",
    ],
    niceToHave: [
      "Experience with Next.js or other React frameworks",
      "Knowledge of GraphQL and Apollo Client",
      "Familiarity with testing frameworks (Jest, React Testing Library)",
      "Understanding of CI/CD pipelines and DevOps practices",
      "Contributions to open-source projects",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements and remote work options",
      "Generous PTO and paid holidays",
      "Professional development budget",
      "Modern office with free snacks and beverages",
      "Team building events and company outings",
    ],
    companyInfo: {
      name: "TechCorp Inc",
      size: "500-1000 employees",
      industry: "Technology",
      founded: "2015",
      description:
        "TechCorp is a leading technology company specializing in innovative software solutions. We're dedicated to creating products that make a positive impact on people's lives and pushing the boundaries of what's possible with technology.",
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-8 space-y-6">
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Building2 className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                        <p className="text-lg text-muted-foreground">{job.company}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Heart className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" />
                      {job.type}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      {job.salary}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Posted {job.posted}
                    </Badge>
                  </div>
                </div>

                <Separator />

                {/* Description */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                  <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                    {job.description}
                  </p>
                </div>

                <Separator />

                {/* Responsibilities */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Key Responsibilities</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Requirements */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Nice to Have */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Nice to Have</h2>
                  <ul className="space-y-3">
                    {job.niceToHave.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                {/* Benefits */}
                <div>
                  <h2 className="text-xl font-semibold mb-4">Benefits & Perks</h2>
                  <ul className="space-y-3">
                    {job.benefits.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold mb-4">About {job.companyInfo.name}</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{job.companyInfo.description}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Company Size</p>
                      <p className="font-semibold">{job.companyInfo.size}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Industry</p>
                      <p className="font-semibold">{job.companyInfo.industry}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Founded</p>
                      <p className="font-semibold">{job.companyInfo.founded}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full" 
                    variant="hero"
                    onClick={() => navigate(`/apply/${id}`)}
                  >
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    Save Job
                  </Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold">Job Overview</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{job.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Job Type</p>
                        <p className="font-medium">{job.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Salary</p>
                        <p className="font-medium">{job.salary}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Posted</p>
                        <p className="font-medium">{job.posted}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong className="text-foreground">Note:</strong> Please review the job description
                    carefully before applying. Make sure your skills and experience match the requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
