import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Tips for Writing Job Descriptions That Attract Top Talent",
      excerpt: "Learn how to craft compelling job descriptions that stand out and attract the best candidates in your industry.",
      category: "Recruitment Tips",
      date: "Nov 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop"
    },
    {
      title: "The Future of Remote Work: Trends for 2026",
      excerpt: "Explore the latest trends in remote work and how companies are adapting to the new normal of distributed teams.",
      category: "Industry Trends",
      date: "Nov 12, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop"
    },
    {
      title: "Building a Strong Employer Brand in Competitive Markets",
      excerpt: "Discover strategies to build and maintain a strong employer brand that attracts top talent even in competitive markets.",
      category: "Employer Branding",
      date: "Nov 8, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop"
    },
    {
      title: "How AI is Transforming the Recruitment Process",
      excerpt: "Understand how artificial intelligence is revolutionizing recruitment and what it means for employers and job seekers.",
      category: "Technology",
      date: "Nov 5, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
    },
    {
      title: "Interview Best Practices for Hiring Managers",
      excerpt: "Master the art of conducting effective interviews that help you identify the right candidates for your team.",
      category: "Recruitment Tips",
      date: "Nov 1, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=400&fit=crop"
    },
    {
      title: "Diversity and Inclusion in Modern Workplaces",
      excerpt: "Learn about the importance of diversity and inclusion initiatives and how to implement them effectively in your organization.",
      category: "Culture",
      date: "Oct 28, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
  <section
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Hiretek Blog
            </h1>
            <p className="text-xl text-white/90">
             Insights, tips, and trends from the world of recruitment and talent acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full gap-2 group-hover:bg-primary/10">
                    Read More <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-muted-foreground">
                Get the latest insights and tips delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <Button className="shrink-0">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Blog;
