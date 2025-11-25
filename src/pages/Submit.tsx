import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Upload, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Submit = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Request submitted successfully! 🎉",
      description: "We'll get back to you soon. You can track your request in the dashboard.",
    });

    setIsSubmitting(false);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container py-12 max-w-4xl">
        <div className="mb-12 animate-fade-in text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold gradient-text uppercase tracking-wider">New Request</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
            Tell Us What's <span className="gradient-text">Wrong</span>
          </h1>
          <p className="text-xl text-muted-foreground font-medium">We're here to help fix it quickly! 😊</p>
        </div>

        <Card className="glass-strong border-2 border-white/50 p-10 rounded-[2.5rem] animate-slide-up shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Title */}
            <div className="space-y-3">
              <Label htmlFor="title" className="text-base font-bold">Issue Title *</Label>
              <Input
                id="title"
                placeholder="e.g., Leaking faucet in room 204"
                required
                className="h-14 glass border-2 border-white/50 rounded-2xl font-semibold text-base focus:border-primary/50 transition-all focus:shadow-glow-primary"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Category */}
              <div className="space-y-3">
                <Label htmlFor="category" className="text-base font-bold">Category *</Label>
                <Select required>
                  <SelectTrigger id="category" className="h-14 glass border-2 border-white/50 rounded-2xl font-bold">
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent className="glass-strong border-2 border-white/50">
                    <SelectItem value="plumbing" className="font-bold">🚰 Plumbing</SelectItem>
                    <SelectItem value="electrical" className="font-bold">⚡ Electrical</SelectItem>
                    <SelectItem value="hvac" className="font-bold">❄️ Heating/Cooling</SelectItem>
                    <SelectItem value="furniture" className="font-bold">🪑 Furniture</SelectItem>
                    <SelectItem value="security" className="font-bold">🔒 Security</SelectItem>
                    <SelectItem value="cleaning" className="font-bold">🧹 Cleaning</SelectItem>
                    <SelectItem value="other" className="font-bold">📦 Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Priority */}
              <div className="space-y-3">
                <Label htmlFor="priority" className="text-base font-bold">Priority *</Label>
                <Select required>
                  <SelectTrigger id="priority" className="h-14 glass border-2 border-white/50 rounded-2xl font-bold">
                    <SelectValue placeholder="How urgent is this?" />
                  </SelectTrigger>
                  <SelectContent className="glass-strong border-2 border-white/50">
                    <SelectItem value="low" className="font-bold">🟢 Low - Can wait a few days</SelectItem>
                    <SelectItem value="medium" className="font-bold">🟡 Medium - Should be fixed soon</SelectItem>
                    <SelectItem value="high" className="font-bold">🟠 High - Needs attention today</SelectItem>
                    <SelectItem value="urgent" className="font-bold">🔴 Urgent - Safety/security issue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Label htmlFor="description" className="text-base font-bold">Description *</Label>
              <Textarea
                id="description"
                placeholder="Please describe the issue in detail. What happened? When did you notice it?"
                rows={6}
                required
                className="resize-none glass border-2 border-white/50 rounded-2xl font-semibold text-base focus:border-primary/50 transition-all focus:shadow-glow-primary"
              />
            </div>

            {/* Location */}
            <div className="space-y-3">
              <Label htmlFor="location" className="text-base font-bold">Location</Label>
              <Input
                id="location"
                placeholder="e.g., Room 204, Common area, 2nd floor hallway"
                className="h-14 glass border-2 border-white/50 rounded-2xl font-semibold text-base focus:border-primary/50 transition-all"
              />
            </div>

            {/* File Upload */}
            <div className="space-y-3">
              <Label className="text-base font-bold">Attachments (Optional)</Label>
              <div className="glass border-2 border-dashed border-primary/30 rounded-2xl p-12 text-center hover:border-primary/50 transition-all cursor-pointer group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <Upload className="w-8 h-8" />
                </div>
                <p className="text-base font-bold mb-2">
                  Click to upload photos or drag and drop
                </p>
                <p className="text-sm text-muted-foreground font-semibold">
                  PNG, JPG up to 10MB
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-6">
              <Button
                type="button"
                variant="outline"
                className="flex-1 h-14 rounded-2xl glass border-2 border-white/50 font-bold text-base hover:bg-white/90"
                onClick={() => navigate("/dashboard")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 h-14 rounded-2xl gap-3 bg-gradient-primary hover:shadow-glow-primary transition-all hover:scale-105 font-bold text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Request
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default Submit;
