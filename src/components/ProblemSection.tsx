import React from "react";
import {
  AlertTriangle,
  FlaskConical,
  TrendingUp,
  Share2,
  RefreshCw,
} from "lucide-react";

type FailureMode = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const failureModes: FailureMode[] = [
  {
    icon: FlaskConical,
    title: "Wrong test for the shape",
    body:
      "EPC is 79% zeros with skew around 12. A t-test's assumptions simply don't hold on that distribution, yet it still prints a tidy, confident p-value that reads as if they did.",
  },
  {
    icon: TrendingUp,
    title: "Thin-slice whales",
    body:
      "A handful of big conversions inside a 431-click Bing slice can invent a $2 EPC gap out of pure noise. The ranking flips on a few lucky click-outs, not on real partner quality.",
  },
  {
    icon: Share2,
    title: "Rows aren't independent",
    body:
      "One visit can produce several click-outs, so the nominal n overstates how much evidence you actually have. Effective n is smaller than nominal n, and a naive test over-fires.",
  },
  {
    icon: RefreshCw,
    title: "Non-reproducible",
    body:
      "Re-ask the model and you get a different analysis path every run, different caveats, a different number. There is nothing stable underneath to build a repeatable team process on.",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-24 px-4 md:px-12 lg:px-24 xl:pl-36 bg-slate-950/40 border-b border-slate-900"
    >
      <div className="max-w-7xl flex flex-col space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm uppercase tracking-widest font-semibold">
            <AlertTriangle className="w-4 h-4" /> The Trap
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Does Ad-Hoc AI Analysis Go Wrong?
          </h2>
          <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug">
            The naive move looks clean {"—"} and is often wrong.
          </p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Asking an LLM {"—"} or reaching for a t-test {"—"} on a
            drill-down slice can produce a confident number that doesn{"'"}t
            survive scrutiny. The output arrives formatted, decisive, and
            plausible, which is exactly what makes the failure so easy to ship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {failureModes.map((mode) => {
            const Icon = mode.icon;
            return (
              <div
                key={mode.title}
                className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 space-y-4"
              >
                <div className="w-12 h-12 rounded-lg bg-rose-950/25 border border-rose-800/40 flex items-center justify-center text-rose-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white">
                  {mode.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {mode.body}
                </p>
              </div>
            );
          })}
        </div>

        <p className="font-mono text-sm text-slate-400">
          <span className="text-rose-400">
            // A clean-looking answer is not the same as a defensible one.
          </span>
        </p>
      </div>
    </section>
  );
}
