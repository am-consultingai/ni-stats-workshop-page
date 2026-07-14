import React from "react";
import VerticalRail from "./components/VerticalRail";
import SiteMap from "./components/SiteMap";
import TopBanner from "./components/TopBanner";
import HeroIntro from "./components/HeroIntro";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import ShiftSection from "./components/ShiftSection";
import FlowSection from "./components/FlowSection";
import ConceptsSection from "./components/ConceptsSection";
import WalkawaySection from "./components/WalkawaySection";
import CaseSection from "./components/CaseSection";
import BuildSection from "./components/BuildSection";
import WhoForSection from "./components/WhoForSection";
import LogisticsSection from "./components/LogisticsSection";
import AgendaSection from "./components/AgendaSection";
import AboutSection from "./components/AboutSection";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#060913] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[35%] right-10 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-10 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[130px] pointer-events-none z-0" />

      <TopBanner />
      <VerticalRail />
      <SiteMap />

      <main className="relative z-10 pt-16">
        {/* Hero */}
        <HeroIntro />
        {/* 1. Why re-ask the model every time? */}
        <HeroSection />
        {/* 2. Why does ad-hoc AI analysis go wrong? */}
        <ProblemSection />
        {/* 3. What actually changes — what does the analyst own? */}
        <ShiftSection />
        {/* 4. How does the workshop flow? */}
        <FlowSection />
        {/* 5. Which concepts will you learn? */}
        <ConceptsSection />
        {/* 6. What will you walk away able to do? */}
        <WalkawaySection />
        {/* 7. The worked case: is Bing really better? */}
        <CaseSection />
        {/* 8. Can you build one yourself? */}
        <BuildSection />
        {/* 9. Is this workshop for you? */}
        <WhoForSection />
        {/* 10. Format & logistics */}
        <LogisticsSection />
        {/* 11. The full-day agenda */}
        <AgendaSection />
        {/* 12. Who's teaching this? */}
        <AboutSection />
      </main>
    </div>
  );
}
