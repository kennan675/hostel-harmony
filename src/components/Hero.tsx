import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle opacity-50" />
      
      <div className="container relative py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <Sparkles className="w-4 h-4" />
              Simple. Fast. Reliable.
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Maintenance Made{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Delightfully Simple
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Report issues, track progress, and stay updated—all in one beautiful platform. 
              Making hostel life better, one fix at a time. 🏠
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/submit">
                <Button size="lg" className="gap-2 group">
                  Submit a Request
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline">
                  View Dashboard
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2hr</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="Modern hostel with maintenance staff"
              className="relative rounded-3xl shadow-2xl w-full hover-lift"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
