import { prisma } from "@/lib/prisma";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default async function EditAssessment(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const assessment = await prisma.assessment.findUnique({
    where: { id: params.id }
  });

  if (!assessment) notFound();

  async function updateAssessment(formData: FormData) {
    "use server";
    
    await prisma.assessment.update({
      where: { id: params.id },
      data: {
        slug: formData.get("slug") as string,
        company: formData.get("company") as string,
        title: formData.get("title") as string,
        type: formData.get("type") as string,
        category: formData.get("category") as string,
        date: formData.get("date") as string,
        description: formData.get("description") as string,
        updatedAt: new Date().toISOString(),
      },
    });

    redirect("/admin/assessments");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/assessments" className="p-2 text-gray-500 hover:text-gray-900 dark:text-white/40 dark:hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">Edit Assessment</h1>
      </div>

      <form action={updateAssessment} className="space-y-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 p-8 rounded-2xl">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Company</label>
              <input type="text" name="company" defaultValue={assessment.company} required className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Slug (URL)</label>
              <input type="text" name="slug" defaultValue={assessment.slug} required className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Title</label>
            <input type="text" name="title" defaultValue={assessment.title} required className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Type (e.g. Assessment)</label>
              <input type="text" name="type" defaultValue={assessment.type} required className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Category</label>
              <input type="text" name="category" defaultValue={assessment.category} required className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Date</label>
            <input type="text" name="date" defaultValue={assessment.date || ""} className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Description</label>
            <textarea name="description" defaultValue={assessment.description} required rows={4} className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white" />
          </div>
        </div>

        <button type="submit" className="flex items-center justify-center gap-2 w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl transition-colors">
          <Save className="w-5 h-5" /> Update Assessment
        </button>
      </form>
    </div>
  );
}
