"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ChevronRight, BrainCircuit, Code, Database, Server, LineChart, Cpu, Zap, Eye } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const highlightedProjects = [
  {
    title: "InsightForge AI",
    date: "Jul' 26 - Aug' 26",
    description: "Developed a full-stack AI-powered Machine Learning platform that enables users to upload datasets, perform automated data profiling, visualize insights, train ML models, generate AI recommendations, forecast trends, and create professional PDF reports through an interactive dashboard.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "Scikit-learn", "Pandas", "Recharts", "ReportLab"],
    github: "https://github.com/adityakumarsingh01/InsightForge-AI.git", live: "https://insightforge-ai-sand.vercel.app/"
  },
  {
    title: "InvestIQ",
    date: "Jun' 26 - Jul' 26",
    description: "Developed a full-stack AI-powered investment research platform that provides real-time company analysis, live stock prices, financial metrics, news sentiment analysis, company comparison, and intelligent investment recommendations through a modern interactive dashboard.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Finnhub API", "Alpha Vantage API", "React"],
    github: "https://github.com/adityakumarsingh01/InvestIQ.git", live: "https://investiq-omega.vercel.app/"
  },
  {
    title: "MediReporter",
    date: "Mar' 26 - May' 26",
    description: "Built an intelligent healthcare NLP application that analyzes clinical reports, generates concise medical summaries, extracts diseases, symptoms, drugs, and treatments, and performs patient risk classification using Deep Learning and Transformer-based models.",
    tags: ["Python", "PyTorch", "NLP"],
    github: "https://github.com/adityakumarsingh01/Medical-Report-Summarization.git"
  }
];

const technicalStack = [
  { category: "Languages", skills: ["Python", "TypeScript", "Java", "C", "C++", "SQL", "JavaScript"] },
  { category: "Machine Learning", skills: ["Scikit-Learn", "NumPy", "Pandas", "XGBoost", "Feature Engineering"] },
  { category: "AI / Deep Learning", skills: ["PyTorch", "NLP", "Hugging Face", "BART", "BioBERT", "Transformers"] },
  { category: "Data Engineering", skills: ["Hadoop", "Hive", "HBase", "Spark", "Kafka", "Airflow", "Sqoop"] },
  { category: "Data Visualization", skills: ["Power BI", "Recharts", "Matplotlib", "Seaborn", "Excel"] },
  { category: "Frontend", skills: ["Next.js", "React", "Tailwind CSS", "HTML5/CSS3", "Shadcn/UI"] },
  { category: "Backend", skills: ["FastAPI", "REST APIs", "Pydantic", "Uvicorn"] },
  { category: "Databases & Cloud", skills: ["MySQL", "PostgreSQL", "Git/GitHub", "Docker", "Vercel", "Render"] },
  { category: "Soft Skills", skills: ["Problem-Solving", "Analytical Thinking", "Adaptability", "Team Collaboration"] }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12">
      {/* Hero Section */}
      <section className="min-h-[95vh] flex justify-center items-center relative overflow-hidden">
        <div className="w-full flex flex-col justify-center items-center relative z-10 mt-10 md:mt-0 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-[clamp(4rem,11vw,14rem)] font-medium leading-[0.85] tracking-tighter flex flex-col z-20 relative w-full items-center">
              <div className="overflow-hidden h-[1.1em] flex justify-center"><span className="inline-block text-gray-900 dark:text-white">Aditya</span></div>
              <div className="overflow-hidden h-[1.1em] flex justify-center relative w-full">
                <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gray-200 dark:bg-gray-800 -z-10"></div>
                <span className="inline-block text-gray-300 dark:text-gray-700 bg-[var(--background)] px-4">—Kumar—</span>
              </div>
              <div className="overflow-hidden h-[1.1em] flex justify-center"><span className="inline-block text-gray-900 dark:text-white">Singh.</span></div>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-8 flex justify-center"
          >
            <p className="text-[10px] md:text-[12px] font-bold text-gray-400 uppercase tracking-[0.25em] leading-loose max-w-2xl text-center">
              DATA SCIENTIST / MACHINE LEARNING / AI PLATFORMS / FULL-STACK DEV / ENGINEERING
            </p>
          </motion.div>
        </div>
        
        {/* Profile Image - Minimalist Floating */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
           animate={{ opacity: 1, scale: 1, rotate: -2 }}
           transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
           className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[30vw] max-w-[450px] aspect-[3/4] rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/10 glass z-0 opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 shadow-2xl"
        >
           <Image src="/profile.jpg" alt="Aditya" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 450px" />
        </motion.div>

        {/* Scroll Badge */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center opacity-80">
          <div className="relative w-32 h-32 md:w-40 md:h-40 animate-[spin_15s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-900 dark:fill-white">
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text className="text-[9.5px] font-black uppercase tracking-[0.25em]">
                <textPath href="#circlePath">SCROLL DOWN TO EXPLORE • SCROLL DOWN TO EXPLORE • </textPath>
              </text>
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <div className="w-[2px] h-8 md:h-12 bg-gray-900 dark:bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <section className="py-8 md:py-12 border-y border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 overflow-hidden flex w-full left-0 relative -mx-6 md:-mx-12 px-6 md:px-12 w-[100vw]">
        <div className="flex shrink-0 animate-marquee whitespace-nowrap min-w-full justify-around items-center gap-12 md:gap-24 pr-12 md:pr-24">
          {technicalStack.flatMap(s => s.skills).slice(0, 12).map((skill, i) => (
             <span key={i} className="text-2xl md:text-5xl font-black text-gray-900 dark:text-white uppercase opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-default">{skill}</span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee whitespace-nowrap min-w-full justify-around items-center gap-12 md:gap-24 pr-12 md:pr-24" aria-hidden="true">
          {technicalStack.flatMap(s => s.skills).slice(0, 12).map((skill, i) => (
             <span key={`dup-${i}`} className="text-2xl md:text-5xl font-black text-gray-900 dark:text-white uppercase opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-default">{skill}</span>
          ))}
        </div>
      </section>

      {/* Bento Box Skills & About */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          {/* About Card */}
          <div className="md:col-span-2 glass rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
            <BrainCircuit className="w-10 h-10 text-blue-500 dark:text-blue-400 mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The Mindset</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Currently pursuing a B.Tech (Hons.) in CSE with a specialization in <strong className="text-gray-900 dark:text-white font-medium">Data Science and Data Engineering</strong> at Lovely Professional University. I am driven by the thrill of discovering hidden patterns in massive datasets.
            </p>
          </div>

          {/* ML Skill Card */}
          <div className="glass rounded-3xl p-8 flex flex-col justify-between group hover:border-purple-500/50 transition-colors">
            <Cpu className="w-10 h-10 text-purple-500 dark:text-purple-400" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Machine Learning</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">PyTorch, Scikit-learn, Hugging Face, NLP, Transformers</p>
            </div>
          </div>

          {/* Engineering Card */}
          <div className="glass rounded-3xl p-8 flex flex-col justify-between group hover:border-blue-500/50 transition-colors">
            <Database className="w-10 h-10 text-blue-500 dark:text-blue-400" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Data Engineering</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Hadoop, Spark, Kafka, Airflow, SQL, NoSQL</p>
            </div>
          </div>

          {/* Web Card */}
          <div className="glass rounded-3xl p-8 flex flex-col justify-between group hover:border-pink-500/50 transition-colors">
            <Code className="w-10 h-10 text-pink-500 dark:text-pink-400" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Full-Stack AI</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Next.js, FastAPI, React, TypeScript, Tailwind CSS</p>
            </div>
          </div>

          {/* Experience Card */}
          <Link href="/projects" className="glass rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
            <Zap className="w-10 h-10 text-yellow-500 dark:text-yellow-400 mb-4" />
            <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-2">11+</h4>
            <p className="text-gray-600 dark:text-gray-400">Data & AI Projects Completed</p>
          </Link>
        </motion.div>
      </section>

      {/* Technical Stack & Skills */}
      <section className="py-24 border-t border-black/5 dark:border-white/5">
        <div className="mb-12">
          <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Technical <span className="text-gradient">Stack</span></h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">A comprehensive overview of my technical proficiencies and tools.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalStack.map((stack, idx) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-3xl p-8 hover:border-blue-500/30 transition-colors group"
            >
              <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-blue-500 transition-colors">{stack.category}</h5>
              <div className="flex flex-wrap gap-2">
                {stack.skills.map(skill => (
                  <span key={skill} className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10 group-hover:border-blue-500/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3D Project Cards (Highlighted) */}
      <section className="py-24 border-t border-black/5 dark:border-white/5">
        <div className="flex justify-between items-end mb-12">
          <h3 className="text-4xl font-black text-gray-900 dark:text-white">Selected <span className="text-gradient">Work</span></h3>
          <span className="text-gray-500 hidden md:block">Hover to interact</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightedProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-3xl p-8 flex flex-col min-h-[350px] relative overflow-hidden group border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-start mb-6 z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-500/20 transition-colors">
                  <LineChart className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-xs font-mono text-gray-500">{project.date}</span>
              </div>

              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 z-10">{project.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow z-10 line-clamp-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6 z-10">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-purple-600 dark:text-purple-300 bg-purple-500/10 px-2 py-1 rounded-full uppercase tracking-wider">
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

        <div className="mt-16 text-center">
          <Link href="/projects" className="px-8 py-4 rounded-full glass hover:bg-white/10 font-bold transition-colors inline-flex items-center justify-center gap-2">
            View All Projects <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Aditya Kumar Singh. Built with Next.js & Framer Motion.</p>
      </footer>
    </main>
  );
}
