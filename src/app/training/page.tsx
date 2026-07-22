"use client";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function TrainingPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white"
        >
          Professional <span className="text-blue-500">Training</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl"
        >
          Real-world data science experience and artificial intelligence internships.
        </motion.p>
      </div>

      <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="shrink-0 w-[90vw] md:w-[800px] snap-center">
          <SpotlightCard className="h-full p-8 md:p-12 border border-black/5 dark:border-white/5 group">
            <div className="flex justify-between items-start md:items-end mb-8 flex-col md:flex-row gap-4 relative z-10">
              <div>
                <span className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
                  <BookOpen className="w-4 h-4" /> Lovely Professional University (LPU) • Jun 2025 – Aug 2025
                </span>
                <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                  From Data to Decisions: <br />
                  <span className="text-gray-500">A Hands-On Approach to Data Science</span>
                </h3>
              </div>
            </div>

            <div className="mb-10 flex flex-wrap gap-2 relative z-10">
              {["Power BI", "Excel", "Python", "Pandas", "NumPy", "Scikit-learn", "ML", "VS Code"].map(tech => (
                <span key={tech} className="text-xs font-bold text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/10 px-4 py-2 rounded-full border border-black/5 dark:border-white/5 group-hover:border-blue-500/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-4xl relative z-10">
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
          </SpotlightCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="shrink-0 w-[90vw] md:w-[800px] snap-center">
          <SpotlightCard className="h-full p-8 md:p-12 border border-black/5 dark:border-white/5 group">
            <div className="flex justify-between items-start md:items-end mb-8 flex-col md:flex-row gap-4 relative z-10">
              <div>
                <span className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
                  <Briefcase className="w-4 h-4" /> Acmegrade • Oct 2023 – Dec 2023
                </span>
                <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                  Artificial Intelligence <br />
                  <span className="text-gray-500">Internship</span>
                </h3>
              </div>
            </div>

            <div className="mb-10 flex flex-wrap gap-2 relative z-10">
              {["Python", "Data Analysis", "Artificial Intelligence"].map(tech => (
                <span key={tech} className="text-xs font-bold text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/10 px-4 py-2 rounded-full border border-black/5 dark:border-white/5 group-hover:border-blue-500/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-4xl relative z-10">
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
          </SpotlightCard>
        </motion.div>
      </div>
    </main>
  );
}
