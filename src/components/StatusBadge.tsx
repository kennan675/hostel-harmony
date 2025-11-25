import { cn } from "@/lib/utils";
import { Clock, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "pending" | "in-progress" | "completed" | "urgent";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<Status, { label: string; icon: React.ReactNode; className: string }> = {
  pending: {
    label: "Pending",
    icon: <Clock className="w-3.5 h-3.5" />,
    className: "glass border-2 border-muted text-muted-foreground font-bold",
  },
  "in-progress": {
    label: "In Progress",
    icon: <Loader2 className="w-3.5 h-3.5 animate-spin" />,
    className: "glass border-2 border-warning/40 text-warning font-bold shadow-md",
  },
  completed: {
    label: "Completed",
    icon: <CheckCircle2 className="w-3.5 h-3.5" />,
    className: "glass border-2 border-success/40 text-success font-bold shadow-md",
  },
  urgent: {
    label: "Urgent",
    icon: <AlertCircle className="w-3.5 h-3.5" />,
    className: "glass border-2 border-urgent/40 text-urgent font-bold shadow-md pulse-glow",
  },
};

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all hover:scale-105",
        config.className,
        className
      )}
    >
      {config.icon}
      {config.label}
    </span>
  );
};
