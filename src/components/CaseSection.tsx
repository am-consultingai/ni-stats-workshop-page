import React from "react";
import {
  Microscope,
  Megaphone,
  BarChart3,
  Layers,
  Scale,
  History,
  Activity,
  Target,
  Gavel,
} from "lucide-react";

type Verdict = {
  label: string;
  tone: "rose" | "emerald";
};

type Step = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
  result: string;
  verdict?: Verdict;
  gate?: string;
};

const steps: Step[] = [
  {
    icon: Megaphone,
    title: "The claim",
    body:
      "In Bing, Summit Direct Business EPC beats Cedar. The stakeholder wants the chart reordered on the spot.",
    result: "EPC: Summit $10.48 vs Cedar $8.16 (n=431) → \"Reorder the chart!\"",
    verdict: { label: "naive read", tone: "rose" },
  },
  {
    icon: BarChart3,
    title: "Profile",
    body:
      "The EPC distribution is 79% zeros with skew around 12; the top 1% of click-outs carries 25% of revenue. The mean is not a typical value.",
    result: "zeros=79% · skew≈12 · top-1% = 25% of revenue → no t-test",
    gate: "proceed with bootstrap / rank methods",
  },
  {
    icon: Layers,
    title: "Effective-n",
    body:
      "Click-outs share visits, so rows are not independent. The design effect is above 1, which shrinks how much evidence 431 clicks really carry.",
    result: "design effect > 1 → use effective-n, cluster the bootstrap",
    gate: "proceed on the effective n, not the nominal n",
  },
  {
    icon: Scale,
    title: "Significance (cluster-aware)",
    body:
      "Run the cluster-aware comparison. The mean difference is small and its confidence interval comfortably includes zero.",
    result: "mean diff +2.3, 95% CI [−2.4, +7.8] → includes 0",
    verdict: { label: "coin-flip", tone: "rose" },
  },
  {
    icon: History,
    title: "Bayesian inference",
    body:
      "Update on each partner's history with a prior instead of trusting one thin slice. The posteriors sit almost on top of each other — and the ordering reverses. This was regression to the mean.",
    result: "posteriors 8.39 vs 8.64 · P(Summit > Cedar) = 43%",
    verdict: { label: "ordering reverses", tone: "rose" },
  },
  {
    icon: Activity,
    title: "Trend / stationarity",
    body:
      "Check that the historical prior is safe to lean on. Bing CTR stays inside its normal monthly band with no regime break.",
    result: "Bing CTR within monthly band · no regime break",
    verdict: { label: "prior is stable", tone: "emerald" },
  },
  {
    icon: Target,
    title: "Reframe",
    body:
      "The decision was never about a single-slice EPC gap. Decide on profit per visit — earnings minus cost — via the cost join.",
    result: "decide on profit/visit (EPV − CPV), not one EPC gap",
    gate: "reframe to the decision metric",
  },
  {
    icon: Gavel,
    title: "Verdict",
    body:
      "Do NOT reorder the chart for Bing. The apparent flip is a thin-slice coin-flip that history reverses. And here is what we did NOT establish: causality, per-visit cost, stability over time.",
    result: "Decision: keep the current order for Bing",
    verdict: { label: "decided", tone: "emerald" },
  },
];

function VerdictPill({ verdict }: { verdict: Verdict }) {
  const tone =
    verdict.tone === "emerald"
      ? "text-emerald-300 bg-emerald-950/25 border-emerald-800/40"
      : "text-rose-300 bg-rose-950/25 border-rose-800/40";
  return (
    <span
      className={`inline-block font-mono text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1 border ${tone}`}
    >
      {verdict.label}
    </span>
  );
}

export default function CaseSection() {
  return (
    <section
      id="case"
      className="py-24 px-4 md:px-12 lg:px-24 xl:pl-36 bg-[#090d16] border-b border-slate-900"
    >
      <div className="max-w-7xl flex flex-col space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm uppercase tracking-widest font-semibold">
            <Microscope className="w-4 h-4" /> The Worked Case
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Is Bing Really Better? Watch the Procedure Answer It.
          </h2>
          <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug">
            The naive read says {"“"}reorder for Bing.{"”"} The gated
            procedure says: don{"'"}t.
          </p>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            This is the case we build across the workshop, on Natural
            Intelligence{"'"}s real online-banking data {"—"} one gate at a
            time, each stage of{" "}
            <span className="font-mono text-cyan-300">/decide</span> refusing to
            conclude before the evidence allows it.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-800/60 via-slate-800 to-emerald-800/60" />
          <ol className="flex flex-col space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-lg bg-cyan-950/25 border border-cyan-800/40 flex items-center justify-center text-cyan-300 z-10">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 flex flex-col space-y-3">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <h3 className="font-display text-lg font-semibold text-white">
                        <span className="font-mono text-sm text-cyan-400/80 mr-2">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step.title}
                      </h3>
                      {step.verdict ? <VerdictPill verdict={step.verdict} /> : null}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.body}
                    </p>
                    <div className="font-mono text-xs md:text-sm text-slate-200 bg-slate-950/50 border border-slate-800/70 rounded-lg px-3 py-2 overflow-x-auto">
                      <span className="text-slate-500">{"› "}</span>
                      {step.result}
                    </div>
                    {step.gate ? (
                      <p className="font-mono text-xs text-emerald-300/90">
                        <span className="text-slate-500">gate: </span>
                        {step.gate}
                      </p>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="font-mono text-sm text-slate-400">
          <span className="text-emerald-400">
            // the flip was a thin-slice coin-flip {"—"} history reverses it.
          </span>
        </p>
      </div>
    </section>
  );
}
