"use client";
import { motion } from "framer-motion";
import { GraduationCap, Code2, LineChart, BrainCircuit } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-12 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <h1 className="text-5xl font-black mb-4 text-gray-900 dark:text-white">
          {/* <span className="text-gray-500 font-mono text-2xl mr-4">01.</span> */}
          About <span className="text-gradient">Me</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-xl font-light">
          Passionate about Data Science and Machine Learning.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Driven by curiosity and analytical thinking, I explore data to uncover patterns, build predictive models, and transform raw information into meaningful insights.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            I am Aditya Kumar Singh, an engineering student with a strong interest in Data Science, Machine Learning, and Data Analytics. I enjoy working with data, analyzing patterns, and building intelligent solutions that help solve real-world problems.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            I am continuously learning new technologies and improving my analytical and problem-solving skills, with the goal of becoming a skilled Data Scientist who can build impactful data-driven solutions.
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass p-6 rounded-2xl border-l-4 border-blue-500">
            <h3 className="text-gray-900 dark:text-white font-bold mb-2 flex items-center gap-2"><GraduationCap className="text-blue-500 w-5 h-5" /> Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-mono">Aug 2023 — Present</p>
                <p className="text-gray-900 dark:text-white font-medium">B.Tech. (Hons.) CSE - Data Science & Engineering</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Lovely Professional University</p>
              </div>
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-mono">Apr 2020 – Mar 2023</p>
                <p className="text-gray-900 dark:text-white font-medium">Intermediate</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">S.I College</p>
              </div>
              <div>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-mono">Apr 2019 – Apr 2020</p>
                <p className="text-gray-900 dark:text-white font-medium">Matriculation</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Ganga Global Public School</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-16">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">Core Focus</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-2xl">
            <BrainCircuit className="w-8 h-8 text-purple-500 dark:text-purple-400 mb-4" />
            <h4 className="text-gray-900 dark:text-white font-bold mb-2">Machine Learning</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Implementing algorithms like Linear/Logistic Regression, Decision Trees, and Random Forest for predictive modeling.</p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <LineChart className="w-8 h-8 text-blue-500 dark:text-blue-400 mb-4" />
            <h4 className="text-gray-900 dark:text-white font-bold mb-2">Data Visualization</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Developing dashboards using Power BI to present complex insights in a clear, meaningful way.</p>
          </div>
          <div className="glass p-6 rounded-2xl">
            <Code2 className="w-8 h-8 text-green-500 dark:text-green-400 mb-4" />
            <h4 className="text-gray-900 dark:text-white font-bold mb-2">Data Engineering</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Applying techniques like data preprocessing, EDA, and feature engineering to real-world datasets.</p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
