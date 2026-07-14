import React from "react";
import {
  CalendarClock,
  Clock,
  Layers,
  Boxes,
  HelpCircle,
  Laptop,
  Database,
  CalendarDays,
  MonitorPlay,
} from "lucide-react";

const stats = [
  { value: "~5 hrs", label: "duration", icon: Clock },
  { value: "8", label: "modules", icon: Layers },
  { value: "8", label: "deterministic skills", icon: Boxes },
  { value: "1", label: "recurring question", icon: HelpCircle },
];

const details = [
  {
    icon: MonitorPlay,
    title: "Format",
    body: "Hands-on. Avishay drives live and invites the room to work along, with prepared fallbacks so nobody gets stuck if something breaks.",
  },
  {
    icon: Laptop,
    title: "What to bring",
    body: "A laptop with VS Code or Cursor + Claude. The repo — notebooks and skills — is provided.",
  },
  {
    icon: Database,
    title: "The data",
    body: "NI's real online-banking mock dataset — visits, click-outs, partners, positions, and a daily cost table — with your own definitions and confounders.",
  },
  {
    icon: CalendarDays,
    title: "When",
    body: "A single 09:00–14:00 session (5 hours, two short breaks), date confirmed with your team.",
  },
];

export default function LogisticsSection() {
  return (
    <section
      id="logistics"
      className="py-24 px-4 md:px-12 lg:px-24 xl:pl-36 bg-slate-900/40 border-b border-slate-900"
    >
      <div className="max-w-7xl flex flex-col space-y-12">
        <div className="flex flex-col space-y-5 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-cyan-300 font-mono text-sm uppercase tracking-widest font-semibold">
            <CalendarClock className="w-4 h-4" />
            Logistics
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What{"'"}s the Format, and What{"'"}s Expected of You?
          </h2>
          <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug">
            One ~5-hour hands-on session, working along on NI{"'"}s real data.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 flex flex-col space-y-3"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-950/25 border border-cyan-800/40 flex items-center justify-center text-cyan-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <div
                key={detail.title}
                className="bg-[#0b101c] border border-slate-800 rounded-2xl p-6 flex flex-col space-y-4"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-950/25 border border-cyan-800/40 flex items-center justify-center text-cyan-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {detail.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {detail.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
