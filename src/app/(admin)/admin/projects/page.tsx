import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit, Trash2, ExternalLink, GitBranch } from "lucide-react";

export default async function AdminProjects() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-1">Projects</h1>
          <p className="text-gray-400 dark:text-white/30 text-sm">{projects.length} total entries</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all hover:scale-105 text-sm"
        >
          <Plus className="w-4 h-4" /> Add Project
        </Link>
      </div>

      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden">
        {projects.length === 0 ? (
          <div className="p-16 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-gray-300 dark:text-white/20" />
            </div>
            <p className="text-gray-500 dark:text-white/30 text-sm font-semibold">No projects yet</p>
            <p className="text-gray-400 dark:text-white/15 text-xs mt-1">Click &quot;Add Project&quot; to create your first entry</p>
            <Link
              href="/admin/projects/new"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all text-sm"
            >
              <Plus className="w-4 h-4" /> Add Your First Project
            </Link>
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/3">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Title</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Links</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-white/3 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{project.title}</p>
                    <p className="text-xs text-gray-500 dark:text-white/30 mt-0.5 line-clamp-1">{project.description}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs text-gray-500 dark:text-white/40">{project.date || "N/A"}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="p-1.5 text-gray-400 dark:text-white/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="p-1.5 text-gray-400 dark:text-white/30 hover:text-gray-900 dark:hover:text-white transition-colors">
                          <GitBranch className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.linkedinUrl && (
                        <a href={project.linkedinUrl} target="_blank" rel="noopener noreferrer"
                          className="p-1.5 text-gray-400 dark:text-white/30 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <Link href={`/admin/projects/${project.id}/edit`}
                        className="p-2 text-gray-400 dark:text-white/30 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-all">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <form action={async (formData: FormData) => {
                        "use server";
                        const id = formData.get("id") as string;
                        await prisma.project.delete({ where: { id } });
                        const { revalidatePath } = await import("next/cache");
                        revalidatePath("/admin/projects");
                        revalidatePath("/projects");
                        revalidatePath("/");
                      }}>
                        <input type="hidden" name="id" value={project.id} />
                        <button type="submit" className="p-2 text-gray-400 dark:text-white/30 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
