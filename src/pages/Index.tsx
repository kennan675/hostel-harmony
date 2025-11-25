import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      
      {/* Footer */}
      <footer className="border-t py-12 mt-24">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 HostelCare. Making hostel maintenance delightfully simple.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
