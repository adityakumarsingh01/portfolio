import { prisma } from "@/lib/prisma";
import { Briefcase, FileText, TrendingUp, Database, GraduationCap } from "lucide-react";
import DashboardCharts from "@/components/DashboardCharts";

export default async function AdminDashboard() {
  const projectCount = await prisma.project.count();
  const assessmentCount = await prisma.assessment.count();
  const certificateCount = await prisma.certificate.count();
  const educationCount = await prisma.education.count();

  // Fetch assessment distribution by category
  const assessmentCategories = await prisma.assessment.groupBy({
    by: ['category'],
    _count: { id: true }
  });

  const assessmentData = assessmentCategories.map((cat) => ({
    name: cat.category || "Uncategorized",
    count: cat._count.id,
  }));

  // Fetch certificate distribution by category
  const certCategories = await prisma.certificate.groupBy({
    by: ['category'],
    _count: { id: true }
  });

  const certData = certCategories.map((cat) => ({
    name: cat.category || "Uncategorized",
    count: cat._count.id,
  }));

  // Fetch live vs offline projects
  const liveProjectsCount = await prisma.project.count({
    where: {
      liveUrl: { not: null },
      NOT: { liveUrl: "" }
    }
  });

  const projectStatusData = [
    { name: "Live Deployments", value: liveProjectsCount, fill: "#10b981" },
    { name: "Offline/Local", value: projectCount - liveProjectsCount, fill: "#6b7280" },
  ];

  // Fetch certificates by issuer
  const certIssuers = await prisma.certificate.groupBy({
    by: ['issuer'],
    _count: { id: true }
  });

  const certIssuerData = certIssuers.map((iss) => ({
    name: iss.issuer || "Unknown",
    value: iss._count.id,
  }));

  // Fetch Top Technologies from Projects
  const allProjects = await prisma.project.findMany({
    select: { technologies: true }
  });

  const techCount: Record<string, number> = {};
  allProjects.forEach(proj => {
    if (proj.technologies) {
      // Split by comma, trim whitespace
      const techs = proj.technologies.split(',').map(t => t.trim()).filter(Boolean);
      techs.forEach(tech => {
        techCount[tech] = (techCount[tech] || 0) + 1;
      });
    }
  });

  // Convert to array, sort by count descending, take top 7
  const topTechData = Object.entries(techCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 7);

  const distributionData = [
    { name: "Projects", value: projectCount },
    { name: "Assessments", value: assessmentCount },
    { name: "Certificates", value: certificateCount },
    { name: "Education", value: educationCount },
  ].filter(d => d.value > 0);

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
      <div className="mb-10">
        <h2 className="text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <a
            href="/admin/certificates/new"
            className="flex items-center gap-4 p-5 bg-white dark:bg-white/5 hover:bg-amber-50 dark:hover:bg-white/8 border border-gray-200 dark:border-white/5 hover:border-amber-200 dark:hover:border-white/10 rounded-2xl transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Add Certificate</p>
              <p className="text-xs text-gray-400 dark:text-white/30">Add a new certificate or award</p>
            </div>
          </a>
        </div>
      </div>

      {/* Analytics Charts */}
      <div>
        <h2 className="text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest mb-4">Analytics Overview</h2>
        <DashboardCharts 
          distributionData={distributionData} 
          assessmentData={assessmentData} 
          certData={certData}
          projectStatusData={projectStatusData}
          topTechData={topTechData}
          certIssuerData={certIssuerData}
        />
      </div>
    </div>
  );
}
