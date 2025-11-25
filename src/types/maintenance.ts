export type RequestStatus = "pending" | "in-progress" | "completed" | "urgent";

export type PriorityLevel = "low" | "medium" | "high" | "critical";

export interface MaintenanceComment {
  id: string;
  author: string;
  role: "resident" | "staff" | "admin";
  avatar?: string;
  message: string;
  timestamp: string;
}

export interface MaintenanceRequest {
  id: string;
  title: string;
  description: string;
  status: RequestStatus;
  priority: PriorityLevel;
  category: string;
  residentName: string;
  room: string;
  submittedAt: string;
  updatedAt: string;
  attachments?: string[];
  comments: MaintenanceComment[];
  assignee?: string;
  upvotes: number;
  etaHours?: number;
  location?: string;
  media?: string[];
}

export interface DashboardStats {
  total: number;
  completed: number;
  inProgress: number;
  urgent: number;
  overdue: number;
  streakDays: number;
  contributionScore: number;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  avatar: string;
  points: number;
  solved: number;
  badges: string[];
  streak: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: "success" | "warning" | "info" | "urgent";
  timestamp: string;
  read: boolean;
}

export interface IssueTrendPoint {
  date: string;
  requests: number;
  resolved: number;
  overdue: number;
}

export interface IssueSplitPoint {
  category: string;
  value: number;
  color: string;
}

export interface StaffLoad {
  id: string;
  name: string;
  avatar: string;
  activeTasks: number;
  focusArea: string;
}

export interface SubmitRequestPayload {
  title: string;
  category: string;
  priority: PriorityLevel;
  description: string;
  location?: string;
  attachments?: File[];
}

export interface AutoCategorizeSuggestion {
  category: string;
  priority: PriorityLevel;
  summary: string;
  confidence: number;
}

export interface KanbanColumn {
  title: string;
  status: RequestStatus;
  items: MaintenanceRequest[];
}
