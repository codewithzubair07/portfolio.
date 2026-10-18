import React, { useState } from "react";
import { motion } from "framer-motion";
import { Server, Terminal, Sparkles } from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  skills: { name: string; level: string; note: string }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai-agents",
    name: "AI & Autonomous Agents",
    icon: Sparkles,
    description:
      "End-to-end architectures for intelligent conversational bots, multi-modal pipelines, and RAG retrieval systems.",
    skills: [
      { name: "Gemini & OpenRouter LLMs", level: "Advanced", note: "Production orchestration" },
      { name: "RAG & Vector Retrieval", level: "Production", note: "ChromaDB, semantic search" },
      { name: "Groq (Llama 3 70B)", level: "High Speed", note: "Sub-2s inference latency" },
      { name: "Voice AI & Cloning", level: "Applied", note: "ElevenLabs & Voxtral STT" },
      { name: "Google ADK & MCP", level: "Certified", note: "BigQuery & Cloud Run agents" },
      { name: "Selenium Automation", level: "Practical", note: "Autonomous web tasks" },
    ],
  },
  {
    id: "fullstack",
    name: "Full-Stack Web & Backend",
    icon: Server,
    description:
      "Scalable web applications, high-concurrency APIs, and resilient data models built on modern JavaScript & Python.",
    skills: [
      { name: "React & Next.js", level: "Core", note: "Modern component architecture" },
      { name: "Node.js & Express", level: "Core", note: "REST APIs & middleware" },
      { name: "FastAPI (Python)", level: "Advanced", note: "Async Python backends" },
      { name: "TypeScript & JavaScript", level: "Fluent", note: "Type-safe engineering" },
      { name: "MongoDB & MERN", level: "Internship", note: "Ardent Software certified" },
      { name: "SQLite & SQL", level: "Embedded", note: "High-performance storage" },
    ],
  },
  {
    id: "systems-tools",
    name: "DevOps & Open-Source Tools",
    icon: Terminal,
    description:
      "Reliable delivery pipelines, containerization, and battle-tested open-source development workflows.",
    skills: [
      { name: "Git & GitHub", level: "168+ PRs", note: "102 repos contributed" },
      { name: "Docker & systemd", level: "Production", note: "Containerized deployment" },
      { name: "Google Cloud Platform", level: "Academy '26", note: "Cloud Run & BigQuery" },
      { name: "Linux & WSL2", level: "Daily Driver", note: "Ubuntu system admin" },
      { name: "Rust (Basic)", level: "Fuzz Testing", note: "vero-audit-guard mutation" },
      { name: "WebSocket Auth", level: "Hardening", note: "Xconfess rate-limiting" },
    ],
  },
];

export const SkillsArsenal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("ai-agents");

  const currentCategory =
    SKILL_CATEGORIES.find((cat) => cat.id === activeTab) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="bg-bg py-16 md:py-24 relative border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke inline-block" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium font-mono">
                Technical Stack
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-light">
              Engineering{" "}
              <span className="font-display italic font-normal">arsenal</span>
            </h2>

            <p className="text-sm md:text-base text-muted mt-3 max-w-lg leading-relaxed">
              Battle-tested tools and frameworks utilized across production AI agents, full-stack backends, and 168+ open-source contributions.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-surface/60 border border-stroke backdrop-blur-md self-start md:self-auto overflow-x-auto max-w-full">
            {SKILL_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-text-primary text-bg shadow-md"
                      : "text-muted hover:text-text-primary hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Active Category Display */}
        <div className="p-6 md:p-8 rounded-3xl bg-surface/30 border border-stroke relative overflow-hidden">
          {/* Subtle ambient light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[90px] rounded-full pointer-events-none" />

          <div className="mb-6">
            <p className="text-xs md:text-sm text-text-primary/70 font-light">
              {currentCategory.description}
            </p>
          </div>

          {/* Grid of skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-4 rounded-2xl bg-bg/70 border border-stroke/70 hover:border-white/20 transition-all duration-300 group flex items-start justify-between gap-3"
              >
                <div>
                  <h4 className="text-sm font-medium text-text-primary group-hover:text-white transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-[11px] text-muted font-mono mt-1">
                    {skill.note}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-[#89AACC] px-2 py-0.5 rounded-full bg-[#89AACC]/10 border border-[#89AACC]/20 shrink-0">
                  {skill.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
