import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Bell, LayoutGrid, ListTodo, PieChart, Settings, Sparkles, Users } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const adminNav = [
  { label: "Overview", href: "/admin", icon: LayoutGrid },
  { label: "Requests", href: "/admin/requests", icon: ListTodo },
  { label: "Analytics", href: "/admin/analytics", icon: PieChart },
  { label: "Residents", href: "/admin/residents", icon: Users },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
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
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={location.pathname === item.href} className="font-semibold">
                      <Link to={item.href} className="flex items-center gap-3">
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="border-t border-white/10">
          <div className="flex items-center gap-3 rounded-2xl p-3 bg-muted/30">
            <Avatar className="h-10 w-10 border-2 border-white/50">
              <AvatarImage src="https://images.unsplash.com/photo-1544723795-4325379f3157" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
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
