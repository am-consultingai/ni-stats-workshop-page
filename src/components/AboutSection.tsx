import React from "react";
import { User } from "lucide-react";

const BASE = import.meta.env.BASE_URL;
const AVISHAY = `${BASE}img/avishay.png`;
const AM_URL = "https://www.amconsultingai.com";

export default function AboutSection() {
  return (
    <section
      id="author"
      className="py-24 px-4 md:px-12 lg:px-24 xl:pl-36 bg-[#090d16] border-b border-slate-900"
    >
      <div className="max-w-7xl flex flex-col space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm uppercase tracking-widest font-semibold">
            <User className="w-4 h-4" />
            Who's Teaching This
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Who's Teaching This, and Why?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
          <div className="relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/10 blur-xl" />
            <img
              src={AVISHAY}
              alt="Avishay Meron"
              className="relative rounded-2xl border border-slate-800 w-full object-cover aspect-[4/5]"
            />
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Avishay Meron</h3>
              <p className="text-cyan-300 font-mono text-sm">AM Consulting · amconsultingai.com</p>
            </div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              I build AI systems and the workflows around them — with an eye on the parts that break
              in the real world: cost, reproducibility, and trust. This workshop grew out of
              Natural Intelligence's own question: how do analysts use Claude for statistics
              <span className="text-white font-medium"> without treating it as a black box?</span>
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              The answer we landed on — after actually running the experiments on your data — is
              that the win isn't out-arguing the model. It's learning the statistics well enough to
              <span className="text-white font-medium"> build deterministic skills you can trust</span>,
              and to supply the frame the tool can't. That's what these five hours are for.
            </p>
            <a
              href={AM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono font-semibold uppercase tracking-widest text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              amconsultingai.com →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
