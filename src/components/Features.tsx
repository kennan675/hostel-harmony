import { Zap, Shield, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Lightning Fast",
    description: "Submit requests in seconds. Our intuitive interface makes reporting issues effortless and instant.",
    gradient: "from-primary to-accent",
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: "Real-Time Updates",
    description: "Get instant notifications when your request status changes. Stay in the loop, always informed.",
    gradient: "from-accent to-success",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Secure & Private",
    description: "Your data is encrypted and secure. We take privacy seriously, so you can focus on what matters.",
    gradient: "from-success to-primary",
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Smart Insights",
    description: "Track trends and patterns. Our analytics help improve response times and prioritize critical issues.",
    gradient: "from-secondary to-primary",
  },
];

export const Features = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-primary/20">
            <span className="text-sm font-bold gradient-text uppercase tracking-wider">Powerful Features</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Built for <span className="gradient-text">Everyone</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            Whether you're a resident or administrator, we've got you covered with powerful, 
            intuitive features designed for efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative group p-8 glass-strong border-2 border-white/50 hover:border-primary/30 hover-lift animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Icon container */}
                <div className="mb-6 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                  <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white w-fit group-hover:scale-110 transition-transform shadow-lg`}>
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-black text-2xl mb-3 group-hover:gradient-text transition-all">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
