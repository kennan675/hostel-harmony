import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Bell, LayoutGrid, ListTodo, PieChart, Settings, Sparkles, Users } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const adminNav = [
  { label: "Overview", target: "overview", icon: LayoutGrid },
  { label: "Requests", target: "live-queue", icon: ListTodo },
  { label: "Analytics", target: "trend-section", icon: PieChart },
  { label: "Team Load", target: "ops-squad", icon: Users },
  { label: "Notifications", target: "signals", icon: Settings },
];

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  const [activeTarget, setActiveTarget] = useState<string>(adminNav[0].target);

  const handleNavClick = (target: string) => {
    setActiveTarget(target);
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="bg-card/80 backdrop-blur-lg border-r border-white/20">
        <SidebarHeader className="px-4 py-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-gradient-primary text-white shadow-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">HostelCare</p>
              <p className="text-xl font-black tracking-tight">Admin</p>
            </div>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-muted-foreground font-semibold tracking-wide uppercase text-[0.65rem]">
              Workspace
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminNav.map((item) => (
                  <SidebarMenuItem key={item.target}>
                    <SidebarMenuButton
                      asChild
                      isActive={activeTarget === item.target}
                      className="font-semibold"
                    >
                      <button type="button" className="flex items-center gap-3" onClick={() => handleNavClick(item.target)}>
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="border-t border-white/10">
          <div className="flex items-center gap-3 rounded-2xl p-3 bg-muted/30">
            <div className="h-10 w-10 rounded-full bg-gradient-primary text-white font-bold flex items-center justify-center">
              AL
            </div>
            <div>
              <p className="text-sm font-semibold">Amina Lawson</p>
              <p className="text-xs text-muted-foreground">Operations Lead</p>
            </div>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset className="bg-background/60">
        <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-white/20">
          <div className="flex items-center justify-between px-6 py-4 gap-4">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="rounded-2xl" />
              <div>
                <p className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground">Control Hub</p>
                <h1 className="text-2xl font-black tracking-tight">Maintenance Intelligence</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-2 rounded-2xl border border-white/30 px-3 py-2 bg-background/60">
                <Input className="border-0 bg-transparent focus-visible:ring-0 text-sm" placeholder="Search requests" />
                <Badge variant="outline" className="text-[0.65rem] tracking-wide">
                  ⌘K
                </Badge>
              </div>
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="rounded-2xl relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-urgent rounded-full"></span>
              </Button>
            </div>
          </div>
          <Separator />
        </header>
        <div className="px-6 py-8 space-y-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};
