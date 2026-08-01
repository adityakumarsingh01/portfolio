"use client";
import { motion } from "framer-motion";
import { Download, Mail, ExternalLink, Briefcase, MapPin, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function ResumePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16 flex flex-col justify-center items-center" style={{ fontFamily: 'Cambria, serif' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center w-full mx-auto mb-12">
        <h1 className="text-4xl md:text-6xl font-black mb-4 text-gray-900 dark:text-white capitalize tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
          My <span className="text-blue-600 dark:text-blue-400">Resume</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          A comprehensive overview of my experience, skills, and education. Available for Data Science, AI / ML and Full-Stack roles.
        </p>
      </motion.div>

      <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Side: Recruiter Quick Info & Actions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full lg:w-1/3 flex flex-col gap-6 lg:sticky lg:top-32"
        >
          <SpotlightCard className="p-6 md:p-8 border border-black/5 dark:border-white/5 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontVariant: 'small-caps' }}>Aditya Kumar Singh</h3>
              <p className="text-blue-600 dark:text-blue-400 font-bold mb-4 font-sans tracking-wide text-sm">Data Scientist | Machine Learning | AI Platforms | Full-Stack Dev</p>

              <div className="flex flex-col gap-3 text-sm text-gray-700 dark:text-gray-300 font-sans">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" /> Jalandhar, Punjab, India
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-gray-500" /> Open to Full-Time & Internships
                </div>
                <div className="flex items-center gap-3 text-green-600 dark:text-green-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Actively Interviewing
                </div>
              </div>
            </div>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-800 my-2"></div>

            <div className="flex flex-col gap-3">
              <a
                href="/resume/Aditya%20Kumar%20Singh.pdf"
                download="Aditya_Kumar_Singh_Resume.pdf"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-bold transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 font-sans"
              >
                <Download className="w-5 h-5" /> Download PDF
              </a>
              <a
                href="/resume/Aditya%20Kumar%20Singh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 font-bold transition-all border border-gray-200 dark:border-gray-700 font-sans"
              >
                <ExternalLink className="w-5 h-5" /> Open in New Tab
              </a>
              <a
                href="/contact"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:scale-[1.02] font-bold transition-transform font-sans"
              >
                <Mail className="w-5 h-5" /> Contact Me
              </a>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Right Side: Interactive Resume Viewer */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-2/3"
        >
          <SpotlightCard className="p-2 md:p-4 border border-black/5 dark:border-white/5 rounded-[2rem] group cursor-pointer relative overflow-hidden">
            <a href="/resume/Aditya%20Kumar%20Singh.pdf" target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden rounded-xl bg-white border border-gray-100 dark:border-gray-800 shadow-inner">
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:group-hover:bg-white/10 transition-colors z-10 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 font-sans">
                  <ExternalLink className="w-5 h-5" /> Click to View Full Screen
                </div>
              </div>
              <img
                src="/resume/Aditya%20Kumar%20Singh_Resume.jpg"
                alt="Aditya Kumar Singh Resume"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </a>
          </SpotlightCard>
        </motion.div>
      </div>
    </main>
  );
}
