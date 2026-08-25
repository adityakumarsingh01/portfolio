import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react";

export default async function AdminAssessments() {
  const assessments = await prisma.assessment.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-1">Assessments</h1>
          <p className="text-gray-400 dark:text-white/30 text-sm">{assessments.length} total entries</p>
        </div>
        <Link
          href="/admin/assessments/new"
          className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all hover:scale-105 text-sm"
        >
          <Plus className="w-4 h-4" /> Add Assessment
        </Link>
      </div>

      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden">
        {assessments.length === 0 ? (
          <div className="p-16 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-gray-300 dark:text-white/20" />
            </div>
            <p className="text-gray-500 dark:text-white/30 text-sm font-semibold">No assessments yet</p>
            <p className="text-gray-400 dark:text-white/15 text-xs mt-1">Click &quot;Add Assessment&quot; to create your first entry</p>
            <Link
              href="/admin/assessments/new"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all text-sm"
            >
              <Plus className="w-4 h-4" /> Add Your First Assessment
            </Link>
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/3">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Company</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Title</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Category</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {assessments.map((assessment) => (
                <tr key={assessment.id} className="hover:bg-gray-50 dark:hover:bg-white/3 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900 dark:text-white text-sm">{assessment.company}</p>
                    {assessment.date && <p className="text-xs text-gray-500 dark:text-white/30">{assessment.date}</p>}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600 dark:text-white/70 max-w-56 truncate">{assessment.title}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-purple-50 dark:bg-purple-500/15 text-purple-600 dark:text-purple-400 text-xs font-semibold rounded-full border border-purple-200 dark:border-purple-500/20">
                      {assessment.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full border ${
                      assessment.publicStatus === 'public'
                        ? 'bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20'
                        : 'bg-amber-50 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20'
                    }`}>
                      {assessment.publicStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      {assessment.liveUrl && (
                        <a href={assessment.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="p-2 text-gray-400 dark:text-white/30 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-all">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <Link href={`/admin/assessments/${assessment.id}/edit`}
                        className="p-2 text-gray-400 dark:text-white/30 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-500/10 rounded-lg transition-all">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <form action={async (formData: FormData) => {
                        "use server";
                        const id = formData.get("id") as string;
                        await prisma.assessment.delete({ where: { id } });
                        const { revalidatePath } = await import("next/cache");
                        revalidatePath("/admin/assessments");
                        revalidatePath("/assessments");
                      }}>
                        <input type="hidden" name="id" value={assessment.id} />
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
