import { useMemo } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";

export const useThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const icon = useMemo(() => (theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />), [theme]);

  return { icon, toggleTheme };
};
