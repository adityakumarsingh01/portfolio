"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Laptop } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10 shrink-0 rounded-full glass" />;
  }

  const cycleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('system');
    else setTheme('dark');
  };

  return (
    <button
      onClick={cycleTheme}
      className="w-10 h-10 shrink-0 rounded-full glass flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[var(--accent-light)] dark:hover:text-[var(--accent-light)] hover:bg-black/5 dark:hover:bg-white/5 transition-all overflow-hidden relative"
      title={`Current Theme: ${theme}`}
    >
      <div className={`absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-90'}`}>
        <Moon className="w-5 h-5" />
      </div>
      <div className={`absolute transition-all duration-300 ${theme === 'light' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`}>
        <Sun className="w-5 h-5" />
      </div>
      <div className={`absolute transition-all duration-300 ${theme === 'system' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'}`}>
        <Laptop className="w-5 h-5" />
      </div>
    </button>
  );
}
