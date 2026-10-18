import React, { useState, useEffect } from "react";

interface NavbarProps {
  onOpenResume?: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  activeSection = "Home",
}) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [logoHovered, setLogoHovered] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link: string) => {
    if (link === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (link === "Work") {
      const el = document.getElementById("work");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (link === "Open Source") {
      const el = document.getElementById("opensource");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (link === "Writing") {
      const el = document.getElementById("journal");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (link === "Resume") {
      if (onOpenResume) onOpenResume();
    }
  };

  const handleSayHiClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "mailto:qjuber066@gmail.com";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 pointer-events-auto transition-all duration-300 ${
          scrolled ? "shadow-md shadow-black/10 bg-surface/90 border-white/15" : ""
        }`}
      >
        {/* 1. Logo: 9x9 circle with accent gradient border (reverses direction on hover). Inner bg-bg circle with "JQ" in font-display italic text-[13px]. Scales 110% on hover. */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
          className="relative w-9 h-9 rounded-full p-[1.5px] transition-transform duration-300 hover:scale-110 flex items-center justify-center cursor-pointer select-none"
          title="Md Juber Quraishi (JQ)"
        >
          <div
            className={`absolute inset-0 rounded-full transition-all duration-500 ${
              logoHovered ? "accent-gradient-rev" : "accent-gradient"
            }`}
          />
          <div className="relative w-full h-full rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] text-text-primary leading-none select-none">
              JQ
            </span>
          </div>
        </button>

        {/* 2. Divider (hidden on mobile) */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* 3. Nav links: ["Home", "Work", "Open Source", "Writing", "Resume"] */}
        <div className="flex items-center gap-1">
          {["Home", "Work", "Open Source", "Writing", "Resume"].map((link) => {
            const isActive = activeSection === link;
            return (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 cursor-pointer font-medium ${
                  isActive
                    ? "text-text-primary bg-stroke/50"
                    : "text-muted hover:text-text-primary hover:bg-stroke/50"
                }`}
              >
                {link}
              </button>
            );
          })}
        </div>

        {/* 4. Divider */}
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        {/* 5. "Say hi" button */}
        <button
          onClick={handleSayHiClick}
          className="relative text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 group cursor-pointer"
        >
          {/* Gradient border behind on hover */}
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-1.5 bg-surface rounded-full backdrop-blur-md px-3 sm:px-3.5 py-1 text-text-primary font-medium">
            <span>Say hi</span>
            <span className="text-[13px] font-sans group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              ↗
            </span>
          </span>
        </button>
      </div>
    </nav>
  );
};

