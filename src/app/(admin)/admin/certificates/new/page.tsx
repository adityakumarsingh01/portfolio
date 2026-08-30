import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { put } from "@vercel/blob";

export default function NewCertificate() {
  async function createCertificate(formData: FormData) {
    "use server";
    
    try {
      let imageUrl = formData.get("imageUrl") as string;
      const imageFile = formData.get("imageFile") as File | null;
      
      if (imageFile && imageFile.size > 0) {
        const blob = await put(imageFile.name, imageFile, { access: 'public' });
        imageUrl = blob.url;
      }

      await prisma.certificate.create({
        data: {
          title: formData.get("title") as string,
          issuer: formData.get("issuer") as string,
          category: formData.get("category") as string,
          issueDate: formData.get("issueDate") as string,
          credentialUrl: formData.get("credentialUrl") as string,
          imageUrl: imageUrl,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      });
    } catch (error) {
      console.error("Failed to create certificate:", error);
      throw new Error("Failed to create certificate");
    }

    const { revalidatePath } = await import("next/cache");
    revalidatePath("/admin");
    revalidatePath("/admin/certificates");
    revalidatePath("/certificates");
    revalidatePath("/");

    redirect("/admin/certificates");
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/certificates" className="p-2 text-gray-500 hover:text-gray-900 dark:text-white/40 dark:hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">Add Certificate</h1>
      </div>

      <form action={createCertificate} className="space-y-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 p-8 rounded-2xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Title</label>
            <input type="text" name="title" required className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 dark:text-white" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Issuer</label>
              <input type="text" name="issuer" required className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Category</label>
              <input type="text" name="category" className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 dark:text-white" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Issue Date</label>
              <input type="text" name="issueDate" className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 dark:text-white" placeholder="e.g., Nov' 23" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Credential URL</label>
              <input type="url" name="credentialUrl" className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 dark:text-white" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">Background Image (Upload or paste URL)</label>
            <div className="space-y-2">
              <input type="file" name="imageFile" accept="image/*" className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100" />
              <input type="text" name="imageUrl" placeholder="OR paste an external image URL here" className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-900 dark:text-white text-sm" />
            </div>
          </div>
        </div>

        <button type="submit" className="flex items-center justify-center gap-2 w-full py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl transition-colors">
          <Save className="w-5 h-5" /> Save Certificate
        </button>
      </form>
    </div>
  );
}
