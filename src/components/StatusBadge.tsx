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
    icon: <Clock className="w-3 h-3" />,
    className: "bg-muted text-muted-foreground border-border",
  },
  "in-progress": {
    label: "In Progress",
    icon: <Loader2 className="w-3 h-3 animate-spin" />,
    className: "bg-warning/10 text-warning border-warning/30",
  },
  completed: {
    label: "Completed",
    icon: <CheckCircle2 className="w-3 h-3" />,
    className: "bg-success/10 text-success border-success/30",
  },
  urgent: {
    label: "Urgent",
    icon: <AlertCircle className="w-3 h-3" />,
    className: "bg-urgent/10 text-urgent border-urgent/30 animate-glow-pulse",
  },
};

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all",
        config.className,
        className
      )}
    >
      {config.icon}
      {config.label}
    </span>
  );
};
