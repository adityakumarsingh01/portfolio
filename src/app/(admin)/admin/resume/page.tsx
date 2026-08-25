import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Save, FileText } from "lucide-react";

export default async function AdminResume() {
  const resume = await prisma.resume.findFirst();

  async function updateResume(formData: FormData) {
    "use server";
    
    const id = formData.get("id") as string;
    const data = {
      pdfUrl: formData.get("pdfUrl") as string,
      imageUrl: formData.get("imageUrl") as string,
      updatedAt: new Date().toISOString(),
    };

    if (id) {
      await prisma.resume.update({
        where: { id },
        data,
      });
    } else {
      await prisma.resume.create({
        data,
      });
    }

    revalidatePath("/admin/resume");
    revalidatePath("/resume");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">Manage Resume</h1>
      </div>

      <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 p-8 rounded-2xl">
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-white/10">
          <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
            <FileText className="w-8 h-8 text-blue-500 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Current Links</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Update the URLs pointing to your PDF document and preview image. 
              These can be links to files in your <code>/public/resume</code> folder or external links like Google Drive.
            </p>
          </div>
        </div>

        <form action={updateResume} className="space-y-6">
          <input type="hidden" name="id" value={resume?.id || ""} />
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">PDF Document URL</label>
              <input 
                type="text" 
                name="pdfUrl" 
                defaultValue={resume?.pdfUrl || ""} 
                required 
                placeholder="e.g., /resume/Aditya Kumar Singh.pdf"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Preview Image URL</label>
              <input 
                type="text" 
                name="imageUrl" 
                defaultValue={resume?.imageUrl || ""} 
                required 
                placeholder="e.g., /resume/Aditya Kumar Singh_Resume.jpg"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white" 
              />
            </div>
          </div>

          <button type="submit" className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors mt-8">
            <Save className="w-5 h-5" /> Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
