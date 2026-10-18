import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { HlsVideo } from "./HlsVideo";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";

const HLS_SOURCE =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const ROLES = [
  "Full-Stack Dev",
  "AI Agent Builder",
  "Open-Source Contributor",
  "RAG Systems Engineer",
];

interface HeroProps {
  onSeeWorks?: () => void;
  onReachOut?: () => void;
  isLoading?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onSeeWorks,
  onReachOut,
  isLoading = false,
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Role cycle every 2.4s
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance
  useEffect(() => {
    if (isLoading) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, delay: 0.1 }
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(8px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.9, stagger: 0.08 },
        0.25
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isLoading]);

  const handleScrollToWorks = () => {
    if (onSeeWorks) {
      onSeeWorks();
    } else {
      const el = document.getElementById("work");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReachOut = () => {
    if (onReachOut) {
      onReachOut();
    } else {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "mailto:qjuber066@gmail.com";
      }
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col justify-between items-center overflow-hidden pt-28 md:pt-36 pb-8 px-6"
    >
      {/* Background HLS Video */}
      <HlsVideo
        src={HLS_SOURCE}
        className="absolute inset-0 w-full h-full"
        overlayClassName="bg-black/40"
      />

      {/* Atmospheric radial glow behind hero title */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[300px] bg-gradient-to-r from-[#89AACC]/15 via-[#4E85BF]/20 to-transparent blur-[120px] rounded-full z-[1]" />

      {/* Bottom fade: h-48 bg-gradient-to-t from-bg to-transparent */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg via-bg/80 to-transparent pointer-events-none z-10" />

      {/* Hero Content (centered flex-1 container) */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto select-none my-auto">
        {/* Eyebrow Status Pill */}
        <div className="blur-in inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/80 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted font-medium">
            Full-Stack & AI Systems • 2026
          </span>
        </div>

        {/* Name */}
        <h1 className="name-reveal text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-[0.95] tracking-tight text-text-primary mb-5 drop-shadow-md">
          Md Juber Quraishi
        </h1>

        {/* Role line: "A {role} based in Durgapur, India." */}
        <div className="blur-in text-base md:text-xl text-muted font-light mb-4 flex items-center justify-center gap-2 flex-wrap">
          <span>A</span>
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block text-lg md:text-2xl px-2.5 py-0.5 rounded-lg bg-surface/60 border border-white/10"
          >
            {ROLES[roleIndex]}
          </span>
          <span>based in Durgapur, India.</span>
        </div>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted/90 max-w-xl mb-6 leading-relaxed font-light">
          Crafting autonomous AI agents, production RAG pipelines, and high-performance
          full-stack applications with 168+ merged open-source contributions.
        </p>

        {/* Credibility Micro-Strip */}
        <div className="blur-in flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 text-[11px] md:text-xs text-text-primary/80 font-mono">
          <span className="px-3 py-1 rounded-full bg-surface/60 border border-stroke backdrop-blur-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#89AACC]" />
            168 Merged PRs
          </span>
          <span className="px-3 py-1 rounded-full bg-surface/60 border border-stroke backdrop-blur-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4E85BF]" />
            Top 50 MLH AI Hackathon
          </span>
          <span className="px-3 py-1 rounded-full bg-surface/60 border border-stroke backdrop-blur-sm flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Stanford ML Specialization
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex items-center gap-4 flex-wrap justify-center">
          {/* "Explore Projects": Solid button */}
          <div className="relative group rounded-full p-[2px] transition-transform duration-300 hover:scale-105 shadow-lg shadow-black/40">
            <div className="absolute -inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <button
              onClick={handleScrollToWorks}
              className="relative flex items-center gap-2 rounded-full text-sm font-medium px-7 py-3.5 bg-text-primary text-bg group-hover:bg-bg group-hover:text-text-primary transition-colors duration-300 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* "Get In Touch...": Outlined button */}
          <div className="relative group rounded-full p-[2px] transition-transform duration-300 hover:scale-105">
            <div className="absolute -inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <button
              onClick={handleReachOut}
              className="relative flex items-center gap-2 rounded-full text-sm font-medium px-7 py-3.5 border-2 border-stroke bg-bg/80 backdrop-blur-sm text-text-primary group-hover:border-transparent transition-all duration-300 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-muted group-hover:text-text-primary transition-colors" />
              <span>Get In Touch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Refined Scroll Indicator: Never overlaps, sits cleanly in the bottom layout flow */}
      <div
        onClick={handleScrollToWorks}
        className="relative z-20 mt-8 mb-2 flex flex-col items-center cursor-pointer group select-none transition-opacity duration-300 hover:opacity-100 opacity-75"
        role="button"
        aria-label="Scroll down to projects"
      >
        <span className="text-[10px] text-muted group-hover:text-text-primary uppercase tracking-[0.25em] mb-2 font-mono transition-colors">
          Scroll to explore
        </span>

        {/* Animated Pill Mouse */}
        <div className="w-5 h-8 rounded-full border border-stroke group-hover:border-white/30 flex items-start justify-center p-1 transition-colors">
          <div className="w-1 h-2 rounded-full accent-gradient animate-scroll-down" />
        </div>

        <ChevronDown className="w-3.5 h-3.5 text-muted group-hover:text-text-primary group-hover:translate-y-0.5 transition-all mt-1 opacity-60" />
      </div>
    </section>
  );
};
