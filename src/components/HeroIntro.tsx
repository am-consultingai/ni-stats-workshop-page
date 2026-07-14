import React from "react";
import { ChevronDown } from "lucide-react";

export default function HeroIntro() {
  return (
    <section
      id="intro"
      className="relative min-h-[82vh] flex flex-col justify-center px-4 md:px-12 lg:px-24 xl:pl-36 pt-16 pb-20 border-b border-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141923_1px,transparent_1px),linear-gradient(to_bottom,#141923_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_45%,#000_70%,transparent_100%)] opacity-40 z-0" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 w-fit mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono font-medium text-cyan-300 tracking-widest uppercase">
            AM Consulting · Analyst Workshop · Natural Intelligence
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.95]">
          Deterministic Analysis{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
            for Analysts
          </span>
        </h1>

        <p className="mt-8 text-slate-200 text-2xl md:text-3xl font-display font-medium leading-snug max-w-3xl">
          Build the statistical test once — reviewed, seeded, reproducible — and let the agent run it.
          Stop re-asking the model to redo the math.
        </p>

        <div className="mt-14 flex items-center gap-2 text-slate-400 font-mono text-sm uppercase tracking-widest">
          <ChevronDown className="w-5 h-5 animate-bounce text-cyan-300" />
          <span>The analyst's case for building, not re-prompting</span>
        </div>
      </div>
    </section>
  );
}
