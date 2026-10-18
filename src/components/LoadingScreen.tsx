import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const ROTATING_WORDS = ["Build", "Automate", "Deploy"];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState<number>(0);
  const [wordIndex, setWordIndex] = useState<number>(0);

  // Cycle rotating words every 900ms
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 900);

    return () => clearInterval(wordInterval);
  }, []);

  // requestAnimationFrame counter from 000 -> 100 over 2700ms
  useEffect(() => {
    const duration = 2700; // ms
    let startTime: number | null = null;
    let animationFrameId: number;
    let completedTimer: ReturnType<typeof setTimeout> | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutExpo or smooth progress
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(100);
        // 400ms delay then calls onComplete
        completedTimer = setTimeout(() => {
          onComplete();
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (completedTimer) clearTimeout(completedTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-14 select-none overflow-hidden"
    >
      {/* Top Left: Portfolio label */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xs text-muted uppercase tracking-[0.3em] font-medium"
      >
        JUBER // AI & FULLSTACK
      </motion.div>

      {/* Center: Rotating words */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-24 md:h-32 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={ROTATING_WORDS[wordIndex]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
            >
              {ROTATING_WORDS[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Row: Counter on the right */}
      <div className="flex justify-end items-end w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums"
        >
          {String(count).padStart(3, "0")}
        </motion.div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-[3px] bg-stroke/50 overflow-hidden">
        <div
          className="h-full accent-gradient transition-transform duration-75 ease-linear origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
        />
      </div>
    </motion.div>
  );
};

