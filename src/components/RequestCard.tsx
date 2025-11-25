import { Card } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";
import { Calendar, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";

type Status = "pending" | "in-progress" | "completed" | "urgent";

interface RequestCardProps {
  id: string;
  title: string;
  description: string;
  status: Status;
  date: string;
  category: string;
  comments?: number;
}

export const RequestCard = ({
  title,
  description,
  status,
  date,
  category,
  comments = 0,
}: RequestCardProps) => {
  return (
    <Card className="p-6 hover-lift cursor-pointer group animate-fade-in">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
        <StatusBadge status={status} />
      </div>

      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {date}
        </div>
        <div className="flex items-center gap-1">
          <User className="w-3 h-3" />
          {category}
        </div>
        {comments > 0 && (
          <div className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" />
            {comments}
          </div>
        )}
      </div>

      <Button variant="ghost" size="sm" className="w-full">
        View Details
      </Button>
    </Card>
  );
};
