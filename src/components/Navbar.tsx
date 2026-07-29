"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-white top-0"
    >
      <Link href="/" className="font-black text-xl md:text-3xl tracking-tighter hover:opacity-80 transition-opacity" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
        Aditya Singh
      </Link>

      <div className="hidden lg:flex gap-6 xl:gap-8 text-[13px] font-bold tracking-[0.2em]" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
        <Link href="/" className="hover:opacity-40 transition-opacity">Overview</Link>
        {/* <Link href="/experience" className="hover:opacity-40 transition-opacity">Experience</Link> */}
        <Link href="/projects" className="hover:opacity-40 transition-opacity">Projects</Link>
        <Link href="/entrepreneurship" className="hover:opacity-40 transition-opacity">Entrepreneurship</Link>
        <Link href="/education" className="hover:opacity-40 transition-opacity">Education</Link>
        <Link href="/certificates" className="hover:opacity-40 transition-opacity">Certificates</Link>
        <Link href="/training" className="hover:opacity-40 transition-opacity">Training</Link>
        <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:opacity-40 transition-opacity">Resume</a>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link href="/contact" className="bg-white text-black px-6 py-2.5 rounded-full text-[13px] font-bold tracking-widest hover:scale-105 transition-transform flex items-center justify-center whitespace-nowrap" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
          Let's Talk!
        </Link>
      </div>
    </motion.nav>
  );
}
