import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import JobCard from "@/components/JobCard";
import {
  Search,
  MapPin,
  Briefcase,
  Code,
  Palette,
  TrendingUp,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-recruitment.jpg";
import Havells from "@/assets/Havells.png"
import Panasonic from "@/assets/Panasonic.png"
import ust from "@/assets/ust.png"
import wipro from "@/assets/wipro.png"
import hul from "@/assets/hul.png"


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const featuredJobs = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      company: "TechCorp Inc",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      description:
        "We're looking for an experienced Frontend Developer to join our growing team. You'll work on cutting-edge web applications using React and TypeScript.",
      posted: "2 days ago",
    },
    {
      id: "2",
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      description:
        "Join our creative team to design beautiful and intuitive user experiences. Experience with Figma and user research required.",
      posted: "3 days ago",
    },
    {
      id: "3",
      title: "Marketing Manager",
      company: "GrowthLabs",
      location: "New York, NY",
      type: "Full-time",
      salary: "$100k - $140k",
      description:
        "Lead our marketing initiatives and drive growth. Experience in digital marketing, SEO, and content strategy essential.",
      posted: "5 days ago",
    },
  ];

  const categories = [
    { icon: Code, name: " IT & Technology" },
    { icon: Palette, name: "BFSI & FinTech" },
    { icon: TrendingUp, name: "Consulting & Strategy" },
    { icon: Users, name: "Manufacturing & Engineering" },
    { icon: Building2, name: " FMCG & Consumer" },
    { icon: Briefcase, name: "Retail & Supply Chain" }, 
    //{ icon: Briefcase, name: "Retail & Supply Chain", count: "765 jobs" }, 
  ];

  const stats = [
    { number: "100+", label: "Active Jobs" },
    { number: "50+", label: "Companies" },
    { number: "1000+", label: "Job Seekers" },
    { number: "85%", label: "Success Rate" },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Create Your Profile",
      description: "Sign up and build your professional profile in minutes",
    },
    {
      step: "2",
      title: "Search Jobs",
      description: "Browse thousands of opportunities matching your skills",
    },
    {
      step: "3",
      title: "Apply Easily",
      description: "Submit applications with just a few clicks",
    },
    {
      step: "4",
      title: "Get Hired",
      description: "Connect with employers and land your dream job",
    },
  ];

  const handleSearch = () => {
    // Navigate to jobs page with search params
    window.location.href = `/jobs?search=${searchTerm}&location=${location}`;
  };

 const clientLogos = [
  Havells,
  Panasonic,
  ust,
  wipro,
  hul
];



  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/40" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Find Your Dream Job Today
            </h1>
            <p className="text-xl text-white/90">
              Connect with leading companies and discover opportunities that match your skills
              and aspirations
            </p>

            {/* Search Bar */}
            <Card className="bg-background/95 backdrop-blur shadow-xl">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1 flex items-center gap-2 px-4 py-2 border border-border rounded-md bg-background focus-within:ring-2 focus-within:ring-ring">
                    <Search className="h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Job title or keyword"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <div className="flex-1 flex items-center gap-2 px-4 py-2 border border-border rounded-md bg-background focus-within:ring-2 focus-within:ring-ring">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <Button size="lg" onClick={handleSearch} variant="hero">
                    Search Jobs
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Hiretek partners with companies across all major industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="transition-smooth hover:shadow-lg hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                   {/* <p className="text-sm text-muted-foreground">{category.count}</p> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Jobs</h2>
              <p className="text-lg text-muted-foreground">
                Hand-picked opportunities from top companies
              </p>
            </div>
            <Link to="/jobs">
              <Button variant="outline">
                View All Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Getting started is easy - follow these simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="h-16 w-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

     <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
      <p className="text-lg text-muted-foreground">
        Trusted by leading companies worldwide
      </p>
    </div>

    {/* Carousel Wrapper */}
    <div className="overflow-hidden relative">
      <div
        className="flex whitespace-nowrap animate-slide"
        style={{ animation: "slide 15s linear infinite" }}
      >
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="client logo"
            className="h-16 w-auto inline-block mx-10 object-contain transition"
            style={{
              filter: "none",
              opacity: 1,
            }}
          />
        ))}

        {/* Duplicate for continuous loop */}
        {clientLogos.map((logo, index) => (
          <img
            key={`dup-${index}`}
            src={logo}
            alt="client logo"
            className="h-16 w-auto inline-block mx-10 object-contain transition"
            style={{
              filter: "none",
              opacity: 1,
            }}
          />
        ))}
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Take the Next Step in Your Career?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of professionals who have found their dream jobs through TalentHub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                Create Your Profile
              </Button>
              <Button size="lg" variant="secondary">
                For Employers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
