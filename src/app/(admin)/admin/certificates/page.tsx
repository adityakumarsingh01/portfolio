import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit, Trash2, ExternalLink, Award } from "lucide-react";

export default async function AdminCertificates() {
  const certificates = await prisma.certificate.findMany({
    orderBy: { createdAt: "desc" },
  });

  const activities = await prisma.extraCurricular.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-1">Certificates</h1>
          <p className="text-gray-400 dark:text-white/30 text-sm">{certificates.length} total entries</p>
        </div>
        <Link
          href="/admin/certificates/new"
          className="flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-white rounded-xl font-bold transition-all hover:scale-105 text-sm"
        >
          <Plus className="w-4 h-4" /> Add Certificate
        </Link>
      </div>

      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden">
        {certificates.length === 0 ? (
          <div className="p-16 text-center">
            <div className="w-16 h-16 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-amber-400" />
            </div>
            <p className="text-gray-500 dark:text-white/30 text-sm font-semibold">No certificates yet</p>
            <p className="text-gray-400 dark:text-white/15 text-xs mt-1">Click &quot;Add Certificate&quot; to create your first entry</p>
            <Link
              href="/admin/certificates/new"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-white rounded-xl font-bold transition-all text-sm"
            >
              <Plus className="w-4 h-4" /> Add Your First Certificate
            </Link>
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/3">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Certificate</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Issuer</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Category</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {certificates.map((cert) => (
                <tr key={cert.id} className="hover:bg-gray-50 dark:hover:bg-white/3 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                      </div>
                      <p className="font-bold text-gray-900 dark:text-white text-sm">{cert.title}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600 dark:text-white/60">{cert.issuer}</p>
                  </td>
                  <td className="px-6 py-4">
                    {cert.category && (
                      <span className="px-2 py-1 bg-amber-50 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 text-xs font-semibold rounded-full border border-amber-200 dark:border-amber-500/20">
                        {cert.category}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-400 dark:text-white/40">{cert.issueDate ?? "—"}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      {cert.credentialUrl && (
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                          className="p-2 text-gray-400 dark:text-white/30 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-all">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <Link href={`/admin/certificates/${cert.id}/edit`}
                        className="p-2 text-gray-400 dark:text-white/30 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-500/10 rounded-lg transition-all">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <form action={async (formData: FormData) => {
                        "use server";
                        const id = formData.get("id") as string;
                        await prisma.certificate.delete({ where: { id } });
                        const { revalidatePath } = await import("next/cache");
                        revalidatePath("/admin/certificates");
                        revalidatePath("/certificates");
                      }}>
                        <input type="hidden" name="id" value={cert.id} />
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
      {/* EXTRA CURRICULAR ACTIVITIES SECTION */}
      <div className="flex items-center justify-between mt-16 mb-10">
        <div>
          <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-1">Extra-Curricular Activities</h2>
          <p className="text-gray-400 dark:text-white/30 text-sm">{activities.length} total entries</p>
        </div>
        <Link
          href="/admin/certificates/activity/new"
          className="flex items-center gap-2 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-white rounded-xl font-bold transition-all hover:scale-105 text-sm"
        >
          <Plus className="w-4 h-4" /> Add Activity
        </Link>
      </div>

      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden mb-16">
        {activities.length === 0 ? (
          <div className="p-16 text-center">
            <div className="w-16 h-16 bg-yellow-50 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-gray-500 dark:text-white/30 text-sm font-semibold">No activities yet</p>
            <p className="text-gray-400 dark:text-white/15 text-xs mt-1">Click &quot;Add Activity&quot; to create your first entry</p>
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/3">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Activity</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Issuer</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 dark:text-white/30 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-white/5">
              {activities.map((act) => (
                <tr key={act.id} className="hover:bg-gray-50 dark:hover:bg-white/3 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-yellow-50 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                      </div>
                      <p className="font-bold text-gray-900 dark:text-white text-sm">{act.title}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600 dark:text-white/60">{act.issuer}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-400 dark:text-white/40">{act.date ?? "—"}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      {act.credentialUrl && (
                        <a href={act.credentialUrl} target="_blank" rel="noopener noreferrer"
                          className="p-2 text-gray-400 dark:text-white/30 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-all">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <Link href={`/admin/certificates/activity/${act.id}/edit`}
                        className="p-2 text-gray-400 dark:text-white/30 hover:text-yellow-600 dark:hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-500/10 rounded-lg transition-all">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <form action={async (formData: FormData) => {
                        "use server";
                        const id = formData.get("id") as string;
                        await prisma.extraCurricular.delete({ where: { id } });
                        const { revalidatePath } = await import("next/cache");
                        revalidatePath("/admin/certificates");
                        revalidatePath("/certificates");
                      }}>
                        <input type="hidden" name="id" value={act.id} />
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
