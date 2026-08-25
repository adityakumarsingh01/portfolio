import { prisma } from "@/lib/prisma";
import { Briefcase, FileText, TrendingUp, Database, GraduationCap } from "lucide-react";

export default async function AdminDashboard() {
  const projectCount = await prisma.project.count();
  const assessmentCount = await prisma.assessment.count();
  const certificateCount = await prisma.certificate.count();
  const educationCount = await prisma.education.count();

  const stats = [
    {
      label: "Total Projects",
      value: projectCount,
      icon: Briefcase,
      light: "bg-blue-50 border-blue-200",
      dark: "dark:bg-blue-500/10 dark:border-blue-500/20",
      iconColor: "text-blue-500 dark:text-blue-400",
    },
    {
      label: "Assessments",
      value: assessmentCount,
      icon: FileText,
      light: "bg-purple-50 border-purple-200",
      dark: "dark:bg-purple-500/10 dark:border-purple-500/20",
      iconColor: "text-purple-500 dark:text-purple-400",
    },
    {
      label: "Certificates",
      value: certificateCount,
      icon: TrendingUp,
      light: "bg-amber-50 border-amber-200",
      dark: "dark:bg-amber-500/10 dark:border-amber-500/20",
      iconColor: "text-amber-500 dark:text-amber-400",
    },
    {
      label: "Education",
      value: educationCount,
      icon: GraduationCap,
      light: "bg-emerald-50 border-emerald-200",
      dark: "dark:bg-emerald-500/10 dark:border-emerald-500/20",
      iconColor: "text-emerald-500 dark:text-emerald-400",
    },
    {
      label: "Total Entries",
      value: projectCount + assessmentCount + certificateCount + educationCount,
      icon: Database,
      light: "bg-emerald-50 border-emerald-200",
      dark: "dark:bg-emerald-500/10 dark:border-emerald-500/20",
      iconColor: "text-emerald-500 dark:text-emerald-400",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-1">Dashboard</h1>
        <p className="text-gray-400 dark:text-white/30 text-sm">Manage your portfolio content</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map(({ label, value, icon: Icon, light, dark, iconColor }) => (
          <div
            key={label}
            className={`border rounded-2xl p-6 transition-colors ${light} ${dark}`}
          >
            <div className="flex items-start justify-between mb-4">
              <Icon className={`w-5 h-5 ${iconColor}`} />
            </div>
            <p className="text-4xl font-black text-gray-900 dark:text-white mb-1">{value}</p>
            <p className="text-xs text-gray-500 dark:text-white/40 font-semibold uppercase tracking-widest">{label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/admin/projects/new"
            className="flex items-center gap-4 p-5 bg-white dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-white/8 border border-gray-200 dark:border-white/5 hover:border-blue-200 dark:hover:border-white/10 rounded-2xl transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Add New Project</p>
              <p className="text-xs text-gray-400 dark:text-white/30">Create a portfolio project entry</p>
            </div>
          </a>
          <a
            href="/admin/assessments/new"
            className="flex items-center gap-4 p-5 bg-white dark:bg-white/5 hover:bg-purple-50 dark:hover:bg-white/8 border border-gray-200 dark:border-white/5 hover:border-purple-200 dark:hover:border-white/10 rounded-2xl transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center">
              <FileText className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Add Assessment</p>
              <p className="text-xs text-gray-400 dark:text-white/30">Add an industry assessment entry</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
