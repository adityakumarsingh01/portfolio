"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAction } from "./actions";
import { Mail, Lock } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await loginAction(formData);

    if (result.success) {
      router.push("/admin");
    } else {
      setError(result.error || "Login failed");
      setLoading(false);
    }
  }

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop')"
      }}
    >
      {/* Dark overlay to ensure contrast */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-md p-10 mx-6 bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl rounded-3xl text-white">
        
        <h1 className="text-3xl font-bold text-center mb-10 tracking-wide">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {error && (
            <div className="p-3 rounded-full bg-red-500/20 border border-red-500/50 text-white text-sm text-center backdrop-blur-md">
              {error}
            </div>
          )}

          {/* Username/Email Input */}
          <div className="relative">
            <input
              type="text"
              name="username"
              required
              className="w-full px-6 py-4 bg-white/5 border border-white/30 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-white/10 transition-all shadow-inner"
              placeholder="Username or Email"
            />
            <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-white/70" />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              name="password"
              required
              className="w-full px-6 py-4 bg-white/5 border border-white/30 rounded-full text-white placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-white/10 transition-all shadow-inner"
              placeholder="Password"
            />
            <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-white/70" />
            </div>
          </div>

          {/* Remember me & Forgot Password */}
          <div className="flex items-center justify-between text-xs text-white/80 font-medium px-2">
            <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <input type="checkbox" className="w-4 h-4 rounded-sm border-white/30 bg-transparent text-white focus:ring-white/50 focus:ring-offset-0" />
              Remember me
            </label>
            <a href="#" className="hover:text-white transition-colors">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-2 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-white/80">
          Don't have an account?{" "}
          <a href="#" className="text-white font-bold hover:underline">
            Register
          </a>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a href="/" className="text-xs text-white/60 hover:text-white transition-colors">
            &larr; Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}
