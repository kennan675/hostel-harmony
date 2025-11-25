import { Zap, Shield, Clock, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Lightning Fast",
    description: "Submit requests in seconds. Our intuitive interface makes reporting issues effortless.",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Real-Time Updates",
    description: "Get instant notifications when your request status changes. Stay in the loop, always.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Secure & Private",
    description: "Your data is encrypted and secure. We take privacy seriously, so you can focus on what matters.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Smart Insights",
    description: "Track trends and patterns. Our analytics help improve response times and prioritize issues.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Built for Everyone</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a resident or administrator, we've got you covered with powerful features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
