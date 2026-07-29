"use client";
import { motion } from "framer-motion";

export default function EducationPage() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-24 pb-12 px-6" style={{ fontFamily: 'Cambria, serif' }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-black mb-12 text-gray-900 dark:text-white capitalize tracking-wider text-center md:text-left" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>Education</h1>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-800 before:to-transparent">

          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--background)] bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              🎓
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-8 rounded-[2rem]">
              <div className="flex flex-col mb-2">
                <span className="text-blue-500 font-mono text-xs uppercase tracking-widest font-bold mb-2">Aug' 23 - Present</span>
                <h3 className="font-bold text-2xl text-gray-900 dark:text-white">B.Tech. (Hons.) (CSE- Data Science and Data Engineering)</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Lovely Professional University | Jalandhar, Punjab</p>
              {/* <p className="text-sm mt-2 font-medium">Data Science & Engineering</p> */}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--background)] bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              🏫
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-8 rounded-[2rem]">
              <div className="flex flex-col mb-2">
                <span className="text-blue-500 font-mono text-xs uppercase tracking-widest font-bold mb-2">Apr’ 20 – Mar’ 23</span>
                <h3 className="font-bold text-2xl text-gray-900 dark:text-white">Intermediate</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">S.I College | Banka, Bihar</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--background)] bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              📚
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-8 rounded-[2rem]">
              <div className="flex flex-col mb-2">
                <span className="text-blue-500 font-mono text-xs uppercase tracking-widest font-bold mb-2">Apr’ 19 – Mar’ 20</span>
                <h3 className="font-bold text-2xl text-gray-900 dark:text-white">Matriculation</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Ganga Global Public School | Bhagalpur, Bihar</p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </main>
  );
}
