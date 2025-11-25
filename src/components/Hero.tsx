import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated background mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container relative py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-primary/20 hover:border-primary/40 transition-all hover-scale group">
              <Sparkles className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-semibold gradient-text">Simple. Fast. Reliable.</span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            
            {/* Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter">
              Maintenance
              <br />
              <span className="gradient-text">Reimagined</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl font-medium">
              Report issues instantly. Track in real-time. Get fixed faster. 
              <br />
              <span className="text-foreground/80">Making hostel life effortless.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/submit">
                <Button size="lg" className="h-14 px-8 text-base font-bold gap-3 group bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 hover:scale-105">
                  Submit a Request
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold glass border-2 hover:bg-white/90 hover:scale-105 transition-all">
                  View Dashboard
                </Button>
              </Link>
            </div>

            {/* Stats with glass cards */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="glass-strong p-5 rounded-2xl hover-lift group cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div className="text-4xl font-black gradient-text">24/7</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Support</div>
              </div>
              <div className="glass-strong p-5 rounded-2xl hover-lift group cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div className="text-4xl font-black gradient-text">2hr</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Response</div>
              </div>
              <div className="glass-strong p-5 rounded-2xl hover-lift group cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <div className="text-4xl font-black gradient-text">98%</div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right image with advanced effects */}
          <div className="relative animate-fade-in lg:block hidden" style={{ animationDelay: '0.2s' }}>
            {/* Decorative gradient blobs */}
            <div className="absolute -inset-4 bg-gradient-primary rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            {/* Main image container */}
            <div className="relative group">
              {/* Glass frame */}
              <div className="absolute inset-0 glass-strong rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
              
              {/* Image */}
              <img
                src={heroImage}
                alt="Modern hostel with maintenance staff"
                className="relative rounded-[2.5rem] shadow-xl w-full hover-lift border-4 border-white/50"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 glass-strong p-4 rounded-2xl shadow-xl hover-scale cursor-pointer border border-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase">System Status</div>
                    <div className="text-base font-black text-success">All Operational</div>
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -top-6 -right-6 glass-strong p-4 rounded-2xl shadow-xl hover-scale cursor-pointer border border-white/50 hover:rotate-3 transition-transform">
                <div className="text-center">
                  <div className="text-3xl font-black gradient-text">156</div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase">Fixed Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
