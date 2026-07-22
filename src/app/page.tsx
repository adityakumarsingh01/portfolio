"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, ChevronRight, BrainCircuit, Code, Database, Server, LineChart, Cpu, Zap, Eye, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { SpotlightCard } from "@/components/SpotlightCard";

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
      <section className="min-h-[95vh] flex flex-col justify-center relative overflow-hidden pb-20 pt-32">
        <div className="w-full flex flex-col md:flex-row justify-between items-center relative z-10 gap-12 lg:gap-8">

          {/* Left Side: Name & Role */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start w-full md:w-[60%]"
          >
            <h1 className="text-[clamp(4rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter text-gray-900 dark:text-white flex flex-col items-center md:items-start text-center md:text-left">
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
                DATA SCIENTIST / MACHINE LEARNING / AI PLATFORMS / FULL-STACK DEV / ENGINEERING
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 20 }}
            className="w-full md:w-[40%] flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-full md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-gray-100 dark:border-gray-900 z-30">
              <Image
                src="/profile.jpg"
                alt="Aditya Kumar Singh"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Badge */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:right-12 z-20 flex justify-center opacity-70">
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
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          {/* About Card */}
          <SpotlightCard className="md:col-span-2 p-8 flex flex-col justify-center group border border-black/5 dark:border-white/5">
            <BrainCircuit className="w-10 h-10 text-blue-500 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">The Mindset</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Currently pursuing a B.Tech (Hons.) in CSE with a specialization in <strong className="text-gray-900 dark:text-white font-medium">Data Science and Data Engineering</strong> at Lovely Professional University. I am driven by the thrill of discovering hidden patterns in massive datasets.
            </p>
          </SpotlightCard>

          {/* ML Skill Card */}
          <SpotlightCard className="p-8 flex flex-col justify-between group border border-black/5 dark:border-white/5">
            <Cpu className="w-10 h-10 text-purple-500 dark:text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Machine Learning</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">PyTorch, Scikit-learn, Hugging Face, NLP, Transformers</p>
            </div>
          </SpotlightCard>

          {/* Engineering Card */}
          <SpotlightCard className="p-8 flex flex-col justify-between group border border-black/5 dark:border-white/5">
            <Database className="w-10 h-10 text-blue-500 dark:text-blue-400 group-hover:-translate-y-2 transition-transform duration-300" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Data Engineering</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Hadoop, Spark, Kafka, Airflow, SQL, NoSQL</p>
            </div>
          </SpotlightCard>

          {/* Web Card */}
          <SpotlightCard className="p-8 flex flex-col justify-between group border border-black/5 dark:border-white/5">
            <Code className="w-10 h-10 text-pink-500 dark:text-pink-400 group-hover:rotate-6 transition-transform duration-300" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Full-Stack AI</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Next.js, FastAPI, React, TypeScript, Tailwind CSS</p>
            </div>
          </SpotlightCard>

          {/* Experience Card */}
          <Link href="/projects" className="md:col-span-1 block h-full">
            <SpotlightCard className="h-full p-8 flex flex-col justify-center items-center text-center group border border-black/5 dark:border-white/5">
              <Zap className="w-10 h-10 text-yellow-500 dark:text-yellow-400 mb-4 group-hover:scale-125 transition-transform duration-300" />
              <h4 className="text-4xl font-black text-gray-900 dark:text-white mb-2">11+</h4>
              <p className="text-gray-600 dark:text-gray-400">Data & AI Projects Completed</p>
            </SpotlightCard>
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
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <SpotlightCard className="h-full p-8 border border-black/5 dark:border-white/5 group">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-blue-500 transition-colors">{stack.category}</h5>
                <div className="flex flex-wrap gap-2">
                  {stack.skills.map(skill => (
                    <span key={skill} className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/10 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
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
            <Project3DCard key={idx} project={project} index={idx} />
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

function Project3DCard({ project, index }: { project: any, index: number }) {
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

        <div className="p-6 flex flex-col flex-grow bg-white dark:bg-[#0a0026]" style={{ transform: "translateZ(20px)" }}>
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all">{project.title}</h4>
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
      </div>

      <div
        className={`absolute -inset-4 bg-gradient-to-br ${gradient} rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
        style={{ transform: "translateZ(-50px)" }}
      ></div>
    </motion.div>
  );
}
