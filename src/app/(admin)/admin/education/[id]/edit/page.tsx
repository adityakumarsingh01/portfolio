import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function EditEducationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const edu = await prisma.education.findUnique({
    where: { id }
  });

  if (!edu) notFound();

  async function updateEducation(formData: FormData) {
    "use server";
    
    await prisma.education.update({
      where: { id },
      data: {
        title: formData.get("title") as string,
        institution: formData.get("institution") as string,
        date: formData.get("date") as string,
        icon: formData.get("icon") as string,
        updatedAt: new Date().toISOString(),
      },
    });

    revalidatePath("/admin/education");
    revalidatePath("/education");
    redirect("/admin/education");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-8">Edit Education</h1>

      <form action={updateEducation} className="space-y-6 bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/5">
        
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Title</label>
          <input 
            type="text" 
            name="title" 
            required
            defaultValue={edu.title}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Institution</label>
          <input 
            type="text" 
            name="institution" 
            required
            defaultValue={edu.institution}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Date</label>
            <input 
              type="text" 
              name="date" 
              required
              defaultValue={edu.date}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Emoji Icon</label>
            <input 
              type="text" 
              name="icon" 
              required
              defaultValue={edu.icon}
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-4">
          <a href="/admin/education" className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
            Cancel
          </a>
          <button type="submit" className="px-6 py-3 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
