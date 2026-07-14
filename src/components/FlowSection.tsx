import React from "react";
import {
  Route,
  PenTool,
  FunctionSquare,
  Boxes,
  CheckCircle2,
} from "lucide-react";

type Step = {
  number: string;
  title: string;
  tagline: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const steps: Step[] = [
  {
    number: "01",
    title: "By hand",
    tagline: "UNDERSTAND",
    desc:
      "Do the statistic yourself on real NI data, so you know exactly what the skill is doing before you hand it off.",
    icon: PenTool,
  },
  {
    number: "02",
    title: "Extract",
    tagline: "MAKE IT DETERMINISTIC",
    desc:
      "Pull the reusable computation out into a reviewed, seeded Python function —same inputs, same output, every run.",
    icon: FunctionSquare,
  },
  {
    number: "03",
    title: "Wrap",
    tagline: "GIVE IT TO THE AGENT",
    desc:
      "Expose it as a Claude skill: a thin SKILL.md pointing at the script, which the agent runs instead of improvising the math.",
    icon: Boxes,
  },
  {
    number: "04",
    title: "Validate",
    tagline: "PROVE IT'S RIGHT",
    desc:
      "A simulation —A/A calibration, coverage, recovers-truth —becomes the test that proves the skill and earns your trust in its output.",
    icon: CheckCircle2,
  },
];

export default function FlowSection() {
  return (
    <section
      id="flow"
      className="py-24 px-4 md:px-12 lg:px-24 xl:pl-36 bg-slate-900/40 border-b border-slate-900"
    >
      <div className="max-w-7xl flex flex-col space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm uppercase tracking-widest font-semibold">
            <Route className="w-4 h-4" /> How the Workshop Flows
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How Does the Workshop Take You From Concepts to a Working Skill?
          </h2>
          <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug">
            Every module runs the same 4-beat loop {"—"} then they compose
            into one gated procedure.
          </p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            You learn each statistic by doing it by hand, then turn it into a
            deterministic skill the agent runs. By the end, the reasoning lives
            in code you reviewed {"—"} not in a prompt you hope holds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-bold text-cyan-400">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-cyan-950/25 border border-cyan-800/40 flex items-center justify-center text-cyan-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="font-mono text-xs uppercase tracking-widest font-semibold text-emerald-300">
                  {step.tagline}
                </div>
                <h3 className="text-lg font-display font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        <p className="font-mono text-sm text-slate-400 max-w-3xl">
          <span className="text-cyan-400">{"// "}</span>
          The 8 modules spiral from{" "}
          <span className="text-slate-200">
            {"“"}can I trust this average?{"”"}
          </span>{" "}
          up to the{" "}
          <span className="text-emerald-300">/decide</span> orchestrator that
          runs the whole procedure end to end.
        </p>
      </div>
    </section>
  );
}
