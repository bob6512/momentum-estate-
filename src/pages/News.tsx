import Header from "@/components/Header";
import { Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const News = () => {
  const featuredArticle = {
    title: "South African Property Market Shows Resilient Growth in 2024",
    excerpt: "Despite economic challenges, the residential property market demonstrates steady recovery with key areas showing positive growth trends. Our latest market analysis reveals opportunities for both buyers and investors.",
    category: "Market Analysis",
    date: "2024-03-15",
    author: "Michael Thompson",
    image: "/api/placeholder/800/400",
    readTime: "5 min read"
  };

  const articles = [
    {
      title: "First-Time Buyer's Guide: Navigating the Property Market",
      excerpt: "Essential tips and strategies for first-time property buyers in today's market conditions.",
      category: "Buying Guide",
      date: "2024-03-12",
      author: "Sarah Mitchell",
      image: "/api/placeholder/400/250",
      readTime: "3 min read"
    },
    {
      title: "Investment Opportunities in Johannesburg's Northern Suburbs",
      excerpt: "Exploring the best investment opportunities and growth areas in Johannesburg's prime locations.",
      category: "Investment",
      date: "2024-03-10",
      author: "James Wilson",
      image: "/api/placeholder/400/250",
      readTime: "4 min read"
    },
    {
      title: "Understanding Property Transfer Costs in South Africa",
      excerpt: "A comprehensive breakdown of all costs involved in property transfers and how to budget effectively.",
      category: "Finance",
      date: "2024-03-08",
      author: "Priya Patel",
      image: "/api/placeholder/400/250",
      readTime: "6 min read"
    },
    {
      title: "Sustainable Living: Green Building Trends in Modern Homes",
      excerpt: "How eco-friendly features are transforming the property market and adding value to homes.",
      category: "Trends",
      date: "2024-03-05",
      author: "Sarah Mitchell",
      image: "/api/placeholder/400/250",
      readTime: "4 min read"
    },
    {
      title: "Commercial Property Investment: Retail vs Office Spaces",
      excerpt: "Comparing investment potential between retail and office properties in the current market.",
      category: "Commercial",
      date: "2024-03-03",
      author: "Michael Thompson",
      image: "/api/placeholder/400/250",
      readTime: "5 min read"
    },
    {
      title: "Property Staging: Maximizing Your Home's Sale Potential",
      excerpt: "Professional tips on how to present your property to attract buyers and achieve better prices.",
      category: "Selling Tips",
      date: "2024-03-01",
      author: "James Wilson",
      image: "/api/placeholder/400/250",
      readTime: "3 min read"
    }
  ];

  const categories = ["All", "Market Analysis", "Buying Guide", "Investment", "Finance", "Trends", "Commercial", "Selling Tips"];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Property News & Insights
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Stay informed with the latest property market trends, expert insights, and industry news
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
            <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-smooth">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[16/10] lg:aspect-auto bg-muted">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary" className="bg-accent text-accent-foreground">
                      {featuredArticle.category}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      Featured
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredArticle.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredArticle.date).toLocaleDateString()}
                      </div>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    
                    <Button className="bg-accent hover:bg-accent-dark text-accent-foreground">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" 
                  ? "bg-accent text-accent-foreground" 
                  : "border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth group">
                <div className="aspect-[16/10] bg-muted overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-accent text-accent">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent-foreground hover:bg-accent p-1">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;