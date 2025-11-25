import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import heroBg from '../assets/heroBg.png';
import Havells from "@/assets/Havells.png"
import Panasonic from "@/assets/Panasonic.png"
import ust from "@/assets/ust.png"
import wipro from "@/assets/wipro.png"
import hul from "@/assets/hul.png"
const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To connect talented professionals with opportunities that help them grow and thrive in their careers, while helping companies build exceptional teams.",
    },
    {
      icon: Users,
      title: "People First",
      description:
        "We believe in putting people at the center of everything we do. Your success is our success, and we're committed to making your job search journey as smooth as possible.",
    },
    {
      icon: Award,
      title: "Quality Over Quantity",
      description:
        "We carefully curate job listings from verified companies to ensure you're applying to legitimate, high-quality opportunities that match your aspirations.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Innovation",
      description:
        "We constantly improve our platform based on user feedback, incorporating the latest technology to provide the best recruitment experience.",
    },
  ];

  const stats = [
    { number: "2M+", label: "Active Users" },
    { number: "10K+", label: "Partner Companies" },
    { number: "50K+", label: "Jobs Posted Monthly" },
    { number: "85%", label: "Success Rate" },
  ];

  // ✅ Updated team array with image field  
  const team = [
    {
      name: "Gurpriit Singh Anand",
      role: "CEO & Founder",
      description: "20+ years in Sales and Recruitment",
      image: "/src/assets/gurpriit1.jpg", // <-- Replace with your actual image
    },
    {
      name: "Bakshish Kaur",
      role: "HR Admin",
      description: "HR Head admin",
      image: "/src/assets/bakshish1.jpg", // <-- Replace
    },
    {
      name: "Nitin",
      role: "Sr Consultant",
      description: "Recruitment specialist",
      image: "/team/nitin.jpg", // <-- Replace
    },
    {
      name: "Rakesh",
      role: "Consultant",
      description: "Recruitment consultant",
      image: "/team/rakesh.jpg", // <-- Replace
    },
  ];
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
      <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Revolutionizing How People Find Jobs
            </h1>
            <p className="text-xl text-white/90">
              We're on a mission to make job searching simpler, faster, and more effective for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
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

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Established in 2015, Hiretek was built with a simple but powerful vision: to transform recruitment into a process based on understanding, trust, and long-term impact. For years, organizations struggled with slow hiring, mismatched talent, transactional agencies, and a limited understanding of industry needs. Hiretek was created to bridge this gap—not merely to find employees, but to help companies build winning teams
              </p>
              <p>
                What began as a small idea with a big purpose has grown into a trusted PAN-India recruitment partner serving businesses of every size—from start-ups to large enterprises—across diverse industries and job categories. Over the years, we have stayed committed to delivering quality over quantity, ethical hiring, speed without compromise, and true partnership instead of one-time transactions
              </p>
             
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="transition-smooth hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center transition-smooth hover:shadow-lg">
                <CardContent className="p-6">

                   👇 Team Member Image 
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-24 w-24 mx-auto rounded-full object-cover mb-4"
                  />

                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
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
              Join Our Growing Community
            </h2>
            <p className="text-xl text-white/90">
              Whether you're looking for your next opportunity or searching for top talent,
              we're here to help.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
