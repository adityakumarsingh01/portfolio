"use client";
import { motion } from "framer-motion";
import { LineChart, Eye } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const allProjects = [
  {
    title: "InsightForge AI",
    date: "Jul 2026 - Aug 2026",
    description: "AI-Powered End-to-End ML & Data Analytics Platform. Built a scalable full-stack solution to streamline workflows including dataset management, AutoML, and AI-assisted analytics.",
    tags: ["Next.js", "FastAPI", "TypeScript", "Python", "Scikit-learn", "Pandas"],
    github: "#", live: "#"
  },
  {
    title: "InvestIQ",
    date: "Jun 2026 - Jul 2026",
    description: "AI-Powered Investment Research Platform. Analyzes 10,000+ global publicly listed companies using real-time financial data.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Finnhub API"],
    github: "#", live: "#"
  },
  {
    title: "MediReporter: AI-Powered Clinical Report Analysis",
    date: "Recent",
    description: "Intelligent healthcare NLP application that analyzes clinical reports, generates concise medical summaries, and extracts diseases, symptoms, and treatments.",
    tags: ["Python", "FastAPI", "PyTorch", "NLP", "BART", "BioBERT"],
    github: "#", live: "#"
  },
  {
    title: "IPL Match Winner Prediction",
    date: "Recent",
    description: "Machine learning model using the IPL dataset (2008–2023) to predict match winners after data cleaning and preprocessing.",
    tags: ["Python", "ML", "Power BI", "Pandas", "Scikit-learn"],
    github: "#", live: "#"
  },
  {
    title: "Risk Behavior Analysis Dashboard",
    date: "Recent",
    description: "Interactive Power BI dashboard to analyze smoking and alcohol consumption patterns across different age groups.",
    tags: ["Python", "Pandas", "ML", "Power BI", "Scikit-learn"],
    github: "#", live: "#"
  },
  {
    title: "Taxi Trip Pricing Analysis",
    date: "Recent",
    description: "Analyzed taxi trip pricing data to understand factors influencing fare amounts such as distance, duration, and time-based variations.",
    tags: ["Python", "Pandas", "NumPy", "ML", "Data Analysis"],
    github: "#", live: "#"
  },
  {
    title: "Exam Score Prediction Analysis",
    date: "Recent",
    description: "Analyzed student exam score data to understand factors affecting academic performance.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "ML"],
    github: "#", live: "#"
  },
  {
    title: "NYC-311 Noise Dashboard",
    date: "Recent",
    description: "Analyzed NYC 311 noise complaint data (1M+ records) using Power BI and Excel.",
    tags: ["Excel", "Power BI", "Power Query", "Data Visualization"],
    github: "#", live: "#"
  },
  {
    title: "Adventure Works Sales Analysis",
    date: "Recent",
    description: "Analyzed Adventure Works sales data using Excel and Power BI to identify trends in revenue and regional sales.",
    tags: ["Power BI", "Power Query", "Time-Series Analysis"],
    github: "#", live: "#"
  },
  {
    title: "Customer Purchase Behavior Analysis",
    date: "Recent",
    description: "Analyzed customer purchase behavior using survey data collected through Google Forms.",
    tags: ["Python", "Pandas", "Data Cleaning"],
    github: "#", live: "#"
  },
  {
    title: "COVID-19 Data Analysis & Visualization",
    date: "Recent",
    description: "Analyzed global COVID-19 data to understand trends in cases, deaths, recovery rates, and regional impacts.",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    github: "#", live: "#"
  }
];

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black mb-4 text-gray-900 dark:text-white"
        >
          All <span className="text-gradient">Projects</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl"
        >
          A comprehensive archive of my work in machine learning, data engineering, and full-stack AI development.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass rounded-3xl p-8 flex flex-col h-[350px] relative overflow-hidden group border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-all cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex justify-between items-start mb-6 z-10">
              <div className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center border border-black/10 dark:border-white/10 group-hover:bg-blue-500/20 transition-colors">
                <LineChart className="w-6 h-6 text-blue-500 dark:text-blue-400" />
              </div>
              <span className="text-xs font-mono text-gray-500">{project.date}</span>
            </div>
            
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 z-10">{project.title}</h4>
            <p className="text-gray-700 dark:text-gray-400 text-sm mb-6 flex-grow z-10 line-clamp-3">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6 z-10">
              {project.tags.slice(0,3).map(tag => (
                <span key={tag} className="text-[10px] font-bold text-purple-600 dark:text-purple-300 bg-purple-100 dark:bg-purple-500/10 px-2 py-1 rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-black/5 dark:border-white/10 z-10">
              <a href={project.github} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm">
                <FaGithub /> Source
              </a>
              <a href={project.live} className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors flex items-center gap-1 text-sm font-medium">
                <Eye className="w-4 h-4" /> View
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
