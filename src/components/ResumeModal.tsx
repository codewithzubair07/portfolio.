import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const GithubIcon: React.FC<{ className?: string }> = ({
  className = "w-3.5 h-3.5",
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-surface border border-stroke rounded-3xl p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-bg border border-stroke text-muted hover:text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="border-b border-stroke pb-6 mb-8">
              <span className="text-xs uppercase tracking-[0.25em] text-muted font-mono block mb-2">
                Curriculum Vitae
              </span>
              <h2 className="text-3xl md:text-5xl font-display italic text-text-primary mb-2">
                Md Juber Quraishi
              </h2>
              <p className="text-sm text-text-primary/90 font-medium">
                Full-Stack & AI Developer • 168 Merged Open-Source PRs
              </p>

              {/* Contact meta strip */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted mt-4">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Durgapur, West Bengal, India
                </span>
                <span className="w-1 h-1 rounded-full bg-stroke hidden sm:inline-block" />
                <a
                  href="mailto:qjuber066@gmail.com"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  qjuber066@gmail.com
                </a>
                <span className="w-1 h-1 rounded-full bg-stroke hidden sm:inline-block" />
                <a
                  href="tel:+918637069862"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +91 8637069862
                </a>
                <span className="w-1 h-1 rounded-full bg-stroke hidden sm:inline-block" />
                <a
                  href="https://github.com/codewithzubair07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  github.com/codewithzubair07
                </a>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted font-mono mb-4">
                <Briefcase className="w-4 h-4 text-text-primary" />
                <span>Experience</span>
              </div>
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-bg/60 border border-stroke/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base font-semibold text-text-primary">
                      Open-Source Contributor • Drips Wave, GSSoC '26 & Bounty Programs
                    </h4>
                    <span className="text-xs font-mono text-muted">
                      Feb 2026 — Oct 2026
                    </span>
                  </div>
                  <ul className="text-xs text-muted space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>
                      Merged 168 pull requests across 102 repositories (Web3, backend, and frontend), earning INR 50,000+ in bounties and grants.
                    </li>
                    <li>
                      Delivered fixes end to end across Disciplr-backend, Stellarlend-frontend, Commitlabs-Frontend, Credence-Contracts, and InsightArena.
                    </li>
                    <li>
                      Added OpenAPI/Swagger docs (nebgov), Rust mutation fuzzing (vero-audit-guard), and WebSocket auth hardening with rate-limit normalization (Xconfess).
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-bg/60 border border-stroke/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base font-semibold text-text-primary">
                      Full Stack Web Development Intern • Ardent Software Services
                    </h4>
                    <span className="text-xs font-mono text-muted">
                      Jun 2025 — Aug 2025
                    </span>
                  </div>
                  <ul className="text-xs text-muted space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>
                      Completed a 6-week full-stack internship on the MERN stack with official completion certificate.
                    </li>
                    <li>
                      Built an Advanced Hotel Management System as a full-stack web app (MongoDB, Express, React, Node.js) with REST APIs, authentication, room booking, and admin dashboard (Live: grand-azure.onrender.com).
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted font-mono mb-4">
                <GraduationCap className="w-4 h-4 text-text-primary" />
                <span>Education</span>
              </div>
              <div className="p-4 rounded-2xl bg-bg/60 border border-stroke/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">
                    Bachelor of Computer Applications (BCA)
                  </h4>
                  <p className="text-xs text-muted">
                    Dr. B. C. Roy Engineering College, Durgapur, India
                  </p>
                </div>
                <span className="text-xs font-mono text-muted">
                  2023 — 2027
                </span>
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted font-mono mb-4">
                <Award className="w-4 h-4 text-text-primary" />
                <span>Certifications & Achievements</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-bg/60 border border-stroke/60">
                  <span className="text-xs font-semibold text-text-primary block mb-1">
                    MLH Midnight Hackathon — Top 50
                  </span>
                  <span className="text-[11px] text-muted leading-relaxed block">
                    Placed in top 50 in global AI track with ProofLend (Zero-Knowledge conversational AI).
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-bg/60 border border-stroke/60">
                  <span className="text-xs font-semibold text-text-primary block mb-1">
                    Machine Learning Specialization
                  </span>
                  <span className="text-[11px] text-muted leading-relaxed block">
                    DeepLearning.AI & Stanford Online (Supervised, Advanced, Unsupervised & RL), Sept 2026.
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-bg/60 border border-stroke/60">
                  <span className="text-xs font-semibold text-text-primary block mb-1">
                    Google Cloud Gen AI Academy APAC 2026
                  </span>
                  <span className="text-[11px] text-muted leading-relaxed block">
                    Cohort 3 (Hack2Skill): Deployed AI data agent using ADK, Gemini, BigQuery MCP, Cloud Run.
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-bg/60 border border-stroke/60">
                  <span className="text-xs font-semibold text-text-primary block mb-1">
                    Workshop Lead & Google Build with AI
                  </span>
                  <span className="text-[11px] text-muted leading-relaxed block">
                    Led virtual workshop on AI integration with 50+ participants; Build with AI Bootcamp Kolkata.
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted font-mono mb-3">
                <Code2 className="w-4 h-4 text-text-primary" />
                <span>Technical Skills</span>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-muted font-mono block mb-1.5">
                    Languages
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Python",
                      "JavaScript",
                      "TypeScript",
                      "Rust (basic)",
                      "SQL",
                      "HTML/CSS",
                    ].map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-bg px-3 py-1 rounded-full border border-stroke text-text-primary/90"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-muted font-mono block mb-1.5">
                    AI / Agent Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "LLMs",
                      "Gemini",
                      "RAG",
                      "ChromaDB",
                      "ADK",
                      "MCP",
                      "ElevenLabs",
                      "Groq",
                      "Llama 3",
                    ].map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-bg px-3 py-1 rounded-full border border-stroke text-text-primary/90"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-muted font-mono block mb-1.5">
                    Frameworks & Tools
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "React",
                      "Next.js",
                      "Node.js",
                      "Express",
                      "FastAPI",
                      "REST APIs",
                      "GSAP",
                      "MongoDB",
                      "SQLite",
                      "Docker",
                      "Google Cloud (Cloud Run, BigQuery)",
                      "Selenium",
                      "Git & GitHub",
                      "WSL2/Linux",
                    ].map((s) => (
                      <span
                        key={s}
                        className="text-xs bg-bg px-3 py-1 rounded-full border border-stroke text-text-primary/90"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-stroke">
              <div className="text-xs text-muted text-center sm:text-left">
                Open to internships, freelance projects, and remote roles.
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/codewithzubair07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border border-stroke text-text-primary text-xs uppercase tracking-wider font-semibold hover:border-text-primary transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:qjuber066@gmail.com?subject=Opportunity%20Discussion%20with%20Md%20Juber%20Quraishi"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-text-primary text-bg text-xs uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Contact Juber</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
