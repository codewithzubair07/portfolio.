import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitPullRequest,
  GitBranch,
  ShieldAlert,
  Coins,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Code2,
  ArrowRight,
  Zap,
} from "lucide-react";

interface OpenSourceRepo {
  id: string;
  repoName: string;
  category: "security" | "backend" | "web3" | "frontend";
  role: string;
  prCount: string;
  impact: string;
  techStack: string[];
  bountyTrack?: string;
  githubUrl: string;
}

const REPOSITORIES: OpenSourceRepo[] = [
  {
    id: "vero-audit-guard",
    repoName: "vero-audit-guard",
    category: "security",
    role: "Mutation Fuzzing & Security Test Engineer",
    prCount: "Core Security PRs",
    impact:
      "Integrated Rust mutation fuzzing and property-based test suites into CI pipelines, eliminating silent edge-case regressions and vulnerability vectors.",
    techStack: ["Rust", "Mutation Fuzzing", "CI/CD", "Security Auditing"],
    bountyTrack: "Bounty Program / Security",
    githubUrl: "https://github.com/codewithzubair07",
  },
  {
    id: "xconfess",
    repoName: "Xconfess",
    category: "backend",
    role: "WebSocket Auth Hardening & Rate Limiting",
    prCount: "Infrastructure PRs",
    impact:
      "Hardened WebSocket connection authentication handshakes against replay attacks, resolved socket leak race conditions, and normalized rate limiting across high-concurrency client reconnects.",
    techStack: ["Node.js", "WebSockets", "Auth Handshakes", "Rate Limiting"],
    bountyTrack: "GSSoC '26 / Backend",
    githubUrl: "https://github.com/codewithzubair07",
  },
  {
    id: "nebgov",
    repoName: "nebgov",
    category: "backend",
    role: "OpenAPI Architecture & Schema Validation",
    prCount: "Schema & Spec PRs",
    impact:
      "Authored standardized OpenAPI 3.0 / Swagger documentation, unified REST endpoints, and implemented automated schema validation serializers across backend services.",
    techStack: ["OpenAPI 3.0", "Swagger", "FastAPI / Node", "JSON Schemas"],
    githubUrl: "https://github.com/codewithzubair07",
  },
  {
    id: "disciplr-backend",
    repoName: "Disciplr-backend",
    category: "backend",
    role: "Backend Optimization & Microservices",
    prCount: "Backend PRs Merged",
    impact:
      "Refactored backend route handlers, implemented indexed database queries to optimize query latency, and unified error handling across microservices.",
    techStack: ["Express", "MongoDB", "REST APIs", "Query Optimization"],
    bountyTrack: "Drips Wave Grant",
    githubUrl: "https://github.com/codewithzubair07",
  },
  {
    id: "stellarlend-frontend",
    repoName: "Stellarlend-frontend",
    category: "web3",
    role: "Web3 DeFi Lending Pool Interface",
    prCount: "Frontend DeFi PRs",
    impact:
      "Built responsive DeFi lending interfaces, integrated wallet transaction signing, and optimized reactive state synchronization for multi-asset collateral pools.",
    techStack: ["React", "TypeScript", "Web3.js", "Tailwind CSS"],
    bountyTrack: "Web3 Bounty Pool",
    githubUrl: "https://github.com/codewithzubair07",
  },
  {
    id: "credence-contracts",
    repoName: "Credence-Contracts",
    category: "web3",
    role: "Smart Contract Audit & Integration",
    prCount: "Smart Contract PRs",
    impact:
      "Audited token distribution modifiers, patched edge-case balance calculation overflows, and added automated test fixtures for multi-signature permissions.",
    techStack: ["Solidity", "Hardhat", "ZK Proofs", "Test Suites"],
    bountyTrack: "Bounty Program",
    githubUrl: "https://github.com/codewithzubair07",
  },
  {
    id: "commitlabs",
    repoName: "Commitlabs-Frontend",
    category: "frontend",
    role: "Developer Tooling & UI Systems",
    prCount: "UI Architecture PRs",
    impact:
      "Delivered real-time telemetry dashboards, reduced initial JavaScript bundle size by 35% through code splitting, and resolved hydration race conditions.",
    techStack: ["React", "Next.js", "TypeScript", "Performance"],
    githubUrl: "https://github.com/codewithzubair07",
  },
  {
    id: "insightarena",
    repoName: "InsightArena",
    category: "frontend",
    role: "Full-Stack Data Visualization",
    prCount: "Feature & Bugfix PRs",
    impact:
      "Built interactive data exploration cards, connected real-time API feeds, and cleaned up asynchronous cache invalidation loops.",
    techStack: ["React", "Node.js", "Charting", "State Management"],
    githubUrl: "https://github.com/codewithzubair07",
  },
];

export const OpenSourceContributor: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredRepos =
    filter === "all"
      ? REPOSITORIES
      : REPOSITORIES.filter((r) => r.category === filter);

  return (
    <section
      id="opensource"
      className="bg-bg py-16 md:py-24 relative border-t border-stroke/50"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke inline-block" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium font-mono">
                Open Source Contributor
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-light">
              168 Merged PRs Across{" "}
              <span className="font-display italic font-normal">102 repos</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted mt-3 max-w-2xl leading-relaxed font-light">
              High-velocity contributions across public codebases in Web3, Rust mutation fuzzing, WebSocket security, and backend APIs. Recipient of INR 50,000+ in bounties and grants through Drips Wave and GSSoC &apos;26.
            </p>
          </div>

          {/* Bounty Grant Badge */}
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-surface/60 border border-stroke backdrop-blur-md shrink-0">
            <Coins className="w-6 h-6 text-[#89AACC] shrink-0" />
            <div>
              <span className="text-[11px] font-mono text-muted uppercase tracking-wider block">
                Bounties &amp; Grants Earned
              </span>
              <span className="text-base sm:text-lg font-mono font-bold text-text-primary">
                ₹50,000+ (Drips Wave &amp; GSSoC)
              </span>
            </div>
          </div>
        </motion.div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className="p-5 sm:p-6 rounded-2xl bg-surface/40 border border-stroke hover:border-stroke/80 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-muted uppercase">
                Merged Pull Requests
              </span>
              <GitPullRequest className="w-4 h-4 text-[#89AACC]" />
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-display italic text-text-primary">
                168+
              </span>
              <span className="text-xs font-mono text-muted block mt-1">
                Verified merged PRs
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-surface/40 border border-stroke hover:border-stroke/80 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-muted uppercase">
                Repositories Impacted
              </span>
              <GitBranch className="w-4 h-4 text-[#4E85BF]" />
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-display italic text-text-primary">
                102
              </span>
              <span className="text-xs font-mono text-muted block mt-1">
                Distinct public codebases
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-surface/40 border border-stroke hover:border-stroke/80 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-muted uppercase">
                PR Acceptance Rate
              </span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-display italic text-text-primary">
                100%
              </span>
              <span className="text-xs font-mono text-muted block mt-1">
                Bounty program merges
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-surface/40 border border-stroke hover:border-stroke/80 transition-all flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-muted uppercase">
                Security &amp; Fuzzing
              </span>
              <ShieldAlert className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-display italic text-text-primary">
                Rust / ZK
              </span>
              <span className="text-xs font-mono text-muted block mt-1">
                Mutation fuzzing &amp; audit
              </span>
            </div>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: "all", label: "All Repositories (8 Major)" },
            { id: "security", label: "Rust & Security" },
            { id: "backend", label: "Backend & WebSockets" },
            { id: "web3", label: "Web3 & Smart Contracts" },
            { id: "frontend", label: "Frontend & Tooling" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                filter === tab.id
                  ? "bg-text-primary text-bg font-semibold shadow-sm"
                  : "bg-surface/60 text-muted border border-stroke hover:text-text-primary hover:bg-surface"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredRepos.map((repo, idx) => (
              <motion.div
                key={repo.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-surface/40 border border-stroke hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div>
                  {/* Repo Header */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2 min-w-0">
                      <Terminal className="w-4 h-4 text-[#89AACC] shrink-0" />
                      <h4 className="text-base font-mono font-semibold text-text-primary group-hover:text-white transition-colors truncate">
                        {repo.repoName}
                      </h4>
                    </div>
                    {repo.bountyTrack && (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#89AACC]/10 border border-[#89AACC]/20 text-[#89AACC] font-medium shrink-0">
                        {repo.bountyTrack}
                      </span>
                    )}
                  </div>

                  {/* Role Title */}
                  <span className="text-xs font-mono text-muted block mb-3">
                    {repo.role}
                  </span>

                  {/* Impact Summary */}
                  <p className="text-xs text-text-primary/80 leading-relaxed font-light mb-4">
                    {repo.impact}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-stroke/60 mb-4">
                    {repo.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-bg border border-stroke text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link to GitHub */}
                  <a
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-xs font-mono text-muted group-hover:text-text-primary transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-[#89AACC]" />
                      <span>Audit on GitHub</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Auditable Verification Banner */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-surface/40 border border-stroke flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-bg border border-stroke flex items-center justify-center text-[#89AACC]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-text-primary">
                Publicly Auditable Commit History
              </h4>
              <p className="text-xs text-muted font-light">
                All 168 pull requests and commit signatures are live and verifiable across public GitHub repositories.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/codewithzubair07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-text-primary text-bg font-mono text-xs font-semibold hover:opacity-90 transition-opacity shrink-0"
          >
            <span>View GitHub Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceContributor;

