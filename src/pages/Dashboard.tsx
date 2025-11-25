import { ResidentLayout } from "@/layouts/ResidentLayout";
import { RequestCard } from "@/components/RequestCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sparkles, Search, Filter, Flame, ArrowUpRight, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import {
  mockDashboardStats,
  mockLeaderboard,
  mockNotifications,
  mockResidentRequests,
} from "@/data/mock-maintenance";

const requestFilters = ["All", "Pending", "In Progress", "Completed", "Urgent"];

const Dashboard = () => {
  return (
    <ResidentLayout
      heading={
        <span>
          My <span className="gradient-text">Requests</span>
        </span>
      }
      subheading="Submit, track, and celebrate every fix with delightful updates."
      actions={
        <Link to="/submit">
          <Button className="h-14 px-8 gap-2 rounded-2xl bg-gradient-primary hover:shadow-glow-primary">
            <Sparkles className="w-4 h-4" />
            Tell Us What's Wrong 😊
          </Button>
        </Link>
      }
    >
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Total Requests",
            value: mockDashboardStats.total,
            accent: "from-primary to-secondary",
          },
          {
            label: "In Progress",
            value: mockDashboardStats.inProgress,
            accent: "from-warning to-warning/70",
          },
          {
            label: "Completed",
            value: mockDashboardStats.completed,
            accent: "from-success to-success/70",
          },
          {
            label: "Urgent",
            value: mockDashboardStats.urgent,
            accent: "from-urgent to-urgent/60",
          },
        ].map((stat) => (
          <Card
            key={stat.label}
            className="relative glass-strong border-2 border-white/50 rounded-3xl p-6 overflow-hidden animate-fade-in"
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${stat.accent}`} />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">{stat.label}</p>
              <p className="text-5xl font-black gradient-text">{stat.value}</p>
            </div>
          </Card>
        ))}
      </section>

      <section className="glass-strong p-6 rounded-[2.5rem] border-2 border-white/50 space-y-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
            <Input className="h-14 pl-12 rounded-2xl font-semibold" placeholder="Search requests or keywords" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="h-14 rounded-2xl font-semibold">
              <Filter className="w-4 h-4 mr-2 text-primary" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              {requestFilters.map((filter) => (
                <SelectItem key={filter} value={filter.toLowerCase()} className="font-semibold">
                  {filter}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" className="h-14 rounded-2xl font-bold">
            <ArrowUpRight className="w-4 h-4 mr-2" />
            Smart Sort
          </Button>
        </div>
        <div className="flex flex-wrap gap-3">
          {requestFilters.map((filter) => (
            <Badge
              key={filter}
              variant={filter === "All" ? "default" : "outline"}
              className="px-4 py-2 rounded-2xl text-xs font-semibold cursor-pointer hover:shadow-glow-primary"
            >
              {filter}
            </Badge>
          ))}
        </div>
      </section>

      <section className="grid xl:grid-cols-3 gap-8">
        <div className="space-y-6 xl:col-span-2">
          <Tabs defaultValue="requests" className="glass-strong border-2 border-white/50 rounded-[2.5rem] p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">Live Feed</p>
                <h2 className="text-3xl font-black">Your maintenance universe</h2>
              </div>
              <TabsList className="rounded-2xl">
                <TabsTrigger value="requests">Requests</TabsTrigger>
                <TabsTrigger value="updates">Updates</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="requests">
              <div className="grid md:grid-cols-2 gap-6">
                {mockResidentRequests.map((request) => (
                  <RequestCard
                    key={request.id}
                    id={request.id}
                    title={request.title}
                    description={request.description}
                    status={request.status}
                    date={new Date(request.updatedAt).toLocaleDateString()}
                    category={request.category}
                    comments={request.comments.length}
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="updates">
              <div className="grid gap-4">
                {mockNotifications.map((notification) => (
                  <Card key={notification.id} className="p-5 glass border-2 border-white/30 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold">{notification.title}</p>
                        <p className="text-xs text-muted-foreground">{notification.message}</p>
                      </div>
                      <Badge variant="outline" className="text-[0.65rem]">
                        {new Date(notification.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="p-6 glass-strong border-2 border-white/50 rounded-[2.5rem]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">Streak</p>
                <h3 className="text-4xl font-black gradient-text">{mockDashboardStats.streakDays} days</h3>
              </div>
              <Flame className="w-10 h-10 text-amber-500 animate-pulse" />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Keep reporting to maintain your <span className="font-semibold text-foreground">Fix Hero</span> badge.
            </p>
          </Card>
          <Card className="p-6 glass border-2 border-white/40 rounded-[2.5rem] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-black">Top Contributors</h3>
              <Badge variant="outline">Leaderboard</Badge>
            </div>
            <div className="space-y-4">
              {mockLeaderboard.map((entry, index) => (
                <div key={entry.id} className="flex items-center gap-4">
                  <Badge variant="outline" className="rounded-full h-8 w-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </Badge>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={entry.avatar} />
                    <AvatarFallback>{entry.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">{entry.name}</p>
                    <p className="text-xs text-muted-foreground">{entry.badges.join(" • ")}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-lg">{entry.points} pts</p>
                    <p className="text-xs text-muted-foreground">{entry.streak} streak 🔥</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6 glass border-2 border-white/40 rounded-[2.5rem] space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">Notifications</p>
                <h3 className="text-xl font-black">Friendly nudges</h3>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
              {mockNotifications.map((notification) => (
                <div key={notification.id} className="p-4 rounded-2xl glass border border-white/30 flex items-start gap-3">
                  <div
                    className="w-2 h-2 rounded-full mt-2"
                    style={{ backgroundColor: notification.type === "urgent" ? "hsl(var(--urgent))" : "hsl(var(--primary))" }}
                  />
                  <div>
                    <p className="font-semibold">{notification.title}</p>
                    <p className="text-sm text-muted-foreground">{notification.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </ResidentLayout>
  );
};

export default Dashboard;
