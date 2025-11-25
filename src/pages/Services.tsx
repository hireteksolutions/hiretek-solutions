import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Target, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Job Posting Solutions",
      description: "Post unlimited jobs and reach qualified candidates across multiple channels with our advanced recruitment platform.",
      features: ["Unlimited job postings", "Multi-channel distribution", "Advanced candidate filtering", "Real-time analytics"]
    },
    {
      icon: Users,
      title: "Talent Sourcing",
      description: "Access our extensive database of pre-screened candidates and let our AI match you with the perfect talent.",
      features: ["Pre-vetted candidates", "AI-powered matching", "Direct messaging", "Candidate recommendations"]
    },
    {
      icon: Target,
      title: "Recruitment Marketing",
      description: "Boost your employer brand and attract top talent with our comprehensive recruitment marketing services.",
      features: ["Employer branding", "Social media campaigns", "Targeted advertising", "Content creation"]
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Make data-driven hiring decisions with our advanced analytics and reporting tools.",
      features: ["Hiring metrics", "Performance tracking", "Custom reports", "Market insights"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
        <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our Services
            </h1>
            <p className="text-xl text-white/90">
             Comprehensive recruitment solutions designed to help you find and hire the best talent efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of companies that trust TalentHub to build their dream teams. Start posting jobs today and connect with top talent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gap-2">
                  Post a Job <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
