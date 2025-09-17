import { Search, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background shadow-soft border-b">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top bar with contact info */}
        <div className="flex items-center justify-between py-3 border-b border-border">
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+27 11 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@momentumpropertygroup.co.za</span>
            </div>
          </div>
          <Button variant="outline" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 border-accent">
            Get Free Valuation
          </Button>
        </div>
        
        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-accent p-3 rounded-lg">
                <div className="w-8 h-8 bg-primary rounded transform rotate-45"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">MOMENTUM</h1>
                <p className="text-sm text-muted-foreground font-medium">PROPERTY GROUP</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/search-properties" className="text-foreground hover:text-accent transition-smooth font-medium">
              Search Properties
            </a>
            <a href="/" className="text-accent font-medium">
              Our Agents
            </a>
            <a href="/tools" className="text-foreground hover:text-accent transition-smooth font-medium">
              Tools
            </a>
            <a href="/news" className="text-foreground hover:text-accent transition-smooth font-medium">
              News
            </a>
            <a href="/about-us" className="text-foreground hover:text-accent transition-smooth font-medium">
              About Us
            </a>
            <a href="/contact" className="text-foreground hover:text-accent transition-smooth font-medium">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;