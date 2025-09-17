import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedBranch: string;
  onBranchChange: (value: string) => void;
}

const SearchFilter = ({ 
  searchTerm, 
  onSearchChange, 
  selectedBranch, 
  onBranchChange 
}: SearchFilterProps) => {
  return (
    <div className="bg-gradient-subtle border border-border rounded-lg p-8 shadow-soft">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          {/* Search Input */}
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium text-foreground">
              Search Agents
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, title, or specialization..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 bg-background border-border focus:ring-2 focus:ring-accent focus:border-accent transition-smooth"
              />
            </div>
          </div>
          
          {/* Branch Filter */}
          <div className="space-y-2 min-w-[200px]">
            <label className="text-sm font-medium text-foreground">
              Branch
            </label>
            <Select value={selectedBranch} onValueChange={onBranchChange}>
              <SelectTrigger className="bg-background border-border focus:ring-2 focus:ring-accent focus:border-accent transition-smooth">
                <SelectValue placeholder="All Branches" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Branches</SelectItem>
                <SelectItem value="head-office">Head Office</SelectItem>
                <SelectItem value="sandton">Sandton</SelectItem>
                <SelectItem value="rosebank">Rosebank</SelectItem>
                <SelectItem value="fourways">Fourways</SelectItem>
                <SelectItem value="centurion">Centurion</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Submit Button */}
          <Button 
            className="bg-accent hover:bg-accent-dark text-accent-foreground px-8 transition-smooth shadow-medium"
            size="default"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;