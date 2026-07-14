import React from "react";
import { Users, Check, X, Info } from "lucide-react";

const forYou = [
  'You field drill-down and "should we reorder / move budget?" questions.',
  "You already use Claude or Cursor for analysis and want to stop treating it as a black box.",
  "You want reproducible methods your whole team can rely on.",
  'You want to know when the honest answer is "this is noise".',
];

const holdOff = [
  "You want deep theoretical proofs over practical judgment.",
  "You never touch data or AI tools.",
  "You need a turnkey dashboard, not a way of reasoning.",
];

export default function WhoForSection() {
  return (
    <section
      id="who-is-for"
      className="py-24 px-4 md:px-12 lg:px-24 xl:pl-36 bg-[#090d16] border-b border-slate-900"
    >
      <div className="max-w-7xl flex flex-col space-y-12">
        <div className="flex flex-col space-y-5 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm uppercase tracking-widest font-semibold">
            <Users className="w-4 h-4" />
            Audience
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Is This Workshop Built for You?
          </h2>
          <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug">
            Built for NI analysts who make calls on noisy, sliced data every
            week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 flex flex-col space-y-5">
            <div className="w-12 h-12 rounded-lg bg-emerald-950/25 border border-emerald-800/40 flex items-center justify-center text-emerald-300">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              This is for you if
            </h3>
            <ul className="flex flex-col space-y-3">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 flex flex-col space-y-5">
            <div className="w-12 h-12 rounded-lg bg-rose-950/25 border border-rose-800/40 flex items-center justify-center text-rose-300">
              <X className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Maybe hold off if
            </h3>
            <ul className="flex flex-col space-y-3">
              {holdOff.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-rose-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-cyan-950/25 border border-cyan-800/40 flex items-center justify-center text-cyan-300 shrink-0">
            <Info className="w-6 h-6" />
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-display text-lg font-bold text-white">
              Prerequisites
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Comfort reading a little Python/pandas helps but isn{"'"}t required
              {"—"} notebooks and skills are provided. Bring a laptop with{" "}
              <span className="font-mono text-cyan-300">VS Code</span> or{" "}
              <span className="font-mono text-cyan-300">Cursor</span> + Claude.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
