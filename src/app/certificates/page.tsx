"use client";
import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

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
    <main className="max-w-6xl mx-auto px-12 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">
          {/* <span className="text-gray-500 font-mono text-2xl mr-4">02.</span> */}
          Certifications <span className="text-gradient">& Awards</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-xl font-light">
          Continuous learning and competitive problem solving.
        </p>
      </motion.div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900 dark:text-white">
          <Award className="text-purple-500" /> Professional Certificates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="glass p-6 rounded-2xl flex items-start gap-4 border border-black/5 dark:border-white/5 hover:border-purple-500/50 transition-colors group"
            >
              <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-xl group-hover:bg-purple-200 dark:group-hover:bg-purple-500/20 transition-colors text-purple-600 dark:text-purple-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-bold leading-tight mb-1">{cert.title}</h4>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
              </div>
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
              className="glass p-8 rounded-2xl border border-black/5 dark:border-white/5 hover:border-yellow-500/30 transition-colors"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{hack.title}</h4>
              <p className="text-sm font-mono text-yellow-600 dark:text-yellow-500 mb-4">{hack.issuer}</p>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">{hack.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
