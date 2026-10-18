import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { HlsVideo } from "./HlsVideo";
import { Mail, ArrowUpRight } from "lucide-react";

const HLS_SOURCE =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

const MARQUEE_TEXT =
  "MD JUBER QURAISHI • FULL-STACK & AI DEVELOPER • 168 MERGED OPEN-SOURCE PRS • AUTONOMOUS AGENTS • RAG PIPELINES • ".repeat(
    5
  );

const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/codewithzubair07" },
  { name: "LinkedIn", href: "https://linkedin.com/in/codewithzubair07" },
  { name: "Email", href: "mailto:qjuber066@gmail.com" },
  { name: "Call / WA", href: "tel:+918637069862" },
];

export const Footer: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  // GSAP Marquee: xPercent: -50, duration: 40, ease: "none", repeat: -1
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden border-t border-stroke"
    >
      {/* Background HLS Video (flipped vertically: scale-y-[-1], heavier overlay: bg-black/60) */}
      <HlsVideo
        src={HLS_SOURCE}
        flipped={true}
        className="absolute inset-0 w-full h-full"
        overlayClassName="bg-black/60"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-stroke inline-block" />
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
            Let's Connect
          </span>
          <span className="w-8 h-px bg-stroke inline-block" />
        </div>

        {/* Section Heading */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-6 max-w-2xl">
          Let’s build something extraordinary together.
        </h2>

        <p className="text-sm md:text-base text-muted max-w-md mb-10 leading-relaxed">
          Open to internships, freelance projects, and remote full-stack / AI developer roles. Based in Durgapur, India.
        </p>

        {/* CTA: Email button with gradient hover border ring */}
        <div className="relative group rounded-full p-[2px] transition-transform duration-300 hover:scale-105 mb-16 md:mb-20">
          <div className="absolute -inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <a
            href="mailto:qjuber066@gmail.com"
            className="relative flex items-center gap-3 rounded-full px-8 py-4 bg-surface text-text-primary text-sm md:text-base font-medium border border-stroke group-hover:border-transparent transition-all duration-300 cursor-pointer shadow-xl"
          >
            <Mail className="w-4 h-4 text-muted group-hover:text-text-primary transition-colors" />
            <span>qjuber066@gmail.com</span>
            <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>

      {/* GSAP Marquee */}
      <div className="relative w-full overflow-hidden py-6 border-y border-stroke/40 bg-surface/20 backdrop-blur-sm select-none mb-12">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap will-change-transform"
        >
          <span className="text-xl md:text-3xl font-display italic uppercase tracking-[0.2em] text-text-primary/25 pr-4">
            {MARQUEE_TEXT}
          </span>
          <span className="text-xl md:text-3xl font-display italic uppercase tracking-[0.2em] text-text-primary/25 pr-4">
            {MARQUEE_TEXT}
          </span>
        </div>
      </div>

      {/* Footer Bar: Social links + Green pulsing dot + Availability status */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
        {/* Social Links */}
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider text-muted hover:text-text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Availability Status: Green pulsing dot */}
        <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface/60 border border-stroke text-xs text-text-primary/90">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="tracking-wide">Open to internships & remote roles</span>
        </div>

        {/* Copyright */}
        <div className="text-xs text-muted/60 font-mono">
          © {new Date().getFullYear()} Md Juber Quraishi.
        </div>
      </div>
    </footer>
  );
};

