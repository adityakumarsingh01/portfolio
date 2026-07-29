"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-12 flex flex-col justify-center items-center" style={{ fontFamily: 'Cambria, serif' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center w-full mx-auto">
        
        <h1 className="text-5xl md:text-6xl font-black mb-10 text-gray-900 dark:text-white capitalize tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
          My Resume
        </h1>
        
        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl mb-12">
          <img 
            src="/resume/Aditya%20Kumar%20Singh_Resume.jpg" 
            alt="Aditya Kumar Singh Resume" 
            className="w-full h-auto object-contain bg-white"
          />
        </div>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume/Aditya%20Kumar%20Singh.pdf" 
          download="Aditya_Kumar_Singh_Resume.pdf"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold transition-colors text-lg shadow-lg"
          style={{ fontFamily: 'Geist Sans, sans-serif' }}
        >
          <Download className="w-5 h-5" /> Download Resume (PDF)
        </motion.a>

      </motion.div>
    </main>
  );
}
