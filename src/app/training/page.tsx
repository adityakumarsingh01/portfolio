"use client";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

const trainings = [
  {
    role: "Data Science Trainee",
    company: "Lovely Professional University (LPU)",
    date: "Jun' 25 - Jul' 25",
    title: "From Data to Decisions: A Hands-On Approach to Data Science",
    icon: <BookOpen className="w-5 h-5" />,
    link: "https://github.com/adityakumarsingh01/From-Data-to-Decisions-A-Hands-On-Approach-to-Data-Science.git",
    certificateImage: "/certificates/From%20Data%20to%20Decisions.jpg",
    skills: ["Power BI", "Excel", "Python", "Pandas", "NumPy", "Scikit-learn", "ML", "VS Code"],
    bullets: [
      <>This training program provided hands-on experience in applying data science techniques to solve real-world problems, focusing on transforming raw data into meaningful business insights. It covered the complete data analysis lifecycle, from data collection to insight communication.</>,
      <>I worked extensively with <strong>Power BI and Excel</strong> to build interactive dashboards such as the <strong>NYC 311 Noise Dashboard</strong> and <strong>Adventure Works Sales Analysis</strong>, where I analyzed large datasets and converted them into visually compelling and actionable insights for decision-making.</>,
      <>The program also strengthened my understanding of the <strong>end-to-end data science workflow</strong>, including <strong>data cleaning, exploratory data analysis (EDA), feature understanding, and basic machine learning implementation.</strong> Through projects like <strong>Risk Behavior Analysis</strong>, I gained practical experience in identifying patterns, analyzing trends, and presenting results using data visualization tools.</>,
      <>Additionally, I developed a strong foundation in the <strong>“Data to Decisions”</strong> framework, learning how to systematically approach data problems—starting from data acquisition and preprocessing to modeling and effectively communicating insights to support business and analytical decisions.</>,
    ]
  },
  {
    role: "Artificial Intelligence Intern",
    company: "Acmegrade",
    date: "Oct' 23 - Dec' 23",
    title: "Artificial Intelligence Internship",
    icon: <Briefcase className="w-5 h-5" />,
    link: "https://lnkd.in/p/dKP23kjJ",
    certificateImage: "/certificates/Aditya%20Kumar%20Singh_Internship%20Completion.jpg",
    skills: ["Python", "Data Analysis", "Artificial Intelligence", "Machine Learning"],
    bullets: [
      <>Completed an internship in <strong>Artificial Intelligence</strong>, gaining practical exposure to core AI and machine learning concepts. Developed a strong understanding of data-driven problem solving, including data preprocessing, model building, and basic predictive analysis.</>,
      <>During the internship, I worked on implementing machine learning techniques and explored real-world applications of AI. The experience enhanced my <strong>analytical thinking, problem-solving ability, and understanding of intelligent systems,</strong> while also strengthening my technical foundation in Python and data science workflows.</>,
      <>This internship also helped me build discipline, consistency, and a professional approach toward solving complex problems using technology.</>
    ]
  }
];

export default function TrainingPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12" style={{ fontFamily: 'Cambria, serif' }}>
      <div className="mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white capitalize tracking-wider"
          style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}
        >
          Professional <span className="text-blue-600 dark:text-blue-400">Training</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl"
        >
          Real-world data science experience and artificial intelligence internships driving actionable insights.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        {trainings.map((training, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="h-full"
          >
            <SpotlightCard className="h-full p-8 md:p-10 border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-colors group flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors capitalize tracking-wider"
                    style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}
                  >
                    {training.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-blue-500" /> {training.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-blue-500" /> {training.date}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 ml-4">
                  {training.icon}
                </div>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
                <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 block">Program</span>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 capitalize tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>{training.title}</p>
              </div>

              {training.certificateImage && (
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg mb-8">
                  <img
                    src={training.certificateImage}
                    alt={`${training.title} Certificate`}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}

              <ul className="space-y-4 mb-8 flex-grow">
                {training.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-sm md:text-base">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
                {training.skills.map(skill => (
                  <span key={skill} className="text-xs font-bold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800/50 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/5 group-hover:border-blue-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                <a href={training.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors tracking-wider text-sm shadow-lg hover:scale-105 transform duration-300 w-full md:w-auto" style={{ fontFamily: 'Geist Sans, sans-serif' }}>
                  View Certificate
                </a>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
