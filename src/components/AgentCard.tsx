import { Phone, Linkedin, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface AgentCardProps {
  id: string;
  name: string;
  title: string;
  office: string;
  phone: string;
  whatsapp?: string;
  linkedin?: string;
  image: string;
  showPhone?: boolean;
  onTogglePhone?: () => void;
}

const AgentCard = ({
  id,
  name,
  title,
  office,
  phone,
  whatsapp,
  linkedin,
  image,
  showPhone = false,
  onTogglePhone
}: AgentCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 border-border">
      <div className="relative">
        {/* Agent Photo */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Contact Icons Overlay */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          {linkedin && (
            <Button
              size="sm"
              className="w-10 h-10 p-0 rounded-full bg-accent hover:bg-accent-dark text-accent-foreground shadow-medium transition-smooth"
              onClick={() => window.open(linkedin, '_blank')}
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          )}
          {whatsapp && (
            <Button
              size="sm"
              className="w-10 h-10 p-0 rounded-full bg-success hover:bg-success/90 text-success-foreground shadow-medium transition-smooth"
              onClick={() => window.open(`https://wa.me/${whatsapp}`, '_blank')}
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      
      {/* Agent Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-foreground mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm font-medium">{title}</p>
          <p className="text-muted-foreground text-xs">{office}</p>
        </div>
        
        <div className="space-y-3">
          {/* Phone Section */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              className="text-accent border-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
              onClick={() => onTogglePhone?.()}
            >
              <Phone className="h-4 w-4 mr-2" />
              {showPhone ? phone : 'Show phone number'}
            </Button>
          </div>
          
          {/* View Bio Button */}
          <Button
            variant="secondary"
            size="sm"
            className="w-full hover:bg-accent hover:text-accent-foreground transition-smooth"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Bio
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AgentCard;