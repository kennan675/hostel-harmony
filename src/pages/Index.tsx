import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <Features />
      
      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary rounded-full blur-3xl opacity-10" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center glass-strong p-16 rounded-[3rem] border-2 border-white/50 shadow-xl">
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-medium max-w-2xl mx-auto">
              Join hundreds of residents already enjoying seamless maintenance management.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/submit">
                <button className="h-14 px-8 rounded-xl bg-gradient-primary text-white font-bold text-lg hover:shadow-glow-primary transition-all hover:scale-105">
                  Submit First Request
                </button>
              </a>
              <a href="/dashboard">
                <button className="h-14 px-8 rounded-xl glass border-2 border-white/50 font-bold text-lg hover:bg-white/90 transition-all hover:scale-105">
                  Explore Dashboard
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-white/20 py-12 mt-24 backdrop-blur-sm">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground font-semibold">
            © 2024 HostelCare. Making hostel maintenance <span className="gradient-text">delightfully simple</span>.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
