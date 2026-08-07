"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function ContactPage() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

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

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-wrap gap-4">
              <a href="mailto:adityasingh81201@gmail.com" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-900/20 flex items-center justify-center transition-colors group">
                <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400" />
              </a>
              <a href="https://www.linkedin.com/in/aditya-kumar-singh-990377291/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900/20 flex items-center justify-center transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://github.com/adityakumarsingh01" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
              <a href="https://leetcode.com/u/vJK6U25ivY/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/20 flex items-center justify-center transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-yellow-600 dark:group-hover:text-yellow-500"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125 1.516 5.253 5.253 0 0 0 1.564 3.018l4.471 4.542c.31.312.753.475 1.2.475.447 0 .89-.163 1.2-.475l4.945-5.021c.214-.217.334-.51.334-.816 0-.307-.12-.6-.334-.817-.427-.433-1.121-.433-1.549 0l-3.921 3.981-3.666-3.722a.91.91 0 0 1-.252-.646c0-.256.09-.5.252-.646l3.724-3.782h3.513c.61 0 1.103-.5 1.103-1.117 0-.616-.492-1.116-1.103-1.116H9.17l3.076-3.123 2.15-2.185A.825.825 0 0 1 15 5.617c0 .227-.089.444-.247.605l-4.225 4.29 4.225 4.29c.158.16.247.378.247.605 0 .228-.089.445-.247.606l-4.225 4.29-4.708-4.78a2.536 2.536 0 0 1-.749-1.455 2.578 2.578 0 0 1 .06-1.077 2.518 2.518 0 0 1 .581-1.011l4.225-4.29 3.076-3.123A3.67 3.67 0 0 0 13.483 0zm4.512 8.431c-.305 0-.595.122-.811.339l-1.397 1.419c-.43.436-.43 1.144 0 1.58.216.219.506.34.811.34h5.295c.61 0 1.103-.5 1.103-1.117 0-.616-.493-1.116-1.103-1.116h-5.295z" /></svg>
              </a>
            </div>
          </SpotlightCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-3">
          <SpotlightCard className="p-6 md:p-10 border border-black/5 dark:border-white/5 h-full">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8" style={{ fontVariant: 'small-caps' }}>Send a Message</h3>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">First Name</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Aditya" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans" required disabled={status === "loading"} />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Singh" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans" required disabled={status === "loading"} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="aditya123@gmail.com" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans" required disabled={status === "loading"} />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wider">Message</label>
                <textarea rows={6} name="message" value={formData.message} onChange={handleChange} placeholder="How can we work together?" className="w-full bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none font-sans" required disabled={status === "loading"}></textarea>
              </div>

              <button type="submit" disabled={status === "loading"} className="mt-4 w-full md:w-auto px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex justify-center items-center gap-3 text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 font-sans tracking-wide">
                {status === "loading" ? "Sending..." : "Send Message"} {!status && <Send className="w-5 h-5" />}
              </button>

              {status === "success" && (
                <p className="text-green-600 dark:text-green-400 font-bold mt-2">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 dark:text-red-400 font-bold mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </SpotlightCard>
        </motion.div>
      </div>
    </main>
  );
}
