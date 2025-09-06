export function ExperienceSection() {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Fusemachines",
      location: "Kathmandu, Nepal",
      period: "March 2022 – Present",
      responsibilities: [
        "Built modular ETL pipelines in Azure ADF to integrate ERP data across HR, Finance, and Procurement systems",
        "Developed PySpark and Spark SQL scripts in Databricks for data cleaning, transformation, and modeling",
        "Automated workflows and CI/CD using ADF, Databricks, and Azure DevOps, reducing manual effort by 50%",
        "Designed ETL pipelines for organizational data and built Power BI dashboards for leadership reporting",
        "Delivered training sessions on SQL, PySpark, Spark SQL, Databricks, and Azure technologies",
      ],
    },
    {
      title: "Software Engineer",
      company: "COTIVITI",
      location: "Kathmandu, Nepal",
      period: "Feb 2021 – Feb 2022",
      responsibilities: [
        "Developed PL/SQL ETL workflows for 20+ insurance clients, enabling custom data processing",
        "Built reusable ODI pipelines to normalize and centralize raw health insurance data from 20+ providers",
        "Created Oracle Apex dashboards to support fraud detection and cost optimization",
        "Automated routine ETL and data quality tasks with PL/SQL scripts, reducing manual effort",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "National Institute of Science and Technology, Nepal",
      location: "Nepal",
      period: "May 2022 – March 2023",
      responsibilities: [
        "Taught Object-Oriented Programming and Database Management Systems to undergraduate BCA students",
        "Led lab sessions and tutoring, providing hands-on guidance in problem-solving and SQL programming",
        "Contributed to assignment design and evaluation, fostering interactive learning environment",
      ],
    },
  ]

  return (
    <div className="flex-1 relative bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-16 h-1 bg-cyan-400 mb-8"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-cyan-600 font-medium">{exp.company}</p>
                  <p className="text-gray-500">{exp.location}</p>
                </div>
                <span className="text-gray-500 font-medium">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start gap-2">
                    <span className="text-cyan-400 mt-2">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
