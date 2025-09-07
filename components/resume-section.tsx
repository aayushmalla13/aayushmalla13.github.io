import { Code, Database, Cloud, BarChart3, Wrench, Award } from "lucide-react"

export function ResumeSection() {
  const educationData = [
    {
      year: "2020",
      title: "Computer Engineering",
      institution: "Kathmandu University",
      description:
        "Bachelor's degree in Computer Engineering with focus on machine learning, data structures, and AI. Achieved 3.60/4.00 GPA (Top 5% in class).",
    },
  ]

  const certificationData = [
    {
      year: "2024",
      title: "Databricks Certified Associate Developer for Spark",
      institution: "Databricks",
    },
    {
      year: "2023",
      title: "Data Engineering with Databricks",
      institution: "Databricks Academy",
    },
    {
      year: "2023",
      title: "Introduction to Data Engineering",
      institution: "Databricks Academy",
    },
    {
      year: "2022",
      title: "Data Analysis with Pandas and Python",
      institution: "Udemy",
    },
  ]

  const experienceData = [
    {
      year: "2022 - Current",
      title: "Data Engineer",
      company: "Fusemachines",
      description:
        "Built modular ETL pipelines in Azure ADF, developed PySpark scripts, and automated CI/CD workflows reducing manual effort by 50%.",
    },
    {
      year: "2022 - 2023",
      title: "Teaching Assistant",
      company: "NIST College",
      description:
        "Taught Object-Oriented Programming and Database Management Systems to undergraduate students with hands-on lab sessions.",
    },
    {
      year: "2021 - 2022",
      title: "Software Engineer",
      company: "COTIVITI",
      description:
        "Developed PL/SQL ETL workflows for 20+ insurance clients and created Oracle Apex dashboards for fraud detection and cost optimization.",
    },
  ]

  const allSkills = [
    { name: "Python (4+ years)", icon: Code },
    { name: "SQL (5+ years)", icon: Database },
    { name: "PySpark", icon: Code },
    { name: "JavaScript", icon: Code },
    { name: "Node.js", icon: Code },
    { name: "PostgreSQL", icon: Database },
    { name: "MySQL/MSSQL", icon: Database },
    { name: "Flask", icon: Code },
    { name: "Pandas", icon: Code },
    { name: "NumPy", icon: Code },
    { name: "Matplotlib", icon: BarChart3 },
    { name: "Scikit-learn", icon: Code },
    { name: "OpenCV", icon: Code },
    { name: "TensorFlow", icon: Code },
    { name: "PowerBI/Tableau", icon: BarChart3 },
  ]

  const cloudSkills = [
    { name: "AWS (S3, Glue, Athena)", icon: Cloud },
    { name: "Azure (ADF, ADLS, Synapse)", icon: Cloud },
    { name: "GCP (BigQuery, Cloud Storage)", icon: Cloud },
    { name: "Apache Airflow", icon: Wrench },
    { name: "Databricks", icon: Database },
    { name: "Delta Live Tables", icon: Database },
  ]

  const knowledgeAreas = ["Machine Learning", "Deep Learning", "Generative AI", "DevOps"]

  return (
    <div data-section="resume" className="flex-1 relative bg-gray-800 text-white overflow-y-auto">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 font-poppins">
            Resume<span className="text-cyan-400">.</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Education, Experience & Certifications */}
          <div className="lg:col-span-2">
            {/* Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 font-poppins">Education</h3>
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                      <div className="w-0.5 h-16 bg-gray-600 mt-2"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-cyan-400 font-semibold">{item.year}</span>
                        <h4 className="text-xl font-semibold font-poppins">{item.title}</h4>
                      </div>
                      <p className="text-cyan-400 mb-2">{item.institution}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 font-poppins">Experience</h3>
              <div className="space-y-8">
                {experienceData.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-6 animate-slide-in-left"
                    style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-cyan-400 rounded-full"></div>
                      {index < experienceData.length - 1 && <div className="w-0.5 h-16 bg-gray-600 mt-2"></div>}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-cyan-400 font-semibold">{item.year}</span>
                        <h4 className="text-xl font-semibold font-poppins">{item.title}</h4>
                      </div>
                      <p className="text-cyan-400 mb-2">{item.company}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 font-poppins">Certifications</h3>
              <div className="space-y-2">
                {certificationData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-700/30 border border-gray-600/50 rounded-md px-4 py-2 hover:bg-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <Award className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                        <p className="text-xs text-cyan-400">{item.institution}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-300 bg-gray-600/50 px-2 py-1 rounded">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 font-poppins">
                Skills<span className="text-cyan-400">.</span>
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {allSkills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-700 rounded-md p-2 hover:bg-gray-600 transition-all duration-300 animate-fade-in-up flex items-center gap-1"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <IconComponent className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span className="text-white font-medium text-xs">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Cloud Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 font-poppins">
                Cloud <span className="text-cyan-400">Tech</span>
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {cloudSkills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div
                      key={index}
                      className="bg-gray-700 rounded-md p-2 hover:bg-gray-600 transition-all duration-300 animate-fade-in-up flex items-center gap-2"
                      style={{ animationDelay: `${(index + 20) * 0.05}s` }}
                    >
                      <IconComponent className="w-4 h-4 text-cyan-400" />
                      <span className="text-white font-medium text-xs">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Knowledge */}
            <div>
              <h3 className="text-xl font-bold mb-4 font-poppins">
                Knowledge<span className="text-cyan-400">.</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {knowledgeAreas.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-600 transition-colors duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
