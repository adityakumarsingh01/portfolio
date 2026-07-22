import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Kumar Singh | Data Science & Engineering Portfolio",
  description: "Professional portfolio of Aditya Kumar Singh, Data Science and Data Engineering student. Exploring ML, AI, and Data Analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-white overflow-x-hidden relative transition-colors duration-300 group/layout`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
        <div className="fixed inset-0 z-0 pointer-events-none transition-colors duration-500">
          {/* Dark Mode Background */}
          <div className="absolute top-0 -left-1/4 w-[150vw] h-[100vh] bg-gradient-to-br from-[#0a0026] via-[#030014] to-[#010b24] animate-gradient -z-10 hidden dark:block" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[150px] mix-blend-screen animate-pulse hidden dark:block" />
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen hidden dark:block" />

          {/* Light Mode Background */}
          <div className="absolute top-0 -left-1/4 w-[150vw] h-[100vh] bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 animate-gradient -z-10 dark:hidden block" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-300/20 rounded-full blur-[150px] mix-blend-multiply animate-pulse dark:hidden block" />
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[120px] mix-blend-multiply dark:hidden block" />
        </div>
        
        {/* Sidebar Overlay Mask (Removed, now using Top Navbar) */}
        
        <Navbar />
        <div className="relative z-10 transition-all duration-300">
          {children}
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
