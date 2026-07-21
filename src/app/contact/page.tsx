"use client";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-12 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">
          {/* <span className="text-gray-500 font-mono text-2xl mr-4">04.</span> */}
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-xl font-light">
          Let's discuss opportunities or collaborate on a project.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <div className="glass p-8 rounded-3xl h-full border border-black/5 dark:border-white/5">
            <Mail className="w-10 h-10 text-blue-500 dark:text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
            <p className="text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
              I am currently open to full-time opportunities, internships, and exciting freelance projects in the fields of Data Science, Machine Learning, and Data Engineering.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-800 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center">📍</div>
                <span>India</span>
              </div>
              <div className="flex items-center gap-4 text-gray-800 dark:text-gray-300">
                <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center">✉️</div>
                <a href="mailto:adityasingh81201@gmail.com" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">adityasingh81201@gmail.com</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <form className="glass p-8 rounded-3xl border border-black/5 dark:border-white/5 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex gap-6">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">First Name *</label>
                <input type="text" className="w-full bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Last Name *</label>
                <input type="text" className="w-full bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Email *</label>
              <input type="email" className="w-full bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" required />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Message *</label>
              <textarea rows={5} className="w-full bg-white/50 dark:bg-black/50 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" required></textarea>
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
              Submit <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
