import React from "react";
import {
  BookOpen,
  Compass,
  BarChart3,
  Layers,
  Scale,
  History,
  Sigma,
  TrendingUp,
  Network,
} from "lucide-react";

type Module = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  teaches: string;
  skill: string;
  span?: boolean;
};

const modules: Module[] = [
  {
    id: "M0",
    icon: Compass,
    title: "Framing & the trap",
    teaches: "Turn a loaded drill-down into a testable question before touching the data.",
    skill: "—",
  },
  {
    id: "M1",
    icon: BarChart3,
    title: "Can I trust this average?",
    teaches: "Distributions, skew, zero-inflation, whales, and robust summaries.",
    skill: "/profile-data",
  },
  {
    id: "M2",
    icon: Layers,
    title: "How much data is really here?",
    teaches: "i.i.d. vs clustering, the design effect, and effective-n.",
    skill: "/profile-data (effective-n)",
  },
  {
    id: "M3",
    icon: Scale,
    title: "Is the difference real?",
    teaches:
      "The right test for the shape, the n-trap, effect size + CI, Simpson's / confounds.",
    skill: "/significance-check · /relationship",
    span: true,
  },
  {
    id: "M4",
    icon: History,
    title: "Bayesian inference",
    teaches:
      "Anchor a thin slice on a prior from history — posterior, P(better), expected loss; empirical-Bayes / partial pooling.",
    skill: "/bayesian-update",
    span: true,
  },
  {
    id: "M5",
    icon: TrendingUp,
    title: "Is the shift real over time?",
    teaches: "Day-of-week seasonality, monthly band, regime-break / stationarity.",
    skill: "/trend-check",
  },
  {
    id: "M6",
    icon: Sigma,
    title: "The decision metric",
    teaches:
      "Profit per visit (EPV − CPV) via the cost join; why conversion is the wrong yardstick.",
    skill: "/budget-decision",
  },
  {
    id: "M7",
    icon: Network,
    title: "Compose the multi-agent flow",
    teaches: "A fixed, gated orchestration that refuses to conclude early or anchor.",
    skill: "/decide",
  },
];

export default function ConceptsSection() {
  return (
    <section
      id="concepts"
      className="py-24 px-4 md:px-12 lg:px-24 xl:pl-36 bg-[#090d16] border-b border-slate-900"
    >
      <div className="max-w-7xl flex flex-col space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm uppercase tracking-widest font-semibold">
            <BookOpen className="w-4 h-4" /> The Curriculum
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Which Concepts Will You Learn {"—"} and Where Does Each Earn Its
            Place?
          </h2>
          <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug">
            Eight modules, each a statistical idea attached to a skill the agent
            can run.
          </p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            No theory for its own sake. Every concept below exists because it
            changes a decision {"—"} and each one ships as a deterministic skill
            you can rerun on any slice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                className={`bg-[#0b101c] border border-slate-800 rounded-2xl p-6 flex flex-col space-y-4 ${
                  mod.span ? "md:col-span-2 lg:col-span-1 xl:col-span-1" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-cyan-950/25 border border-cyan-800/40 flex items-center justify-center text-cyan-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-sm font-semibold text-cyan-400/80 tracking-widest">
                    {mod.id}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white leading-snug">
                  {mod.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed flex-1">
                  {mod.teaches}
                </p>
                <div className="pt-2 border-t border-slate-800/70">
                  <span className="inline-block font-mono text-xs text-emerald-300/90 bg-emerald-950/20 border border-emerald-900/40 rounded px-2 py-1">
                    {mod.skill}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="font-mono text-sm text-slate-400">
          <span className="text-cyan-400">
            // eight ideas, eight skills {"—"} one gated flow to run them in
            order.
          </span>
        </p>
      </div>
    </section>
  );
}
