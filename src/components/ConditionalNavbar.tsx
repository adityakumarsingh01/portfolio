"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  // Hide the portfolio Navbar on all /admin routes
  if (pathname.startsWith("/admin")) return null;
  return <Navbar />;
}
