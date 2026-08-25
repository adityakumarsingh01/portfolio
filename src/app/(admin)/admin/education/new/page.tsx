import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function NewEducationPage() {
  async function createEducation(formData: FormData) {
    "use server";
    
    await prisma.education.create({
      data: {
        title: formData.get("title") as string,
        institution: formData.get("institution") as string,
        date: formData.get("date") as string,
        icon: formData.get("icon") as string,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });

    revalidatePath("/admin/education");
    revalidatePath("/education");
    redirect("/admin/education");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-8">Add New Education</h1>

      <form action={createEducation} className="space-y-6 bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/5">
        
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Title</label>
          <input 
            type="text" 
            name="title" 
            required
            placeholder="e.g. B.Tech. (Hons.) (CSE- Data Science and Data Engineering)"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Institution</label>
          <input 
            type="text" 
            name="institution" 
            required
            placeholder="e.g. Lovely Professional University | Jalandhar, Punjab"
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
              placeholder="e.g. Aug' 23 - Present"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Emoji Icon</label>
            <input 
              type="text" 
              name="icon" 
              required
              placeholder="e.g. 🎓 or 🏫 or 📚"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-4">
          <a href="/admin/education" className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
            Cancel
          </a>
          <button type="submit" className="px-6 py-3 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors">
            Save Education
          </button>
        </div>
      </form>
    </div>
  );
}
