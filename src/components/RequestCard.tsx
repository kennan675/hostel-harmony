import { Card } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";
import { Calendar, MessageSquare, User, ArrowRight } from "lucide-react";
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
    <Card className="relative group glass-strong border-2 border-white/50 hover:border-primary/30 p-6 hover-lift cursor-pointer overflow-hidden animate-fade-in">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 pr-4">
            <h3 className="font-black text-xl mb-2 group-hover:gradient-text transition-all">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>
          <StatusBadge status={status} />
        </div>

        <div className="flex items-center gap-6 text-xs text-muted-foreground mb-6 font-semibold">
          <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            {date}
          </div>
          <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg">
            <User className="w-3.5 h-3.5 text-primary" />
            {category}
          </div>
          {comments > 0 && (
            <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-lg">
              <MessageSquare className="w-3.5 h-3.5 text-primary" />
              {comments}
            </div>
          )}
        </div>

        <Button 
          variant="ghost" 
          className="w-full group/btn justify-between hover:bg-primary/5 font-bold"
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
};
