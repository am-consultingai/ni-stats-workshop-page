import React from "react";
import { Trophy, Boxes, ShieldCheck, Workflow, FileCheck } from "lucide-react";

type Outcome = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const outcomes: Outcome[] = [
  {
    icon: Boxes,
    title: "A toolkit of deterministic skills",
    body:
      "Reviewed, seeded scripts — profile, significance, bayesian-update, trend, budget, decide — you can rerun on any slice, byte-identical every time.",
  },
  {
    icon: ShieldCheck,
    title: "Validation literacy",
    body:
      "Catch the wrong test, the thin-slice whale, the clustering trap, the confound — the ways an AI (or a human) quietly gets the statistics wrong.",
  },
  {
    icon: Workflow,
    title: "A gated decision procedure",
    body:
      "One orchestrated flow for the recurring drill-down question that never concludes early and never anchors on the way the question was framed.",
  },
  {
    icon: FileCheck,
    title: "Reproducible, auditable analysis",
    body:
      "Same input → same defensible memo, with an explicit \"what we did NOT establish\". Something the whole team can share and trust.",
  },
];

export default function WalkawaySection() {
  return (
    <section
      id="outcomes"
      className="py-24 px-4 md:px-12 lg:px-24 xl:pl-36 bg-slate-900/40 border-b border-slate-900"
    >
      <div className="max-w-7xl flex flex-col space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm uppercase tracking-widest font-semibold">
            <Trophy className="w-4 h-4" /> What You{"'"}ll Walk Away With
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Will You Walk Away Able to Do?
          </h2>
          <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug">
            Deterministic skills you built, and the judgment to trust {"—"} or
            reject {"—"} an AI{"'"}s statistical answer.
          </p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Not a certificate. You leave with real, reusable artifacts and the
            validation literacy to know when a confident number deserves your
            trust and when it doesn{"'"}t.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <div
                key={outcome.title}
                className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 flex flex-col space-y-4"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-950/25 border border-cyan-800/40 flex items-center justify-center text-cyan-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white leading-snug">
                  {outcome.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {outcome.body}
                </p>
              </div>
            );
          })}
        </div>

        <p className="font-mono text-sm text-slate-400">
          <span className="text-emerald-400">
            // same input → same defensible answer {"—"} that{"'"}s the whole
            point.
          </span>
        </p>
      </div>
    </section>
  );
}
