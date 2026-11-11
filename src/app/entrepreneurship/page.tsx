"use client";
import { motion } from "framer-motion";
import { Rocket, ShoppingBag, Palette, Users, DollarSign, Award, Code, Globe, Database, Layout, PenTool } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";

export default function EntrepreneurshipPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12" style={{ fontFamily: 'Cambria, serif' }}>
      <div className="mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black mb-8 text-gray-900 dark:text-white capitalize tracking-wider"
          style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}
        >
          Entrepreneurship <span className="text-orange-600 dark:text-orange-400">Journey</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl"
          style={{ fontFamily: 'Cambria, serif' }}
        >
          Building innovative solutions, driving business growth, and turning ideas into impactful products.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SpotlightCard className="p-6 md:p-10 border border-black/5 dark:border-white/5">
              <div className="mb-8">
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-3 block">Startup Venture & E-Commerce Concept</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 capitalize tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
                  Custom Print - Customizable Merchandise E-Commerce
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-400 mb-6">
                  <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">Founder</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">Product Lead</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">Full-Stack Developer</span>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 p-4 rounded-xl flex items-start gap-4">
                  <Award className="w-6 h-6 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200">
                    Selected & Exhibited at LPU's Innotek Annual Innovation & Graduating Project Expo 2025
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
                <p>
                  Founded Custom Print, an e-commerce concept focused on personalized merchandise that allows customers to customize products with their own designs. The concept brings together product personalization, online ordering, and custom printing.
                </p>
                <p>
                  The merchandise catalog spans custom T-shirts, mugs, hoodies, pens, caps, posters, and other personalized products. The initiative was selected for public exhibition at <strong>LPU's Innotek Annual Innovation & Graduating Project Expo 2025</strong>, where the product customization workflow and interactive ordering system were demonstrated to university faculty, evaluating mentors, and industry visitors.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 capitalize tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>Key Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: <Rocket className="w-5 h-5 text-purple-500" />, text: "Founded Custom Print, an e-commerce concept centered on custom product personalization." },
                    { icon: <ShoppingBag className="w-5 h-5 text-blue-500" />, text: "Built a functional prototype supporting customized design uploads, cart management, and order workflows." },
                    { icon: <Palette className="w-5 h-5 text-pink-500" />, text: "Curated a wide catalog of customizable merchandise including apparel, drinkware, and stationery." },
                    { icon: <Globe className="w-5 h-5 text-indigo-500" />, text: "Coordinated design prototypes, UI architecture, and printing vendor workflows." },
                    { icon: <Award className="w-5 h-5 text-orange-500" />, text: <>Exhibited and evaluated at <strong>LPU's Innotek Annual Innovation Expo 2025</strong>.</> },
                  ].map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3 bg-gray-50 dark:bg-white/5 p-4 rounded-xl">
                      <div className="shrink-0 mt-0.5">{highlight.icon}</div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{highlight.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <SpotlightCard className="p-6 md:p-10 border border-black/5 dark:border-white/5">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 capitalize tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
                Certificate of Participation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">LPU Student Welfare Wing</strong> - Awarded for exhibiting Custom Print at LPU's Innotek Annual Innovation & Graduating Project Expo 2025, recognizing the project's innovation and entrepreneurial potential.
              </p>
              <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <img
                  src="/certificates/Innotek Event Participated.jpg"
                  alt="Innotek Certificate of Participation"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </SpotlightCard>
          </motion.div>

        </div>

        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <SpotlightCard className="p-6 md:p-8 border border-black/5 dark:border-white/5 h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 capitalize tracking-wider" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>Impact</h3>
              <div className="space-y-4">
                {[
                  { label: "Customers", value: "50+" },
                  { label: "Completed Orders", value: "50+" },
                  { label: "Revenue Generated", value: "₹20,000+" },
                  { label: "Original Designs", value: "1,000+" },
                  { label: "Team Members", value: "5" },
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800 last:border-0">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</span>
                    <span className="font-bold text-gray-900 dark:text-white text-lg">{stat.value}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <SpotlightCard className="p-6 md:p-8 border border-black/5 dark:border-white/5">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 capitalize tracking-wider flex items-center gap-2" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
                <Code className="w-5 h-5 text-blue-500" /> Technologies Used
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Layout className="w-4 h-4" /> Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["React 18", "TypeScript", "Vite (SWC)", "Tailwind CSS", "shadcn/ui", "Radix UI"].map(t => (
                      <span key={t} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold border border-blue-100 dark:border-blue-800/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4" /> Backend & DB
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Supabase", "Authentication", "PostgreSQL"].map(t => (
                      <span key={t} className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full text-xs font-bold border border-green-100 dark:border-green-800/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <PenTool className="w-4 h-4" /> Core Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["TanStack Query", "React Router", "React Hook Form", "Zod", "Framer Motion", "Recharts", "Embla Carousel", "jsPDF", "date-fns", "Sonner"].map(t => (
                      <span key={t} className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-xs font-bold border border-purple-100 dark:border-purple-800/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </main >
  );
}
