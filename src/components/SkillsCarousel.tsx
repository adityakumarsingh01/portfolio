"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "LANGUAGES",
    skills: "PYTHON, TYPESCRIPT, JAVA, C, C++, SQL, JAVASCRIPT",
  },
  {
    title: "CORE COMPUTER SCIENCE",
    skills: "DATA STRUCTURES & ALGORITHMS, OBJECT-ORIENTED PROGRAMMING (OOP)",
  },
  {
    title: "FRONTEND",
    skills: "NEXT.JS, REACT, TYPESCRIPT, TAILWIND CSS, HTML5, CSS3, SHADCN/UI, AXIOS",
  },
  {
    title: "BACKEND",
    skills: "FASTAPI, REST APIS, PYDANTIC, UVICORN",
  },
  {
    title: "MACHINE LEARNING",
    skills: "SCIKIT-LEARN, NUMPY, PANDAS, XGBOOST, FEATURE ENGINEERING, MODEL EVALUATION",
  },
  {
    title: "DATA VISUALIZATION",
    skills: "POWER BI, RECHARTS, MATPLOTLIB, SEABORN, EXCEL",
  },
  {
    title: "AI / DEEP LEARNING",
    skills: "PYTORCH, NLP, HUGGING FACE, BART, BIOBERT, TRANSFORMERS",
  },
  {
    title: "DATABASES & CLOUD",
    skills: "MYSQL, POSTGRESQL, GIT/GITHUB, DOCKER, VERCEL, RENDER",
  },
  {
    title: "BIG DATA & DATA ENGINEERING",
    skills: "HADOOP, HIVE, HBASE, SPARK, KAFKA, AIRFLOW, SQOOP",
  },
  {
    title: "SOFT SKILLS",
    skills: "PROBLEM-SOLVING, ANALYTICAL THINKING, ADAPTABILITY, TEAM COLLABORATION, LEADERSHIP",
  }
];

export default function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SKILL_CATEGORIES.length);
  };

  return (
    <div 
      className="w-full relative overflow-hidden bg-[var(--background)] py-24 border-t border-black/5 dark:border-white/5 cursor-pointer"
      onClick={handleNext}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative min-h-[400px] flex items-center">
        
        {/* Click indicator */}
        <div className="absolute top-0 right-6 md:right-12 text-sm font-mono text-gray-400 uppercase tracking-widest animate-pulse flex items-center gap-2">
          Click anywhere to advance
          <span className="inline-block w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          </span>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200, transition: { duration: 0.3 } }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="w-full relative"
          >
            <div className="relative group flex flex-col justify-center items-start py-12">
              
              {/* TOP HALF OF TEXT */}
              <motion.h2 
                className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.8] text-gray-900 dark:text-white uppercase m-0 tracking-tighter"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)" }}
                initial={{ y: 0 }}
                animate={{ y: -30 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 15 }}
              >
                {SKILL_CATEGORIES[currentIndex].title}
              </motion.h2>

              {/* CENTER CONTENT (THE SKILLS) */}
              <motion.div 
                className="absolute w-full top-1/2 left-0 -translate-y-1/2 z-10 flex flex-wrap gap-x-2 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest text-sm md:text-lg lg:text-xl pl-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                {SKILL_CATEGORIES[currentIndex].skills}
              </motion.div>

              {/* BOTTOM HALF OF TEXT */}
              <motion.h2 
                className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.8] text-gray-900 dark:text-white uppercase m-0 tracking-tighter absolute top-12 left-0"
                style={{ clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)" }}
                initial={{ y: 0 }}
                animate={{ y: 30 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 15 }}
              >
                {SKILL_CATEGORIES[currentIndex].title}
              </motion.h2>
              
            </div>
            
            <div className="mt-20 font-mono text-gray-500 tracking-widest text-sm">
              0{currentIndex + 1} / 0{SKILL_CATEGORIES.length}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
