"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Briefcase, GraduationCap, Award, FileText, Mail, Terminal } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { name: "Overview", path: "/", icon: <Home className="w-4 h-4" /> },
  { name: "About", path: "/about", icon: <User className="w-4 h-4" /> },
  { name: "Projects", path: "/projects", icon: <Briefcase className="w-4 h-4" /> },
  { name: "Training", path: "/training", icon: <Terminal className="w-4 h-4" /> },
  { name: "Certificates", path: "/certificates", icon: <Award className="w-4 h-4" /> },
  { name: "Resume", path: "/resume", icon: <FileText className="w-4 h-4" /> },
  { name: "Contact", path: "/contact", icon: <Mail className="w-4 h-4" /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 hover:w-64 bg-white dark:bg-[#030014] border-r border-black/10 dark:border-white/10 flex flex-col z-50 transition-all duration-300 overflow-hidden group">
      <div className="p-6 pb-1 flex items-center">
        <Link href="/" className="font-bold text-2xl tracking-tighter flex items-center gap-4 group/logo">
          <div className="w-8 h-8 shrink-0 rounded-md bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-sm font-mono group-hover/logo:rotate-12 transition-transform text-white">AS</div>
          <span className="text-[var(--accent-light)]">Aditya<span className="text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"> Singh</span></span>
        </Link>
      </div>
      <div className="pr-6 pl-[72px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap overflow-hidden h-0 group-hover:h-auto">
        <p className="text-xs text-gray-900 dark:text-white font-bold font-mono uppercase tracking-widest mb-4">Data Scientist</p>
      </div>

      <nav className="flex-1 px-4 py-6 flex flex-col gap-2">
        <div className="text-xs font-mono text-gray-500 mb-2 px-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap overflow-hidden h-0 group-hover:h-auto">Workspace</div>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 font-medium text-sm overflow-hidden ${isActive
                ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-transparent"
                }`}
            >
              <div className="shrink-0">{item.icon}</div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5 flex flex-col group-hover:flex-row gap-4 justify-center items-center">
        <ThemeToggle />
        <a href="https://github.com/adityakumarsingh01" target="_blank" rel="noreferrer" className="w-10 h-10 shrink-0 rounded-full glass flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[var(--accent-light)] hover:bg-black/5 dark:hover:bg-white/5 transition-all">
          <FaGithub className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/aditya-kumar-singh-990377291/" target="_blank" rel="noreferrer" className="w-10 h-10 shrink-0 rounded-full glass flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[var(--accent-light)] hover:bg-black/5 dark:hover:bg-white/5 transition-all hidden group-hover:flex">
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>
    </aside>
  );
}
