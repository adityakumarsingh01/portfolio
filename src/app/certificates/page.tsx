"use client";
import { motion } from "framer-motion";
import { Award, ShieldCheck, ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

const certificates = [
  { title: "SEO Graphic", issuer: "HubSpot Academy", image: "/certificates/SEO.png", verificationLink: "#" },
  { title: "The Bits and Bytes of Computer Networking", issuer: "Coursera", image: "/certificates/The Bits and Bytes of Computer Networking.jpg", verificationLink: "#" },
  { title: "Programming in Java", issuer: "IamNeo", image: "/certificates/Java Programming.jpg", verificationLink: "https://lpucolab438.examly.io/certificate/U2FsdGVkX1%2BiSEqCklnCqZXPHc4fbazMcrmaZSGnAqE%3D" },
  { title: "Object Oriented Programming", issuer: "IamNeo", image: "/certificates/Object Oriented Programming.jpg", verificationLink: "#" },
  { title: "Data Structures and Algorithms", issuer: "IamNeo", image: "/certificates/Data Structures and Algorithm.jpg", verificationLink: "#" },
  { title: "Computer Programming", issuer: "IamNeo", image: "/certificates/C Programming.jpg", verificationLink: "#" },
  { title: "Tricky English Grammar", issuer: "Coursera", image: "/certificates/Tricky English Grammer.jpg", verificationLink: "#" },
  { title: "Software Development Processes and Methodologies", issuer: "Coursera", image: "/certificates/Software Development Processes and Methodologies.jpg", verificationLink: "#" },
  { title: "Data Visualization", issuer: "CareerNinja", image: "/certificates/Data Visualization.jpg", verificationLink: "#" },
  { title: "Introduction to Data Analytics", issuer: "CareerNinja", image: "/certificates/Introduction to Data Analytics.jpg", verificationLink: "#" },
  { title: "Introduction to R Programming", issuer: "CareerNinja", image: "/certificates/Introduction to R Programming.jpeg", verificationLink: "#" },
  { title: "Responsive Web Design", issuer: "freecodecamp", image: "/certificates/Responsive Web Design.jpg", verificationLink: "#" },
  { title: "Introduction to Python Advanced", issuer: "CareerNinja", image: "/certificates/Introduction to Python Advanced.jpeg", verificationLink: "#" },
  { title: "Public Speaking with Canva", issuer: "Coursera", image: "/certificates/Public Speaking with Canva.jpg", verificationLink: "#" },
  { title: "Spoken English Course", issuer: "LearnVern", image: "/certificates/Spoken English Course.jpg", verificationLink: "#" }
];

const hackathons = [
  {
    title: "Build-a-Thon Hackathon",
    issuer: "Board Infinity",
    desc: "Collaborated with a team to solve real-world problems, enhancing my problem-solving, teamwork, and analytical skills.",
    image: "/certificates/Build a Thon.jpg"
  },
  {
    title: "Hack Quest – 24-Hour CTF Challenge",
    issuer: "Lovely Professional University & upGrad Campus",
    desc: "Gained hands-on experience in critical thinking, time management, and competitive problem-solving under pressure.",
    image: "/certificates/Hack Quest.jpg"
  }
];

export default function CertificatesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12" style={{ fontFamily: 'Cambria, serif' }}>
      <div className="mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white capitalize tracking-wider"
          style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}
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
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: idx * 0.05 }}
            >
              <SpotlightCard className="h-full relative overflow-hidden group border border-black/5 dark:border-white/5 hover:border-purple-500/30 transition-colors">
                <a href={cert.verificationLink} target="_blank" rel="noreferrer" className="absolute inset-0 z-20">
                  <span className="sr-only">Verify {cert.title}</span>
                </a>

                {cert.image && (
                  <div className="absolute inset-0 z-0">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover blur-[1px] opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/50 dark:from-black/95 dark:via-black/80 dark:to-black/50"></div>
                  </div>
                )}

                <div className="p-6 flex flex-col h-full relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm text-gray-900 dark:text-white mb-6 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-sm border border-black/5 dark:border-white/10">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>{cert.title}</h4>
                  <p className="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-auto flex items-center gap-2">
                    {cert.issuer}
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </p>
                </div>
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
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 + (idx * 0.1) }}
            >
              <SpotlightCard className="h-full relative overflow-hidden group border border-black/5 dark:border-white/5 hover:border-yellow-500/30 transition-colors">
                {hack.image && (
                  <div className="absolute inset-0 z-0">
                    <img src={hack.image} alt={hack.title} className="w-full h-full object-cover blur-[1px] opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/50 dark:from-black/95 dark:via-black/80 dark:to-black/50"></div>
                  </div>
                )}
                <div className="p-8 flex flex-col justify-between h-full relative z-10">
                  <div className="mb-6">
                    <span className="text-[10px] font-mono text-yellow-600 dark:text-yellow-400 uppercase tracking-widest block mb-3 drop-shadow-sm">{hack.issuer}</span>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white drop-shadow-sm tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>{hack.title}</h4>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-8 font-medium drop-shadow-sm">{hack.desc}</p>
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500 transition-colors -rotate-45 group-hover:rotate-0 duration-300 shadow-sm">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
