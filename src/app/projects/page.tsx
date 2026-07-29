"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { LineChart, Eye, ArrowRight, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const allProjects = [
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
  },
  {
    title: "InvestMate- Smart Investment System",
    date: "Jan' 26 - Feb' 26",
    description: "InvestMate - AI-Powered Smart Investment System",
    detailedDescription: "InvestMate is an AI-powered fintech platform that simplifies SIP planning through goal-based investment recommendations, live mutual fund data, SIP return projections, and an AI chatbot. Built with Django and Python, it enables smarter and more informed financial decisions.",
    tags: ["HTML5", "CSS3", "JAVASCRIPT", "DJANGO", "PYTHON", "SIP Calculator", "Live Mutual Fund Search", "SIP Return Projections", "Git", "GitHub"],
    github: "https://github.com/adityakumarsingh01/InvestMate.git", image: "/project-image/InvestMate.png"
  },
  {
    title: "IPL Match Winner Prediction",
    date: "Oct' 25 - Jan' 26",
    description: "Machine learning model to predict match winners using historical IPL match data.",
    detailedDescription: "IPL Match Winner Prediction is a machine learning application that predicts the winning team using historical IPL match data, team statistics, and match conditions. Built with Python and Scikit-learn, it provides accurate predictions through an interactive web interface.",
    tags: ["Python", "ML", "Pandas", "NumPy", "Random Forest Classifier", "Scikit-learn", "Matplotlib", "Seaborn", "Power BI"],
    github: "https://github.com/adityakumarsingh01/IPL_MATCH-WINNER-PREDICTION.git", linkedin: "https://lnkd.in/p/gEHWU-7C", image: "/project-image/IPL Match Winner Prediction.png"
  },
  {
    title: "Taxi Trip Pricing Analysis",
    date: "Jan' 26",
    description: "Analyzed taxi trip pricing data to understand factors influencing fare amounts such as distance, duration, and time-based variations.",
    detailedDescription: "Analyzed taxi trip pricing data to understand factors influencing fare amounts such as distance, duration, passenger count, and time-based variations.Performed data cleaning, preprocessing, and exploratory data analysis(EDA) to identify patterns, outliers, and key pricing drivers.Built machine learning models to predict trip prices based on relevant features and evaluated model performance using standard metrics.",
    tags: ["Python", "Pandas", "NumPy", "ML", "Data Analysis", "DATA VISUALIZATION"],
    github: "https://github.com/adityakumarsingh01/Taxi-Trip-Pricing-Prediction.git", image: "/project-image/Taxi Trip.jpg"
  },
  {
    title: "Exam Score Prediction",
    date: "Dec' 25",
    description: "Analyzed student exam score data to understand factors affecting academic performance.",
    detailedDescription: "Analyzed student exam score data to understand factors affecting academic performance such as study hours, previous scores, and other influencing variables. Performed data cleaning, preprocessing, and exploratory data analysis(EDA) to identify patterns, correlations, and key performance drivers.Built machine learning models to predict student scores and evaluated model performance using appropriate regression metrics.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "ML", "Data Analysis", "DATA VISUALIZATION"],
    github: "https://github.com/adityakumarsingh01/Student-Exam-Score-Prediction-ML.git", image: "/project-image/Exam Score.png"
  },
  {
    title: "Risk Behavior Analysis",
    date: "Jun' 25 - Jul' 25",
    description: "Interactive Power BI dashboard to analyze smoking and alcohol consumption patterns across different age groups.",
    detailedDescription: "Developed an interactive Power BI dashboard to analyze smoking and alcohol consumption patterns across different age groups.Used data analysis and visualization to identify risk categories, behavioral trends, and demographic insights.",
    tags: ["Python", "Pandas", "ML", "Matplotlib", "Seaborn", "Power BI", "Power Query", "Scikit-learn"],
    github: "https://github.com/adityakumarsingh01/RISK-BEHAVIOR-ANALYSIS.git", linkedin: "https://lnkd.in/p/gpyXb-AC", image: "/project-image/Risk Behavior Analysis.png"
  },
  {
    title: "NYC-311 Noise Dashboard",
    date: "Jun' 25 - Jul' 25",
    description: "Analyzed NYC 311 noise complaint data (1M+ records) using Power BI and Excel.",
    detailedDescription: "Analyzed NYC 311 noise complaint data (1M+ records) using Power BI and Excel to study noise trends across boroughs and complaint types. Performed data cleaning, transformation, and modeling to identify high-noise zones, peak complaint hours, and recurring patterns. Built an interactive dashboard with KPIs, slicers, heatmaps, and visualizations to support data-driven urban noise monitoring.",
    tags: ["Excel", "Power BI", "Power Query", "Data Cleaning", "Data Visualization"],
    github: "https://github.com/adityakumarsingh01/NYC-311-Noise-Dashboard.git", linkedin: "https://lnkd.in/p/gnhWFe79", image: "/project-image/NYC-311 Noise.png"
  },
  {
    title: "Adventure Work Sales Analysis",
    date: "Jun' 25 - Jul' 25",
    description: "Analyzed Adventure Works sales data using Excel and Power BI to identify trends in revenue and regional sales.",
    detailedDescription: "Analyzed Adventure Works sales data using Excel and Power BI to identify trends in revenue, product performance, and regional sales distribution. Performed data cleaning, transformation, and modeling to organize datasets and uncover key business insights. Built an interactive Power BI dashboard with KPIs, filters, and visualizations to track sales performance and support data-driven decision making.",
    tags: ["Power BI", "Power Query", "Time-Series Analysis"],
    github: "https://github.com/adityakumarsingh01/Adventure-Works-Sales-Analysis.git", linkedin: "https://lnkd.in/p/gbRenScy", image: "/project-image/Adventure Works Sales.png"
  },
  {
    title: "Customer Behavior Analysis",
    date: "Jan' 25 - May' 25",
    description: "Analyzed customer purchase behavior using survey data collected through Google Forms.",
    detailedDescription: "To better understand modern consumer habits, this project analyzes a custom dataset collected via Google Forms. The data cleaning phase dealt with messy, free-text inputs, while the exploratory data analysis (EDA) phase uncovered fascinating correlations between demographic traits and purchasing preferences, specifically regarding online vs. in-store shopping.",
    tags: ["Google Form", "Python", "Pandas", "Data Cleaning"],
    github: "https://github.com/adityakumarsingh01/Customer-Purchase-Behaviour-Analysis.git", linkedin: "https://lnkd.in/p/gXWEh5GP", image: "/project-image/Customer Purchase Behavior.png"
  },
  {
    title: "COVID-19 Data Analysis",
    date: "Jan' 25",
    description: "Analyzed global COVID-19 data to understand trends in cases, deaths, recovery rates, and regional impacts.",
    detailedDescription: "Analyzed global COVID-19 data to understand trends in cases, deaths, recovery rates, and regional impact across different countries and continents. Performed data cleaning, preprocessing, and feature engineering to calculate key metrics such as recovery rate and fatality rate. Developed visualizations including bar charts, scatter plots, and pie charts to identify top affected countries, compare recovery vs fatality rates, and analyze continent-wise case distribution.",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    github: "https://github.com/adityakumarsingh01/COVID-19-Data-Analysis.git", linkedin: "https://www.linkedin.com/posts/aditya-kumar-singh-990377291_covid-19-data-analysis-and-visualization-activity-7278393925109796866-DluO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEa2H7wB3GZS-pnk6rWTCs78bg-tTWNujUks", image: "/project-image/COVID-19.webp"
  }
];

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedIndex = selectedId ? allProjects.findIndex(p => p.title === selectedId) : -1;
  const selectedProject = selectedIndex !== -1 ? allProjects[selectedIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== -1) {
      const nextIndex = (selectedIndex + 1) % allProjects.length;
      setSelectedId(allProjects[nextIndex].title);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== -1) {
      const prevIndex = (selectedIndex - 1 + allProjects.length) % allProjects.length;
      setSelectedId(allProjects[prevIndex].title);
    }
  };

  const gradients = [
    "from-blue-600 via-indigo-500 to-purple-600",
    "from-emerald-500 via-teal-400 to-cyan-500",
    "from-rose-500 via-pink-500 to-purple-500",
    "from-amber-500 via-orange-500 to-red-500"
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative">
      <div className="mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white capitalize tracking-wider"
          style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}
        >
          All <span className="text-gradient">Projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl"
          style={{ fontFamily: 'Cambria, serif' }}
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
              style={{ fontFamily: 'Cambria, serif' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-20 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Side: Visuals */}
              <div className={`w-full md:w-2/5 h-64 md:h-auto ${!selectedProject.image ? `bg-gradient-to-br ${gradients[allProjects.findIndex(p => p.title === selectedId) % gradients.length]}` : 'bg-gray-900'} relative flex flex-col justify-end p-8`}>
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
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col">
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

                <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-8 border-t border-black/5 dark:border-white/10">
                  {selectedProject.live && (
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-sm shadow-xl">
                      <Eye className="w-5 h-5" /> Live Demo
                    </a>
                  )}
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-sm shadow-xl">
                    <FaGithub className="w-5 h-5" /> View Source
                  </a>
                  {selectedProject.linkedin && (
                    <a href={selectedProject.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-4 bg-[#0A66C2] text-white rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-sm shadow-xl">
                      <FaLinkedin className="w-5 h-5" /> LinkedIn
                    </a>
                  )}
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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", fontFamily: 'Cambria, serif' }}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 }}
      className="relative w-full h-[450px] rounded-3xl cursor-pointer group perspective-1000"
    >
      <div
        className="absolute inset-0 rounded-3xl bg-black/40 dark:bg-white/5 border border-black/10 dark:border-white/10 overflow-hidden flex flex-col transition-all duration-300 group-hover:border-white/20"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Card Header */}
        <div className={`h-40 ${!project.image ? `bg-gradient-to-br ${gradients[index % gradients.length]}` : 'bg-gray-200 dark:bg-gray-800'} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
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

        {/* Content Area */}
        <div className="p-6 flex flex-col flex-grow bg-white dark:bg-[#0a0026]" style={{ transform: "translateZ(20px)" }}>
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all capitalize tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>{project.title}</h4>
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
