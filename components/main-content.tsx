

"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail } from "lucide-react"
import { useScrollNavigation } from "@/hooks/useScrollNavigation"

// Mobile Download CV Button with info message

// Mobile Download CV Button with info message
function MobileDownloadCVButton() {
  const [downloading, setDownloading] = React.useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Start download
    const link = document.createElement('a');
    link.href = '/Aayush_Malla_CV.pdf';
    link.download = 'Aayush_Malla_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Hide message after 2 seconds
    setTimeout(() => setDownloading(false), 2000);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <Button
        variant="outline"
        className="border-2 border-cyan-400/50 text-white bg-gray-800/80 hover:bg-cyan-400/30 hover:border-cyan-400/70 px-8 py-2 rounded-full transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-400/20 w-full max-w-xs"
        onClick={handleDownload}
      >
        Download CV
      </Button>
      {downloading && (
        <span className="mt-2 text-cyan-300 text-sm font-medium animate-pulse">Downloading...</span>
      )}
    </div>
  );
}

interface MainContentProps {
  onSectionChange?: (section: string) => void
}

const ModernGridPattern = () => {
  return (
    <div className="absolute inset-0 opacity-[0.03]">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "400px 400px, 600px 600px, 80px 80px, 80px 80px",
        }}
      />
    </div>
  )
}

const GeometricElement = ({ className, delay }: { className: string; delay: number }) => {
  return (
    <div
      className={`absolute opacity-10 animate-pulse ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: "6s",
      }}
    >
      <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl" />
    </div>
  )
}

const FloatingParticle = ({ delay, x, y, index }: { delay: number; x: number; y: number; index: number }) => {
  const baseSize = 0.5
  const sizeVariation = 0.3
  const size = baseSize + ((index % 3) * sizeVariation)
  
  const baseAnimationDuration = 15
  const durationVariation = 3
  const animationDuration = `${baseAnimationDuration + (index % 5) * durationVariation}s`

  return (
    <div
      className="absolute bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-[1px]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        animationName: "float",
        animationDuration: animationDuration,
        animationTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        animationIterationCount: "infinite",
        animationDelay: `${delay}s`,
      }}
    />
  )
}

export function MainContent({ onSectionChange }: MainContentProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentTitle, setCurrentTitle] = useState(0)
  const staticText = "I'm "
  const titles = ["Data Engineer", "ML Enthusiast"]

  const handleNavigation = (direction: 'up' | 'down') => {
    const sections = ['home', 'about', 'resume', 'portfolio', 'contact'];
    const currentSection = document.querySelector('[data-section]')?.getAttribute('data-section');
    const currentIndex = sections.indexOf(currentSection || 'home');
    
    let nextIndex;
    if (direction === 'down') {
      nextIndex = (currentIndex + 1) % sections.length;
    } else {
      nextIndex = currentIndex <= 0 ? sections.length - 1 : currentIndex - 1;
    }
    
    onSectionChange?.(sections[nextIndex]);
  }

  useScrollNavigation(handleNavigation);

  useEffect(() => {
    let currentIndex = 0
    let isDeleting = false

    const timer = setInterval(
      () => {
        const currentAnimatedText = titles[currentTitle]

        if (!isDeleting) {
          if (currentIndex <= currentAnimatedText.length) {
            setDisplayedText(currentAnimatedText.slice(0, currentIndex))
            currentIndex++
          } else {
            setTimeout(() => {
              isDeleting = true
            }, 3000)
          }
        } else {
          if (currentIndex > 0) {
            setDisplayedText(currentAnimatedText.slice(0, currentIndex - 1))
            currentIndex--
          } else {
            setCurrentTitle((prev) => (prev + 1) % titles.length)
            isDeleting = false
            currentIndex = 0
          }
        }
      },
      isDeleting ? 60 : 100,
    )

    return () => clearInterval(timer)
  }, [currentTitle])

  return (
    <div data-section="home" className="flex-1 relative bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 overflow-hidden h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-gray-900/95 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/20" />
      </div>

      <ModernGridPattern />

      <GeometricElement className="w-96 h-96 -top-48 -left-48" delay={0} />
      <GeometricElement className="w-80 h-80 -bottom-40 -right-40" delay={2} />
      <GeometricElement className="w-64 h-64 top-1/4 right-1/4" delay={4} />

      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => {
          const x = ((i % 4) * 25) + ((i * 7) % 15)
          const y = (Math.floor(i / 4) * 25) + ((i * 11) % 15)
          return (
            <FloatingParticle 
              key={i}
              index={i}
              delay={i * 0.8} 
              x={x} 
              y={y}
            />
          )
        })}
      </div>

      <div className="relative z-10 px-8 lg:px-16 max-w-4xl mx-auto">
        <div className="bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-12 lg:p-16 border border-white/10 shadow-2xl shadow-black/40">
          <div className="text-center space-y-8">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s", animationFillMode: "both" }}>
              <p
                className="text-white text-xl font-light mb-6 tracking-[0.2em] uppercase text-sm"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
              >
                Hello, I'm
              </p>
              <h1
                className="text-6xl lg:text-8xl font-extralight text-white mb-8 font-sans tracking-[-0.02em] leading-[0.9]"
                style={{ textShadow: "0 4px 12px rgba(0,0,0,0.9)" }}
              >
                Aayush{" "}
                <span className="text-cyan-300 font-light" style={{ textShadow: "0 4px 12px rgba(0,0,0,0.9)" }}>
                  Malla
                </span>
              </h1>
              <div className="flex justify-center mb-10">
                <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "both" }}>
              <h2
                className="text-3xl lg:text-4xl text-white font-extralight tracking-wide min-h-[4rem] leading-relaxed"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
              >
                <span className="text-white">{staticText}</span>
                <span className="text-cyan-200 font-light" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
                  {displayedText}
                </span>
                <span
                  className="animate-pulse text-cyan-300 ml-1"
                  style={{ animationDuration: "1s", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
                >
                  |
                </span>
              </h2>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
              <p
                className="text-gray-200 text-lg font-light tracking-wide mb-8"
                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.7)" }}
              >
                Designing data-driven intelligence for research and industry
              </p>
              {/* Social icons and Download CV button for mobile */}
              <div className="md:hidden flex flex-col items-center gap-4 animate-fade-in-up" style={{ animationDelay: "1.5s", animationFillMode: "both" }}>
                <div className="flex gap-6 items-center justify-center">
                  <a
                    href="https://www.linkedin.com/in/aayush-malla/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-cyan-400 transition-colors p-2"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/aayushmalla13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-cyan-400 transition-colors p-2"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="mailto:aayushmalla56@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-cyan-400 transition-colors p-2"
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href="https://medium.com/@aayushmalla56"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-cyan-400 transition-colors p-2"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  </a>
                </div>
                <MobileDownloadCVButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
