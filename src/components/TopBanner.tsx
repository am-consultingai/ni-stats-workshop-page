import React from "react";

const BASE = import.meta.env.BASE_URL;
const AM_LOGO = `${BASE}img/am-logo.png`;
const NI_LOGO = `${BASE}img/ni-logo.png`;
const AM_URL = "https://www.amconsultingai.com";

const NAV: [string, string][] = [
  ["Learn", "intro"],
  ["Case", "case"],
  ["Build", "build"],
];

export default function TopBanner() {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-800 bg-[#060913]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        <a
          href={AM_URL}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 transition-opacity hover:opacity-90"
          aria-label="AM Consulting — amconsultingai.com"
        >
          {/* Dark logo → sits on a bright chip so it reads on the dark banner */}
          <span className="inline-flex items-center rounded-lg bg-white px-3 py-1.5 shadow-sm">
            <img src={AM_LOGO} alt="AM Consulting" className="h-6 md:h-7 w-auto object-contain" />
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="px-4 py-2 rounded-lg text-sm font-mono font-semibold uppercase tracking-widest text-slate-300 hover:text-cyan-300 hover:bg-white/5 transition-all cursor-pointer"
            >
              {label}
            </button>
          ))}
        </nav>

        <img
          src={NI_LOGO}
          alt="Natural Intelligence"
          className="h-8 md:h-9 w-auto object-contain shrink-0"
        />
      </div>
    </div>
  );
}
