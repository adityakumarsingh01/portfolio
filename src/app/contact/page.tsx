"use client";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 pt-24 pb-16" style={{ fontFamily: 'Cambria, serif' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 dark:text-white capitalize tracking-wider" style={{ fontVariant: 'small-caps' }}>
          Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Looking for a driven Data Scientist, Machine Learning Engineer, or Full-Stack Developer to join your team? Let's discuss how my skills can bring value to your organization.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-2">
          <SpotlightCard className="p-6 md:p-10 border border-black/5 dark:border-white/5 h-full flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 rounded-full flex items-center justify-center mb-8 border border-blue-200 dark:border-blue-500/20">
                <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontVariant: 'small-caps' }}>Contact Info</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg">
                I am currently open to full-time roles, internships, and exciting freelance projects. Reach out, and I'll respond as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-800 dark:text-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </div>
                  <span className="text-lg font-medium">Jalandhar, Punjab, India</span>
                </div>

                <div className="flex items-center gap-4 text-gray-800 dark:text-gray-200 group">
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                    <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                  <a href="mailto:adityasingh81201@gmail.com" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    adityasingh81201@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex gap-4">
              <a href="https://github.com/adityakumarsingh01" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-700 dark:text-gray-300"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/aditya-kumar-singh-990377291/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/20 flex items-center justify-center transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-3">
          <SpotlightCard className="p-6 md:p-10 border border-black/5 dark:border-white/5 h-full">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8" style={{ fontVariant: 'small-caps' }}>Send a Message</h3>

            <form className="flex flex-col gap-6" action="https://formsubmit.co/adityasingh81201@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">First Name</label>
                  <input type="text" name="First Name" placeholder="Mukesh" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">Last Name</label>
                  <input type="text" name="Last Name" placeholder="Rabbani" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">Email Address</label>
                <input type="email" name="email" placeholder="mukesh123@gmail.com" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans" required />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">Message</label>
                <textarea rows={6} name="message" placeholder="How can we work together?" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none font-sans" required></textarea>
              </div>

              <button type="submit" className="mt-4 w-full md:w-auto px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex justify-center items-center gap-3 text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 font-sans tracking-wide">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </SpotlightCard>
        </motion.div>
      </div>
    </main>
  );
}
