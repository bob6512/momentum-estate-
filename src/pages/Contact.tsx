import Header from "@/components/Header";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const offices = [
    {
      name: "Head Office",
      address: "123 Rivonia Road, Sandton, 2196",
      phone: "+27 11 123 4567",
      email: "info@momentumpropertygroup.co.za",
      hours: "Mon-Fri: 8:00-17:00, Sat: 9:00-13:00"
    },
    {
      name: "Rosebank Branch",
      address: "456 Jan Smuts Avenue, Rosebank, 2196",
      phone: "+27 11 234 5678",
      email: "rosebank@momentumpropertygroup.co.za",
      hours: "Mon-Fri: 8:00-17:00, Sat: 9:00-13:00"
    },
    {
      name: "Fourways Branch",
      address: "789 William Nicol Drive, Fourways, 2055",
      phone: "+27 11 345 6789",
      email: "fourways@momentumpropertygroup.co.za",
      hours: "Mon-Fri: 8:00-17:00, Sat: 9:00-13:00"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Get in touch with our expert team. We're here to help with all your property needs.
          </p>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-medium">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name *</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name *</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address *</label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Inquiry Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buying">Buying Property</SelectItem>
                      <SelectItem value="selling">Selling Property</SelectItem>
                      <SelectItem value="renting">Renting Property</SelectItem>
                      <SelectItem value="valuation">Property Valuation</SelectItem>
                      <SelectItem value="investment">Investment Opportunities</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <Textarea 
                    placeholder="Tell us about your property needs or questions..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-accent hover:bg-accent-dark text-accent-foreground">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to make your property dreams a reality? Our experienced team is standing by 
                  to provide expert guidance and personalized service. Contact us today!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-accent p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Call us</div>
                      <div className="text-muted-foreground">+27 11 123 4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-accent p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email us</div>
                      <div className="text-muted-foreground">info@momentumpropertygroup.co.za</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-accent p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Business Hours</div>
                      <div className="text-muted-foreground">Mon-Fri: 8:00-17:00, Sat: 9:00-13:00</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Office Locations */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Offices</h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <Card key={index} className="p-4 shadow-soft">
                      <h4 className="font-semibold text-foreground mb-2">{office.name}</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 flex-shrink-0" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 flex-shrink-0" />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 flex-shrink-0" />
                          <span>{office.hours}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;