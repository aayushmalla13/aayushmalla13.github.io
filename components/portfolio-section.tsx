"use client"

import { useState } from "react"
import { ExternalLink, Brain, BarChart3, MapPin, GraduationCap, ChevronDown, ChevronUp } from "lucide-react"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const filters = ["All", "Machine Learning", "Web Development", "Data Engineering", "Mobile Apps"]

  const projects = [
    {
      id: 1,
      title: "Nepali License Plate Recognition",
      category: "Machine Learning",
      year: "2020",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      description:
        "Machine learning system to detect and extract Nepali license plate numbers with 95% accuracy using SVM and OpenCV.",
      technologies: ["Python", "OpenCV", "SVM", "Image Processing"],
      githubUrl: "https://github.com/aayushmalla13/Nepali-License-Plate-Recognition",
    },
    {
      id: 2,
      title: "Retail Data Analysis",
      category: "Data Engineering",
      year: "2022",
      icon: BarChart3,
      gradient: "from-blue-500 to-cyan-500",
      description:
        "Analyzed multi-million row retail datasets using Apache Spark to uncover seasonal trends and performance insights.",
      technologies: ["Apache Spark", "PySpark", "SQL", "DataFrames"],
    },
    {
      id: 3,
      title: "Xplore Nepal",
      category: "Mobile Apps",
      year: "2019",
      icon: MapPin,
      gradient: "from-green-500 to-emerald-500",
      description:
        "Android tourism app for Nepal featuring local areas, restaurants, heritage sites, and guide booking functionality.",
      technologies: ["Java", "Android Studio", "Google Maps API"],
      githubUrl: "https://github.com/aayushmalla13/Xplore-Nepal",
    },
    {
      id: 4,
      title: "KU Digitized Wall",
      category: "Web Development",
      year: "2022",
      icon: GraduationCap,
      gradient: "from-orange-500 to-red-500",
      description:
        "Web application similar to Google Classroom for managing courses, assignments, and virtual classrooms.",
      technologies: ["JavaScript", "Node.js", "Express.js", "SQLite", "REST APIs"],
      githubUrl: "https://github.com/aayushmalla13/Digitized-Info-wall",
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4)
  const hasMoreProjects = filteredProjects.length > 4

  return (
    <div data-section="portfolio" className="flex-1 relative bg-gray-800 text-white overflow-y-auto">
      <div className="max-w-6xl mx-auto px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 font-poppins">
            Portfolio<span className="text-cyan-400">.</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mb-4"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-cyan-400 text-gray-900"
                  : "text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {displayedProjects.map((project) => {
            const IconComponent = project.icon
            return (
              <div
                key={project.id}
                className="group bg-gray-700 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
              >
                <div
                  className={`aspect-[16/8] bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <IconComponent className="w-16 h-16 text-white/90 z-10" />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/5 rounded-full"></div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold font-poppins">{project.title}</h3>
                    <span className="text-cyan-400 text-sm font-medium">{project.year}</span>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    {project.award && (
                      <span className="inline-block bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium ml-2">
                        🏆 {project.award}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-600 text-gray-200 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View on GitHub
                      </a>
                    ) : (
                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                        <ExternalLink className="w-4 h-4" />
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {hasMoreProjects && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 bg-cyan-400 text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-cyan-300 transition-colors"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  See More Projects
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
