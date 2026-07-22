"use client";
import { motion } from "framer-motion";
import { Award, ShieldCheck, ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

const certificates = [
  { title: "SEO Graphic", issuer: "HubSpot Academy" },
  { title: "The Bits and Bytes of Computer Networking", issuer: "Coursera" },
  { title: "Programming in Java", issuer: "IamNeo" },
  { title: "Object Oriented Programming", issuer: "IamNeo" },
  { title: "Data Structures and Algorithms", issuer: "IamNeo" },
  { title: "Computer Programming", issuer: "IamNeo" },
  { title: "Software Development Processes and Methodologies", issuer: "Coursera" },
  { title: "Responsive Web Design", issuer: "freecodecamp" }
];

const hackathons = [
  {
    title: "Build-a-Thon Hackathon",
    issuer: "Board Infinity",
    desc: "Collaborated with a team to solve real-world problems, enhancing my problem-solving, teamwork, and analytical skills."
  },
  {
    title: "Hack Quest – 24-Hour CTF Challenge",
    issuer: "Lovely Professional University & upGrad Campus",
    desc: "Gained hands-on experience in critical thinking, time management, and competitive problem-solving under pressure."
  }
];

export default function CertificatesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      <div className="mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white"
        >
          Certifications & <span className="text-purple-600 dark:text-purple-400">Awards</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl"
        >  Continuous learning and competitive problem solving.
        </motion.p>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
          <Award className="text-purple-500" /> Professional Certificates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <SpotlightCard className="h-full p-6 flex flex-col group border border-black/5 dark:border-white/5">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 text-gray-900 dark:text-white mb-6 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-2">{cert.title}</h4>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-auto">{cert.issuer}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
          <Award className="text-yellow-500" /> Extra-Curricular Activities
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathons.map((hack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
            >
              <SpotlightCard className="h-full p-8 flex flex-col justify-between group border border-black/5 dark:border-white/5">
                <div className="mb-6">
                  <span className="text-[10px] font-mono text-yellow-600 dark:text-yellow-400 uppercase tracking-widest block mb-3">{hack.issuer}</span>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">{hack.title}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{hack.desc}</p>
                <div className="w-10 h-10 shrink-0 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500 transition-colors -rotate-45 group-hover:rotate-0 duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
