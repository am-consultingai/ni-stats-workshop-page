import React from "react";
import {
  Hammer,
  FileText,
  Code2,
  ShieldCheck,
  Terminal,
  Wrench,
  Play,
  CheckCircle2,
  Package,
} from "lucide-react";

const anatomy = [
  {
    label: "SKILL.md",
    icon: FileText,
    title: "the wrapper",
    body: "A thin wrapper that tells the agent when to reach for this skill and how to run it. No math lives here — just intent and invocation.",
  },
  {
    label: "the script",
    icon: Code2,
    title: "the math",
    body: "Reviewed, seeded Python that imports shared primitives from ni_core, does the actual computation, and prints a VALIDATION block you can read.",
  },
  {
    label: "the validation",
    icon: ShieldCheck,
    title: "the proof",
    body: "A simulation that proves the skill is right — so you trust the number because the method checks itself, not because the agent said so.",
  },
];

const youWillDo = [
  "Build or extend a deterministic skill from the 4-beat loop — turn one statistic into something the agent can run.",
  "Run it on a real slice of NI data and read its VALIDATION block to know whether the answer holds.",
  "Compose the skills into the /decide orchestrator and confirm byte-identical output on a second run.",
  "Leave with the repo — notebooks and skills — so your team can run the same methods next week.",
];

export default function BuildSection() {
  return (
    <section
      id="build"
      className="py-24 px-4 md:px-12 lg:px-24 xl:pl-36 bg-slate-900/40 border-b border-slate-900"
    >
      <div className="max-w-7xl flex flex-col space-y-12">
        <div className="flex flex-col space-y-5 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm uppercase tracking-widest font-semibold">
            <Hammer className="w-4 h-4" />
            Hands-On
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Can You Build One of These Skills Yourself?
          </h2>
          <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug">
            Yes {"—"} that{"'"}s the point. You{"'"}ll build and run the
            deterministic skills live.
          </p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            The workshop is hands-on. You follow the 4-beat loop to turn a
            statistic into a skill the agent runs, then compose the skills into
            the <span className="font-mono text-cyan-300">/decide</span>{" "}
            orchestrator and watch it produce the same memo twice.
          </p>
        </div>

        <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 flex flex-col space-y-6">
          <div className="flex flex-col space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
              Anatomy of a skill
            </span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-white">
              Three parts, one honest number
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {anatomy.map((part) => {
              const Icon = part.icon;
              return (
                <div
                  key={part.label}
                  className="bg-[#0a0e18] border border-slate-800 rounded-xl p-5 flex flex-col space-y-3"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan-950/25 border border-cyan-800/40 flex items-center justify-center text-cyan-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-sm text-cyan-300">
                    {part.label}
                  </span>
                  <span className="font-display font-bold text-white">
                    {part.title}
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {part.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 flex flex-col space-y-4">
            <div className="w-12 h-12 rounded-lg bg-cyan-950/25 border border-cyan-800/40 flex items-center justify-center text-cyan-300">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              What you{"'"}ll do
            </h3>
            <ul className="flex flex-col space-y-3">
              {youWillDo.map((item, i) => {
                const Icon = i === 0 ? Play : i === 3 ? Package : CheckCircle2;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-cyan-300 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 flex flex-col space-y-4">
            <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm">
              <Terminal className="w-4 h-4" />
              run it live
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              A skill is just a command. You point it at two partners and a
              slice, and it prints a confidence interval and a validation you
              can defend.
            </p>
            <pre className="font-mono text-xs md:text-sm text-slate-300 bg-[#0a0e18] border border-slate-800 rounded-xl p-4 overflow-x-auto">
              <code>
                {
                  '$ python significance.py --group partner \\\n    --a "Summit Direct Business" \\\n    --b "Cedar Business Bank" \\\n    --slice channel=Bing --cluster\n# → 95% CI [-2.4, +7.8] includes 0 · VALIDATION: coin-flip'
                }
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
