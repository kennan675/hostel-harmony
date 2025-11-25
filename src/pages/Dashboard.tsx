import { Header } from "@/components/Header";
import { RequestCard } from "@/components/RequestCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter, TrendingUp, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data
const mockRequests = [
  {
    id: "1",
    title: "Leaking Shower in Room 204",
    description: "The shower has been dripping constantly for the past two days. Water pressure seems low too.",
    status: "in-progress" as const,
    date: "2 days ago",
    category: "Plumbing",
    comments: 3,
  },
  {
    id: "2",
    title: "Broken Window Lock",
    description: "The window in the common area won't lock properly. Security concern.",
    status: "urgent" as const,
    date: "1 day ago",
    category: "Security",
    comments: 1,
  },
  {
    id: "3",
    title: "AC Not Cooling",
    description: "The air conditioning unit in room 305 is running but not producing cold air.",
    status: "pending" as const,
    date: "5 hours ago",
    category: "HVAC",
    comments: 0,
  },
  {
    id: "4",
    title: "Light Fixture Replacement",
    description: "Light bulb in hallway near stairs needs replacement. It's been out for a week.",
    status: "completed" as const,
    date: "1 week ago",
    category: "Electrical",
    comments: 2,
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container py-12">
        {/* Header Section */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            My <span className="gradient-text">Requests</span>
          </h1>
          <p className="text-xl text-muted-foreground font-medium">Track and manage all your maintenance requests</p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="group glass-strong p-8 rounded-3xl border-2 border-white/50 hover:border-primary/30 hover-lift cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-primary text-white group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Total Requests</div>
            <div className="text-5xl font-black gradient-text">12</div>
          </div>
          
          <div className="group glass-strong p-8 rounded-3xl border-2 border-warning/20 hover:border-warning/40 hover-lift cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-warning to-warning/80 text-white group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
            </div>
            <div className="text-sm font-bold text-warning/80 uppercase tracking-wider mb-1">In Progress</div>
            <div className="text-5xl font-black text-warning">3</div>
          </div>
          
          <div className="group glass-strong p-8 rounded-3xl border-2 border-success/20 hover:border-success/40 hover-lift cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-success to-success/80 text-white group-hover:scale-110 transition-transform">
                <CheckCircle className="w-6 h-6" />
              </div>
            </div>
            <div className="text-sm font-bold text-success/80 uppercase tracking-wider mb-1">Completed</div>
            <div className="text-5xl font-black text-success">8</div>
          </div>
          
          <div className="group glass-strong p-8 rounded-3xl border-2 border-white/50 hover:border-primary/30 hover-lift cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-muted/50 group-hover:bg-muted transition-colors">
                <AlertTriangle className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>
            <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Pending</div>
            <div className="text-5xl font-black">1</div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="glass-strong p-6 rounded-3xl border-2 border-white/50 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
              <Input
                placeholder="Search requests..."
                className="pl-12 h-14 glass border-2 border-white/50 rounded-2xl font-semibold focus:border-primary/50 transition-colors"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-56 h-14 glass border-2 border-white/50 rounded-2xl font-bold">
                <Filter className="w-5 h-5 mr-2 text-primary" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="glass-strong border-2 border-white/50">
                <SelectItem value="all" className="font-bold">All Requests</SelectItem>
                <SelectItem value="pending" className="font-bold">Pending</SelectItem>
                <SelectItem value="in-progress" className="font-bold">In Progress</SelectItem>
                <SelectItem value="completed" className="font-bold">Completed</SelectItem>
                <SelectItem value="urgent" className="font-bold">Urgent</SelectItem>
              </SelectContent>
            </Select>
            <Link to="/submit">
              <Button className="w-full sm:w-auto h-14 px-8 gap-3 bg-gradient-primary hover:shadow-glow-primary transition-all hover:scale-105 font-bold text-base rounded-2xl">
                <Plus className="w-5 h-5" />
                New Request
              </Button>
            </Link>
          </div>
        </div>

        {/* Requests Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {mockRequests.map((request) => (
            <RequestCard key={request.id} {...request} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
