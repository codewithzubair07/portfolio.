import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Calendar, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  colSpan: string;
  aspectRatio: string;
  image: string;
  summary: string;
  client: string;
  deliverables: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: "particle-agent",
    title: "Particle — AI Chief of Staff",
    category: "Autonomous Agent & Voice AI",
    year: "2026",
    colSpan: "md:col-span-7",
    aspectRatio: "aspect-[16/10] min-h-[300px] md:min-h-[420px]",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
    summary:
      "A 24/7 autonomous AI assistant that handles meetings, Gmail, calendar, and Telegram briefings with sub-3s response time, Voxtral STT, Gemini/OpenRouter LLMs, ElevenLabs voice cloning, and ChromaDB memory.",
    client: "Open Source / Production Agent",
    deliverables: [
      "Voxtral Speech-to-Text",
      "Gemini & ElevenLabs Voice",
      "ChromaDB Persistent Memory",
      "Selenium Web Automation",
      "Docker & systemd Ubuntu",
    ],
    githubUrl: "https://github.com/codewithzubair07/particle-agent",
  },
  {
    id: "scheme-setu",
    title: "Scheme Setu",
    category: "Welfare Scheme RAG Assistant",
    year: "2026",
    colSpan: "md:col-span-5",
    aspectRatio: "aspect-[4/3] md:aspect-auto min-h-[300px] md:min-h-[420px]",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85",
    summary:
      "A Hinglish voice and text assistant that retrieves government welfare schemes using RAG across a Telegram bot and FastAPI web demo, with missing-certificate checks and audio guidance.",
    client: "Civic Tech / Public Assistance",
    deliverables: [
      "FastAPI RAG Pipeline",
      "Hinglish NLP Processing",
      "Telegram Bot Integration",
      "Audio Speech Synthesis",
      "Certificate Verification",
    ],
    githubUrl: "https://github.com/codewithzubair07/scheme-setu",
  },
  {
    id: "nexus-agent",
    title: "Nexus — WhatsApp AI Agent",
    category: "LLM Agent & CRM Automation",
    year: "2026",
    colSpan: "md:col-span-5",
    aspectRatio: "aspect-[4/3] md:aspect-auto min-h-[300px] md:min-h-[420px]",
    image:
      "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?auto=format&fit=crop&w=1200&q=85",
    summary:
      "A WhatsApp AI agent replying to DMs and groups in under 2 seconds using Groq (Llama 3 70B), qualifying leads, sending Gmail alerts every 30 mins, and syncing with an embedded SQLite CRM.",
    client: "Operations & Sales Automation",
    deliverables: [
      "Groq Llama 3 70B Engine",
      "WhatsApp Webhook Bot",
      "Gmail API Alerts",
      "SQLite CRM Integration",
      "node-cron Daily Summary",
    ],
    githubUrl: "https://github.com/codewithzubair07/nexus-agent-",
  },
  {
    id: "prooflend",
    title: "ProofLend — ZK Eligibility Agent",
    category: "Top 50 MLH Midnight Hackathon",
    year: "2025",
    colSpan: "md:col-span-7",
    aspectRatio: "aspect-[16/10] min-h-[300px] md:min-h-[420px]",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=85",
    summary:
      "Placed Top 50 at the MLH Midnight Hackathon with a conversational AI agent that checks loan eligibility while keeping income private, verified via Compact zero-knowledge contracts.",
    client: "MLH Midnight Hackathon (AI Track)",
    deliverables: [
      "Compact Smart Contract",
      "Zero-Knowledge Private Witness",
      "React Privacy Interface",
      "Conversational AI Underwriter",
      "Network Log Inspector",
    ],
    githubUrl: "https://github.com/codewithzubair07/prooflend",
  },
];

export const SelectedWorks: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="bg-bg py-12 md:py-16 relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke inline-block" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Featured Engineering
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-light">
              Selected{" "}
              <span className="font-display italic font-normal">projects</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted mt-3 max-w-lg leading-relaxed">
              Autonomous AI agents, production RAG pipelines, and zero-knowledge applications built by Md Juber Quraishi.
            </p>
          </div>

          {/* Desktop "View all work" button */}
          <div className="hidden md:inline-flex">
            <div className="relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <button
                onClick={() => {
                  const el = document.getElementById("explorations");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative flex items-center gap-2 rounded-full px-6 py-3 bg-surface text-text-primary text-xs tracking-wider uppercase font-medium border border-stroke group-hover:border-transparent transition-all duration-300 cursor-pointer"
              >
                <span>View all work</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-80px" }}
              className={`${project.colSpan} ${project.aspectRatio} relative bg-surface border border-stroke rounded-3xl overflow-hidden group cursor-pointer shadow-lg`}
              onClick={() => setActiveProject(project)}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Halftone Overlay: radial-gradient(circle, #000 1px, transparent 1px) at 4x4px, opacity-20 mix-blend-multiply */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply halftone-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />

              {/* Card Meta Badge (always visible in top left for context) */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-text-primary/90 bg-bg/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-mono">
                  {project.category}
                </span>
              </div>

              {/* Bottom Title & Tag Strip (visible by default) */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 bg-gradient-to-t from-bg via-bg/80 to-transparent z-10 flex flex-col justify-end pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl md:text-2xl font-display italic text-white tracking-tight">
                    {project.title}
                  </h3>
                  <span className="text-xs font-mono text-muted">{project.year}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.deliverables.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="text-[10px] uppercase tracking-wider text-text-primary/80 bg-surface/80 px-2.5 py-0.5 rounded-full border border-white/5 font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay: bg-bg/75 opacity-0->1 + backdrop-blur-lg */}
              <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-300 z-20 flex flex-col items-center justify-center p-8 text-center">
                {/* Hover label: pill with animated gradient border, white bg, "View — Title" (title in font-display italic) */}
                <div className="relative rounded-full p-[2px] transition-transform duration-300 hover:scale-105">
                  <div className="absolute -inset-[2px] rounded-full accent-gradient animate-gradient-shift" />
                  <div className="relative px-6 py-2.5 rounded-full bg-white text-bg flex items-center gap-2 shadow-2xl font-medium text-sm">
                    <span>View —</span>
                    <span className="font-display italic text-base">
                      {project.title}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs md:text-sm text-text-primary/80 max-w-sm line-clamp-2">
                  {project.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-surface border border-stroke rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bg/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs uppercase tracking-widest text-muted">
                    {activeProject.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activeProject.year}</span>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-display italic text-text-primary mb-3">
                  {activeProject.title}
                </h3>

                <p className="text-sm md:text-base text-text-primary/80 leading-relaxed mb-6">
                  {activeProject.summary}
                </p>

                <div className="border-t border-stroke pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-muted uppercase tracking-wider block mb-1">
                      Client
                    </span>
                    <span className="text-sm text-text-primary font-medium">
                      {activeProject.client}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-muted uppercase tracking-wider block mb-1">
                      Scope
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {activeProject.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] bg-bg px-2.5 py-1 rounded-full border border-stroke text-text-primary/90"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {activeProject.githubUrl && (
                  <div className="mt-6 pt-4 border-t border-stroke/60 flex justify-end">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-text-primary text-bg text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
                    >
                      <span>View on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
