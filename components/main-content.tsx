"use client"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

const FloatingParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => {
  const animationDuration = `${15 + Math.random() * 10}s`
  const size = Math.random() * 1.5 + 0.5

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
    <div className="flex-1 relative bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 overflow-hidden h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-gray-900/95 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/20" />
      </div>

      <ModernGridPattern />

      <GeometricElement className="w-96 h-96 -top-48 -left-48" delay={0} />
      <GeometricElement className="w-80 h-80 -bottom-40 -right-40" delay={2} />
      <GeometricElement className="w-64 h-64 top-1/4 right-1/4" delay={4} />

      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.8} x={Math.random() * 100} y={Math.random() * 100} />
        ))}
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
                className="text-gray-200 text-lg font-light tracking-wide"
                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.7)" }}
              >
                Designing data-driven intelligence for research and industry
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        <button
          onClick={() => onSectionChange?.("contact")}
          className="group p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          aria-label="Go to Contact"
        >
          <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
        </button>
        <button
          onClick={() => onSectionChange?.("about")}
          className="group p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          aria-label="Go to About"
        >
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
        </button>
      </div>
    </div>
  )
}
