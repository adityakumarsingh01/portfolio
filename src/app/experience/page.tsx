"use client";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-32 px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl text-center">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">Experience.</h1>
        <div className="glass p-12 rounded-[3rem] border border-white/5 inline-block">
          <p className="text-gray-400 text-lg">
            I am currently a student building high-impact projects. My professional journey is just beginning!
          </p>
        </div>
      </motion.div>
    </main>
  );
}
