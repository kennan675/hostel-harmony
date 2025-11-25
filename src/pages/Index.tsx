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
  "Instant acknowledgement within 2 minutes",
  "Verified updates every step of the fix",
  "No more chasing caretakers or vendors",
];

const highlightMetrics = [
  { label: "Avg. Response", value: "2.3 hrs", detail: "to assign a fixer" },
  { label: "Vetted Vendors", value: "180+", detail: "covering plumbing to security" },
  { label: "Resident Satisfaction", value: "97%", detail: "based on 1.4k ratings" },
];

const featureHighlights = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Accountability built in",
    description: "Digital trails, before/after proofs, and approval gates keep every repair honest and on-budget.",
  },
  {
    icon: <Clock8 className="w-6 h-6" />,
    title: "Predictable turnarounds",
    description: "Smart routing pairs urgent tickets with on-call teams while preventive schedules run in the background.",
  },
  {
    icon: <MessageSquareHeart className="w-6 h-6" />,
    title: "Resident delight",
    description: "Friendly nudges, emojis, and celebrations turn routine fixes into moments of trust with your community.",
  },
];

const workflowSteps = [
  {
    title: "Report with receipts",
    description: "Residents snap, annotate, and submit from mobile or kiosk. AI pre-tags urgency and category instantly.",
    accent: "from-cyan-400/30 to-blue-500/40",
  },
  {
    title: "Assign + align",
    description: "Ops teams drag tickets across smart lanes, auto-notify contractors, and unlock shared budgets in one tap.",
    accent: "from-blue-500/30 to-indigo-500/40",
  },
  {
    title: "Fix + prove",
    description: "Fixers check in on-site, log work, and upload proof packs before payments clear—no more guesswork.",
    accent: "from-indigo-500/30 to-purple-500/40",
  },
  {
    title: "Celebrate + learn",
    description: "Residents rate the experience while dashboards learn patterns to prevent repeat headaches.",
    accent: "from-purple-500/30 to-fuchsia-500/40",
  },
];

const serviceHighlights = [
  {
    title: "Command view for wardens",
    description:
      "Live maps of every block, energy usage anomalies, and compliance reminders so you stay ahead of audits.",
    icon: <Building2 className="w-5 h-5" />,
    stats: "34% fewer escalations",
  },
  {
    title: "Resident-first concierge",
    description:
      "Gamified streaks, empathy-filled messaging, and multilingual chat ensure every student feels seen and heard.",
    icon: <Users className="w-5 h-5" />,
    stats: "4.9★ avg feedback",
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-fuchsia-500/20 blur-[200px]" />
      </div>

      <Header />

      <main className="relative z-10 space-y-24 pb-32">
        {/* HERO */}
        <section className="container grid gap-12 px-4 pt-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-white/80">
              <Sparkles className="h-4 w-4" />
              Delight-first maintenance ops
            </span>

            <div className="space-y-6">
              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-[3.5rem]">
                Fix every room, hallway, and story with proof—not promises.
              </h1>
              <p className="text-lg text-white/85 sm:text-xl">
                Hostel Harmony turns messy request threads into cinematic repair journeys—complete with live status,
                verified payouts, and cheering residents.
              </p>
              <div className="space-y-3 text-base text-white/75">
                {heroPromises.map((promise) => (
                  <div key={promise} className="inline-flex items-center gap-3">
                    <Check className="h-5 w-5 text-cyan-300" />
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
              <Button asChild variant="outline" size="lg" className="h-14 rounded-2xl border-white/30 px-8 text-base font-bold text-white">
                <a href="/dashboard" className="flex items-center gap-2">
                  Explore Dashboard
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyan-300" />
                Verified vendors only
              </div>
              <div className="flex items-center gap-2">
                <Clock8 className="h-4 w-4 text-cyan-300" />
                24/7 live status room
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="h-4 w-4 text-cyan-300" />
                Preventive playbooks baked in
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 to-purple-500/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_40px_120px_-40px_rgba(8,47,73,0.8)]">
              <img src={heroImage} alt="Maintenance pro assisting residents" className="h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-slate-900/30 to-slate-900/0" />
              <div className="absolute bottom-0 left-0 right-0 space-y-4 p-8">
                <div className="rounded-3xl border border-white/20 bg-white/15 p-4 text-sm text-white">
                  “The crew fixed three rooms before lunch and the residents still had time for class. The live thread kept
                  parents calm, too.”
                </div>
                <div className="grid gap-3 rounded-3xl border border-white/20 bg-white/10 p-4 text-sm text-white/80">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.25em] text-white/60">Live Tickets</span>
                    <span className="text-lg font-bold text-white">42</span>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <span className="rounded-full bg-white/10 px-3 py-1">12 urgent</span>
                    <span className="rounded-full bg-white/10 px-3 py-1">18 in-progress</span>
                    <span className="rounded-full bg-white/10 px-3 py-1">12 queued</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="container px-4">
          <div className="rounded-[32px] border border-white/15 bg-white/5 p-8 backdrop-blur-xl">
            <div className="grid gap-6 md:grid-cols-3">
              {highlightMetrics.map((metric) => (
                <div key={metric.label} className="space-y-2 border-white/10 md:border-l md:pl-8 first:md:border-0 first:md:pl-0">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{metric.label}</p>
                  <p className="text-4xl font-black text-white">{metric.value}</p>
                  <p className="text-sm text-white/70">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE HIGHLIGHTS */}
        <section className="container space-y-12 px-4">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Why campuses switch</p>
            <h2 className="text-4xl font-black text-white">Harmony in action</h2>
            <p className="text-white/70 md:text-lg">
              Borrowed from the DiaspoCare playbook—glassmorphism, cinematic gradients, and proof-driven UI for every
              fix.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featureHighlights.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl">
                <div className="mb-5 inline-flex rounded-2xl bg-white/10 p-3 text-white">{feature.icon}</div>
                <h3 className="mb-3 text-2xl font-semibold text-white">{feature.title}</h3>
                <p className="text-white/75">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICE HIGHLIGHTS */}
        <section className="container grid gap-8 px-4 lg:grid-cols-2">
          {serviceHighlights.map((service) => (
            <div key={service.title} className="relative overflow-hidden rounded-[32px] border border-white/15 bg-white/5 p-8 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
                  {service.icon}
                  Always-on
                </div>
                <h3 className="text-3xl font-black text-white">{service.title}</h3>
                <p className="text-white/75">{service.description}</p>
                <div className="text-sm font-semibold text-cyan-200">{service.stats}</div>
              </div>
            </div>
          ))}
        </section>

        {/* WORKFLOW TIMELINE */}
        <section className="container space-y-12 px-4">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Workflow</p>
            <h2 className="text-4xl font-black text-white">From issue to applause</h2>
            <p className="text-white/70 md:text-lg">
              Inspired by DiaspoCare’s cinematic storytelling, every step feels elevated yet practical.
            </p>
          </div>
          <div className="relative grid gap-8 lg:grid-cols-2">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className={`absolute inset-y-0 -left-px w-1 rounded-full bg-gradient-to-b ${step.accent}`} />
                <div className="pl-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">Step {index + 1}</p>
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  <p className="text-white/75">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative mx-auto w-full max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-purple-600/30 p-12 text-center shadow-[0_40px_120px_-40px_rgba(6,182,212,0.7)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_65%)]" />
            <div className="relative space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">Ready when you are</p>
              <h2 className="text-4xl font-black text-white">Turn maintenance into a signature resident experience.</h2>
              <p className="text-white/80">
                Borrow the most loved visuals from DiaspoCare’s product team—now retuned for hostels. Let’s make your next
                inspection jaw-dropping.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="h-14 rounded-2xl bg-white/95 px-8 text-base font-bold text-slate-900">
                  <a href="/submit" className="flex items-center gap-2">
                    Launch a Pilot
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 rounded-2xl border-white/40 px-8 text-base font-bold text-white">
                  <a href="/dashboard" className="flex items-center gap-2">
                    See Resident View
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 py-12 text-center text-sm text-white/70">
        <p>
          © 2024 Hostel Harmony. Visual storytelling meets reliable fixes—crafted with inspiration from DiaspoCare’s design
          language.
        </p>
      </footer>
    </div>
  );
};

export default Index;
