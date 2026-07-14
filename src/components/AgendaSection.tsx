import React from "react";
import {
  CalendarClock,
  Coffee,
  Compass,
  BarChart3,
  Layers,
  Scale,
  History,
  TrendingUp,
  Coins,
  Workflow,
  Trophy,
} from "lucide-react";

type Item = {
  time: string;
  dur: string;
  title: string;
  desc?: string;
  icon: React.ComponentType<{ className?: string }>;
  tag?: string;
  skill?: string;
  kind?: "module" | "break";
};

const AGENDA: Item[] = [
  { time: "09:00", dur: "20m", title: "Welcome & setup", icon: Coffee, kind: "break",
    desc: "Coffee, and get everyone's VS Code / Cursor + Claude and the repo running." },
  { time: "09:20", dur: "15m", title: "Framing & the trap", icon: Compass, tag: "M0",
    desc: "Turn a loaded drill-down into a testable question — and see why ad-hoc analysis fails." },
  { time: "09:35", dur: "30m", title: "Can I trust this average?", icon: BarChart3, tag: "M1",
    skill: "/profile-data", desc: "Distributions, skew, zero-inflation, whales, robust summaries." },
  { time: "10:05", dur: "25m", title: "How much data is really here?", icon: Layers, tag: "M2",
    skill: "/profile-data", desc: "i.i.d. vs clustering, the design effect, effective-n." },
  { time: "10:30", dur: "15m", title: "Break", icon: Coffee, kind: "break" },
  { time: "10:45", dur: "35m", title: "Is the difference real?", icon: Scale, tag: "M3",
    skill: "/significance-check", desc: "The right test for the shape, the n-trap, Simpson's / confounds." },
  { time: "11:20", dur: "35m", title: "Bayesian inference", icon: History, tag: "M4",
    skill: "/bayesian-update", desc: "Anchor a thin slice on a prior from history — posterior, P(better), expected loss." },
  { time: "11:55", dur: "25m", title: "Is the shift real over time?", icon: TrendingUp, tag: "M5",
    skill: "/trend-check", desc: "Day-of-week seasonality, the monthly band, regime breaks." },
  { time: "12:20", dur: "15m", title: "Break", icon: Coffee, kind: "break" },
  { time: "12:35", dur: "25m", title: "The decision metric", icon: Coins, tag: "M6",
    skill: "/budget-decision", desc: "Profit per visit (EPV − CPV) via the cost join." },
  { time: "13:00", dur: "35m", title: "Compose the multi-agent flow", icon: Workflow, tag: "M7",
    skill: "/decide", desc: "Wire the skills into the gated /decide orchestrator — and run it end to end." },
  { time: "13:35", dur: "25m", title: "Wrap-up & your verticals", icon: Trophy, kind: "break",
    desc: "Your toolkit, Q&A, and adapting the skills to your own data." },
];

export default function AgendaSection() {
  return (
    <section
      id="agenda"
      className="py-24 px-4 md:px-12 lg:px-24 xl:pl-36 bg-[#080b14] border-b border-slate-900"
    >
      <div className="max-w-4xl flex flex-col space-y-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm uppercase tracking-widest font-semibold">
            <CalendarClock className="w-4 h-4" />
            Agenda
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Does the Session Look Like?
          </h2>
          <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug">
            One focused hands-on session — eight modules, built into a single gated procedure.
          </p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            A single 09:00–14:00 session with two short breaks. Timings are a guide, not a
            straitjacket — we slow down where the room wants to work, and skip ahead where it clicks.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">
          {/* subtle vertical line */}
          <div className="absolute left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/30 via-slate-800 to-emerald-500/25" />

          <ol className="space-y-2.5">
            {AGENDA.map((it, i) => {
              const isBreak = it.kind === "break";
              const Icon = it.icon;
              return (
                <li key={i} className="relative flex items-start gap-4">
                  {/* small, quiet icon node */}
                  <div
                    className={`relative z-10 mt-1.5 shrink-0 w-9 h-9 rounded-lg border flex items-center justify-center ${
                      isBreak
                        ? "bg-[#0a0e17] border-slate-800 text-slate-500"
                        : "bg-[#0b101c] border-slate-800 text-cyan-400/80"
                    }`}
                  >
                    <Icon className="w-[15px] h-[15px]" />
                  </div>

                  {/* card */}
                  <div
                    className={`flex-1 rounded-xl border px-4 py-3 ${
                      isBreak
                        ? "bg-transparent border-slate-800/60"
                        : "bg-[#0b101c] border-slate-800"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-sm text-cyan-300 font-semibold tabular-nums">
                        {it.time}
                      </span>
                      <span className="font-mono text-[11px] text-slate-500">{it.dur}</span>
                      {it.tag && (
                        <span className="font-mono text-[11px] text-slate-400 font-bold">{it.tag}</span>
                      )}
                      <h3
                        className={`font-display font-semibold ${
                          isBreak ? "text-slate-300 text-[15px]" : "text-white text-[15px] md:text-base"
                        }`}
                      >
                        {it.title}
                      </h3>
                      {it.skill && (
                        <span className="font-mono text-[11px] text-emerald-300/90 bg-emerald-950/20 border border-emerald-900/40 rounded px-1.5 py-0.5">
                          {it.skill}
                        </span>
                      )}
                    </div>
                    {it.desc && (
                      <p className="mt-1 text-sm text-slate-400 leading-relaxed">{it.desc}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="font-mono text-xs text-slate-500">
          09:00 → 14:00 · 5 hours · two 15-minute breaks
        </p>
      </div>
    </section>
  );
}
