"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 glass border-b-0 border-white/5 py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0"
    >
      <Link href="/" className="font-bold text-xl tracking-tighter flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">AS</div>
        Aditya<span className="text-[var(--accent-light)]"> Singh</span>
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium">
        <Link href="/" className={`hover:text-[var(--accent-light)] transition-colors ${pathname === '/' ? 'text-[var(--accent-light)]' : 'text-gray-300'}`}>
          Home
        </Link>
        <Link href="/projects" className={`hover:text-[var(--accent-light)] transition-colors ${pathname === '/projects' ? 'text-[var(--accent-light)]' : 'text-gray-300'}`}>
          Projects
        </Link>
        <Link href="/experience" className={`hover:text-[var(--accent-light)] transition-colors ${pathname === '/experience' ? 'text-[var(--accent-light)]' : 'text-gray-300'}`}>
          Experience
        </Link>
      </div>

      <div className="flex gap-4">
        <a href="https://github.com/adityakumarsingh01" target="_blank" rel="noreferrer" className="p-2 hover:text-[var(--accent-light)] transition-colors">
          <FaGithub className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/aditya-kumar-singh-990" target="_blank" rel="noreferrer" className="p-2 hover:text-[var(--accent-light)] transition-colors">
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </motion.nav>
  );
}
