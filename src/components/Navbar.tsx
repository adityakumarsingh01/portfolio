"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Overview", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Entrepreneurship", href: "/entrepreneurship" },
    { name: "Education", href: "/education" },
    { name: "Certificates", href: "/certificates" },
    { name: "Training", href: "/training" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center mix-blend-difference text-white top-0"
      >
        <Link href="/" className="font-black text-xl md:text-3xl tracking-tighter hover:opacity-80 transition-opacity" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
          Aditya Singh
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 xl:gap-8 text-[13px] font-bold tracking-[0.2em]" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="hover:opacity-40 transition-opacity">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact" className="flex bg-white text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-[13px] font-bold tracking-widest hover:scale-105 transition-transform items-center justify-center whitespace-nowrap" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
            Let's Talk!
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-black flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-black" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-full text-lg tracking-widest hover:bg-blue-700 transition-colors"
              >
                Let's Talk!
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
