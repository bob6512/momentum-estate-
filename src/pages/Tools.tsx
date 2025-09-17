import Header from "@/components/Header";
import { Calculator, TrendingUp, FileText, MapPin, DollarSign, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Tools = () => {
  const tools = [
    {
      icon: Calculator,
      title: "Bond Calculator",
      description: "Calculate your monthly bond repayments and affordability with our easy-to-use calculator.",
      features: ["Monthly repayments", "Affordability analysis", "Interest rate scenarios"],
      comingSoon: false
    },
    {
      icon: TrendingUp,
      title: "Property Valuation",
      description: "Get an estimated market value for your property based on recent sales and market trends.",
      features: ["Instant valuations", "Market comparisons", "Price trend analysis"],
      comingSoon: false
    },
    {
      icon: FileText,
      title: "Transfer Calculator",
      description: "Calculate transfer costs, bond registration fees, and other property transaction costs.",
      features: ["Transfer duties", "Legal fees", "Registration costs"],
      comingSoon: false
    },
    {
      icon: MapPin,
      title: "Area Guide",
      description: "Explore different areas with detailed information on schools, amenities, and lifestyle.",
      features: ["School ratings", "Crime statistics", "Amenities map"],
      comingSoon: true
    },
    {
      icon: DollarSign,
      title: "Investment Calculator",
      description: "Analyze potential property investments with rental yield and ROI calculations.",
      features: ["Rental yield analysis", "ROI calculations", "Cash flow projections"],
      comingSoon: true
    },
    {
      icon: Home,
      title: "Market Reports",
      description: "Access comprehensive market reports and property trends in your area of interest.",
      features: ["Monthly reports", "Price trends", "Market insights"],
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Property Tools & Calculators
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Access our suite of powerful tools to help you make informed property decisions
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-smooth relative overflow-hidden">
                {tool.comingSoon && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                    Coming Soon
                  </div>
                )}
                
                <div className="mb-4">
                  <div className="bg-accent/10 p-3 rounded-lg w-fit mb-4">
                    <tool.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{tool.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tool.description}</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className={`w-full ${tool.comingSoon 
                      ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                      : 'bg-accent hover:bg-accent-dark text-accent-foreground'}`}
                    disabled={tool.comingSoon}
                  >
                    {tool.comingSoon ? 'Coming Soon' : 'Use Tool'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tool - Bond Calculator */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Bond Calculator</h2>
            <p className="text-muted-foreground">
              Quick and easy bond affordability calculator to help you plan your property purchase
            </p>
          </div>
          
          <Card className="p-8 shadow-medium">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Property Price</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">R</span>
                  <input 
                    type="text" 
                    placeholder="2,500,000"
                    className="w-full pl-8 pr-3 py-2 border border-border rounded-md bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-smooth"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Deposit Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">R</span>
                  <input 
                    type="text" 
                    placeholder="250,000"
                    className="w-full pl-8 pr-3 py-2 border border-border rounded-md bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-smooth"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Interest Rate (%)</label>
                <input 
                  type="text" 
                  placeholder="11.75"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-smooth"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Loan Term (years)</label>
                <input 
                  type="text" 
                  placeholder="20"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:ring-2 focus:ring-accent focus:border-accent transition-smooth"
                />
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-accent hover:bg-accent-dark text-accent-foreground px-8">
                Calculate Bond Repayment
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Tools;