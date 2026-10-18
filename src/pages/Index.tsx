import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "../components/LoadingScreen";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { SelectedWorks } from "../components/SelectedWorks";
import { SkillsArsenal } from "../components/SkillsArsenal";
import { Journal } from "../components/Journal";
import { Explorations } from "../components/Explorations";
import { Stats } from "../components/Stats";
import { Footer } from "../components/Footer";
import { ResumeModal } from "../components/ResumeModal";

export const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("Home");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      const journalEl = document.getElementById("journal");
      const workEl = document.getElementById("work");

      if (journalEl && scrollPos >= journalEl.offsetTop) {
        setActiveSection("Writing");
      } else if (workEl && scrollPos >= workEl.offsetTop) {
        setActiveSection("Work");
      } else {
        setActiveSection("Home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg text-text-primary selection:bg-white/20 selection:text-white">
      {/* Section 1: Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Fixed Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Page Sections */}
      <main className="w-full">
        {/* Section 2: Hero */}
        <Hero
          isLoading={isLoading}
          onSeeWorks={() => {
            const el = document.getElementById("work");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onReachOut={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* Section 3: Selected Works */}
        <SelectedWorks />

        {/* Section 3.5: Technical Skills & Arsenal */}
        <SkillsArsenal />

        {/* Section 4: Journal */}
        <Journal />

        {/* Section 5: Explorations (Parallax Gallery) */}
        <Explorations />

        {/* Section 6: Stats */}
        <Stats />

        {/* Section 7: Contact / Footer */}
        <Footer />
      </main>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default Index;
