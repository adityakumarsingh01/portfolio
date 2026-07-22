"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { LineChart, Eye, ArrowRight, ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const allProjects = [
  {
    title: "InsightForge AI",
    date: "Jul 2026 - Aug 2026",
    description: "AI-Powered End-to-End ML & Data Analytics Platform. Built a scalable full-stack solution to streamline workflows including dataset management, AutoML, and AI-assisted analytics.",
    detailedDescription: "InsightForge AI is a comprehensive machine learning and data analytics platform designed to democratize AI. It features an intuitive drag-and-drop interface for dataset management, automated machine learning (AutoML) pipelines that select the best algorithms, and an AI assistant that provides actionable insights from complex datasets. The architecture is built for high scalability and low latency, leveraging distributed computing.",
    tags: ["Next.js", "FastAPI", "TypeScript", "Python", "Scikit-learn", "Pandas"],
    github: "#", live: "#"
  },
  {
    title: "InvestIQ",
    date: "Jun 2026 - Jul 2026",
    description: "AI-Powered Investment Research Platform. Analyzes 10,000+ global publicly listed companies using real-time financial data.",
    detailedDescription: "InvestIQ revolutionizes retail investing by bringing institutional-grade research tools to everyday investors. The platform ingests real-time financial data from the Finnhub API and uses proprietary NLP models to analyze earnings call transcripts, news sentiment, and SEC filings. The dashboard provides clear, actionable scores for over 10,000 publicly traded companies.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Finnhub API"],
    github: "#", live: "#"
  },
  {
    title: "MediReporter: AI Clinical Analysis",
    date: "Recent",
    description: "Intelligent healthcare NLP application that analyzes clinical reports, generates concise medical summaries, and extracts diseases.",
    detailedDescription: "MediReporter aims to reduce the administrative burden on healthcare professionals. By utilizing state-of-the-art NLP models like BioBERT and BART, it processes dense clinical reports and outputs highly accurate, structured medical summaries. It automatically extracts key entities such as symptoms, prescribed treatments, and diagnosed diseases, presenting them in an easy-to-read dashboard.",
    tags: ["Python", "FastAPI", "PyTorch", "NLP", "BART", "BioBERT"],
    github: "#", live: "#"
  },
  {
    title: "IPL Match Winner Prediction",
    date: "Recent",
    description: "Machine learning model using the IPL dataset (2008–2023) to predict match winners after data cleaning and preprocessing.",
    detailedDescription: "This project dives deep into historical cricket data spanning from 2008 to 2023. After extensive data cleaning and feature engineering (including factors like toss decisions, weather conditions, and venue history), several machine learning classification models were trained. The final model achieves a high accuracy rate in predicting the winner of an IPL match before the first ball is even bowled.",
    tags: ["Python", "ML", "Power BI", "Pandas", "Scikit-learn"],
    github: "#", live: "#"
  },
  {
    title: "Risk Behavior Dashboard",
    date: "Recent",
    description: "Interactive Power BI dashboard to analyze smoking and alcohol consumption patterns across different age groups.",
    detailedDescription: "A comprehensive data visualization project focused on public health. The Risk Behavior Dashboard aggregates thousands of demographic data points to visualize trends in smoking and alcohol consumption. It highlights critical correlations between age groups, socioeconomic status, and risk behaviors, providing valuable insights for public health policy makers.",
    tags: ["Python", "Pandas", "ML", "Power BI", "Scikit-learn"],
    github: "#", live: "#"
  },
  {
    title: "Taxi Trip Pricing Analysis",
    date: "Recent",
    description: "Analyzed taxi trip pricing data to understand factors influencing fare amounts such as distance, duration, and time-based variations.",
    detailedDescription: "By analyzing millions of taxi trip records, this project uncovers the hidden patterns behind urban mobility pricing. The analysis uses time-series forecasting and regression models to determine exactly how distance, time of day, weather, and specific pickup/dropoff zones influence the final fare. The results are presented in an interactive Jupyter Notebook.",
    tags: ["Python", "Pandas", "NumPy", "ML", "Data Analysis"],
    github: "#", live: "#"
  },
  {
    title: "Exam Score Prediction",
    date: "Recent",
    description: "Analyzed student exam score data to understand factors affecting academic performance.",
    detailedDescription: "This educational data mining project seeks to predict student exam scores based on a variety of input features including attendance, past performance, study hours, and socioeconomic background. The project utilizes several regression algorithms to build a highly accurate prediction model that can help educators identify at-risk students early in the semester.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "ML"],
    github: "#", live: "#"
  },
  {
    title: "NYC-311 Noise Dashboard",
    date: "Recent",
    description: "Analyzed NYC 311 noise complaint data (1M+ records) using Power BI and Excel.",
    detailedDescription: "New York City never sleeps, and neither do the complaints. This project processes over a million rows of NYC 311 noise complaint data to create an interactive Power BI dashboard. It visualizes noise hotspots across the five boroughs, identifies seasonal and time-of-day trends, and provides an exploratory tool for urban planners to understand noise pollution.",
    tags: ["Excel", "Power BI", "Power Query", "Data Visualization"],
    github: "#", live: "#"
  },
  {
    title: "Adventure Works Analysis",
    date: "Recent",
    description: "Analyzed Adventure Works sales data using Excel and Power BI to identify trends in revenue and regional sales.",
    detailedDescription: "A classic business intelligence project using the famous Adventure Works database. This dashboard tracks KPIs such as year-over-year revenue growth, regional sales performance, and product category profitability. The interactive reports allow stakeholders to drill down into specific regions and timeframes to uncover hidden sales trends.",
    tags: ["Power BI", "Power Query", "Time-Series Analysis"],
    github: "#", live: "#"
  },
  {
    title: "Customer Behavior Analysis",
    date: "Recent",
    description: "Analyzed customer purchase behavior using survey data collected through Google Forms.",
    detailedDescription: "To better understand modern consumer habits, this project analyzes a custom dataset collected via Google Forms. The data cleaning phase dealt with messy, free-text inputs, while the exploratory data analysis (EDA) phase uncovered fascinating correlations between demographic traits and purchasing preferences, specifically regarding online vs. in-store shopping.",
    tags: ["Python", "Pandas", "Data Cleaning"],
    github: "#", live: "#"
  },
  {
    title: "COVID-19 Data Analysis",
    date: "Recent",
    description: "Analyzed global COVID-19 data to understand trends in cases, deaths, recovery rates, and regional impacts.",
    detailedDescription: "A sobering but necessary exploratory data analysis project tracking the global impact of the COVID-19 pandemic. Using Python and Matplotlib, this project creates striking visual narratives that track the spread of the virus over time. It compares infection and mortality rates across different countries and investigates the effectiveness of early lockdown measures.",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    github: "#", live: "#"
  }
];

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = allProjects.find(p => p.title === selectedId);

  const gradients = [
    "from-blue-600 via-indigo-500 to-purple-600",
    "from-emerald-500 via-teal-400 to-cyan-500",
    "from-rose-500 via-pink-500 to-purple-500",
    "from-amber-500 via-orange-500 to-red-500"
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative">
      <div className="mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white"
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
          <div key={project.title} onClick={() => setSelectedId(project.title)}>
            <Project3DCard project={project} index={idx} layoutId={project.title} />
          </div>
        ))}
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              layoutId={selectedId}
              className="bg-gray-50 dark:bg-[#0a0026] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedId(null)} 
                className="absolute top-6 right-6 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Side: Visuals */}
              <div className={`w-full md:w-2/5 h-64 md:h-auto bg-gradient-to-br ${gradients[allProjects.findIndex(p => p.title === selectedId) % gradients.length]} relative flex flex-col justify-end p-8`}>
                <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                
                <h2 className="text-4xl md:text-5xl font-black text-white relative z-10 drop-shadow-lg leading-tight">
                  {selectedProject.title}
                </h2>
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col">
                <span className="text-sm font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-6">
                  {selectedProject.date}
                </span>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/10 px-4 py-2 rounded-full uppercase tracking-wider border border-black/5 dark:border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  {selectedProject.detailedDescription}
                </p>

                <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-8 border-t border-black/5 dark:border-white/10">
                  <a href={selectedProject.github} className="flex-1 px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-sm shadow-xl">
                    <FaGithub className="w-5 h-5" /> View Source
                  </a>
                  <a href={selectedProject.live} className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-sm shadow-xl shadow-blue-500/20">
                    Live Demo <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function Project3DCard({ project, index, layoutId }: { project: any, index: number, layoutId?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const gradients = [
    "from-blue-600 via-indigo-500 to-purple-600",
    "from-emerald-500 via-teal-400 to-cyan-500",
    "from-rose-500 via-pink-500 to-purple-500",
    "from-amber-500 via-orange-500 to-red-500"
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      layoutId={layoutId}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative w-full h-[450px] rounded-3xl cursor-pointer group perspective-1000"
    >
      <div 
        className="absolute inset-0 rounded-3xl bg-black/40 dark:bg-white/5 border border-black/10 dark:border-white/10 overflow-hidden flex flex-col transition-all duration-300 group-hover:border-white/20"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Visual Thumbnail Area */}
        <div className={`h-48 w-full bg-gradient-to-br ${gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
          <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          
          <div className="absolute bottom-4 left-4 flex gap-2" style={{ transform: "translateZ(50px)" }}>
            {project.tags.slice(0, 2).map((tag: string) => (
              <span key={tag} className="text-[9px] font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider shadow-xl border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 flex flex-col flex-grow bg-white dark:bg-[#0a0026]" style={{ transform: "translateZ(20px)" }}>
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all">{project.title}</h4>
          </div>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">{project.date}</span>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">{project.description}</p>
          
          <div className="flex justify-between items-center pt-4 border-t border-black/5 dark:border-white/10 mt-auto">
            <span className="text-blue-600 dark:text-blue-400 flex items-center gap-1 text-xs font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
              View Details <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
      
      {/* 3D Glow Shadow Effect */}
      <div 
        className={`absolute -inset-4 bg-gradient-to-br ${gradient} rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
        style={{ transform: "translateZ(-50px)" }}
      ></div>
    </motion.div>
  );
}
