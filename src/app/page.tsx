"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Mail, ChevronRight, BrainCircuit, Code, Database, Server, LineChart, Cpu, Zap, Eye, ArrowRight, ExternalLink, X, ChevronLeft } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import SkillsCarousel from "@/components/SkillsCarousel";
import { SpotlightCard } from "@/components/SpotlightCard";

const highlightedProjects = [
  {
    title: "InsightForge AI",
    date: "Jul' 26 - Aug' 26",
    description: "A No-Code Automated Machine Learning & Data Science Workspace",
    detailedDescription: "InsightForge AI is an AI-powered data analytics platform that automates dataset analysis, EDA, machine learning, forecasting, and report generation. Built with Next.js, FastAPI, Python, and TypeScript, it helps users gain actionable insights through an intuitive web interface.",
    tags: ["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS", "FASTAPI", "AXIOS", "PYTHON", "SCIKIT-LEARN", "PANDAS", "RECHARTS", "REPORTLAB", "Git", "GitHub"],
    live: "https://insightforge-ai-sand.vercel.app/", github: "https://github.com/adityakumarsingh01/InsightForge-AI.git", linkedin: "https://lnkd.in/p/d-9Wafee", image: "/project-image/InsightforgeAI.png"
  },
  {
    title: "InvestIQ",
    date: "Jun' 26 - Jul' 26",
    description: "AI-Powered Investment Research Platform. Analyzes 10,000+ global publicly listed companies using real-time financial data.",
    detailedDescription: "InvestIQ is an AI-powered investment research platform that analyzes live stock market data, financial metrics, and company fundamentals to generate intelligent investment insights and recommendations. Built with Next.js, TypeScript, Python, and financial APIs.",
    tags: ["NEXT.JS", "REACT.JS", "TYPESCRIPT", "TAILWIND CSS", "FASTAPI", "PYTHON", "Rule-Based Multi-Agent System", "FINNHUB API", "ALPHA VANTAGE API", "Git", "GitHub"],
    live: "https://investiq-omega.vercel.app/", github: "https://github.com/adityakumarsingh01/InvestIQ.git", linkedin: "https://lnkd.in/p/gH9PriT6", image: "/project-image/InvestIQ.png"
  },
  {
    title: "MediReporter: AI Clinical Analysis",
    date: "Mar' 26 - May' 26",
    description: "Intelligent healthcare NLP application that analyzes clinical reports, generates concise medical summaries, and extracts diseases.",
    detailedDescription: "MediReporter is an AI-powered healthcare platform that summarizes clinical reports, extracts key medical entities, and identifies patient risks using NLP and machine learning. Built with Next.js, FastAPI, Python, and modern AI technologies for faster clinical insights.",
    tags: ["PYTHON", "FASTAPI", "PYTORCH", "NLP", "BART", "BioBERT", "Hugging Face Transformers", "HTML", "CSS", "JavaScript", "Git", "GitHub"],
    github: "https://github.com/adityakumarsingh01/Medical-Report-Summarization.git", linkedin: "https://lnkd.in/p/gZ_yEreu", image: "/project-image/MediReporter.png"
  }
];

const technicalStack = [
  { category: "Languages", skills: ["Python", "TypeScript", "Java", "C", "C++", "SQL", "JavaScript"] },
  { category: "Core Computer Science", skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)"] },
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
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedIndex = selectedId ? highlightedProjects.findIndex(p => p.title === selectedId) : -1;
  const selectedProject = selectedIndex !== -1 ? highlightedProjects[selectedIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== -1) {
      const nextIndex = (selectedIndex + 1) % highlightedProjects.length;
      setSelectedId(highlightedProjects[nextIndex].title);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== -1) {
      const prevIndex = (selectedIndex - 1 + highlightedProjects.length) % highlightedProjects.length;
      setSelectedId(highlightedProjects[prevIndex].title);
    }
  };

  const gradients = [
    "from-blue-600 via-indigo-500 to-purple-600",
    "from-emerald-500 via-teal-400 to-cyan-500",
    "from-rose-500 via-pink-500 to-purple-500",
    "from-amber-500 via-orange-500 to-red-500"
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12" style={{ fontFamily: 'Cambria, serif' }}>
      {/* Hero Section */}
      <section className="min-h-[95vh] flex flex-col justify-center relative overflow-hidden pb-20 pt-32">
        <div className="w-full flex flex-col md:flex-row justify-between items-center relative z-10 gap-12 lg:gap-8">

          {/* Left Side: Name & Role */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start w-full md:w-[60%] order-2 md:order-1"
          >
            <h1 className="text-[clamp(4rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter text-gray-900 dark:text-white flex flex-col items-center md:items-start text-center md:text-left" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
              <span className="relative z-20">Aditya</span>
              <span className="relative z-10 text-gray-400 dark:text-gray-500 flex items-center gap-4 my-1 md:my-2">
                <div className="w-[10vw] md:w-16 h-[3px] bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
                Kumar
              </span>
              <span className="relative z-20">Singh</span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8 flex justify-center md:justify-start w-full"
            >
              <p className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] leading-loose max-w-lg text-center md:text-left">
                ASPIRING AI ENGINEER / MACHINE LEARNING / DATA SCIENCE / FULL-STACK DEVELOPMENT
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 20 }}
            className="w-full md:w-[40%] flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-full md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-gray-100 dark:border-gray-900 z-30 group cursor-pointer">
              <Image
                src="/profile.jpg"
                alt="Aditya Kumar Singh"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Badge */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex justify-center opacity-70">
          <div className="relative w-28 h-28 md:w-36 md:h-36 animate-[spin_15s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-900 dark:fill-white">
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text className="text-[9.5px] font-black uppercase tracking-[0.25em]">
                <textPath href="#circlePath">SCROLL DOWN TO EXPLORE • SCROLL DOWN TO EXPLORE • </textPath>
              </text>
            </svg>
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
      <section className="py-24 border-t border-black/5 dark:border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          {/* About Card */}
          <SpotlightCard className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center group border border-black/5 dark:border-white/5">
            <BrainCircuit className="w-10 h-10 text-blue-500 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The Mindset</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Currently pursuing a B.Tech (Hons.) in CSE with a specialization in <strong className="text-gray-900 dark:text-white font-medium">Data Science and Data Engineering</strong> at Lovely Professional University. I am driven by the thrill of discovering hidden patterns in massive datasets.
            </p>
          </SpotlightCard>

          {/* ML Skill Card */}
          <SpotlightCard className="p-6 md:p-8 flex flex-col justify-between group border border-black/5 dark:border-white/5">
            <Cpu className="w-10 h-10 text-purple-500 dark:text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Machine Learning</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">PyTorch, Scikit-learn, Hugging Face, NLP, Transformers</p>
            </div>
          </SpotlightCard>

          {/* Engineering Card */}
          <SpotlightCard className="p-6 md:p-8 flex flex-col justify-between group border border-black/5 dark:border-white/5">
            <Database className="w-10 h-10 text-blue-500 dark:text-blue-400 group-hover:-translate-y-2 transition-transform duration-300" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Data Engineering</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Hadoop, Spark, Kafka, Airflow, SQL, NoSQL</p>
            </div>
          </SpotlightCard>

          {/* Web Card */}
          <SpotlightCard className="p-6 md:p-8 flex flex-col justify-between group border border-black/5 dark:border-white/5">
            <Code className="w-10 h-10 text-pink-500 dark:text-pink-400 group-hover:rotate-6 transition-transform duration-300" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Full-Stack AI</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Next.js, FastAPI, React, TypeScript, Tailwind CSS</p>
            </div>
          </SpotlightCard>

          {/* Experience Card */}
          <Link href="/projects" className="md:col-span-1 block h-full">
            <SpotlightCard className="h-full p-6 md:p-8 flex flex-col justify-center items-center text-center group border border-black/5 dark:border-white/5">
              <Zap className="w-10 h-10 text-yellow-500 dark:text-yellow-400 mb-4 group-hover:scale-125 transition-transform duration-300" />
              <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-2">12+</h4>
              <p className="text-gray-600 dark:text-gray-400">Data & AI Projects Completed</p>
            </SpotlightCard>
          </Link>
        </motion.div>
      </section>

      {/* 3D Project Cards (Highlighted) */}
      <section className="py-24 border-t border-black/5 dark:border-white/5">
        <div className="flex justify-between items-end mb-12">
          <h3 className="text-4xl font-black text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>Selected <span className="text-gradient">Work</span></h3>
          <span className="text-gray-500 hidden md:block">Hover to interact</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightedProjects.map((project, idx) => (
            <div key={project.title} onClick={() => setSelectedId(project.title)}>
              <Project3DCard project={project} index={idx} layoutId={project.title} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/projects" className="px-8 py-4 rounded-full glass hover:bg-white/10 font-bold transition-colors inline-flex items-center justify-center gap-2">
            View All Projects <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <SkillsCarousel />

      {/* New Technical Stack Section */}
      <section className="py-24 border-t border-black/5 dark:border-white/5 flex flex-col lg:flex-row gap-12 md:gap-24">
        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
          <h3 className="text-[clamp(3rem,5vw,5rem)] font-black leading-none tracking-tighter text-gray-900 dark:text-white mb-8">Technical Stack</h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            As an engineering student passionate about <strong className="text-gray-900 dark:text-white">Data Science and Machine Learning</strong>, I use programming, data analysis, and visualization to solve real-world problems and extract meaningful insights from data.
          </p>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Machine Learning</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Build predictive and intelligent AI solutions using <strong className="text-gray-900 dark:text-white">Scikit-learn, Pandas, NumPy, and XGBoost</strong> with expertise in feature engineering, model training, evaluation, AutoML workflows, and supervised learning algorithms.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Data Analysis</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Perform end-to-end data analysis including <strong className="text-gray-900 dark:text-white">EDA, data cleaning, preprocessing, feature engineering, statistical analysis, and dataset profiling</strong> to uncover actionable business insights.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Data Visualization</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Develop interactive dashboards and analytical reports using <strong className="text-gray-900 dark:text-white">Power BI, Recharts, Matplotlib, and Excel</strong>, enabling clear visualization of trends, KPIs, and model performance.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">AI & Natural Language Processing (NLP)</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Develop intelligent AI applications using <strong className="text-gray-900 dark:text-white">PyTorch, Hugging Face Transformers, BART, BioBERT, and NLP techniques</strong> for text summarization, entity extraction, classification, and AI-assisted workflows.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.4 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Full-Stack AI Development</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Design and develop modern AI-powered web applications using <strong className="text-gray-900 dark:text-white">Next.js, React, TypeScript, Tailwind CSS, FastAPI, REST APIs, and Axios</strong>, integrating machine learning models with responsive user interfaces.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Data Engineering & Big Data</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Experience working with <strong className="text-gray-900 dark:text-white">Hadoop, Hive, HBase, Spark, Kafka, Airflow, and Sqoop</strong> for distributed data processing, storage, and analytics pipelines.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.6 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Tools & Technologies</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Proficient in <strong className="text-gray-900 dark:text-white">Git/GitHub, VS Code, Jupyter Notebook, Docker, MySQL, PostgreSQL, REST APIs, Postman, Vercel, Render, and Linux</strong>, following modern software development practices.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.7 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Soft Skills & Ethics</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Strong analytical thinking, problem-solving, communication, teamwork, adaptability, leadership, debugging, and solution-oriented development with a focus on writing clean and scalable code.
              </p>
            </SpotlightCard>
          </motion.div>
        </div>
      </section>

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
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 border border-white/20"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 border border-white/20"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

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
              <div className={`w-full md:w-2/5 h-64 md:h-auto ${!selectedProject.image ? `bg-gradient-to-br ${gradients[highlightedProjects.findIndex(p => p.title === selectedId) % gradients.length]}` : 'bg-gray-900'} relative flex flex-col justify-end p-8`}>
                {selectedProject.image && selectedProject.image !== "/placeholder.jpg" ? (
                  <img src={selectedProject.image} alt={selectedProject.title} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                  </>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <h2 className="text-4xl md:text-5xl font-bold text-white relative z-10 drop-shadow-lg leading-tight capitalize tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
                  {selectedProject.title}
                </h2>
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-3/5 p-6 md:p-12 flex flex-col">
                <div className="flex justify-start mb-4">
                  <span className="text-sm font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    {selectedProject.date}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight mb-6 capitalize tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
                  {selectedProject.description}
                </h3>

                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-8 text-blue-600 dark:text-blue-500 font-semibold tracking-wide uppercase text-sm md:text-base">
                  {selectedProject.tags.map((tag: string, i: number) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {i < selectedProject.tags.length - 1 && <span className="text-blue-400/50">|</span>}
                    </React.Fragment>
                  ))}
                </div>

                <div className="mb-2 text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider">Overview</div>
                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                  <p className="leading-relaxed">{selectedProject.detailedDescription}</p>
                </div>

                <div className="flex flex-wrap gap-4 pt-8 border-t border-black/5 dark:border-white/10">
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform uppercase tracking-wider text-sm shadow-xl"
                    >
                      <Eye className="w-5 h-5" /> Live Demo
                    </a>
                  )}
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform uppercase tracking-wider text-sm shadow-xl"
                  >
                    <FaGithub className="w-5 h-5" /> View Source
                  </a>
                  {selectedProject.linkedin && (
                    <a
                      href={selectedProject.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-[#0A66C2] text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform uppercase tracking-wider text-sm shadow-xl"
                    >
                      <FaLinkedin className="w-5 h-5" /> LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Aditya Kumar Singh. Built with Next.js & Framer Motion.</p>
      </footer>
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
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", fontFamily: 'Cambria, serif' }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 }}
      className="relative w-full h-[450px] rounded-3xl cursor-pointer group perspective-1000"
    >
      <motion.div
        layoutId={layoutId}
        className="absolute inset-0 rounded-3xl bg-black/40 dark:bg-white/5 border border-black/10 dark:border-white/10 overflow-hidden flex flex-col transition-all duration-300 group-hover:border-white/20"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className={`h-48 w-full ${!project.image ? `bg-gradient-to-br ${gradient}` : 'bg-gray-200 dark:bg-gray-800'} relative overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
          {project.image && project.image !== "/placeholder.jpg" ? (
            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
          ) : (
            <>
              <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </>
          )}

          <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold tracking-wider text-sm drop-shadow-md">Explore Project</span>
          </div>

          <div className="absolute bottom-4 left-4 flex gap-2" style={{ transform: "translateZ(50px)" }}>
            {project.tags.slice(0, 2).map((tag: string) => (
              <span key={tag} className="text-[9px] font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider shadow-xl border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow bg-white dark:bg-[#0a0026]" style={{ transform: "translateZ(20px)" }}>
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all capitalize tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>{project.title}</h4>
          </div>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">{project.date}</span>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">{project.description}</p>

          <div className="flex justify-between items-center pt-4 border-t border-black/5 dark:border-white/10 mt-auto">
            <a href={project.github} className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <FaGithub className="w-4 h-4" /> Code
            </a>
            <a href={project.live} className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
              Live <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </motion.div>

      <div
        className={`absolute -inset-4 bg-gradient-to-br ${gradient} rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
        style={{ transform: "translateZ(-50px)" }}
      ></div>
    </motion.div>
  );
}
