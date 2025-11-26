import type {
  DashboardStats,
  IssueSplitPoint,
  IssueTrendPoint,
  KanbanColumn,
  LeaderboardEntry,
  MaintenanceRequest,
  NotificationItem,
  StaffLoad,
} from "@/types/maintenance";

const now = new Date();

export const mockResidentRequests: MaintenanceRequest[] = [
  {
    id: "REQ-204",
    title: "Leaking Shower in Room 204",
    description: "The shower has been dripping constantly for the past two days and the pressure is very low.",
    status: "in-progress",
    priority: "high",
    category: "Plumbing",
    residentName: "Kennan Bowen",
    room: "204",
    submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 48).toISOString(),
    updatedAt: new Date(now.getTime() - 1000 * 60 * 60 * 4).toISOString(),
    attachments: ["https://images.unsplash.com/photo-1503387762-592deb58ef4e"],
    comments: [
      {
        id: "COM-1",
        author: "Kennan Bowen",
        role: "resident",
        message: "Still leaking even after turning off the valve.",
        timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 12).toISOString(),
      },
      {
        id: "COM-2",
        author: "John Githae",
        role: "staff",
        message: "Ordered replacement cartridge, arriving this afternoon.",
        timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 6).toISOString(),
      },
    ],
    assignee: "John Githae",
    upvotes: 5,
    etaHours: 8,
    location: "North Wing",
  },
  {
    id: "REQ-120",
    title: "Broken Window Lock",
    description: "Window in the study lounge will not lock properly which is a security concern.",
    status: "urgent",
    priority: "critical",
    category: "Security",
    residentName: "Kirop Cheruiyot",
    room: "Common Area",
    submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 24).toISOString(),
    updatedAt: new Date(now.getTime() - 1000 * 60 * 60 * 2).toISOString(),
    comments: [
      {
        id: "COM-3",
        author: "Security Desk",
        role: "staff",
        message: "Temporary latch installed; awaiting locksmith.",
        timestamp: new Date(now.getTime() - 1000 * 60 * 30).toISOString(),
      },
    ],
    assignee: "Security Team",
    upvotes: 9,
    etaHours: 3,
    location: "Study Lounge",
  },
  {
    id: "REQ-305",
    title: "AC Not Cooling",
    description: "The AC unit keeps running but never cools the room below 28°C.",
    status: "pending",
    priority: "medium",
    category: "HVAC",
    residentName: "Wanjiku Mwangi",
    room: "305",
    submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 5).toISOString(),
    updatedAt: new Date(now.getTime() - 1000 * 60 * 60 * 5).toISOString(),
    comments: [],
    upvotes: 2,
    location: "South Tower",
  },
  {
    id: "REQ-112",
    title: "Light Fixture Replacement",
    description: "Hallway light near the east stairwell is flickering constantly.",
    status: "completed",
    priority: "low",
    category: "Electrical",
    residentName: "Ochieng Otieno",
    room: "Hallway",
    submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 7).toISOString(),
    updatedAt: new Date(now.getTime() - 1000 * 60 * 60 * 10).toISOString(),
    comments: [
      {
        id: "COM-4",
        author: "Ochieng Otieno",
        role: "resident",
        message: "Thank you! The hallway is bright again.",
        timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 9).toISOString(),
      },
    ],
    assignee: "Peter Kamau",
    upvotes: 1,
  },
  {
    id: "REQ-450",
    title: "Furniture Scratches",
    description: "Dining chairs on 3rd floor have rough edges causing scratches on clothing.",
    status: "in-progress",
    priority: "low",
    category: "Furniture",
    residentName: "Akinyi Odhiambo",
    room: "Common Dining",
    submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 72).toISOString(),
    updatedAt: new Date(now.getTime() - 1000 * 60 * 60 * 18).toISOString(),
    comments: [],
    assignee: "Woodworks Crew",
    upvotes: 3,
  },
];

export const mockDashboardStats: DashboardStats = {
  total: mockResidentRequests.length,
  completed: mockResidentRequests.filter((req) => req.status === "completed").length,
  inProgress: mockResidentRequests.filter((req) => req.status === "in-progress").length,
  urgent: mockResidentRequests.filter((req) => req.status === "urgent").length,
  overdue: 1,
  streakDays: 6,
  contributionScore: 1240,
};

export const mockLeaderboard: LeaderboardEntry[] = [
  {
    id: "LB-1",
    name: "Kennan Bowen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    points: 320,
    solved: 12,
    badges: ["Fix Finder", "Rapid Reporter"],
    streak: 5,
  },
  {
    id: "LB-2",
    name: "Kirop Cheruiyot",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    points: 280,
    solved: 10,
    badges: ["Safety Champion"],
    streak: 3,
  },
  {
    id: "LB-3",
    name: "Wanjiku Mwangi",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    points: 250,
    solved: 9,
    badges: ["Comfort Guru"],
    streak: 4,
  },
];

export const mockNotifications: NotificationItem[] = [
  {
    id: "NOTIF-1",
    title: "Status update",
    message: "John Githae updated REQ-204 to In Progress",
    type: "info",
    timestamp: new Date(now.getTime() - 1000 * 60 * 15).toISOString(),
    read: false,
  },
  {
    id: "NOTIF-2",
    title: "New urgent issue",
    message: "REQ-120 flagged as urgent",
    type: "urgent",
    timestamp: new Date(now.getTime() - 1000 * 60 * 60).toISOString(),
    read: false,
  },
  {
    id: "NOTIF-3",
    title: "Request resolved",
    message: "REQ-112 completed by Peter Kamau",
    type: "success",
    timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 12).toISOString(),
    read: true,
  },
];

export const mockIssueTrends: IssueTrendPoint[] = [
  { date: "Mon", requests: 18, resolved: 14, overdue: 2 },
  { date: "Tue", requests: 22, resolved: 16, overdue: 3 },
  { date: "Wed", requests: 25, resolved: 20, overdue: 4 },
  { date: "Thu", requests: 19, resolved: 15, overdue: 2 },
  { date: "Fri", requests: 27, resolved: 21, overdue: 5 },
  { date: "Sat", requests: 12, resolved: 9, overdue: 1 },
  { date: "Sun", requests: 15, resolved: 12, overdue: 1 },
];

export const mockIssueSplit: IssueSplitPoint[] = [
  { category: "Plumbing", value: 24, color: "hsl(var(--primary))" },
  { category: "Electrical", value: 18, color: "hsl(var(--warning))" },
  { category: "HVAC", value: 15, color: "hsl(var(--accent))" },
  { category: "Furniture", value: 9, color: "hsl(var(--secondary))" },
  { category: "Security", value: 7, color: "hsl(var(--urgent))" },
];

export const mockStaffLoad: StaffLoad[] = [
  {
    id: "STAFF-1",
    name: "John Githae",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    activeTasks: 6,
    focusArea: "Plumbing",
  },
  {
    id: "STAFF-2",
    name: "Njeri Kariuki",
    avatar: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=150&h=150&fit=crop&crop=face",
    activeTasks: 4,
    focusArea: "Electrical",
  },
  {
    id: "STAFF-3",
    name: "Peter Kamau",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    activeTasks: 5,
    focusArea: "General",
  },
];

export const mockKanban: KanbanColumn[] = [
  {
    title: "Queued",
    status: "pending",
    items: mockResidentRequests.filter((req) => req.status === "pending"),
  },
  {
    title: "In Progress",
    status: "in-progress",
    items: mockResidentRequests.filter((req) => req.status === "in-progress"),
  },
  {
    title: "Needs Attention",
    status: "urgent",
    items: mockResidentRequests.filter((req) => req.status === "urgent"),
  },
  {
    title: "Wrapped",
    status: "completed",
    items: mockResidentRequests.filter((req) => req.status === "completed"),
  },
];
