import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Hiretek_Logo from '../assets/Hiretek_Logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
      <Link to="/" className="flex items-center gap-2">
    <img 
      src={Hiretek_Logo} 
      alt="Hiretek Solutions Logo" 
      className="h-12 w-auto" 
    />
    {/* Optional text if you want both */}
    {/* <span className="text-xl font-bold text-foreground">Hiretek Solutions</span> */}
  </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/jobs" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Find Jobs
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            About
          </Link>
           <Link to="/services" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Services
          </Link>
          <Link to="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Blog
          </Link>
          <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Contact
          </Link>
        </div>

        {/* <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigate('/auth')}>
            Sign In
          </Button>
          <Button variant="outline" size="sm" onClick={() => navigate('/employer-dashboard')}>
            Dashboard
          </Button>
          <Button variant="default" size="sm" onClick={() => navigate('/post-job')}>
            Post a Job
          </Button>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/jobs"
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Jobs
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
             <Link
              to="/services"
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-smooth"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Button variant="ghost" size="sm" onClick={() => { navigate('/auth'); setMobileMenuOpen(false); }}>
                Sign In
              </Button>
              <Button variant="outline" size="sm" onClick={() => { navigate('/employer-dashboard'); setMobileMenuOpen(false); }}>
                Dashboard
              </Button>
              <Button variant="default" size="sm" onClick={() => { navigate('/post-job'); setMobileMenuOpen(false); }}>
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
