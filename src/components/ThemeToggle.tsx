import { useThemeToggle } from "@/hooks/useThemeToggle";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const { icon, toggleTheme } = useThemeToggle();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-2xl border border-white/20 hover:bg-primary/10 hover:text-primary transition-all duration-300"
      onClick={toggleTheme}
    >
      {icon}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
