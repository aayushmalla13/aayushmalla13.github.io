"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface MobileNavigationProps {
  activeSection: string;
  sections: string[];
  onNavigate: (section: string) => void;
}

export default function MobileNavigation({ activeSection, sections, onNavigate }: MobileNavigationProps) {
  const currentIndex = sections.indexOf(activeSection)
  const isFirstSection = currentIndex === 0
  const isLastSection = currentIndex === sections.length - 1
  const showUpArrow = !isFirstSection
  const showDownArrow = (!isLastSection && activeSection !== "home") || activeSection === "contact"

  return (
    <>
      {/* Up Arrow */}
      {showUpArrow && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              if (currentIndex > 0) {
                onNavigate(sections[currentIndex - 1])
              }
            }}
            className="p-3 bg-[#0B1121]/80 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:bg-[#00E5FF]/20 hover:border-[#00E5FF]/50 transition-all duration-300"
            aria-label="Previous section"
          >
            <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-[#00E5FF]" />
          </button>
        </div>
      )}

      {/* Down Arrow */}
      {showDownArrow && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              if (activeSection === "contact") {
                onNavigate("home")
              } else if (currentIndex < sections.length - 1) {
                onNavigate(sections[currentIndex + 1])
              }
            }}
            className="p-3 bg-[#0B1121]/80 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:bg-[#00E5FF]/20 hover:border-[#00E5FF]/50 transition-all duration-300"
            aria-label="Next section"
          >
            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-[#00E5FF]" />
          </button>
        </div>
      )}
    </>
  );
}