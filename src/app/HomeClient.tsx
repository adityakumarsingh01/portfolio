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

const technicalStack = [
  { category: "Programming Languages", skills: ["Python", "SQL", "Java", "C", "C++", "JavaScript", "TypeScript"] },
  { category: "Machine Learning", skills: ["Scikit-learn", "NumPy", "Pandas", "XGBoost", "Feature Engineering", "Model Evaluation"] },
  { category: "AI, Deep Learning & NLP", skills: ["PyTorch", "Hugging Face Transformers", "Natural Language Processing", "BART", "BioBERT", "Transformer Models", "Text Summarization", "Named Entity Recognition"] },
  { category: "Data Analytics & Visualization", skills: ["Power BI", "Microsoft Excel", "Matplotlib", "Seaborn", "Recharts", "Exploratory Data Analysis", "Statistical Analysis"] },
  { category: "Data Engineering & Big Data", skills: ["Hadoop", "Hive", "HBase", "Apache Spark", "Kafka", "Apache Airflow", "Sqoop", "SQL", "NoSQL"] },
  { category: "Frontend Development", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "shadcn/ui"] },
  { category: "Backend Development", skills: ["FastAPI", "REST APIs", "Pydantic", "Uvicorn"] },
  { category: "Databases", skills: ["MySQL", "PostgreSQL"] },
  { category: "Developer Tools & Deployment", skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Docker", "Postman", "Vercel", "Render", "Linux"] },
  { category: "Core Computer Science & Professional Skills", skills: ["Data Structures and Algorithms", "Object-Oriented Programming", "Problem-Solving", "Analytical Thinking", "Debugging", "Adaptability", "Communication", "Team Collaboration"] }
];

export default function HomeClient({ projects: highlightedProjects }: { projects: any[] }) {
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
            <h1 className="text-[clamp(3.5rem,8.5vw,7.5rem)] font-black leading-[0.9] tracking-tighter text-gray-900 dark:text-white flex flex-col items-center md:items-start text-center md:text-left" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
              <span className="relative z-20">Aditya</span>
              <span className="relative z-10 text-gray-400 dark:text-gray-500 flex items-center gap-4 my-1 md:my-2">
                <div className="w-[10vw] md:w-16 h-[3px] bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
                Kumar
              </span>
              <span className="relative z-20">Singh</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 flex flex-col items-center md:items-start w-full text-center md:text-left space-y-3"
            >
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white tracking-wide">
                AI Engineer | Machine Learning Engineer | Data Scientist
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                AI-Powered Applications • Machine Learning • Data Science • Full-Stack Development
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
                I build AI-powered applications, machine learning solutions, and data analytics platforms to solve real-world problems.
              </p>
              <p className="text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-400 border-l-2 border-blue-500/50 pl-3">
                B.Tech. (Hons.) CSE - Data Science and Data Engineering | LPU | 2027
              </p>

              {/* Action Buttons & Socials */}
              <div className="pt-4 flex flex-wrap items-center justify-center md:justify-start gap-3 w-full">
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-blue-500/20 hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  Explore Projects <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/resume"
                  className="px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90 font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  View Resume
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white text-gray-900 dark:text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  Let's Talk
                </Link>
                <div className="flex items-center gap-2 ml-1">
                  <a
                    href="https://github.com/adityakumarsingh01"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-110 transition-all"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aditya-kumar-singh-990377291/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-[#0A66C2] hover:scale-110 transition-all"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150, damping: 20 }}
            className="w-full md:w-[40%] flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative">
              <div className="relative w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-full md:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-gray-100 dark:border-gray-900 z-30 group cursor-pointer">
                <Image
                  src="/profile.jpg"
                  alt="Aditya Kumar Singh"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  loading="eager"
                />
              </div>

              {/* Scroll Badge — centered at bottom of profile image */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-40 opacity-70">
                <div className="relative w-24 h-24 md:w-32 md:h-32 animate-[spin_15s_linear_infinite]">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-gray-900 dark:fill-white">
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                    <text className="text-[9.5px] font-black uppercase tracking-[0.25em]">
                      <textPath href="#circlePath">SCROLL DOWN TO EXPLORE • SCROLL DOWN TO EXPLORE • </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
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
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 font-bold block mb-3">Overview</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
            Engineering Practical <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-xl max-w-4xl leading-relaxed">
            I am a B.Tech. (Hons.) Computer Science and Engineering student specializing in Data Science and Data Engineering at Lovely Professional University. I build AI-powered applications, machine learning solutions, and data analytics platforms, combining Python, modern AI frameworks, and full-stack development to solve real-world problems.
          </p>
        </div>

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
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">The Mindset</h3>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              I enjoy turning complex problems into practical solutions through experimentation, analytical thinking, and continuous learning. My work spans AI applications, machine learning, data analytics, and full-stack development.
            </p>
          </SpotlightCard>

          {/* ML Skill Card */}
          <SpotlightCard className="p-6 md:p-8 flex flex-col justify-between group border border-black/5 dark:border-white/5">
            <Cpu className="w-10 h-10 text-purple-500 dark:text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Machine Learning</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Develop predictive models and data-driven solutions using Python, Scikit-learn, Pandas, and NumPy, with a focus on data preprocessing, feature engineering, model evaluation, and practical machine learning workflows.
              </p>
            </div>
          </SpotlightCard>

          {/* Engineering Card */}
          <SpotlightCard className="p-6 md:p-8 flex flex-col justify-between group border border-black/5 dark:border-white/5">
            <Database className="w-10 h-10 text-blue-500 dark:text-blue-400 group-hover:-translate-y-2 transition-transform duration-300" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Data Engineering</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Explore distributed data processing, storage, and analytics pipelines using Hadoop, Hive, Spark, Kafka, Airflow, SQL, and related big data technologies.
              </p>
            </div>
          </SpotlightCard>

          {/* Web Card */}
          <SpotlightCard className="p-6 md:p-8 flex flex-col justify-between group border border-black/5 dark:border-white/5">
            <Code className="w-10 h-10 text-pink-500 dark:text-pink-400 group-hover:rotate-6 transition-transform duration-300" />
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Full-Stack AI</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Build AI-powered web applications using Next.js, React, TypeScript, and FastAPI, integrating frontend interfaces, backend services, APIs, and machine learning capabilities.
              </p>
            </div>
          </SpotlightCard>

          {/* Experience Card */}
          <Link href="/projects" className="md:col-span-1 block h-full">
            <SpotlightCard className="h-full p-6 md:p-8 flex flex-col justify-center items-center text-center group border border-black/5 dark:border-white/5 hover:border-yellow-500/30 transition-colors">
              <Zap className="w-10 h-10 text-yellow-500 dark:text-yellow-400 mb-4 group-hover:scale-125 transition-transform duration-300" />
              <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-2">Projects Across AI & Data</h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">Explore practical implementations, prototypes, and technical solutions →</p>
            </SpotlightCard>
          </Link>
        </motion.div>
      </section>

      {/* 3D Project Cards (Highlighted) */}
      <section className="py-24 border-t border-black/5 dark:border-white/5 scroll-mt-24" id="projects">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 font-bold block mb-2">Portfolio</span>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white" style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}>
              Featured <span className="text-gradient">Projects</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2 max-w-xl">
              Practical AI engineering, machine learning pipelines, and full-stack intelligent applications.
            </p>
          </div>
          <span className="text-gray-500 text-sm hidden md:block">Click any card for architectural breakdown</span>
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
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400 font-bold block mb-3">Core Competencies</span>
          <h3 className="text-[clamp(3rem,5vw,5rem)] font-black leading-none tracking-tighter text-gray-900 dark:text-white mb-8">Technical Stack</h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            As an engineering student passionate about <strong className="text-gray-900 dark:text-white">AI engineering, machine learning, and data science</strong>, I build practical applications, predictive systems, and data pipelines to solve real-world problems.
          </p>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-6">
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Machine Learning</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Develop predictive models using Python, Scikit-learn, Pandas, and NumPy, with experience in data preprocessing, feature engineering, model training, evaluation, and supervised learning algorithms.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Data Analysis</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Perform exploratory data analysis, data cleaning, preprocessing, statistical analysis, and feature engineering to uncover meaningful patterns and actionable insights from structured datasets.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Data Visualization</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Create interactive dashboards and analytical reports using Power BI, Excel, Matplotlib, and Seaborn to communicate trends, KPIs, and business insights.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.3 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">AI & Natural Language Processing (NLP)</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Develop NLP applications using PyTorch and Hugging Face Transformers, exploring text summarization, named entity recognition, text classification, and transformer-based models.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.4 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Full-Stack AI Development</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Build AI-powered web applications using Next.js, React, TypeScript, and FastAPI, integrating backend services, external APIs, and machine learning capabilities into responsive user interfaces.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Data Engineering & Big Data</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Work with distributed data processing and storage technologies, including Hadoop, Hive, HBase, Spark, Kafka, Airflow, and Sqoop, to understand and build data processing workflows.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.6 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Tools & Technologies</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Use Git, GitHub, VS Code, Jupyter Notebook, Docker, databases, REST APIs, and deployment platforms to develop, test, and maintain software applications.
              </p>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.7 }}>
            <SpotlightCard className="p-6 md:p-8 lg:p-12 border border-black/5 dark:border-white/5">
              <h4 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Soft Skills</h4>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                Apply analytical thinking, problem-solving, communication, teamwork, adaptability, and debugging skills to build reliable and maintainable solutions.
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
              className="bg-gray-50 dark:bg-[#0a0026] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row relative border border-white/10"
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
              <div className={`w-full md:w-2/5 h-64 md:h-auto ${!selectedProject.imageUrl ? `bg-gradient-to-br ${gradients[highlightedProjects.findIndex(p => p.title === selectedId) % gradients.length]}` : 'bg-gray-900'} relative flex flex-col justify-end p-8`}>
                {selectedProject.imageUrl && selectedProject.imageUrl !== "/placeholder.jpg" ? (
                  <img src={selectedProject.imageUrl} alt={selectedProject.title} className="absolute inset-0 w-full h-full object-cover" />
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
              <div className="w-full md:w-3/5 p-6 md:p-12 flex flex-col flex-1 overflow-y-auto min-h-0">
                <div className="flex justify-start mb-4">
                  <span className="text-sm font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    {selectedProject.date}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight mb-6 capitalize tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
                  {selectedProject.description}
                </h3>

                <div className="flex flex-wrap gap-x-3 gap-y-1 mb-8 text-blue-600 dark:text-blue-500 font-semibold tracking-wide uppercase text-sm md:text-base">
                  {selectedProject.technologies ? selectedProject.technologies.split(',').map((tag: string, i: number, arr: string[]) => (
                    <React.Fragment key={tag.trim()}>
                      <span>{tag.trim()}</span>
                      {i < arr.length - 1 && <span className="text-blue-400/50">|</span>}
                    </React.Fragment>
                  )) : null}
                </div>

                <div className="mb-2 text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider">Overview</div>
                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 mb-8 flex-grow">
                  <p className="leading-relaxed">{selectedProject.detailedDescription}</p>
                </div>

                <div className="flex flex-wrap gap-4 pt-8 border-t border-black/5 dark:border-white/10">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform uppercase tracking-wider text-sm shadow-xl"
                    >
                      <Eye className="w-5 h-5" /> Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[200px] flex items-center justify-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform uppercase tracking-wider text-sm shadow-xl"
                    >
                      <FaGithub className="w-5 h-5" /> View Source
                    </a>
                  )}
                  {selectedProject.linkedinUrl && (
                    <a
                      href={selectedProject.linkedinUrl}
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
      <footer className="pt-16 pb-12 border-t border-black/5 dark:border-white/5 text-gray-500">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black text-gray-900 dark:text-white" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
              Aditya Kumar Singh
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-sm leading-relaxed">
              AI Engineer & Data Scientist specializing in machine learning, AI applications, and distributed data systems.
            </p>
            <p className="text-xs font-mono text-gray-500 mt-2">
              B.Tech. (Hons.) CSE - Data Science & Data Engineering (2027)
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold tracking-widest uppercase">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Overview</Link>
            <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link>
            <Link href="/assessments" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Assessments</Link>
            <Link href="/entrepreneurship" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Entrepreneurship</Link>
            <Link href="/education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</Link>
            <Link href="/certificates" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Certificates</Link>
            <Link href="/training" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Training</Link>
            <Link href="/resume" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Resume</Link>
            <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:adityasingh81201@gmail.com"
              className="p-2.5 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              aria-label="Email Aditya Kumar Singh"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/adityakumarsingh01"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-kumar-singh-990377291/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} Aditya Kumar Singh. All rights reserved.</p>
          <p>Built with Next.js, React, Tailwind CSS & Framer Motion.</p>
        </div>
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
        <div className={`h-48 w-full ${!project.imageUrl ? `bg-gradient-to-br ${gradient}` : 'bg-gray-200 dark:bg-gray-800'} relative overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
          {project.imageUrl && project.imageUrl !== "/placeholder.jpg" ? (
            <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
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
            {project.date && (
              <span className="text-[10px] font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider shadow-xl border border-white/10">
                {project.date}
              </span>
            )}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow bg-white dark:bg-[#0a0026]" style={{ transform: "translateZ(20px)" }}>
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all capitalize tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>{project.title}</h4>
          </div>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">{project.date}</span>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">{project.description}</p>

          <div className="flex justify-between items-center pt-4 border-t border-black/5 dark:border-white/10 mt-auto">
            <div className="flex gap-4">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  <FaGithub className="w-4 h-4" /> Code
                </a>
              )}
              {project.linkedinUrl && (
                <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  <FaLinkedin className="w-4 h-4" /> LinkedIn
                </a>
              )}
            </div>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
                Live <ExternalLink className="w-3 h-3" />
              </a>
            )}
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
