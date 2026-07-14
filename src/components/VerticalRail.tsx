import React, { useEffect, useState } from "react";

interface Beat {
  id: string;
  name: string;
  sections: string[];
  description: string;
}

const Beats: Beat[] = [
  {
    id: "learn",
    name: "LEARN",
    description: "The deterministic mindset",
    sections: ["intro", "thesis", "problem", "shift", "flow", "concepts", "outcomes"],
  },
  {
    id: "case",
    name: "THE CASE",
    description: "Is Bing really better?",
    sections: ["case"],
  },
  {
    id: "build",
    name: "BUILD",
    description: "Skills, agenda & logistics",
    sections: ["build", "who-is-for", "logistics", "agenda", "author"],
  },
];

export default function VerticalRail() {
  const [activeBeat, setActiveBeat] = useState<string>("learn");
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) setScrollProgress(window.scrollY / scrollHeight);

      const viewportMid = window.scrollY + window.innerHeight * 0.4;
      let matchedBeat = "learn";
      for (const beat of Beats) {
        for (const secId of beat.sections) {
          const el = document.getElementById(secId);
          if (el) {
            const top = el.offsetTop;
            const bottom = top + el.offsetHeight;
            if (viewportMid >= top && viewportMid <= bottom) {
              matchedBeat = beat.id;
              break;
            }
          }
        }
      }
      setActiveBeat(matchedBeat);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBeatFirstSection = (beatId: string) => {
    const beat = Beats.find((b) => b.id === beatId);
    if (beat && beat.sections.length > 0) {
      const el = document.getElementById(beat.sections[0]);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center select-none">
      <div className="relative w-[3px] h-[360px] bg-slate-800 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,111,244,0.6)] rounded-full transition-all duration-100"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="absolute top-0 bottom-0 left-full ml-4 flex flex-col justify-between py-2 text-xs font-mono h-[360px]">
        {Beats.map((beat) => {
          const isActive = activeBeat === beat.id;
          return (
            <button
              key={beat.id}
              onClick={() => scrollToBeatFirstSection(beat.id)}
              className="group text-left focus:outline-none transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-400 border-cyan-400 shadow-[0_0_8px_#22d3ee]"
                      : "bg-slate-900 border-slate-600 group-hover:border-slate-400"
                  }`}
                />
                <span
                  className={`font-semibold tracking-wider transition-colors duration-200 ${
                    isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-slate-300"
                  }`}
                >
                  {beat.name}
                </span>
              </div>
              <p
                className={`text-[12px] ml-6 font-sans transition-colors duration-200 ${
                  isActive ? "text-slate-300 font-medium" : "text-slate-600"
                }`}
              >
                {beat.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
