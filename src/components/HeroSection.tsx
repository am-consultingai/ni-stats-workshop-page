import React from "react";
import { Sparkles, RefreshCw, Lock, Check, X } from "lucide-react";

const REASK = [
  "A different analysis path each run",
  "Sometimes the wrong test for the data",
  "Re-reasons — and re-bills — every time",
  "No audit trail you can defend",
];

const DETERMINISTIC = [
  "The same gated procedure every run",
  "The right test, baked in and reviewed",
  "Byte-identical output — seeded",
  "Short, readable code you can audit",
];

export default function HeroSection() {
  return (
    <section
      id="thesis"
      className="py-24 px-4 md:px-12 lg:px-24 xl:pl-36 bg-slate-900/40 border-b border-slate-900"
    >
      <div className="max-w-7xl flex flex-col space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm uppercase tracking-widest font-semibold">
            <Sparkles className="w-4 h-4" />
            The core idea
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Should You Re-Ask the Model Every Time?
          </h2>
          <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug">
            When a question recurs, don't make the agent re-analyze the data. Build the test once;
            the agent runs it.
          </p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            An analyst's real edge isn't out-arguing Claude on any single answer — it's building
            <span className="text-cyan-300 font-medium"> deterministic, domain-grounded skills</span> that
            are cheaper, reproducible, and always rigorous, and supplying the frame the tool can't.
            The tool guarantees the floor; you guarantee the right question.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Re-ask */}
          <div className="bg-[#0b101c] border border-rose-900/40 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-rose-950/30 border border-rose-800/40 flex items-center justify-center text-rose-300">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Re-prompt the model each time</h3>
            </div>
            <ul className="space-y-2.5">
              {REASK.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <X className="w-4 h-4 mt-0.5 text-rose-400 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deterministic */}
          <div className="bg-[#0b101c] border border-emerald-800/40 rounded-2xl p-6 space-y-4 shadow-[0_0_24px_rgba(16,185,129,0.06)]">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-emerald-950/30 border border-emerald-800/40 flex items-center justify-center text-emerald-300">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white">Run a deterministic skill</h3>
            </div>
            <ul className="space-y-2.5">
              {DETERMINISTIC.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <Check className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-mono text-xs md:text-sm text-slate-400 max-w-3xl">
          <span className="text-emerald-300">$ python decide.py --slice channel=Bing</span> → run it
          twice, get the exact same memo. That reproducibility is the whole point.
        </p>
      </div>
    </section>
  );
}
