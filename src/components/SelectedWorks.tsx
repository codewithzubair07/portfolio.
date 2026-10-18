import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  X,
  Calendar,
  ExternalLink,
  ArrowUpRight,
  Volume2,
  MessageSquare,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  image: string;
  summary: string;
  client: string;
  badge: string;
  deliverables: string[];
  previewComponent: "waveform" | "chat" | "lpu" | "zk";
  githubUrl?: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: "particle-agent",
    number: "01",
    title: "Particle — AI Chief of Staff",
    subtitle: "24/7 autonomous daemon with Voxtral STT & ElevenLabs voice",
    category: "Autonomous Agent & Voice AI",
    year: "2026",
    badge: "SUB-3S VOICE LATENCY",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
    summary:
      "A 24/7 autonomous AI assistant running continuously as an Ubuntu systemd daemon. Listens via Voxtral STT, searches persistent context in ChromaDB, queries Gemini 1.5 Pro / OpenRouter models, and speaks using cloned ElevenLabs synthetic voice with sub-3s latency. Automates Gmail, calendar scheduling, and Telegram briefings end to end.",
    client: "Production Agent / 24/7 Daemon",
    deliverables: [
      "Voxtral STT",
      "Gemini & ElevenLabs Voice",
      "ChromaDB Memory",
      "Selenium Web",
      "Docker & systemd",
    ],
    previewComponent: "waveform",
    githubUrl: "https://github.com/codewithzubair07/particle-agent",
  },
  {
    id: "scheme-setu",
    number: "02",
    title: "Scheme Setu",
    subtitle: "Hinglish welfare assistant with missing-certificate validation",
    category: "Welfare Scheme RAG Assistant",
    year: "2026",
    badge: "VERNACULAR RAG PIPELINE",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=85",
    summary:
      "A Hinglish voice and text assistant that retrieves government welfare schemes using RAG across a Telegram bot and FastAPI web demo, with missing-certificate checks and audio guidance to assist citizens across Indian regional dialects.",
    client: "Civic Tech / Public Benefit",
    deliverables: [
      "FastAPI RAG Pipeline",
      "Hinglish NLP Processing",
      "Telegram Bot Gateway",
      "Audio Guidance",
      "Certificate Verifier",
    ],
    previewComponent: "chat",
    githubUrl: "https://github.com/codewithzubair07/scheme-setu",
  },
  {
    id: "nexus-agent",
    number: "03",
    title: "Nexus — WhatsApp AI Agent",
    subtitle: "Sub-2s WhatsApp CRM agent with Groq Llama 3 70B & Gmail webhooks",
    category: "LLM Agent & CRM Automation",
    year: "2026",
    badge: "GROQ LPU • 1.4S INFERENCE",
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=85",
    summary:
      "A high-speed WhatsApp AI agent replying to DMs and groups in under 2 seconds using Groq's LPU running Llama 3 70B. Qualifies leads, dispatches Gmail alerts to sales teams every 30 minutes, and synchronizes data with an embedded zero-latency SQLite CRM.",
    client: "Sales & Operations Automation",
    deliverables: [
      "Groq Llama 3 70B Engine",
      "WhatsApp Webhook Bot",
      "Gmail API Alerts",
      "SQLite CRM Integration",
      "node-cron Scheduler",
    ],
    previewComponent: "lpu",
    githubUrl: "https://github.com/codewithzubair07/nexus-agent-",
  },
  {
    id: "prooflend",
    number: "04",
    title: "ProofLend — ZK Eligibility Agent",
    subtitle: "Conversational privacy underwriter with Compact ZK contracts",
    category: "Zero-Knowledge & Privacy AI",
    year: "2025",
    badge: "TOP 50 MLH MIDNIGHT",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=85",
    summary:
      "Placed Top 50 at the MLH Midnight Hackathon with a conversational AI agent that verifies loan eligibility while keeping income and bank records private, verified cryptographically via Compact zero-knowledge contracts.",
    client: "MLH Midnight Hackathon (AI Track)",
    deliverables: [
      "Compact Smart Contract",
      "Private Witness",
      "React Privacy Interface",
      "Conversational AI",
      "Network Inspector",
    ],
    previewComponent: "zk",
    githubUrl: "https://github.com/codewithzubair07/prooflend",
  },
];

export const SelectedWorks: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="bg-bg py-16 md:py-24 relative overflow-hidden">
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 border-b border-stroke/60 pb-8"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#89AACC] animate-pulse" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium font-mono">
                FLAGSHIP ENGINEERING
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-light">
              Selected{" "}
              <span className="font-display italic font-normal">projects</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted mt-3 max-w-xl leading-relaxed font-light">
              Autonomous AI agents, production RAG pipelines, and zero-knowledge privacy applications engineered by Md Juber Quraishi.
            </p>
          </div>

          {/* Desktop "View all work" button */}
          <div className="hidden md:inline-flex shrink-0">
            <div className="relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <button
                onClick={() => {
                  const el = document.getElementById("explorations");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative flex items-center gap-2 rounded-full px-6 py-3 bg-surface text-text-primary text-xs tracking-wider uppercase font-medium border border-stroke group-hover:border-transparent transition-all duration-300 cursor-pointer shadow-sm"
              >
                <span>All Explorations</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Meticulously Aligned & Creative 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative h-[480px] sm:h-[500px] md:h-[520px] w-full bg-surface border border-stroke rounded-3xl overflow-hidden group cursor-pointer shadow-2xl flex flex-col justify-between p-6 sm:p-8 transition-all duration-500 hover:border-text-primary/30 hover:-translate-y-1"
              onClick={() => setActiveProject(project)}
            >
              {/* Background Cover Image with subtle zoom */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Multi-tier gradient overlay ensuring contrast & depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/40 pointer-events-none transition-all duration-300 group-hover:via-bg/85" />

              {/* Watermark Index Numeral floating in top-right */}
              <div className="absolute top-4 right-6 text-7xl sm:text-8xl font-display italic text-white/[0.04] group-hover:text-white/[0.08] transition-colors pointer-events-none select-none">
                {project.number}
              </div>

              {/* Halftone texture overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply halftone-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />

              {/* TIER 1: Header Row (Strictly aligned across all cards) */}
              <div className="relative z-10 flex items-center justify-between gap-3 w-full">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest px-2.5 py-1 rounded-full bg-bg/80 border border-white/10 backdrop-blur-md">
                    // {project.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-primary bg-bg/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-sm">
                    {project.category}
                  </span>
                </div>

                <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border border-stroke bg-bg/80 backdrop-blur-md text-[#89AACC]">
                  {project.badge}
                </span>
              </div>

              {/* TIER 2: Creative Interactive Micro-Preview (Center of card) */}
              <div className="relative z-10 my-auto py-2">
                {project.previewComponent === "waveform" && (
                  <div className="p-3.5 rounded-2xl bg-bg/70 border border-stroke/80 backdrop-blur-md max-w-sm group-hover:border-[#89AACC]/40 transition-colors">
                    <div className="flex items-center justify-between text-[11px] font-mono text-muted mb-2">
                      <span className="flex items-center gap-1.5 text-text-primary">
                        <Volume2 className="w-3.5 h-3.5 text-[#89AACC]" />
                        <span>Voxtral STT → ElevenLabs Stream</span>
                      </span>
                      <span className="text-emerald-400">2.78s</span>
                    </div>
                    {/* Simulated Voice Waveform */}
                    <div className="flex items-end justify-between h-6 bg-surface/80 rounded px-2.5 py-1 gap-1 border border-stroke/40">
                      {[30, 70, 45, 90, 60, 25, 80, 50, 95, 65, 40, 85, 55, 75].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="w-1 rounded-full bg-[#89AACC] group-hover:bg-white transition-all duration-300"
                            style={{ height: `${h}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>
                )}

                {project.previewComponent === "chat" && (
                  <div className="p-3.5 rounded-2xl bg-bg/70 border border-stroke/80 backdrop-blur-md max-w-sm group-hover:border-blue-400/40 transition-colors">
                    <div className="flex items-center justify-between text-[11px] font-mono text-muted mb-1.5">
                      <span className="flex items-center gap-1.5 text-text-primary">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span>FastAPI RAG Inference</span>
                      </span>
                      <span className="text-blue-400">Hinglish</span>
                    </div>
                    <p className="text-xs text-text-primary/90 font-light bg-surface/80 p-2 rounded-lg border border-stroke/40 italic">
                      &ldquo;Aapke documents ke anusaar: Income Certificate verified ✓. Missing: Caste Certificate.&rdquo;
                    </p>
                  </div>
                )}

                {project.previewComponent === "lpu" && (
                  <div className="p-3.5 rounded-2xl bg-bg/70 border border-stroke/80 backdrop-blur-md max-w-sm group-hover:border-emerald-400/40 transition-colors">
                    <div className="flex items-center justify-between text-[11px] font-mono text-muted mb-1.5">
                      <span className="flex items-center gap-1.5 text-text-primary">
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Groq LPUs • Llama 3 70B</span>
                      </span>
                      <span className="text-emerald-400">&lt; 1.8s</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono bg-surface/80 p-2 rounded-lg border border-stroke/40">
                      <span className="text-text-primary">Lead Qualified &amp; Synced</span>
                      <span className="text-muted">SQLite CRM</span>
                    </div>
                  </div>
                )}

                {project.previewComponent === "zk" && (
                  <div className="p-3.5 rounded-2xl bg-bg/70 border border-stroke/80 backdrop-blur-md max-w-sm group-hover:border-amber-400/40 transition-colors">
                    <div className="flex items-center justify-between text-[11px] font-mono text-muted mb-1.5">
                      <span className="flex items-center gap-1.5 text-text-primary">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                        <span>Compact ZK Smart Contract</span>
                      </span>
                      <span className="text-amber-400">Top 50 MLH</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono bg-surface/80 p-2 rounded-lg border border-stroke/40">
                      <span className="text-emerald-400 font-semibold">Eligibility Proven</span>
                      <span className="text-muted">Data Leak: 0 bytes</span>
                    </div>
                  </div>
                )}
              </div>

              {/* TIER 3: Footer Content Block (Strictly aligned across all cards) */}
              <div className="relative z-10 w-full pt-4 border-t border-stroke/50 flex flex-col justify-end">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] uppercase tracking-wider text-muted font-mono">
                    {project.client}
                  </span>
                  <span className="text-xs font-mono text-muted">{project.year}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display italic text-white tracking-tight leading-snug group-hover:text-text-primary transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs text-text-primary/70 line-clamp-1 font-light mb-3">
                  {project.subtitle}
                </p>

                {/* Bottom Row: Deliverables + Action Link */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.deliverables.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-surface/90 border border-stroke text-text-primary/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-mono font-semibold text-text-primary group-hover:text-[#89AACC] transition-colors shrink-0">
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
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
              {/* Modal Image Header */}
              <div className="relative aspect-video w-full overflow-hidden shrink-0">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/40" />
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bg/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-xs uppercase tracking-widest text-muted font-mono">
                    {activeProject.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{activeProject.year}</span>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-display italic text-text-primary mb-3">
                  {activeProject.title}
                </h3>

                <p className="text-sm md:text-base text-text-primary/80 leading-relaxed mb-6 font-light">
                  {activeProject.summary}
                </p>

                <div className="border-t border-stroke pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-muted uppercase tracking-wider font-mono block mb-1">
                      Context / Scope
                    </span>
                    <span className="text-sm text-text-primary font-medium">
                      {activeProject.client}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-muted uppercase tracking-wider font-mono block mb-1">
                      Deliverables &amp; Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {activeProject.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] bg-bg px-2.5 py-1 rounded-full border border-stroke text-text-primary/90 font-mono"
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-text-primary text-bg text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity font-mono"
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

export default SelectedWorks;
