import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
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
        <div className="glass-strong rounded-2xl px-6 h-20 flex items-center justify-between border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl text-slate-900">
          <Link to="/" className="flex items-center gap-3 font-bold text-xl group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-2.5 rounded-xl bg-white shadow-lg group-hover:scale-110 transition-transform">
                <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="logo-grad" x1="8" y1="56" x2="56" y2="8" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#00C6FF" />
                      <stop offset="50%" stopColor="#5867FF" />
                      <stop offset="100%" stopColor="#B569FF" />
                    </linearGradient>
                  </defs>
                  <rect x="8" y="12" width="48" height="44" rx="10" fill="url(#logo-grad)" />
                  <path d="M20 28H44" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <path d="M20 40H36" stroke="white" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="48" cy="40" r="4" fill="white" opacity="0.9" />
                  <path d="M24 10L32 4L40 10" stroke="url(#logo-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Hostel Harmony
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <ThemeToggle />
            <Button asChild className="ml-2 bg-gradient-primary hover:shadow-glow-primary transition-all hover:scale-105 font-bold text-white">
              <Link to="/admin">Admin Login</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-white/50">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 glass-strong border-slate-200 bg-white/90 text-slate-900">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-base font-semibold text-slate-600 hover:text-slate-900 transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-gradient-primary hover:shadow-glow-primary font-bold text-white">
                  <Link to="/admin">Admin Login</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
