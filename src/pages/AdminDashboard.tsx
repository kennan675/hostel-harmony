import { AdminLayout } from "@/layouts/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { StatusBadge } from "@/components/StatusBadge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {
  mockDashboardStats,
  mockIssueSplit,
  mockIssueTrends,
  mockKanban,
  mockNotifications,
  mockResidentRequests,
  mockStaffLoad,
} from "@/data/mock-maintenance";
import type { PriorityLevel } from "@/types/maintenance";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, PieChart, Pie, Cell } from "recharts";
import {
  Activity,
  ArrowUpRight,
  Download,
  MessageSquarePlus,
  RefreshCcw,
  ShieldCheck,
  Share2,
} from "lucide-react";

const trendChartConfig = {
  requests: {
    label: "Requests",
    color: "hsl(var(--primary))",
  },
  resolved: {
    label: "Resolved",
    color: "hsl(var(--success))",
  },
  overdue: {
    label: "Overdue",
    color: "hsl(var(--urgent))",
  },
};

const priorityStyles: Record<PriorityLevel, string> = {
  low: "bg-emerald-50 text-emerald-600 border-emerald-100",
  medium: "bg-amber-50 text-amber-600 border-amber-100",
  high: "bg-orange-50 text-orange-600 border-orange-100",
  critical: "bg-red-50 text-red-600 border-red-100",
};

const splitPalette = mockIssueSplit.map((segment) => segment.color);

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <section className="grid gap-4 lg:grid-cols-4">
        {[
          {
            label: "Open Tickets",
            value: mockDashboardStats.total,
            trend: "+12% vs last week",
            accent: "from-primary to-secondary",
          },
          {
            label: "Active Repairs",
            value: mockDashboardStats.inProgress,
            trend: "4 assigned",
            accent: "from-warning to-warning/70",
          },
          {
            label: "On-time Rate",
            value: "92%",
            trend: "+3% this week",
            accent: "from-success to-success/70",
          },
          {
            label: "Urgent",
            value: mockDashboardStats.urgent,
            trend: "1 overdue",
            accent: "from-urgent to-urgent/60",
          },
        ].map((stat) => (
          <Card key={stat.label} className="glass-strong border-2 border-white/30 rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">{stat.label}</p>
            <div className="flex items-end justify-between mt-6">
              <p className="text-4xl font-black gradient-text">{stat.value}</p>
              <Badge variant="outline" className="rounded-full text-[0.65rem] font-semibold">
                {stat.trend}
              </Badge>
            </div>
            <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${stat.accent}`} />
          </Card>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <Card className="p-6 glass border-2 border-white/30 rounded-[2.5rem]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">Trend</p>
              <h3 className="text-2xl font-black">Requests vs Resolution</h3>
            </div>
            <Button variant="ghost" size="sm" className="rounded-full gap-2">
              <RefreshCcw className="w-4 h-4" />
              Sync
            </Button>
          </div>
          <ChartContainer config={trendChartConfig} className="h-[320px]">
            <AreaChart data={mockIssueTrends}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} />
              <YAxis hide padding={{ top: 10 }} />
              <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
              <Area type="monotone" dataKey="requests" stroke="var(--color-requests)" fill="var(--color-requests)" fillOpacity={0.15} />
              <Area type="monotone" dataKey="resolved" stroke="var(--color-resolved)" fill="var(--color-resolved)" fillOpacity={0.1} />
              <Area type="monotone" dataKey="overdue" stroke="var(--color-overdue)" fill="var(--color-overdue)" fillOpacity={0.08} />
            </AreaChart>
          </ChartContainer>
        </Card>

        <Card className="p-6 glass border-2 border-white/30 rounded-[2.5rem]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">Categories</p>
              <h3 className="text-2xl font-black">Issue split</h3>
            </div>
            <Badge variant="outline" className="rounded-full">Live</Badge>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="lg:w-1/2">
              <ChartContainer config={{}} className="h-[220px]">
                <PieChart>
                  <Pie data={mockIssueSplit} dataKey="value" nameKey="category" innerRadius={70} outerRadius={100} stroke="transparent">
                    {mockIssueSplit.map((entry, index) => (
                      <Cell key={entry.category} fill={splitPalette[index]} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                </PieChart>
              </ChartContainer>
            </div>
            <div className="space-y-4 lg:w-1/2">
              {mockIssueSplit.map((segment) => (
                <div key={segment.category} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: segment.color }} />
                    <p className="font-semibold">{segment.category}</p>
                  </div>
                  <span className="text-sm font-mono">{segment.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="p-6 glass border-2 border-white/30 rounded-[2.5rem] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">Team Load</p>
              <h3 className="text-2xl font-black">Ops Squad</h3>
            </div>
            <Button variant="ghost" size="sm" className="rounded-full gap-2">
              <Share2 className="w-4 h-4" />
              Broadcast
            </Button>
          </div>
          <div className="space-y-4">
            {mockStaffLoad.map((staff) => (
              <div key={staff.id} className="flex items-center gap-3 rounded-2xl border border-white/20 p-3">
                <Avatar className="h-12 w-12 border-2 border-white/40">
                  <AvatarImage src={staff.avatar} />
                  <AvatarFallback>{staff.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="font-semibold">{staff.name}</p>
                  <p className="text-xs text-muted-foreground">Focus: {staff.focusArea}</p>
                </div>
                <Badge variant="outline" className="rounded-full font-semibold">
                  {staff.activeTasks} tasks
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <Card className="p-6 glass border-2 border-white/30 rounded-[2.5rem]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">Tickets</p>
              <h3 className="text-2xl font-black">Live queue</h3>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-full gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
              <Button variant="default" size="sm" className="rounded-full gap-2 bg-gradient-primary text-white">
                <ShieldCheck className="w-4 h-4" />
                Auto-assign
              </Button>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockResidentRequests.slice(0, 5).map((request) => (
                <TableRow key={request.id} className="border-white/10">
                  <TableCell>
                    <p className="font-semibold">{request.title}</p>
                    <p className="text-xs text-muted-foreground">{request.room} • {request.category}</p>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={request.status} />
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${priorityStyles[request.priority]}`}
                    >
                      {request.priority}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="rounded-full">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Card className="p-6 glass border-2 border-white/30 rounded-[2.5rem]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">Kanban</p>
              <h3 className="text-2xl font-black">Flow overview</h3>
            </div>
            <Badge variant="outline" className="rounded-full">
              Drag soon
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {mockKanban.map((column) => (
              <div key={column.title} className="rounded-3xl border border-white/20 p-4 bg-background/50">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground">{column.title}</p>
                  <Badge variant="outline" className="rounded-full">
                    {column.items.length}
                  </Badge>
                </div>
                <div className="space-y-3">
                  {column.items.map((item) => (
                    <div key={item.id} className="p-3 rounded-2xl glass border border-white/20">
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.residentName}</p>
                      <div className="flex items-center justify-between mt-2 text-xs">
                        <span className="font-semibold text-muted-foreground">ETA {item.etaHours ? `${item.etaHours}h` : "TBD"}</span>
                        <Badge variant="outline" className="rounded-full">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <Card className="p-6 glass border-2 border-white/30 rounded-[2.5rem]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">Signals</p>
              <h3 className="text-2xl font-black">Notifications</h3>
            </div>
            <Button variant="ghost" size="sm" className="rounded-full">
              Clear all
            </Button>
          </div>
          <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
            {mockNotifications.map((notification) => (
              <div key={notification.id} className="p-4 rounded-2xl glass border border-white/20 flex items-start gap-3">
                <span
                  className={`w-2 h-2 rounded-full mt-2 ${notification.type === "urgent" ? "bg-urgent" : notification.type === "success" ? "bg-success" : "bg-primary"}`}
                />
                <div>
                  <p className="font-semibold">{notification.title}</p>
                  <p className="text-sm text-muted-foreground">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(notification.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 glass border-2 border-white/30 rounded-[2.5rem] space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-primary text-white">
              <MessageSquarePlus className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">AI Copilot</p>
              <h3 className="text-xl font-black">Smart suggestions</h3>
            </div>
          </div>
          <div className="space-y-4">
            {mockResidentRequests.slice(0, 3).map((request) => (
              <div key={request.id} className="p-4 rounded-2xl border border-dashed border-white/30">
                <p className="text-sm font-semibold">{request.title}</p>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{request.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Badge variant="outline" className="rounded-full">
                    Suggest: {request.category}
                  </Badge>
                  <Badge variant="outline" className="rounded-full">
                    Priority: {request.priority}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full rounded-2xl bg-gradient-primary text-white">
            Generate auto-response
          </Button>
        </Card>

        <Card className="p-6 glass border-2 border-white/30 rounded-[2.5rem] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-semibold">Quick Actions</p>
              <h3 className="text-xl font-black">Do more</h3>
            </div>
            <Activity className="w-5 h-5 text-primary" />
          </div>
          <div className="grid gap-3">
            {["Broadcast update", "Schedule inspection", "Download weekly report"].map((action) => (
              <Button key={action} variant="outline" className="justify-between rounded-2xl">
                {action}
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            ))}
          </div>
          <Separator />
          <div className="p-4 rounded-2xl bg-muted/30 border border-white/20">
            <p className="text-sm font-semibold">SLA Watch</p>
            <p className="text-xs text-muted-foreground">3 tickets approaching deadline. Prioritize now for a perfect record.</p>
          </div>
        </Card>
      </section>
    </AdminLayout>
  );
};

export default AdminDashboard;
