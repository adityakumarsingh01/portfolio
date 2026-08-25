import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";

export default async function AdminEducation() {
  const education = await prisma.education.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-1">Education</h1>
          <p className="text-gray-400 dark:text-white/30 text-sm">{education.length} total entries</p>
        </div>
        <Link
          href="/admin/education/new"
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all hover:scale-105 text-sm"
        >
          <Plus className="w-4 h-4" /> Add Education
        </Link>
      </div>

      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden">
        {education.length === 0 ? (
          <div className="p-12 text-center text-gray-500 dark:text-white/40">
            No education records found. Add your first one!
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-white/30">Icon</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-white/30">Title</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-white/30">Date</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-white/30 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {education.map((edu) => (
                <tr key={edu.id} className="hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="text-2xl">{edu.icon}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-gray-900 dark:text-white">{edu.title}</div>
                    <div className="text-sm text-gray-500 dark:text-white/40">{edu.institution}</div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-mono text-gray-500 dark:text-white/40">{edu.date}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <Link href={`/admin/education/${edu.id}/edit`}
                        className="p-2 text-gray-400 dark:text-white/30 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-all">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <form action={async (formData: FormData) => {
                        "use server";
                        const id = formData.get("id") as string;
                        await prisma.education.delete({ where: { id } });
                        const { revalidatePath } = await import("next/cache");
                        revalidatePath("/admin/education");
                        revalidatePath("/education");
                      }}>
                        <input type="hidden" name="id" value={edu.id} />
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
