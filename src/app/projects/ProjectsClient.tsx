"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Eye, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProjectsClient({ projects }: { projects: any[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedIndex = selectedId ? projects.findIndex(p => p.title === selectedId) : -1;
  const selectedProject = selectedIndex !== -1 ? projects[selectedIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== -1) {
      const nextIndex = (selectedIndex + 1) % projects.length;
      setSelectedId(projects[nextIndex].title);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== -1) {
      const prevIndex = (selectedIndex - 1 + projects.length) % projects.length;
      setSelectedId(projects[prevIndex].title);
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
          className="text-4xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white capitalize tracking-wider"
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
        {projects.map((project, idx) => (
          <div key={project.title} onClick={() => setSelectedId(project.title)}>
            <Project3DCard project={project} index={idx} layoutId={project.title} gradients={gradients} />
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
              <div className={`w-full md:w-2/5 h-64 md:h-auto ${!selectedProject.imageUrl ? `bg-gradient-to-br ${gradients[projects.findIndex(p => p.title === selectedId) % gradients.length]}` : 'bg-gray-900'} relative flex flex-col justify-end p-8`}>
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

                <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-8 border-t border-black/5 dark:border-white/10">
                  {selectedProject.liveUrl && (
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-sm shadow-xl">
                      <Eye className="w-5 h-5" /> Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-sm shadow-xl">
                      <FaGithub className="w-5 h-5" /> View Source
                    </a>
                  )}
                  {selectedProject.linkedinUrl && (
                    <a href={selectedProject.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-4 bg-[#0A66C2] text-white rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 font-bold uppercase tracking-wider text-sm shadow-xl">
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

function Project3DCard({ project, index, layoutId, gradients }: { project: any, index: number, layoutId?: string, gradients: string[] }) {
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

  const gradient = gradients[index % gradients.length];
  const tags = project.technologies ? project.technologies.split(',').map((t: string) => t.trim()) : [];

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
        className="absolute inset-0 rounded-3xl bg-black/40 dark:bg-white/5 border border-black/10 dark:border-white/10 overflow-hidden flex flex-col transition-colors duration-300 group-hover:border-white/20"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Card Header */}
        <div className={`h-40 ${!project.imageUrl ? `bg-gradient-to-br ${gradients[index % gradients.length]}` : 'bg-gray-200 dark:bg-gray-800'} relative overflow-hidden group-hover:scale-105 transition-transform duration-500 ease-out will-change-transform`}>
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
        className={`absolute -inset-4 bg-gradient-to-br ${gradient} rounded-[3rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-out -z-10`}
        style={{ transform: "translateZ(-20px)" }}
      ></div>
    </motion.div>
  );
}
