import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConditionalNavbar from "@/components/ConditionalNavbar";
import ConditionalBackground from "@/components/ConditionalBackground";
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
  title: "Aditya Kumar Singh",
  description: "Professional portfolio of Aditya Kumar Singh, Data Science and Data Engineering student. Exploring ML, AI, and Data Analytics.",
  icons: {
    icon: '/profile.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--accent)] selection:text-white overflow-x-hidden relative transition-colors duration-300 group/layout`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
        <ConditionalBackground />
        
        {/* Sidebar Overlay Mask (Removed, now using Top Navbar) */}
        
        <ConditionalNavbar />
        <div className="relative z-10 transition-all duration-300">
          {children}
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
