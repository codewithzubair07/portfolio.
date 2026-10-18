import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface ExplorationItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  rotation: number;
}

const EXPLORATION_ITEMS: ExplorationItem[] = [
  {
    id: "exp-1",
    title: "Hotel Management Platform",
    tag: "MERN Stack / REST APIs",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    rotation: -4,
  },
  {
    id: "exp-2",
    title: "Google Cloud Gen AI Agent",
    tag: "ADK & BigQuery MCP",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    rotation: 3,
  },
  {
    id: "exp-3",
    title: "Rust Mutation Fuzzing",
    tag: "vero-audit-guard",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    rotation: -2,
  },
  {
    id: "exp-4",
    title: "WebSocket Auth Hardening",
    tag: "Xconfess Rate Limiting",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    rotation: 4,
  },
  {
    id: "exp-5",
    title: "Midnight ZK Contract",
    tag: "Compact Smart Contracts",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    rotation: -3,
  },
  {
    id: "exp-6",
    title: "AI Integration Workshop",
    tag: "50+ Participants Lead",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    rotation: 2,
  },
];

export const Explorations: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinnedRef = useRef<HTMLDivElement | null>(null);
  const colLeftRef = useRef<HTMLDivElement | null>(null);
  const colRightRef = useRef<HTMLDivElement | null>(null);

  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );

  useEffect(() => {
    const section = sectionRef.current;
    const pinned = pinnedRef.current;
    const colLeft = colLeftRef.current;
    const colRight = colRightRef.current;

    if (!section || !pinned || !colLeft || !colRight) return;

    const ctx = gsap.context(() => {
      // Pin Layer 1: Pinned Center (z-10)
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: pinned,
        pinSpacing: false,
      });

      // Layer 2: Parallax Columns (z-20)
      // Left column parallax
      gsap.fromTo(
        colLeft,
        { y: 80 },
        {
          y: -280,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      // Right column parallax (moves faster with initial offset)
      gsap.fromTo(
        colRight,
        { y: 260 },
        {
          y: -460,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const selectedItem =
    selectedItemIndex !== null ? EXPLORATION_ITEMS[selectedItemIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + EXPLORATION_ITEMS.length) %
          EXPLORATION_ITEMS.length
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % EXPLORATION_ITEMS.length);
    }
  };

  return (
    <section
      id="explorations"
      ref={sectionRef}
      className="relative min-h-[300vh] bg-bg overflow-hidden"
    >
      {/* Layer 1: Pinned Center (z-10) */}
      <div
        ref={pinnedRef}
        className="h-screen w-full flex items-center justify-center z-10 pointer-events-none sticky top-0"
      >
        <div className="max-w-xl text-center px-6 pointer-events-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke inline-block" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
              Explorations
            </span>
            <span className="w-8 h-px bg-stroke inline-block" />
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl text-text-primary tracking-tight font-light mb-4">
            Developer{" "}
            <span className="font-display italic font-normal">playground</span>
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-muted max-w-md mx-auto mb-8 leading-relaxed">
            Open-source repositories, agent prototypes, and full-stack experiments on GitHub.
          </p>

          {/* GitHub button with gradient hover border ring */}
          <div className="inline-flex">
            <div className="relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <a
                href="https://github.com/codewithzubair07"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 rounded-full px-6 py-3 bg-surface/90 backdrop-blur-md text-text-primary text-xs uppercase tracking-wider font-medium border border-stroke group-hover:border-transparent transition-all duration-300 cursor-pointer"
              >
                <span>Follow on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2: Parallax Columns (z-20, absolute) */}
      <div className="absolute inset-0 z-20 pointer-events-none pt-[15vh]">
        <div className="max-w-[1400px] mx-auto px-6 h-full">
          <div className="grid grid-cols-2 gap-8 md:gap-40 h-full">
            {/* Column 1 (Left 3 items) */}
            <div
              ref={colLeftRef}
              className="flex flex-col gap-32 md:gap-48 items-start pointer-events-auto"
            >
              {EXPLORATION_ITEMS.slice(0, 3).map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItemIndex(idx)}
                  className="w-full max-w-[280px] md:max-w-[320px] aspect-square rounded-3xl overflow-hidden bg-surface border border-stroke shadow-2xl p-2 cursor-pointer transition-all duration-500 hover:scale-105 hover:z-30 hover:border-white/20 group"
                  style={{
                    transform: `rotate(${item.rotation}deg)`,
                  }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-[10px] uppercase tracking-wider text-muted font-medium">
                        {item.tag}
                      </span>
                      <span className="text-sm text-white font-display italic">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 (Right 3 items) */}
            <div
              ref={colRightRef}
              className="flex flex-col gap-32 md:gap-48 items-end pointer-events-auto pt-24"
            >
              {EXPLORATION_ITEMS.slice(3, 6).map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItemIndex(idx + 3)}
                  className="w-full max-w-[280px] md:max-w-[320px] aspect-square rounded-3xl overflow-hidden bg-surface border border-stroke shadow-2xl p-2 cursor-pointer transition-all duration-500 hover:scale-105 hover:z-30 hover:border-white/20 group"
                  style={{
                    transform: `rotate(${item.rotation}deg)`,
                  }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-[10px] uppercase tracking-wider text-muted font-medium">
                        {item.tag}
                      </span>
                      <span className="text-sm text-white font-display italic">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox on click */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItemIndex(null)}
            className="fixed inset-0 z-[150] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={() => setSelectedItemIndex(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-surface border border-stroke text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev button */}
            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface border border-stroke text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer z-20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface border border-stroke text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer z-20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <motion.div
              key={selectedItem.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full flex flex-col items-center"
            >
              <div className="w-full aspect-square max-h-[70vh] rounded-3xl overflow-hidden border border-stroke/80 shadow-2xl bg-surface">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-5 text-center">
                <span className="text-xs text-muted uppercase tracking-widest font-mono">
                  {selectedItem.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-display italic text-text-primary mt-1">
                  {selectedItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

