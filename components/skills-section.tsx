export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["SQL (5+ years)", "Python (4+ years)"],
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MySQL/MSSQL", "Postman", "GitHub"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["PySpark", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "OpenCV", "Flask", "TensorFlow"],
    },
    {
      title: "Generative AI",
      skills: ["AI Agents", "RAG Chatbot"],
    },
    {
      title: "Deep Learning",
      skills: ["Computer Vision", "NLP", "Reinforcement Learning"],
    },
    {
      title: "Machine Learning",
      skills: [
        "Supervised & Unsupervised Learning",
        "Feature Engineering",
        "Model Evaluation",
        "Clustering (K-Means, DBSCAN)",
        "Random Forest",
        "SVM",
      ],
    },
    {
      title: "Data Visualization",
      skills: ["PowerBI/Tableau"],
    },
  ]

  return (
    <div className="flex-1 relative bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="w-16 h-1 bg-cyan-400 mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
