"use client";
import { motion } from "framer-motion";
import { Terminal, Database, Code2 } from "lucide-react";

export default function TrainingPage() {
  return (
    <main className="max-w-5xl mx-auto px-12 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">
          {/* <span className="text-gray-500 font-mono text-2xl mr-4">03.</span> */}
          Professional <span className="text-gradient">Training</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-xl font-light">
          Real-world data science experience and artificial intelligence internships.
        </p>
      </motion.div>

      <div className="space-y-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass p-10 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500" />
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">From Data to Decisions : A Hands-On Approach to Data Science</h3>
              <p className="text-blue-600 dark:text-blue-400 font-mono">Lovely Professional University (LPU)</p>
            </div>
            <span className="text-sm font-mono text-gray-600 dark:text-gray-400 bg-black/5 dark:bg-black/50 px-3 py-1 rounded">Jun 2025 – Aug 2025</span>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {["Power BI", "Excel", "Python", "Pandas", "NumPy", "Scikit-learn", "ML", "VS Code"].map(tech => (
              <span key={tech} className="text-xs font-bold text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-400 leading-relaxed">
            <p>
              This training program provided hands-on experience in applying data science techniques to solve real-world problems, focusing on transforming raw data into meaningful business insights. It covered the complete data analysis lifecycle, from data collection to insight communication.
            </p>
            <p>
              I worked extensively with Power BI and Excel to build interactive dashboards such as the NYC 311 Noise Dashboard and Adventure Works Sales Analysis, where I analyzed large datasets and converted them into visually compelling and actionable insights for decision-making.
            </p>
            <p>
              The program also strengthened my understanding of the end-to-end data science workflow, including data cleaning, exploratory data analysis (EDA), feature understanding, and basic machine learning implementation. Through projects like Risk Behavior Analysis, I gained practical experience in identifying patterns, analyzing trends, and presenting results using data visualization tools.
            </p>
            <p>
              Additionally, I developed a strong foundation in the "Data to Decisions" framework, learning how to systematically approach data problems—starting from data acquisition and preprocessing to modeling and effectively communicating insights to support business and analytical decisions.
            </p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass p-10 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-purple-500" />
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Artificial Intelligence Internship</h3>
              <p className="text-purple-600 dark:text-purple-400 font-mono">Acmegrade</p>
            </div>
            <span className="text-sm font-mono text-gray-600 dark:text-gray-400 bg-black/5 dark:bg-black/50 px-3 py-1 rounded">Oct 2023 – Dec 2023</span>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {["Python", "Data Analysis", "Artificial Intelligence"].map(tech => (
              <span key={tech} className="text-xs font-bold text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1 rounded-full uppercase tracking-wider">
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-400 leading-relaxed">
            <p>
              Completed an internship in Artificial Intelligence, gaining practical exposure to core AI and machine learning concepts. Developed a strong understanding of data-driven problem solving, including data preprocessing, model building, and basic predictive analysis.
            </p>
            <p>
              During the internship, I worked on implementing machine learning techniques and explored real-world applications of AI. The experience enhanced my analytical thinking, problem-solving ability, and understanding of intelligent systems, while also strengthening my technical foundation in Python and data science workflows.
            </p>
            <p>
              This internship also helped me build discipline, consistency, and a professional approach toward solving complex problems using technology.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
