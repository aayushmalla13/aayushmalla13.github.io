"use client"

import { useState, useCallback, useMemo, useEffect } from "react"
import { Sidebar } from "../components/sidebar"
import { MainContent } from "../components/main-content"
import { useScrollNavigation } from "../hooks/useScrollNavigation"
import { AboutSection } from "../components/about-section"
import { ResumeSection } from "../components/resume-section"
import { PortfolioSection } from "../components/portfolio-section"
import { ContactSection } from "../components/contact-section"
import { ChevronLeft, ChevronRight } from "lucide-react"
import MobileNavigation from "../components/mobile-navigation"

function HomePage() {
  const [activeSection, setActiveSection] = useState("home")
  const [isTransitioning, setIsTransitioning] = useState(false)

  const sections = ["home", "about", "resume", "portfolio", "contact"]

  const handleSectionChange = useCallback(
    (newSection: string) => {
      if (newSection === activeSection || isTransitioning) return

      // Ensure scroll position is at top
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      setIsTransitioning(true)

      setTimeout(() => {
        setActiveSection(newSection)
        // Reset scroll position again after section change
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => {
          setIsTransitioning(false)
        }, 50)
      }, 250)
    },
    [activeSection, isTransitioning],
  )

  // Handle scroll-based navigation
  useScrollNavigation((direction) => {
    const currentIndex = sections.indexOf(activeSection);
    if (direction === 'up' && currentIndex > 0) {
      handleSectionChange(sections[currentIndex - 1]);
    } else if (direction === 'down') {
      if (currentIndex < sections.length - 1) {
        handleSectionChange(sections[currentIndex + 1]);
      } else if (currentIndex === sections.length - 1) {
        // If we're at the last section (contact) and scrolling down, go to home
        handleSectionChange('home');
      }
    }
  });

  const navigateToNextSection = useCallback(() => {
    const currentIndex = sections.indexOf(activeSection)
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1]
      handleSectionChange(nextSection)
    }
  }, [activeSection, handleSectionChange, sections])

  const navigateToPrevSection = useCallback(() => {
    const currentIndex = sections.indexOf(activeSection)
    if (currentIndex > 0) {
      const prevSection = sections[currentIndex - 1]
      handleSectionChange(prevSection)
    }
  }, [activeSection, handleSectionChange, sections])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault()
        navigateToNextSection()
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault()
        navigateToPrevSection()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isTransitioning, navigateToNextSection, navigateToPrevSection])

  const renderSection = useMemo(() => {
    switch (activeSection) {
      case "home":
        return <MainContent onSectionChange={handleSectionChange} />
      case "about":
        return <AboutSection />
      case "resume":
        return <ResumeSection />
      case "portfolio":
        return <PortfolioSection />
      case "contact":
        return <ContactSection onSectionChange={handleSectionChange} />
      default:
        return null
    }
  }, [activeSection, handleSectionChange])

  return (
    <div className="flex min-h-screen bg-gray-900">
      <div className="fixed left-0 top-0 h-full z-30 hidden md:block">
        <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
      </div>

      <div className="w-full md:ml-80 flex-1 overflow-x-hidden">
        <div
          className={`transition-all duration-300 ease-out overflow-y-auto ${
            isTransitioning ? "opacity-0 scale-98 translate-y-2" : "opacity-100 scale-100 translate-y-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-purple-500/3 to-blue-500/5 transition-opacity duration-300 pointer-events-none ${
              isTransitioning ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="relative z-10 min-h-screen">{renderSection}</div>

          {/* Mobile Navigation */}
          <MobileNavigation 
            activeSection={activeSection}
            sections={sections}
            onNavigate={handleSectionChange}
          />

          {/* Desktop Navigation Arrows */}
          <div
            className={`fixed right-6 top-1/3 transform -translate-y-1/2 z-20 flex-col gap-3 ${
              activeSection === "home" || activeSection === "contact" ? "hidden" : "hidden lg:flex"
            }`}
          >
            {/* Previous Section Arrow */}
            <button
              onClick={navigateToPrevSection}
              disabled={sections.indexOf(activeSection) === 0 || isTransitioning}
              className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-gray-400 disabled:hover:border-gray-700/50"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next Section Arrow */}
            <button
              onClick={() => {
                if (activeSection === "contact") {
                  handleSectionChange("home")
                } else {
                  navigateToNextSection()
                }
              }}
              disabled={isTransitioning}
              className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-gray-400 disabled:hover:border-gray-700/50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
