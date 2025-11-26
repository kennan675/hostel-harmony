import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import {
  ArrowRight,
  Check,
  Clock8,
  MessageSquareHeart,
  ShieldCheck,
  Sparkles,
  Wrench,
  Users,
  Building2,
} from "lucide-react";

const heroPromises = [
  "Report hostel issues in under a minute",
  "Track each ticket from submission to fix",
  "Get notified the moment work is complete",
];

const highlightMetrics = [
  { label: "Weekly requests", value: "120+", detail: "average tickets handled" },
  { label: "Resolution time", value: "< 24 hrs", detail: "typical non-urgent fix" },
];

const featureHighlights = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Clear responsibilities",
    description: "Every request shows who is assigned, the deadline, and required approvals.",
  },
  {
    icon: <Clock8 className="w-6 h-6" />,
    title: "Live progress",
    description: "Status chips, timeline updates, and proof photos keep residents in the loop.",
  },
  {
    icon: <MessageSquareHeart className="w-6 h-6" />,
    title: "Resident support",
    description: "Simple chat replies and quick polls capture how students feel after each fix.",
  },
];

const workflowSteps = [
  {
    title: "Report",
    description: "Students log the issue with photos, location, and urgency from web or kiosk.",
    accent: "from-cyan-400/30 to-blue-500/40",
  },
  {
    title: "Assign",
    description: "Wardens review, prioritize, and assign the right technician or contractor.",
    accent: "from-blue-500/30 to-indigo-500/40",
  },
  {
    title: "Fix",
    description: "Teams check in on-site, complete the job, and upload proof of work.",
    accent: "from-indigo-500/30 to-purple-500/40",
  },
  {
    title: "Close",
    description: "Residents confirm the result while analytics learn from every ticket.",
    accent: "from-purple-500/30 to-fuchsia-500/40",
  },
];

const serviceHighlights = [
  {
    title: "Warden dashboard",
    description: "Block-level overview, ticket queue, and quick approvals to keep maintenance on schedule.",
    icon: <Building2 className="w-5 h-5" />,
    stats: "34% fewer escalations",
  },
  {
    title: "Resident portal",
    description: "Guided request forms, multilingual updates, and simple feedback collection.",
    icon: <Users className="w-5 h-5" />,
    stats: "4.9★ avg feedback",
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-200/50 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-purple-200/50 blur-[200px]" />
      </div>

      <Header />

      <main className="relative z-10 space-y-24 pb-32">
        {/* HERO */}
        <section className="container grid gap-12 px-4 pt-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-slate-600">
              <Sparkles className="h-4 w-4" />
              Built for hostel teams
            </span>

            <div className="space-y-6">
              <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
                Track and resolve hostel maintenance requests without the chaos.
              </h1>
              <p className="text-lg text-slate-600 sm:text-xl">
                Hostel Harmony centralizes resident reports, assignments, and updates so wardens always know what is next.
              </p>
              <div className="space-y-3 text-base text-slate-600">
                {heroPromises.map((promise) => (
                  <div key={promise} className="inline-flex items-center gap-3">
                    <Check className="h-5 w-5 text-cyan-500" />
                    {promise}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="h-14 rounded-2xl bg-gradient-primary px-8 text-base font-bold">
                <a href="/submit" className="flex items-center gap-2">
                  Submit a Request
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" className="h-14 rounded-2xl bg-success hover:bg-success/90 px-8 text-base font-bold text-white">
                <a href="/dashboard" className="flex items-center gap-2">
                  Explore Dashboard
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyan-500" />
                Verified vendors only
              </div>
              <div className="flex items-center gap-2">
                <Clock8 className="h-4 w-4 text-cyan-500" />
                24/7 live status room
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-cyan-500" />
                Preventive playbooks baked in
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-300/40 to-purple-300/40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 backdrop-blur-xl shadow-[0_40px_120px_-40px_rgba(15,23,42,0.25)]">
              <img src={heroImage} alt="Maintenance pro assisting residents" className="h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-white/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 space-y-4 p-8">
                <div className="rounded-3xl border border-slate-200 bg-white/90 p-4 text-sm text-slate-700">
                  “We now see every open ticket, who owns it, and the proof image before marking it done.”
                </div>
                <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white/85 p-4 text-sm text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.25em] text-slate-500">Live Tickets</span>
                    <span className="text-lg font-bold text-slate-900">42</span>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">12 urgent</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">18 in-progress</span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">12 queued</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="container px-4">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
            <div className="grid gap-6 md:grid-cols-2">
              {highlightMetrics.map((metric) => (
                <div key={metric.label} className="space-y-2 border-slate-100 md:border-l md:pl-8 first:md:border-0 first:md:pl-0">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{metric.label}</p>
                  <p className="text-4xl font-black text-slate-900">{metric.value}</p>
                  <p className="text-sm text-slate-600">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE HIGHLIGHTS */}
        <section className="container space-y-12 px-4">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Why campuses switch</p>
            <h2 className="text-4xl font-black text-slate-900">Everything needed for upkeep</h2>
            <p className="text-slate-600 md:text-lg">
              See the essential tools that keep maintenance organized for students, wardens, and service staff.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featureHighlights.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70">
                <div className="mb-5 inline-flex rounded-2xl bg-slate-100 p-3 text-slate-900">{feature.icon}</div>
                <h3 className="mb-3 text-2xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICE HIGHLIGHTS */}
        <section className="container grid gap-8 px-4 lg:grid-cols-2">
          {serviceHighlights.map((service) => (
            <div key={service.title} className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                  {service.icon}
                  Always-on
                </div>
                <h3 className="text-3xl font-black text-slate-900">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
                <div className="text-sm font-semibold text-cyan-600">{service.stats}</div>
              </div>
            </div>
          ))}
        </section>

        {/* WORKFLOW TIMELINE */}
        <section className="container space-y-12 px-4">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Workflow</p>
            <h2 className="text-4xl font-black text-slate-900">Simple four-step flow</h2>
            <p className="text-slate-600 md:text-lg">
              A predictable loop keeps requests moving until residents confirm the work.
            </p>
          </div>
          <div className="relative grid gap-8 lg:grid-cols-2">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/50">
                <div className={`absolute inset-y-0 -left-px w-1 rounded-full bg-gradient-to-b ${step.accent}`} />
                <div className="pl-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Step {index + 1}</p>
                  <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative mx-auto w-full max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-12 text-center shadow-[0_40px_120px_-40px_rgba(15,23,42,0.2)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.2),transparent_65%)]" />
            <div className="relative space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Ready when you are</p>
              <h2 className="text-4xl font-black text-slate-900">Turn maintenance into a signature resident experience.</h2>
              <p className="text-slate-600">
                Spin up a digital maintenance desk for your hostel and keep everyone aligned from report to completion.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="h-14 rounded-2xl bg-slate-900 px-8 text-base font-bold text-white">
                  <a href="/submit" className="flex items-center gap-2">
                    Launch a Pilot
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" className="h-14 rounded-2xl bg-success hover:bg-success/90 px-8 text-base font-bold text-white">
                  <a href="/admin" className="flex items-center gap-2">
                    Admin Login
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-slate-200 py-12 text-center text-sm text-slate-500">
        <p>© 2024 Hostel Harmony. Hostel maintenance made transparent for teams and residents.</p>
      </footer>
    </div>
  );
};

export default Index;
