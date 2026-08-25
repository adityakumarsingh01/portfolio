"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  // Hide the portfolio Navbar on all /admin and /login routes
  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) return null;
  return <Navbar />;
}
