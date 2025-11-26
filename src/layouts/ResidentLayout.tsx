import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { ThemeToggle } from "@/components/ThemeToggle";

interface ResidentLayoutProps {
  heading?: ReactNode;
  subheading?: string;
  actions?: ReactNode;
  children: ReactNode;
}

export const ResidentLayout = ({ heading, subheading, actions, children }: ResidentLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-12 space-y-10">
        {(heading || subheading || actions) && (
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between animate-fade-in">
            <div>
              {heading && (
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                  {heading}
                </h1>
              )}
              {subheading && <p className="text-muted-foreground text-lg font-medium mt-2 max-w-2xl">{subheading}</p>}
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              {actions}
            </div>
          </div>
        )}
        {children}
      </main>
    </div>
  );
};
