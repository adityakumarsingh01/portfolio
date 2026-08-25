"use client";
import { motion } from "framer-motion";
import { Award, ShieldCheck, ArrowRight } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function CertificatesClient({ certificates, activities }: { certificates: any[], activities: any[] }) {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12" style={{ fontFamily: 'Cambria, serif' }}>
      <div className="mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white capitalize tracking-wider"
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
                <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="absolute inset-0 z-20">
                  <span className="sr-only">Verify {cert.title}</span>
                </a>

                {cert.imageUrl && (
                  <div className="absolute inset-0 z-0">
                    <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500 ease-out will-change-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/50 dark:from-black/95 dark:via-black/80 dark:to-black/50"></div>
                  </div>
                )}

                <div className="p-6 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm text-gray-900 dark:text-white group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-sm border border-black/5 dark:border-white/10">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    {cert.issueDate && (
                      <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-white/60 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-sm whitespace-nowrap">
                        {cert.issueDate}
                      </span>
                    )}
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
          {activities.map((act, idx) => (
            <motion.div
              key={act.id || idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 + (idx * 0.1) }}
            >
              <SpotlightCard className="h-full relative overflow-hidden group border border-black/5 dark:border-white/5 hover:border-yellow-500/30 transition-colors">
                <a href={act.credentialUrl} target="_blank" rel="noreferrer" className="absolute inset-0 z-20">
                  <span className="sr-only">Verify {act.title}</span>
                </a>
                {act.imageUrl && (
                  <div className="absolute inset-0 z-0">
                    <img src={act.imageUrl} alt={act.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500 ease-out will-change-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/50 dark:from-black/95 dark:via-black/80 dark:to-black/50"></div>
                  </div>
                )}
                <div className="p-6 md:p-8 flex flex-col justify-between h-full relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-mono text-yellow-600 dark:text-yellow-400 uppercase tracking-widest block mb-3 drop-shadow-sm">{act.issuer}</span>
                    {act.date && (
                      <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-white/60 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-200 shadow-sm whitespace-nowrap">
                        {act.date}
                      </span>
                    )}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white drop-shadow-sm tracking-wider mb-6" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>{act.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-8 font-medium drop-shadow-sm">{act.description}</p>
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-white group-hover:border-yellow-500 transition-colors -rotate-45 group-hover:rotate-0 duration-300 shadow-sm mt-auto">
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
