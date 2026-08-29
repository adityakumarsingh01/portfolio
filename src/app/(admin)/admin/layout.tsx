"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/assessments", label: "Assessments" },
  { href: "/admin/education", label: "Education" },
  { href: "/admin/certificates", label: "Certificates" },
  { href: "/admin/resume", label: "Resume" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a14] text-gray-900 dark:text-white font-sans transition-colors duration-300">
      {/* Admin Navbar matching portfolio style */}
      <nav className="fixed w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-white/80 dark:bg-[#0a0a14]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 top-0 transition-colors duration-300">
        <Link href="/admin" className="font-black text-xl md:text-2xl tracking-tighter hover:opacity-80 transition-opacity whitespace-nowrap" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
          Admin Panel
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex gap-6 2xl:gap-8 text-[13px] font-bold tracking-[0.2em]" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
          {navItems.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href));
            return (
              <Link 
                key={link.label} 
                href={link.href} 
                className={`transition-opacity whitespace-nowrap ${isActive ? 'text-blue-600 dark:text-blue-400 opacity-100' : 'opacity-60 hover:opacity-100'}`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/" className="hidden sm:flex bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-[13px] font-bold tracking-widest hover:bg-gray-200 dark:hover:bg-white/10 transition-colors items-center justify-center whitespace-nowrap" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
            View Portfolio
          </Link>
          <button 
            onClick={async () => {
              const { logoutAction } = await import("@/app/login/actions");
              await logoutAction();
            }}
            className="hidden sm:flex bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-[13px] font-bold tracking-widest transition-colors items-center justify-center whitespace-nowrap shadow-lg shadow-red-600/20" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}
          >
            Logout
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0a0a14] flex flex-col items-center justify-center xl:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-black" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
              {navItems.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors ${pathname === link.href ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-3 rounded-full text-lg tracking-widest hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                View Portfolio
              </Link>
              <button 
                onClick={async () => {
                  const { logoutAction } = await import("@/app/login/actions");
                  await logoutAction();
                }}
                className="mt-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg tracking-widest transition-colors shadow-lg shadow-red-600/20"
              >
                Logout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        {children}
      </main>
    </div>
  );
}
