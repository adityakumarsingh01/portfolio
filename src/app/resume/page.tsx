"use client";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="max-w-5xl mx-auto px-12 py-16 min-h-[80vh] flex flex-col justify-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-blue-50 dark:bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-200 dark:border-blue-500/20">
          <FileText className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-5xl font-black mb-6 text-gray-900 dark:text-white">
          Get the Full <span className="text-gradient">Picture</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed">
          OFFICIAL CV. Click below to download a detailed version of my technical resume and background.
        </p>
        
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume.pdf" 
          download
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-bold transition-colors text-lg"
        >
          <Download className="w-5 h-5" /> Download Resume (PDF)
        </motion.a>
      </motion.div>
    </main>
  );
}
