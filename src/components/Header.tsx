import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Wrench } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Submit Request", href: "/submit" },
  ];

  return (
    <header className="sticky top-4 z-50 mx-4">
      <div className="container">
        <div className="glass-strong rounded-2xl px-6 h-20 flex items-center justify-between border border-white/50 shadow-lg">
          <Link to="/" className="flex items-center gap-3 font-bold text-xl group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-2.5 rounded-xl bg-gradient-primary text-white shadow-lg group-hover:scale-110 transition-transform">
                <Wrench className="w-5 h-5" />
              </div>
            </div>
            <span className="gradient-text text-2xl font-black tracking-tight">
              HostelCare
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-bold text-foreground/70 hover:text-foreground transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <ThemeToggle />
            <Button className="ml-2 bg-gradient-primary hover:shadow-glow-primary transition-all hover:scale-105 font-bold">
              Get Started
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-white/50">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 glass-strong border-white/50">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-base font-bold text-foreground/70 hover:text-foreground transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="mt-4 bg-gradient-primary hover:shadow-glow-primary font-bold">
                  Get Started
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
