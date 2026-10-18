import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Calendar, ArrowUpRight, X } from "lucide-react";

interface JournalEntry {
  id: string;
  number: string;
  title: string;
  italicWord: string;
  readTime: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}

const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: "autonomous-ai-chief-of-staff",
    number: "01",
    title: "Building Autonomous",
    italicWord: "AI Chiefs of Staff",
    readTime: "5 min read",
    date: "Oct 2026",
    category: "AI Agents & Voice",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
    excerpt:
      "How to build a 24/7 AI assistant integrating Voxtral speech-to-text, Gemini & OpenRouter LLMs, ElevenLabs voice cloning, and ChromaDB persistent memory with sub-3s response time.",
  },
  {
    id: "vernacular-rag-systems",
    number: "02",
    title: "Multi-Modal RAG in",
    italicWord: "Vernacular Languages",
    readTime: "6 min read",
    date: "Sep 2026",
    category: "RAG & Public Tech",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
    excerpt:
      "Architecting Scheme Setu: extracting eligibility criteria, checking missing caste/income certificates, and returning audio replies in Hinglish across Telegram and FastAPI.",
  },
  {
    id: "sub-2s-whatsapp-agents",
    number: "03",
    title: "Sub-2s WhatsApp Agents with",
    italicWord: "Groq & Llama 3 70B",
    readTime: "4 min read",
    date: "Aug 2026",
    category: "High-Speed Inference",
    image:
      "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?auto=format&fit=crop&w=400&q=80",
    excerpt:
      "Building Nexus: ultra-low latency WhatsApp conversational CRM using Groq's LPUs, Gmail alerts every 30 minutes, and SQLite lead storage.",
  },
  {
    id: "merging-168-open-source-prs",
    number: "04",
    title: "Lessons from Merging",
    italicWord: "168 Open-Source PRs",
    readTime: "7 min read",
    date: "Jul 2026",
    category: "Open Source & Web3",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=400&q=80",
    excerpt:
      "Key takeaways from contributing across 102 repositories (GSSoC '26, Drips Wave, Rust mutation fuzzing, WebSocket auth hardening, and earning INR 50,000+ in bounties).",
  },
];

export const Journal: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<JournalEntry | null>(null);

  return (
    <section id="journal" className="bg-bg py-16 md:py-24 relative">
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
                Technical Writing
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight font-light">
              Engineering{" "}
              <span className="font-display italic font-normal">insights</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted mt-3 max-w-lg leading-relaxed">
              Deep dives on autonomous AI agent pipelines, multi-modal RAG systems, and open-source contributions.
            </p>
          </div>

          {/* Desktop "View all" button */}
          <div className="hidden md:inline-flex">
            <div className="relative group rounded-full p-[1.5px] transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <button
                onClick={() => {
                  const el = document.getElementById("stats");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative flex items-center gap-2 rounded-full px-6 py-3 bg-surface text-text-primary text-xs tracking-wider uppercase font-medium border border-stroke group-hover:border-transparent transition-all duration-300 cursor-pointer"
              >
                <span>View all</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 4 journal entries displayed as horizontal pills */}
        <div className="flex flex-col gap-4">
          {JOURNAL_ENTRIES.map((entry, idx) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
              onClick={() => setActiveArticle(entry)}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 p-4 sm:px-6 sm:py-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[32px] sm:rounded-full transition-all duration-300 group cursor-pointer hover:border-text-primary/20 hover:shadow-xl hover:shadow-black/20"
            >
              {/* Left side: Thumbnail & Title */}
              <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                {/* Index Number */}
                <span className="text-xs text-muted font-mono tracking-wider pl-2 hidden sm:inline-block">
                  {entry.number}
                </span>

                {/* Thumbnail Image */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shrink-0 border border-stroke/60 relative">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Title */}
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl text-text-primary font-normal tracking-tight group-hover:text-white transition-colors truncate">
                    {entry.title}{" "}
                    <span className="font-display italic">
                      {entry.italicWord}
                    </span>
                  </h3>
                  <div className="flex items-center gap-3 sm:hidden text-xs text-muted mt-1">
                    <span>{entry.readTime}</span>
                    <span>•</span>
                    <span>{entry.date}</span>
                  </div>
                </div>
              </div>

              {/* Right side: Read time, Date, Action arrow */}
              <div className="flex items-center justify-between sm:justify-end gap-4 md:gap-8 sm:pr-2">
                <div className="hidden sm:flex items-center gap-6 text-xs text-muted font-medium">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {entry.readTime}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-stroke" />
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {entry.date}
                  </span>
                </div>

                {/* Round Arrow pill */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-stroke flex items-center justify-center bg-bg/50 group-hover:bg-text-primary group-hover:text-bg group-hover:border-text-primary transition-all duration-300 shrink-0">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-surface border border-stroke rounded-3xl p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[85vh]"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-bg border border-stroke text-muted hover:text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 text-xs text-muted uppercase tracking-wider mb-4">
                <span>{activeArticle.category}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h3 className="text-3xl md:text-4xl text-text-primary font-normal leading-tight mb-6">
                {activeArticle.title}{" "}
                <span className="font-display italic">
                  {activeArticle.italicWord}
                </span>
              </h3>

              <div className="h-56 md:h-64 rounded-2xl overflow-hidden mb-6 border border-stroke">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-base text-text-primary/90 leading-relaxed mb-6 font-light">
                {activeArticle.excerpt}
              </p>

              <p className="text-sm text-muted leading-relaxed mb-8">
                Building reliable autonomous agents requires obsessive focus on failure modes: token timeouts,
                stale context drift, and API rate normalization. Solving these in production is where real software engineering begins.
              </p>

              <div className="border-t border-stroke pt-6 flex justify-between items-center">
                <span className="text-xs text-muted font-mono">
                  Md Juber Quraishi // Technical Insights
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="text-xs uppercase tracking-wider text-text-primary hover:text-white px-5 py-2.5 rounded-full bg-bg border border-stroke cursor-pointer"
                >
                  Close article
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

