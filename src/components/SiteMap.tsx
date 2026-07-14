import React, { useEffect, useState } from "react";
import { Compass, X } from "lucide-react";

const SECTIONS: [string, string][] = [
  ["intro", "Intro"],
  ["thesis", "The core idea"],
  ["problem", "The trap"],
  ["shift", "The shift"],
  ["flow", "How it flows"],
  ["concepts", "Curriculum"],
  ["outcomes", "Outcomes"],
  ["case", "The worked case"],
  ["build", "Hands-on"],
  ["who-is-for", "Who it's for"],
  ["logistics", "Logistics"],
  ["agenda", "Agenda"],
  ["author", "About"],
];

export default function SiteMap() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("intro");

  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.35;
      let cur = SECTIONS[0][0];
      for (const [id] of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-60 max-h-[70vh] overflow-y-auto rounded-2xl border border-slate-800 bg-[#0a0e18]/95 backdrop-blur-md p-2 shadow-2xl shadow-black/50">
          <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-widest text-slate-500">
            Jump to
          </div>
          {SECTIONS.map(([id, label], i) => {
            const on = active === id;
            return (
              <button
                key={id}
                onClick={() => go(id)}
                className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm text-left transition-colors cursor-pointer ${
                  on ? "bg-cyan-500/10 text-cyan-200" : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="font-mono text-[10px] text-slate-600 w-5 tabular-nums">
                  {String(i).padStart(2, "0")}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${on ? "bg-cyan-400" : "bg-slate-600"}`}
                />
                <span className="truncate">{label}</span>
              </button>
            );
          })}
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close site map" : "Open site map"}
        className="flex items-center gap-2 rounded-full border border-slate-700 bg-[#0b101c]/90 backdrop-blur-md pl-3.5 pr-4 py-2.5 text-slate-200 shadow-lg shadow-black/40 hover:border-cyan-700/70 hover:text-cyan-100 transition-colors cursor-pointer"
      >
        {open ? <X className="w-4 h-4" /> : <Compass className="w-4 h-4 text-cyan-300" />}
        <span className="text-xs font-mono font-semibold uppercase tracking-widest">
          {open ? "Close" : "Sections"}
        </span>
      </button>
    </div>
  );
}
