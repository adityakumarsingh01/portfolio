"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-white top-0"
    >
      <Link href="/" className="font-black text-xl md:text-2xl tracking-tighter italic hover:opacity-80 transition-opacity">
        Aditya Singh
      </Link>

      <div className="hidden lg:flex gap-12 xl:gap-16 text-[10px] font-bold uppercase tracking-[0.2em]">
        <Link href="/" className="hover:opacity-40 transition-opacity">Overview</Link>
        <Link href="/experience" className="hover:opacity-40 transition-opacity">Experience</Link>
        <Link href="/projects" className="hover:opacity-40 transition-opacity">Projects</Link>
        <Link href="/education" className="hover:opacity-40 transition-opacity">Education</Link>
        <Link href="/certificates" className="hover:opacity-40 transition-opacity">Certificates</Link>
        <Link href="/training" className="hover:opacity-40 transition-opacity">Training</Link>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:opacity-40 transition-opacity">Resume</a>
      </div>

      <div className="flex items-center">
        <Link href="/contact" className="bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center whitespace-nowrap">
          Let's Talk!
        </Link>
      </div>
    </motion.nav>
  );
}
