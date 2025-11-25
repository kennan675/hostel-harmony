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
    residentName: "Lena Ortiz",
    room: "204",
    submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 48).toISOString(),
    updatedAt: new Date(now.getTime() - 1000 * 60 * 60 * 4).toISOString(),
    attachments: ["https://images.unsplash.com/photo-1503387762-592deb58ef4e"],
    comments: [
      {
        id: "COM-1",
        author: "Lena Ortiz",
        role: "resident",
        message: "Still leaking even after turning off the valve.",
        timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 12).toISOString(),
      },
      {
        id: "COM-2",
        author: "Mark Lee",
        role: "staff",
        message: "Ordered replacement cartridge, arriving this afternoon.",
        timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 6).toISOString(),
      },
    ],
    assignee: "Mark Lee",
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
    residentName: "Noah Patel",
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
    residentName: "Priya Desai",
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
    residentName: "Marta Sosa",
    room: "Hallway",
    submittedAt: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 7).toISOString(),
    updatedAt: new Date(now.getTime() - 1000 * 60 * 60 * 10).toISOString(),
    comments: [
      {
        id: "COM-4",
        author: "Marta Sosa",
        role: "resident",
        message: "Thank you! The hallway is bright again.",
        timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 9).toISOString(),
      },
    ],
    assignee: "Paul Green",
    upvotes: 1,
  },
  {
    id: "REQ-450",
    title: "Furniture Scratches",
    description: "Dining chairs on 3rd floor have rough edges causing scratches on clothing.",
    status: "in-progress",
    priority: "low",
    category: "Furniture",
    residentName: "Cameron Fox",
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
    name: "Lena Ortiz",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    points: 320,
    solved: 12,
    badges: ["Fix Finder", "Rapid Reporter"],
    streak: 5,
  },
  {
    id: "LB-2",
    name: "Noah Patel",
    avatar: "https://images.unsplash.com/photo-1544723795-fcf10d27a8c5",
    points: 280,
    solved: 10,
    badges: ["Safety Champion"],
    streak: 3,
  },
  {
    id: "LB-3",
    name: "Priya Desai",
    avatar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
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
    message: "Mark updated REQ-204 to In Progress",
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
    message: "REQ-112 completed by Paul",
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
    name: "Mark Lee",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    activeTasks: 6,
    focusArea: "Plumbing",
  },
  {
    id: "STAFF-2",
    name: "Caroline West",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    activeTasks: 4,
    focusArea: "Electrical",
  },
  {
    id: "STAFF-3",
    name: "Paul Green",
    avatar: "https://images.unsplash.com/photo-1546456073-92b9f0a8d1d6",
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
