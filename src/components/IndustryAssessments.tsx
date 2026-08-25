"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Eye, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type PublicStatus = "public" | "limited" | "private";

interface Assessment {
  id: string;
  company: string;
  title: string;
  type: string;
  category: string;
  date?: string;
  duration?: string;
  description: string;
  overview?: string;
  objective?: string;
  scope?: string[];
  myRole?: string;
  implementation?: string[];
  technologies: string[];
  tools?: string[];
  skills: string[];
  challenges?: string[];
  solution?: string[];
  outcome?: string;
  learnings?: string[];
  liveUrl: string;
  githubUrl: string;
  videoUrl?: string;
  screenshots: string[];
  publicStatus: PublicStatus;
  customComponent?: React.ReactNode;
}

export const assessmentsData: Assessment[] = [
  {
    id: "fundsroom",
    company: "FundsRoom",
    title: "Customer Order & Inventory Reservation Workflow",
    type: "Business / ERP Workflow Assessment",
    category: "Business / ERP",
    date: "Aug 2026",
    description: "Explored an ERP workflow covering customer orders, inventory availability, reservation logic, and resulting available quantity changes.",
    objective: "Understand and validate a business workflow involving customer order creation and how different transaction states affect inventory.",
    scope: [
      "Customer Order",
      "Inventory",
      "Reservation",
      "Available Quantity",
      "Order / Inventory State"
    ],
    myRole: "Worked through a business workflow involving order creation and inventory reservation, observing state changes and failure scenarios.",
    implementation: [
      "Login / role-based workflow",
      "Customer order creation",
      "Selecting customer/order information",
      "Adding the required product/item",
      "Understanding inventory availability",
      "Creating or triggering a reservation",
      "Observing available quantity before and after reservation",
      "Understanding successful reservation flow and failure scenarios"
    ],
    technologies: [],
    tools: [],
    skills: ["ERP Workflow Understanding", "Inventory Management Concepts", "Business Process Analysis", "Reservation Logic", "State-Based Workflow", "Problem Solving", "Functional Testing"],
    challenges: ["Understanding how reservation logic affects available vs on-hand inventory accurately."],
    solution: ["Analyzed the workflow steps and validated the states manually against expected outcomes."],
    outcome: "Successfully completed the assessment workflow.",
    liveUrl: "https://mini-operations-erp-lake.vercel.app",
    githubUrl: "https://github.com/adityakumarsingh01/Mini-Operations-ERP.git",
    screenshots: ["/assignment/FundsRoom.png"],
    publicStatus: "private",
    customComponent: (
      <div className="my-8 bg-blue-50 dark:bg-blue-900/10 p-6 md:p-8 rounded-2xl border border-blue-100 dark:border-blue-900/30">
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Workflow Analysis</h4>
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-8 overflow-x-auto pb-4">
          <span className="px-4 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap">Customer Order</span>
          <ArrowRight className="w-5 h-5 text-gray-400 rotate-90 md:rotate-0 shrink-0" />
          <span className="px-4 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap">Product Selection</span>
          <ArrowRight className="w-5 h-5 text-gray-400 rotate-90 md:rotate-0 shrink-0" />
          <span className="px-4 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap">Check Inventory</span>
          <ArrowRight className="w-5 h-5 text-gray-400 rotate-90 md:rotate-0 shrink-0" />
          <span className="px-4 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap">Reserve Quantity</span>
          <ArrowRight className="w-5 h-5 text-gray-400 rotate-90 md:rotate-0 shrink-0" />
          <span className="px-4 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap">Inventory Updated</span>
        </div>

        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Core Inventory Concept</h4>
        <div className="bg-white dark:bg-[#0a0026] p-6 rounded-xl border border-gray-200 dark:border-white/10 text-center shadow-sm">
          <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Available Quantity = On-Hand Quantity - Reserved Quantity
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Example scenario: If On-Hand = 90 and Reserved = 20, the Available Quantity is 70.
            If requested quantity {'>'} available quantity, the reservation cannot be completed (failure state).
          </p>
        </div>
      </div>
    )
  },
  {
    id: "vocallabs",
    company: "Vocallabs AI",
    title: "Recruitment Assessment",
    type: "AI / Technical Recruitment Assessment",
    category: "Communication / Presentation",
    date: "Aug 2026",
    description: "Completed written assessment responses and a strict 90-second single-take video assessment focused on communication, clarity, and technical storytelling.",
    objective: "Evaluate communication, problem-solving, and ability to present technical experience clearly under strict constraints.",
    scope: [
      "Written application/assessment responses",
      "Technical/personal responses",
      "90-second video response (single take, no edits)"
    ],
    myRole: "Prepared concise, role-aligned responses based on my technical background, projects, problem-solving experience, and understanding of the role.",
    implementation: [
      "Structured thinking and technical storytelling for the video component",
      "Drafted concise technical written responses"
    ],
    technologies: [],
    tools: [],
    skills: ["Verbal Communication", "Concise Storytelling", "Technical Communication", "Confidence", "Structured Thinking", "Time Management", "Presentation", "Problem Solving", "Requirement Understanding"],
    challenges: ["Delivering a clear, comprehensive technical explanation within a strict 90-second single-take limit without scripts."],
    solution: ["Practiced concise storytelling and structured thinking to ensure all required points were covered naturally."],
    outcome: "Successfully completed the assessment workflow.",
    liveUrl: "",
    githubUrl: "",
    screenshots: [],
    publicStatus: "limited",
    customComponent: (
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-purple-50 dark:bg-purple-900/10 p-6 md:p-8 rounded-2xl border border-purple-100 dark:border-purple-900/30">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Communication & Video Assessment</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            Completed a short single-take video assessment designed to evaluate communication, clarity, confidence, and ability to explain experience naturally within a strict time limit.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-white/5 p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-white/10">
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Written Assessment</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6">
            Private Assessment Content. Prepared concise, role-aligned responses based on my technical background, projects, problem-solving experience, and understanding of the role.
          </p>
          <div className="flex flex-col gap-2 text-xs font-semibold text-gray-600 dark:text-gray-400">
            <span className="px-3 py-2 bg-white dark:bg-[#0a0026] rounded-lg border border-gray-200 dark:border-white/10 text-center">Assessment Requirements</span>
            <span className="text-center">↓</span>
            <span className="px-3 py-2 bg-white dark:bg-[#0a0026] rounded-lg border border-gray-200 dark:border-white/10 text-center text-blue-600 dark:text-blue-400">Written Response + 90-Second Video</span>
            <span className="text-center">↓</span>
            <span className="px-3 py-2 bg-white dark:bg-[#0a0026] rounded-lg border border-gray-200 dark:border-white/10 text-center text-green-600 dark:text-green-400">Evaluation</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "acdyon",
    company: "ACDYON TECHNOLOGIES",
    title: "AI Product Homepage",
    type: "Frontend / AI Product Assessment",
    category: "Frontend",
    date: "Aug 2026",
    description: "Designed and developed a modern AI product homepage as part of a technical assessment, focusing on responsive frontend development, visual hierarchy, component structure, and recruiter-friendly user experience.",
    objective: "Build a responsive, modern landing page for an AI product demonstrating strong UI/UX skills and frontend architecture.",
    scope: [
      "AI product homepage",
      "Modern landing page",
      "Responsive layout",
      "Hero section",
      "Product positioning",
      "Responsive navigation",
      "Reusable UI components"
    ],
    myRole: "Extended AI product marketing concept developed during the assessment process, utilizing responsive frontend development to build a premium SaaS presentation.",
    implementation: [
      "Designed visual hierarchy and feature presentation",
      "Built component-based UI architecture",
      "Implemented conversion-focused CTA sections",
      "Ensured recruiter-friendly UX and responsive behavior"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    tools: [],
    skills: ["Frontend Development", "Responsive Web Design", "UI/UX", "Component Architecture", "Product Presentation", "Visual Hierarchy", "Landing Page Development", "SaaS Product Positioning"],
    challenges: ["Balancing aesthetic premium design with clean, reusable component architecture."],
    solution: ["Utilized Tailwind CSS utility classes to streamline styling and maintain consistent spacing/typography."],
    outcome: "Completed the assigned implementation and submitted the final solution.",
    liveUrl: "https://aiproducthomepage.vercel.app/",
    githubUrl: "https://github.com/adityakumarsingh01/AI_Product_Homepage.git",
    screenshots: ["/assignment/ACDYON TECHNOLOGIES.png"],
    publicStatus: "public",
    customComponent: (
      <div className="my-8 bg-blue-50 dark:bg-blue-900/10 p-6 md:p-8 rounded-2xl border border-blue-100 dark:border-blue-900/30">
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">User Flow</h4>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 overflow-x-auto pb-4 hide-scrollbar">
          <span className="px-4 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap">User</span>
          <span className="hidden md:block text-gray-400">→</span><span className="md:hidden text-gray-400">↓</span>
          <span className="px-4 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap">Landing Page</span>
          <span className="hidden md:block text-gray-400">→</span><span className="md:hidden text-gray-400">↓</span>
          <span className="px-4 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap">Product Story</span>
          <span className="hidden md:block text-gray-400">→</span><span className="md:hidden text-gray-400">↓</span>
          <span className="px-4 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap">Features</span>
          <span className="hidden md:block text-gray-400">→</span><span className="md:hidden text-gray-400">↓</span>
          <span className="px-4 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap text-blue-600 dark:text-blue-400">CTA</span>
        </div>
      </div>
    )
  },
  {
    id: "cipherschools",
    company: "CIPHERSCHOOLS",
    title: "Technical Assessment",
    type: "Industry / Recruitment Assessment",
    category: "Other",
    date: "Jul 2026",
    description: "Completed a practical assignment as part of an internship/recruitment process, focusing on requirement understanding, implementation, problem-solving, and clear presentation of the final solution.",
    technologies: [],
    tools: [],
    skills: ["Problem Solving", "Development", "Requirement Analysis", "Implementation"],
    outcome: "Successfully completed the assessment workflow.",
    liveUrl: "",
    githubUrl: "",
    screenshots: [],
    publicStatus: "public",
  },
  {
    id: "insideiim-investiq",
    company: "InsideIIM",
    title: "InvestIQ - AI-Powered Investment Research Platform",
    type: "Technical / Full-Stack / AI Assessment",
    category: "AI / FinTech / Full Stack",
    date: "Jun 2026",
    duration: "",
    description: "Built an AI-powered investment research platform that analyzes companies using financial data, market information, news context, risk factors, and AI-assisted reasoning to generate structured investment insights and recommendations.",
    overview: "InvestIQ is an AI-powered investment research platform designed to simplify company research by combining financial data, market information, risk analysis, news context, and AI-assisted investment reasoning into a single research dashboard. The platform allows users to search for companies and receive structured financial insights, investment indicators, risk evaluation, scoring, and recommendations.",
    objective: "The objective was to build a practical investment research platform that could reduce the effort required to analyze companies manually by bringing financial information, market context, AI analysis, and investment decision logic into one application.",
    scope: [
      "Company search and selection",
      "Financial data retrieval",
      "Company and market analysis",
      "Investment indicator evaluation",
      "Risk analysis",
      "News and market context",
      "AI-assisted financial analysis",
      "Structured investment scoring",
      "Investment recommendation",
      "Interactive research dashboard",
      "Responsive frontend experience",
      "External API integration",
      "API error and rate-limit handling"
    ],
    myRole: "Designed and developed the end-to-end application, including the frontend experience, API/service integration, financial-data integration, AI-assisted analysis workflow, investment scoring presentation, visualization, error handling, and deployment.",
    implementation: [
      "Built the frontend using Next.js, React, TypeScript, and Tailwind CSS.",
      "Created the company research and analysis workflow.",
      "Implemented the analysis API flow used to process company research requests.",
      "Integrated external financial-data APIs for company and market information.",
      "Integrated AI-assisted analysis for interpreting financial and market information.",
      "Designed structured investment analysis and recommendation output.",
      "Implemented financial metrics, scorecards, charts, risk information, and analysis sections.",
      "Used Recharts for financial data visualization where applicable.",
      "Used structured validation with Zod where applicable.",
      "Worked with a multi-agent analysis approach using LangGraph.",
      "Handled external API failures, quota limitations, and endpoint issues.",
      "Managed API credentials through environment variables.",
      "Tested the application using real company examples such as Apple.",
      "Prepared the application for web deployment."
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "Finnhub API",
      "Alpha Vantage API",
      "Financial Modeling Prep API",
      "LangGraph",
      "Recharts",
      "Zod"
    ],
    tools: [
      "Git",
      "GitHub",
      "npm",
      "Vercel",
      "VS Code"
    ],
    skills: [
      "Full-Stack Development",
      "AI Integration",
      "API Integration",
      "Financial Data Analysis",
      "Investment Research",
      "Multi-Agent Systems",
      "React Development",
      "Next.js Development",
      "TypeScript",
      "Data Visualization",
      "Responsive UI Development",
      "Problem Solving",
      "API Troubleshooting",
      "Deployment"
    ],
    challenges: [
      "Gemini API returned HTTP 429 quota and rate-limit errors during development.",
      "Financial Modeling Prep produced HTTP 403 errors with legacy endpoints.",
      "The application had to work with multiple external financial-data providers.",
      "AI-generated analysis needed to be structured consistently for frontend rendering.",
      "External API failures needed to be handled without breaking the research experience.",
      "API credentials needed to be managed securely through environment variables."
    ],
    solution: [
      "Adjusted the AI integration to account for Gemini quota and rate-limit limitations.",
      "Moved toward supported financial-data sources and live data providers after encountering FMP endpoint issues.",
      "Used service-layer/API architecture to separate external data retrieval from the frontend.",
      "Structured analysis responses so the frontend could render predictable financial insights.",
      "Added error-handling considerations around external API requests.",
      "Used environment variables instead of exposing API credentials in source code."
    ],
    outcome: "Delivered a functional AI-powered investment research platform capable of combining financial information, market context, risk analysis, AI-assisted reasoning, and structured investment recommendations into a single web experience.",
    learnings: [
      "Integrating multiple external APIs into a full-stack application",
      "Working with financial and market data",
      "Handling API quotas and rate limits",
      "Working with changing and deprecated API endpoints",
      "Building AI-assisted application workflows",
      "Designing structured AI outputs",
      "Understanding multi-agent architecture",
      "Building financial dashboards",
      "Creating responsive React interfaces",
      "Managing API credentials securely",
      "Deploying AI-powered web applications"
    ],
    liveUrl: "https://investiq-omega.vercel.app/",
    githubUrl: "https://github.com/adityakumarsingh01/InvestIQ.git",
    videoUrl: "",
    screenshots: ["/assignment/InvestIQ.png"],
    publicStatus: "public",
    customComponent: (
      <div className="my-8 bg-blue-50 dark:bg-blue-900/10 p-6 md:p-8 rounded-2xl border border-blue-100 dark:border-blue-900/30">
        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">System Architecture</h4>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-xs md:text-sm font-semibold text-gray-700 dark:text-gray-300 overflow-x-auto pb-4 hide-scrollbar">
          <span className="px-3 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap">User</span>
          <span className="hidden md:block text-gray-400">→</span><span className="md:hidden text-gray-400">↓</span>
          <span className="px-3 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap">Next.js UI</span>
          <span className="hidden md:block text-gray-400">→</span><span className="md:hidden text-gray-400">↓</span>
          <span className="px-3 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap text-blue-600 dark:text-blue-400">/api/analyze</span>
          <span className="hidden md:block text-gray-400">→</span><span className="md:hidden text-gray-400">↓</span>
          <span className="px-3 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap">Financial Data APIs + AI</span>
          <span className="hidden md:block text-gray-400">→</span><span className="md:hidden text-gray-400">↓</span>
          <span className="px-3 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap">Structured Analysis</span>
          <span className="hidden md:block text-gray-400">→</span><span className="md:hidden text-gray-400">↓</span>
          <span className="px-3 py-2 bg-white dark:bg-[#0a0026] rounded-lg shadow-sm border border-gray-200 dark:border-white/10 whitespace-nowrap text-green-600 dark:text-green-400">Investment Dashboard</span>
        </div>
      </div>
    )
  }

];

export default function IndustryAssessments() {
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Extract active categories from data
  const availableCategories = ["All", ...Array.from(new Set(assessmentsData.map(a => a.category)))];

  const filteredAssessments = filter === "All"
    ? assessmentsData
    : assessmentsData.filter(a => a.category === filter);

  const selectedAssessment = assessmentsData.find(a => a.id === selectedId);

  return (
    <section id="assessments" className="py-24 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
            Industry Assessments
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 font-medium">
            Selected technical assignments and practical challenges completed during internship and recruitment processes.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-4xl">
            These assessments reflect practical problem-solving, implementation, communication, and technical execution across different recruitment and internship opportunities.
          </p>
          <div className="p-5 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 text-sm text-gray-500 dark:text-gray-400">
            <strong>Disclaimer:</strong> These projects represent independent work completed as part of assessment or application processes. They do not imply employment, endorsement, partnership, or official work for the companies listed.
          </div>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-4 hide-scrollbar">
          {availableCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${filter === cat
                ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredAssessments.map((assessment, index) => {
            const cardColors = [
              "border-t-blue-500 hover:shadow-blue-500/20",
              "border-t-emerald-500 hover:shadow-emerald-500/20",
              "border-t-purple-500 hover:shadow-purple-500/20",
              "border-t-rose-500 hover:shadow-rose-500/20",
              "border-t-amber-500 hover:shadow-amber-500/20"
            ];
            const colorClass = cardColors[index % cardColors.length];

            return (
              <div
                key={assessment.id}
                className={`group relative bg-white dark:bg-[#0a0026] rounded-3xl p-8 md:p-10 border border-black/5 dark:border-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 flex flex-col h-full border-t-4 ${colorClass}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span
                    className="text-xl font-black text-gray-900 dark:text-white tracking-wider"
                    style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}
                  >
                    {assessment.company}
                  </span>
                  <div className="flex items-center gap-2">
                    {assessment.date && (
                      <span className="text-[10px] font-bold px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100 dark:border-blue-900/30 uppercase tracking-widest whitespace-nowrap">
                        {assessment.date}
                      </span>
                    )}
                    <span className="text-[10px] font-bold px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-full border border-black/5 dark:border-white/10 uppercase tracking-widest whitespace-nowrap hidden sm:block">
                      {assessment.type.split('/')[0].trim()}
                    </span>
                  </div>
                </div>

                <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-4 line-clamp-2 leading-tight">
                  {assessment.title}
                </h4>

                {assessment.publicStatus !== "private" && assessment.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {assessment.technologies.map((tech, i) => (
                      <span key={i} className="text-[10px] font-bold px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 uppercase tracking-wider rounded-md border border-blue-100 dark:border-blue-900/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm md:text-base leading-relaxed">
                  {assessment.description}
                </p>

                {assessment.publicStatus !== "private" && assessment.skills.length > 0 && (
                  <div className="mb-8">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">Core Skills</span>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {assessment.skills.slice(0, 4).map(skill => (
                        <span key={skill} className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                          {skill}
                        </span>
                      ))}
                      {assessment.skills.length > 4 && (
                        <span className="text-sm font-semibold text-gray-500">+{assessment.skills.length - 4} more</span>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 mt-auto pt-6 border-t border-black/5 dark:border-white/10">
                  <button
                    onClick={() => setSelectedId(assessment.id)}
                    className="px-7 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:scale-105 font-bold text-sm transition-transform shadow-lg"
                  >
                    View Details
                  </button>

                  <div className="flex-grow"></div>

                  {assessment.publicStatus === "public" && assessment.liveUrl && (
                    <a href={assessment.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold text-sm transition-colors uppercase tracking-wider text-xs bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full border border-blue-100 dark:border-blue-900/30">
                      <Eye className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {assessment.publicStatus === "public" && assessment.githubUrl && (
                    <a href={assessment.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-bold text-sm transition-colors uppercase tracking-wider text-xs bg-gray-100 dark:bg-white/10 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10">
                      <FaGithub className="w-4 h-4" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Comparison / Skill Coverage */}
        <div className="mt-20">
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 text-center" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
            What These Assessments Demonstrate
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform shadow-sm">
              <span className="text-sm font-bold text-gray-900 dark:text-white mb-2">AI & Full Stack</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">InsideIIM</span>
            </div>
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform shadow-sm">
              <span className="text-sm font-bold text-gray-900 dark:text-white mb-2">Business & ERP</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">FundsRoom</span>
            </div>
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform shadow-sm">
              <span className="text-sm font-bold text-gray-900 dark:text-white mb-2 leading-tight">Frontend & Product Design</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">ACDYON TECHNOLOGIES</span>
            </div>
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform shadow-sm">
              <span className="text-sm font-bold text-gray-900 dark:text-white mb-2 leading-tight">Technical Communication</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">VOCALLABS AI</span>
            </div>
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-5 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-transform shadow-sm">
              <span className="text-sm font-bold text-gray-900 dark:text-white mb-2 leading-tight">Practical Development</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">CIPHERSCHOOLS</span>
            </div>
          </div>
        </div>

        {/* Technology Summary Cloud */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8" style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}>
            Technologies Demonstrated Across Assessments
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "AI APIs", "Gemini", "Finnhub", "Alpha Vantage", "Financial Modeling Prep", "LangGraph", "Recharts", "Zod", "Vercel"].map(tech => (
              <span key={tech} className="px-4 py-2 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-full text-sm font-bold border border-gray-200 dark:border-white/10 transition-colors hover:bg-gray-200 dark:hover:bg-white/10">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
      {/* Details Modal */}
      <AnimatePresence>
        {selectedId && selectedAssessment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-[#0a0026] rounded-[2rem] w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-white/10 flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20 text-gray-600 dark:text-gray-300 transition-colors border border-black/5 dark:border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 md:p-10 lg:p-12">
                {/* Header */}
                <div className="mb-10 pb-10 border-b border-gray-100 dark:border-white/10">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-6">
                    <span
                      className="text-xl font-black text-gray-900 dark:text-white tracking-wider"
                      style={{ fontFamily: 'Cambria, serif', fontVariant: 'small-caps' }}
                    >
                      {selectedAssessment.company}
                    </span>
                    <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                    <span className="text-xs font-bold px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 rounded-full border border-black/5 dark:border-white/10 uppercase tracking-widest">
                      {selectedAssessment.type}
                    </span>
                    {selectedAssessment.date && (
                      <>
                        <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700"></span>
                        <span className="text-sm text-gray-500">{selectedAssessment.date} {selectedAssessment.duration ? `(${selectedAssessment.duration})` : ""}</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                    {selectedAssessment.title}
                  </h3>

                  {/* Top Actions */}
                  {selectedAssessment.publicStatus === "public" && (selectedAssessment.liveUrl || selectedAssessment.githubUrl) && (
                    <div className="mt-8 flex flex-wrap gap-4">
                      {selectedAssessment.liveUrl && (
                        <a
                          href={selectedAssessment.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-md shadow-blue-500/20 uppercase tracking-wider text-xs"
                        >
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                      {selectedAssessment.githubUrl && (
                        <a
                          href={selectedAssessment.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-full font-bold transition-all hover:scale-105 shadow-md uppercase tracking-wider text-xs"
                        >
                          <FaGithub className="w-4 h-4" /> Source Code
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Privacy Warning */}
                {selectedAssessment.publicStatus !== "public" && (
                  <div className="mb-12 p-6 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/30 rounded-2xl flex items-start gap-4">
                    <Lock className="w-6 h-6 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-lg text-orange-800 dark:text-orange-200 block mb-2">
                        Privacy Status: {selectedAssessment.publicStatus === "private" ? "Private Assessment" : "Limited Access"}
                      </strong>
                      <p className="text-sm md:text-base text-orange-700 dark:text-orange-300/80 leading-relaxed">
                        {selectedAssessment.publicStatus === "private"
                          ? "Assessment completed in a restricted environment. Detailed system access, screenshots, and source code are not publicly available due to confidentiality."
                          : "Public showcase includes only information and assets that are safe to share publicly."}
                      </p>
                    </div>
                  </div>
                )}

                {/* Screenshots */}
                {selectedAssessment.screenshots && selectedAssessment.screenshots.length > 0 && (
                  <div className="mb-12">
                    {selectedAssessment.screenshots.map((src, idx) => (
                      <div key={idx} className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg">
                        <img src={src} alt={`${selectedAssessment.title} screenshot ${idx + 1}`} className="w-full h-auto object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-12">

                  {/* Overview & Objective */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Overview</h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {selectedAssessment.description}
                      </p>
                    </div>
                    {selectedAssessment.objective && (
                      <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Objective</h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {selectedAssessment.objective}
                        </p>
                      </div>
                    )}
                  </div>

                  {selectedAssessment.publicStatus !== "private" && selectedAssessment.scope && selectedAssessment.scope.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Scope of Assignment</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {selectedAssessment.scope.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Custom Component (e.g., FundsRoom Workflow) */}
                  {selectedAssessment.customComponent}

                  {selectedAssessment.publicStatus !== "private" && (
                    <>
                      {/* What I Did & Implementation */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {selectedAssessment.myRole && (
                          <div>
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">What I Did</h4>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {selectedAssessment.myRole}
                            </p>
                          </div>
                        )}

                        {selectedAssessment.implementation && selectedAssessment.implementation.length > 0 && (
                          <div>
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Implementation</h4>
                            <ul className="flex flex-col gap-3">
                              {selectedAssessment.implementation.map((task, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm font-medium">
                                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                  {task}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Tech & Skills */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {selectedAssessment.technologies && selectedAssessment.technologies.length > 0 && (
                          <div>
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Technology Stack</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedAssessment.technologies.map(tech => (
                                <span key={tech} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-bold border border-blue-100 dark:border-blue-900/20">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Key Skills Demonstrated</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedAssessment.skills.map(skill => (
                              <span key={skill} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-bold border border-gray-200 dark:border-white/10">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Challenges & Learnings */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {selectedAssessment.challenges && selectedAssessment.challenges.length > 0 && (
                          <div>
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Challenges</h4>
                            <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-300 text-sm">
                              {selectedAssessment.challenges.map((c, i) => <li key={i}>• {c}</li>)}
                            </ul>

                            {selectedAssessment.solution && selectedAssessment.solution.length > 0 && (
                              <div className="mt-4">
                                <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">How I Solved It</h5>
                                <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-300 text-sm">
                                  {selectedAssessment.solution.map((s, i) => <li key={i}>• {s}</li>)}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}

                        <div>
                          {selectedAssessment.outcome && (
                            <div className="mb-6">
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Outcome</h4>
                              <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                                {selectedAssessment.outcome}
                              </p>
                            </div>
                          )}

                          {selectedAssessment.learnings && selectedAssessment.learnings.length > 0 && (
                            <div>
                              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Key Learnings</h4>
                              <ul className="flex flex-col gap-3 text-gray-700 dark:text-gray-300 text-sm">
                                {selectedAssessment.learnings.map((l, i) => <li key={i}>• {l}</li>)}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>


                <div className="mt-8 text-center">
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    Public showcase includes only information and assets that are safe to share publicly.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
