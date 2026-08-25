import { prisma } from "@/lib/prisma";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default async function EditActivity(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const activity = await prisma.extraCurricular.findUnique({
    where: { id: params.id },
  });

  if (!activity) {
    notFound();
  }

  async function updateActivity(formData: FormData) {
    "use server";
    
    await prisma.extraCurricular.update({
      where: { id: params.id },
      data: {
        title: formData.get("title") as string,
        issuer: formData.get("issuer") as string,
        date: formData.get("date") as string,
        description: formData.get("description") as string,
        credentialUrl: formData.get("credentialUrl") as string,
        imageUrl: formData.get("imageUrl") as string,
        updatedAt: new Date().toISOString(),
      },
    });

    redirect("/admin/certificates");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/certificates" className="p-2 text-gray-500 hover:text-gray-900 dark:text-white/40 dark:hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">Edit Activity</h1>
      </div>

      <form action={updateActivity} className="space-y-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 p-8 rounded-2xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Title</label>
            <input type="text" name="title" defaultValue={activity.title} required className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Issuer</label>
              <input type="text" name="issuer" defaultValue={activity.issuer} required className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Date</label>
              <input type="text" name="date" defaultValue={activity.date || ""} className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white" placeholder="e.g., Apr' 24" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Description</label>
            <textarea name="description" rows={3} defaultValue={activity.description || ""} required className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white"></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Credential URL</label>
              <input type="url" name="credentialUrl" defaultValue={activity.credentialUrl || ""} className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Background Image URL</label>
              <input type="text" name="imageUrl" defaultValue={activity.imageUrl || ""} placeholder="e.g. /certificates/Hack Quest.jpg" className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-900 dark:text-white" />
            </div>
          </div>
        </div>

        <button type="submit" className="flex items-center justify-center gap-2 w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-white font-bold rounded-xl transition-colors">
          <Save className="w-5 h-5" /> Update Activity
        </button>
      </form>
    </div>
  );
}
