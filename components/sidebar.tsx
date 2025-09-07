"use client"

import { Home, User, FileText, Briefcase, Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const navItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: User, label: "About Me", id: "about" },
    { icon: FileText, label: "Resume", id: "resume" },
    { icon: Briefcase, label: "Portfolio", id: "portfolio" },
    { icon: Mail, label: "Contact", id: "contact" },
  ]

  return (
    // Hide sidebar on mobile, show on md and larger screens
    <div className="hidden md:flex w-80 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-900 text-white flex-col items-center py-8 px-6 relative border-r border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-900/40" />

      <div className="flex flex-col items-center mb-8 relative z-10">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-1 mb-6 backdrop-blur-sm">
          <div className="w-full h-full rounded-full bg-white p-1">
            <img src="/aayush_linkedin.jpg" alt="Aayush Malla" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2 text-center">Aayush Malla</h1>
        <p className="text-gray-300 text-lg mb-6">Data Engineer</p>

        <div className="flex gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/aayush-malla/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/aayushmalla13"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://medium.com/@aayushmalla56"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </a>
          <a href="mailto:mallaaayush59@gmail.com" className="hover:text-cyan-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <a href="/Aayush_Malla_CV.pdf" download="Aayush_Malla_CV.pdf">
          <Button
            variant="outline"
            className="border-2 border-cyan-400/50 text-white bg-gray-800/80 hover:bg-cyan-400/30 hover:border-cyan-400/70 px-8 py-2 rounded-full transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-400/20"
          >
            Download CV
          </Button>
        </a>
      </div>

      <nav className="flex-1 w-full relative z-10">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => onSectionChange(item.id)}
                className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg transition-all duration-300 group backdrop-blur-sm ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-white font-medium border border-cyan-400/30 shadow-lg shadow-cyan-400/10"
                    : "text-gray-300 hover:bg-gray-800/60 hover:text-white border border-transparent hover:border-white/20"
                }`}
              >
                <item.icon
                  size={20}
                  className={`${activeSection === item.id ? "text-cyan-300" : "text-gray-400 group-hover:text-white"}`}
                />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto text-center relative z-10">
        <p className="text-gray-400 text-xs">© 2025 All rights reserved.</p>
      </div>
    </div>
  )
}
