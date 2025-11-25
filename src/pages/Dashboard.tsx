import { Header } from "@/components/Header";
import { RequestCard } from "@/components/RequestCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Filter } from "lucide-react";
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Requests</h1>
          <p className="text-muted-foreground">Track and manage all your maintenance requests</p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-lg border bg-card hover-lift">
            <div className="text-sm text-muted-foreground mb-1">Total Requests</div>
            <div className="text-3xl font-bold">12</div>
          </div>
          <div className="p-6 rounded-lg border bg-warning/5 border-warning/20 hover-lift">
            <div className="text-sm text-warning mb-1">In Progress</div>
            <div className="text-3xl font-bold text-warning">3</div>
          </div>
          <div className="p-6 rounded-lg border bg-success/5 border-success/20 hover-lift">
            <div className="text-sm text-success mb-1">Completed</div>
            <div className="text-3xl font-bold text-success">8</div>
          </div>
          <div className="p-6 rounded-lg border bg-muted hover-lift">
            <div className="text-sm text-muted-foreground mb-1">Pending</div>
            <div className="text-3xl font-bold">1</div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search requests..."
              className="pl-10"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Requests</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
            </SelectContent>
          </Select>
          <Link to="/submit">
            <Button className="w-full sm:w-auto gap-2">
              <Plus className="w-4 h-4" />
              New Request
            </Button>
          </Link>
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
