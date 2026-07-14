import React from "react";
import {
  GitBranch,
  Compass,
  Database,
  ShieldCheck,
  Server,
  Gauge,
  FileCheck2,
  Users,
  ArrowDownToLine,
  Workflow,
} from "lucide-react";

type Owned = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const analystOwns: Owned[] = [
  {
    icon: Compass,
    title: "The question & frame",
    body:
      "What are we actually deciding, and what would change our mind? You set the question the tool answers.",
  },
  {
    icon: Database,
    title: "Domain grounding",
    body:
      "NI's definitions and the confounders the model can't know — seasonality, partner caps, traffic mix.",
  },
  {
    icon: ShieldCheck,
    title: "Validation",
    body:
      "Is this output trustworthy? You judge whether the number earned the confidence it's printed with.",
  },
];

const toolGuarantees: Owned[] = [
  {
    icon: ArrowDownToLine,
    title: "The floor",
    body:
      "Rigor that holds under terse prompts, rushed analysts, and cheaper models — the same procedure every time.",
  },
  {
    icon: Server,
    title: "Near-free, fast compute",
    body:
      "The statistics run in seconds at effectively no marginal cost, so cost never rations rigor.",
  },
  {
    icon: Workflow,
    title: "Unattended & composable",
    body:
      "Runs without a human in the loop and slots into larger procedures as one reliable building block.",
  },
];

type Pillar = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  line: string;
};

const pillars: Pillar[] = [
  {
    icon: Database,
    title: "Proprietary grounding",
    line: "Your definitions and confounders, baked into the analysis.",
  },
  {
    icon: Gauge,
    title: "Cost & speed at scale",
    line: "Rigorous stats in seconds, at effectively zero marginal cost.",
  },
  {
    icon: FileCheck2,
    title: "Reproducibility & auditability",
    line: "Same inputs, same answer — with a trail you can inspect.",
  },
  {
    icon: Users,
    title: "Consistency across the team",
    line: "Every analyst ships the same defensible procedure.",
  },
  {
    icon: ArrowDownToLine,
    title: "The floor, not the ceiling",
    line: "Guaranteed baseline rigor, even on a rushed, terse prompt.",
  },
  {
    icon: Server,
    title: "Automation & composability",
    line: "Runs unattended and composes into bigger workflows.",
  },
];

export default function ShiftSection() {
  return (
    <section
      id="shift"
      className="py-24 px-4 md:px-12 lg:px-24 xl:pl-36 bg-[#090d16] border-b border-slate-900"
    >
      <div className="max-w-7xl flex flex-col space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm uppercase tracking-widest font-semibold">
            <GitBranch className="w-4 h-4" /> The Shift
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Actually Changes {"—"} What Does the Analyst Own?
          </h2>
          <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug">
            You stop re-reasoning the math, and start owning the question.
          </p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Statistics literacy doesn{"'"}t let you out-argue Claude on a single
            answer {"—"} it lets you build deterministic, domain-grounded
            skills and supply the frame the tool can{"'"}t. The math becomes
            infrastructure; your judgment becomes the scarce input.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#0b101c] border border-emerald-900/40 rounded-2xl p-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-emerald-300 font-mono text-xs uppercase tracking-widest font-semibold">
              <Compass className="w-4 h-4" /> The analyst owns
            </div>
            <div className="space-y-4">
              {analystOwns.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-center text-emerald-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-display font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-[#0b101c] border border-cyan-900/40 rounded-2xl p-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-xs uppercase tracking-widest font-semibold">
              <ShieldCheck className="w-4 h-4" /> The tool guarantees
            </div>
            <div className="space-y-4">
              {toolGuarantees.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-cyan-950/25 border border-cyan-800/40 flex items-center justify-center text-cyan-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-display font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 space-y-4"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-950/25 border border-cyan-800/40 flex items-center justify-center text-cyan-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.line}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
