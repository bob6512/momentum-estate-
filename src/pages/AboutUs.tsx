import Header from "@/components/Header";
import { Award, Users, Home, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  const stats = [
    { icon: Home, value: "2,500+", label: "Properties Sold" },
    { icon: Users, value: "50+", label: "Expert Agents" },
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      title: "Integrity",
      description: "We believe in honest, transparent dealings with all our clients and partners."
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from service to results."
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and methods to better serve our clients."
    },
    {
      title: "Community",
      description: "We're committed to building stronger communities through quality property services."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Momentum Property Group
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            For over 25 years, we've been South Africa's trusted partner in real estate, 
            helping thousands of families find their perfect homes and investors secure their futures.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-8 shadow-soft hover:shadow-medium transition-smooth">
                <stat.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1998, Momentum Property Group started with a simple vision: to revolutionize 
                  the real estate experience in South Africa. What began as a small team of passionate 
                  property professionals has grown into one of the country's most respected real estate agencies.
                </p>
                <p>
                  Our success is built on the foundation of trust, expertise, and unwavering commitment to 
                  our clients. We've witnessed the transformation of South Africa's property landscape and 
                  have been proud partners in our clients' most important life decisions.
                </p>
                <p>
                  Today, with offices across Johannesburg and a team of over 50 expert agents, we continue 
                  to set new standards in property services, combining traditional values with cutting-edge 
                  technology to deliver exceptional results.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-muted rounded-lg">
              <img 
                src="/api/placeholder/600/450" 
                alt="Momentum Property Group Team"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we serve our clients and community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center shadow-soft hover:shadow-medium transition-smooth">
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <Card className="p-8 shadow-medium bg-gradient-accent text-accent-foreground">
            <p className="text-lg leading-relaxed">
              "To provide world-class property services that exceed expectations, build lasting relationships, 
              and contribute positively to the communities we serve. We are committed to helping every client 
              achieve their property goals through expertise, innovation, and unwavering dedication to excellence."
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;