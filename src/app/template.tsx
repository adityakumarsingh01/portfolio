"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const getPageName = () => {
    if (pathname === "/") return "Overview";
    // Capitalize first letter of path (e.g. /projects -> Projects)
    return pathname.charAt(1).toUpperCase() + pathname.slice(2);
  };

  return (
    <>
      <motion.div
        key={pathname + "-overlay"}
        initial={{ y: 0 }}
        animate={{ y: "-100vh" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.2 }}
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#0a0026] text-black dark:text-white pointer-events-none shadow-2xl"
      >
        <motion.h1 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="text-4xl md:text-6xl font-black uppercase tracking-[0.2em]"
        >
          {getPageName()}
        </motion.h1>
        
        {/* Loading Bar Container */}
        <div className="w-48 h-1 bg-black/10 dark:bg-white/10 mt-8 rounded-full overflow-hidden">
          <motion.div 
             initial={{ width: 0 }}
             animate={{ width: "100%" }}
             transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
             className="h-full bg-black dark:bg-white rounded-full"
          />
        </div>
      </motion.div>
      
      {/* Page Content */}
      <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-both">
        {children}
      </div>
    </>
  );
}
