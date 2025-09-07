"use client"

import { MapPin, Phone, Mail, CheckCircle, ChevronRight, ChevronLeft, Linkedin } from "lucide-react"

interface ContactSectionProps {
  onSectionChange?: (section: string) => void
}

export function ContactSection({ onSectionChange }: ContactSectionProps) {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Kathmandu",
      subtitle: "Nepal",
    },
    {
      icon: Phone,
      title: "+977-9851203045",
      subtitle: "Mobile",
    },
    {
      icon: Mail,
      title: "mallaaayush59",
      subtitle: "@gmail.com",
    },
    {
      icon: CheckCircle,
      title: "Freelance Available",
      subtitle: "Remote Work",
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aayush-malla/",
      icon: Linkedin,
      description: "Connect with me professionally",
    },
    {
      name: "Medium",
      url: "https://medium.com/@aayushmalla56",
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
      description: "Read my articles and insights",
    },
    {
      name: "Email",
      url: "mailto:mallaaayush59@gmail.com",
      icon: Mail,
      description: "Send me a direct message",
    },
  ]

  return (
    <div data-section="contact" className="flex-1 relative bg-gray-800 text-white overflow-y-auto">
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        <button
          onClick={() => onSectionChange?.("portfolio")}
          className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
          aria-label="Go to portfolio"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => onSectionChange?.("home")}
          className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 hover:scale-110"
          aria-label="Go to home"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Contact<span className="text-cyan-400">.</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-bold mb-6">
              Get In <span className="text-cyan-400">Touch</span>
            </h3>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    <info.icon className="text-cyan-400" size={32} />
                  </div>
                  <h3 className="font-semibold mb-1 break-words text-sm">{info.title}</h3>
                  <p className="text-gray-400 text-sm">{info.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Social Media Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6">
              Let's <span className="text-cyan-400">Connect</span>
            </h3>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/30 transition-all duration-300">
                    <social.icon />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {social.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{social.description}</p>
                  </div>
                  <ChevronRight
                    className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300"
                    size={20}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
