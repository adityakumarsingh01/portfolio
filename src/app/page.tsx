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
      <section className="min-h-[85vh] flex flex-col justify-center pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mt-12 md:mt-0"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full glass border border-blue-500/30 text-blue-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Available for Opportunities
            </div>

            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[1.1] text-gray-900 dark:text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Aditya</span> Kumar Singh <br />
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl font-light">
              ASPIRING <strong className="text-gray-900 dark:text-white font-medium"> DATA SCIENTIST</strong> | MACHINE LEARNING ENTHUSIAST | ENGINEERING STUDENT
            </p>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl font-light">
              I translate complex data into <strong className="text-gray-900 dark:text-white font-medium">actionable intelligence</strong>, building predictive ML models and scalable AI platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects" className="px-8 py-4 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-bold transition-colors flex items-center justify-center gap-2 text-lg">
                Explore Projects <ChevronRight className="w-5 h-5" />
              </Link>
              <a href="mailto:adityasingh81201@gmail.com" className="px-8 py-4 rounded-full glass hover:bg-black/5 dark:hover:bg-white/10 font-bold transition-colors flex items-center justify-center gap-2 text-lg text-gray-800 dark:text-white">
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-[60px] opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 glass p-2">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-black/50">
                <Image
                  src="/profile.jpg"
                  alt="Aditya Kumar Singh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

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
