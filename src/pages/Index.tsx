import { useState } from "react";
import Header from "@/components/Header";
import SearchFilter from "@/components/SearchFilter";
import AgentCard from "@/components/AgentCard";
import agent1 from "@/assets/agent1.jpg";
import agent2 from "@/assets/agent2.jpg";
import agent3 from "@/assets/agent3.jpg";
import agent4 from "@/assets/agent4.jpg";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("all");
  const [showPhoneStates, setShowPhoneStates] = useState<Record<string, boolean>>({});

  const agents = [
    {
      id: "1",
      name: "Sarah Mitchell",
      title: "Senior Property Practitioner", 
      office: "Head Office",
      phone: "+27 83 456 7890",
      whatsapp: "27834567890",
      linkedin: "https://linkedin.com/in/sarah-mitchell",
      image: agent1
    },
    {
      id: "2", 
      name: "Michael Thompson",
      title: "Property Practitioner",
      office: "Sandton Branch",
      phone: "+27 82 123 4567",
      whatsapp: "27821234567",
      linkedin: "https://linkedin.com/in/michael-thompson",
      image: agent2
    },
    {
      id: "3",
      name: "Priya Patel",
      title: "Candidate Property Practitioner", 
      office: "Rosebank Branch",
      phone: "+27 84 987 6543",
      whatsapp: "27849876543",
      linkedin: "https://linkedin.com/in/priya-patel",
      image: agent3
    },
    {
      id: "4",
      name: "James Wilson",
      title: "Commercial Property Specialist",
      office: "Head Office", 
      phone: "+27 83 555 1234",
      whatsapp: "27835551234",
      linkedin: "https://linkedin.com/in/james-wilson",
      image: agent4
    }
  ];

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = selectedBranch === "all" || 
                         agent.office.toLowerCase().includes(selectedBranch.replace("-", " "));
    return matchesSearch && matchesBranch;
  });

  const togglePhone = (agentId: string) => {
    setShowPhoneStates(prev => ({
      ...prev,
      [agentId]: !prev[agentId]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            World-class Property Practitioners
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Meet our team of experienced professionals dedicated to helping you find your perfect property
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedBranch={selectedBranch}
            onBranchChange={setSelectedBranch}
          />
        </div>
      </section>

      {/* Agents Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {filteredAgents.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-foreground mb-2">No agents found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredAgents.map((agent) => (
                <AgentCard
                  key={agent.id}
                  {...agent}
                  showPhone={showPhoneStates[agent.id]}
                  onTogglePhone={() => togglePhone(agent.id)}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
