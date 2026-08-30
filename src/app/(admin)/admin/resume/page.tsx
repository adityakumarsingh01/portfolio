import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { ArrowLeft, Save, FileText } from "lucide-react";
import { put } from "@vercel/blob";

export default async function AdminResume() {
  const resume = await prisma.resume.findFirst();

  async function updateResume(formData: FormData) {
    "use server";
    
    const id = formData.get("id") as string;
    try {
      let pdfUrl = formData.get("pdfUrl") as string;
      const pdfFile = formData.get("pdfFile") as File | null;
      if (pdfFile && pdfFile.size > 0) {
        const blob = await put(pdfFile.name, pdfFile, { access: 'public' });
        pdfUrl = blob.url;
      }

      let imageUrl = formData.get("imageUrl") as string;
      const imageFile = formData.get("imageFile") as File | null;
      if (imageFile && imageFile.size > 0) {
        const blob = await put(imageFile.name, imageFile, { access: 'public' });
        imageUrl = blob.url;
      }

      const data = {
        pdfUrl,
        imageUrl,
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

    } catch (error) {
      console.error("Failed to update resume:", error);
      throw new Error("Failed to update resume");
    }

    revalidatePath("/admin/resume");
    revalidatePath("/resume");
    revalidatePath("/");
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
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">PDF Document (Upload or paste URL)</label>
              <div className="space-y-2">
                <input type="file" name="pdfFile" accept="application/pdf" className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                <input 
                  type="text" 
                  name="pdfUrl" 
                  defaultValue={resume?.pdfUrl || ""} 
                  placeholder="OR paste an external PDF URL here"
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white text-sm" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Preview Image (Upload or paste URL)</label>
              <div className="space-y-2">
                <input type="file" name="imageFile" accept="image/*" className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                <input 
                  type="text" 
                  name="imageUrl" 
                  defaultValue={resume?.imageUrl || ""} 
                  placeholder="OR paste an external image URL here"
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white text-sm" 
                />
              </div>
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
