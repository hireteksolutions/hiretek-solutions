import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hireteksolutions@gmail.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "91+ 8700238779",
      description: "Mon-Fri, 9am-6pm IST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "H-7, Lower Ground Floor Lajpat Nagar III",
      description: "New Delhi, Delhi 110024",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      details: "Available 24/7",
      description: "Get instant support",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
     <section
  className="relative py-20 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://plus.unsplash.com/premium_photo-1678917827802-721b5f5b4bf0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}
>
  {/* Full overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-white">
        Get in Touch
      </h1>
      <p className="text-xl text-white/90">
        Have a question or feedback? We'd love to hear from you.
      </p>
    </div>
  </div>
</section>


      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="transition-smooth hover:shadow-lg">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">{info.title}</h3>
                  <p className="text-sm font-medium text-primary">{info.details}</p>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you shortly
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" variant="hero">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
    <section className="py-20 bg-muted/30">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Office</h2>
      <p className="text-lg text-muted-foreground">
        We're located in the Lajpat Nagar area of New Delhi.
      </p>
    </div>

    <div className="max-w-5xl mx-auto">
      <div className="aspect-video rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.330106428296!2d77.236!3d28.5672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e59b5b37e5%3A0x3d4447adf12075f6!2sLajpat%20Nagar%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>


      {/* FAQ Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find quick answers to common questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How do I post a job?",
                a: "Click on 'Post a Job' in the header, create an account or sign in, and fill out the job posting form.",
              },
              {
                q: "Is the basic service free?",
                a: "Yes! Job seekers can search and apply to jobs for free. Employers have various pricing options.",
              },
              {
                q: "How long do job postings stay active?",
                a: "Job postings remain active for 30 days by default, with options to extend or renew.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
