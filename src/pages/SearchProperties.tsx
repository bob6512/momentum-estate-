import Header from "@/components/Header";
import { Search, MapPin, Bed, Bath, Car, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const SearchProperties = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Family Home in Sandton",
      price: "R 4,850,000",
      location: "Sandton, Johannesburg",
      bedrooms: 4,
      bathrooms: 3,
      garage: 2,
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Modern Apartment in Rosebank",
      price: "R 2,450,000",
      location: "Rosebank, Johannesburg",
      bedrooms: 2,
      bathrooms: 2,
      garage: 1,
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Executive Townhouse in Fourways",
      price: "R 3,250,000",
      location: "Fourways, Johannesburg",
      bedrooms: 3,
      bathrooms: 2,
      garage: 2,
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Property
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Discover exceptional properties across Johannesburg's most sought-after locations
          </p>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="p-8 shadow-medium">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Enter suburb or area" className="pl-10" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Property Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Price Range</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1m">Under R 1M</SelectItem>
                    <SelectItem value="1m-3m">R 1M - R 3M</SelectItem>
                    <SelectItem value="3m-5m">R 3M - R 5M</SelectItem>
                    <SelectItem value="5m+">Above R 5M</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button className="w-full bg-accent hover:bg-accent-dark text-accent-foreground">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Featured Properties</h2>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth">
                <div className="aspect-[4/3] bg-muted">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{property.title}</h3>
                    <p className="text-2xl font-bold text-accent">{property.price}</p>
                    <p className="text-muted-foreground flex items-center mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.bedrooms}
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.bathrooms}
                    </div>
                    <div className="flex items-center">
                      <Car className="h-4 w-4 mr-1" />
                      {property.garage}
                    </div>
                  </div>
                  
                  <Button variant="secondary" className="w-full hover:bg-accent hover:text-accent-foreground transition-smooth">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchProperties;