"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

function slugify(text: string): string {
  let clean = text.trim();
  // If user pasted a URL, extract repo or last path segment
  if (clean.includes("/") || clean.includes("http")) {
    try {
      const url = new URL(clean);
      const parts = url.pathname.split("/").filter(Boolean);
      clean = parts[parts.length - 1] || text;
      clean = clean.replace(/\.git$/i, "");
    } catch {
      const parts = clean.split("/").filter(Boolean);
      clean = parts[parts.length - 1] || text;
      clean = clean.replace(/\.git$/i, "");
    }
  }

  const slug = clean
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || `assessment-${Date.now().toString(36)}`;
}

async function getUniqueSlug(baseSlug: string, currentId?: string): Promise<string> {
  let candidate = baseSlug || `assessment-${Date.now().toString(36)}`;
  let counter = 1;

  while (true) {
    const existing = await prisma.assessment.findUnique({
      where: { slug: candidate },
      select: { id: true },
    });

    if (!existing || (currentId && existing.id === currentId)) {
      return candidate;
    }

    candidate = `${baseSlug}-${counter++}`;
  }
}

function safeRevalidate() {
  try {
    revalidatePath("/admin");
    revalidatePath("/admin/assessments");
    revalidatePath("/assessments");
    revalidatePath("/");
  } catch {
    // Ignore static generation store missing in test/non-request environments
  }
}

export async function createAssessmentAction(formData: FormData) {
  try {
    const company = (formData.get("company") as string)?.trim() || "";
    const title = (formData.get("title") as string)?.trim() || "";
    const rawSlug = (formData.get("slug") as string)?.trim() || "";
    const type = (formData.get("type") as string)?.trim() || "Assessment";
    const category = (formData.get("category") as string)?.trim() || "Technical";
    const date = (formData.get("date") as string)?.trim() || "";
    const duration = (formData.get("duration") as string)?.trim() || "";
    const description = (formData.get("description") as string)?.trim() || "";
    const liveUrl = (formData.get("liveUrl") as string)?.trim() || "";
    const githubUrl = (formData.get("githubUrl") as string)?.trim() || "";
    const technologies = (formData.get("technologies") as string)?.trim() || "";
    const skills = (formData.get("skills") as string)?.trim() || "";
    const publicStatus = (formData.get("publicStatus") as string)?.trim() || "public";

    if (!company || !title || !description) {
      return { success: false, error: "Company, Title, and Description are required." };
    }

    const baseSlug = rawSlug ? slugify(rawSlug) : slugify(`${company}-${title}`);
    const slug = await getUniqueSlug(baseSlug);

    const now = new Date().toISOString();

    await prisma.assessment.create({
      data: {
        slug,
        company,
        title,
        type,
        category,
        date: date || null,
        duration: duration || null,
        description,
        liveUrl: liveUrl || null,
        githubUrl: githubUrl || null,
        technologies: technologies || null,
        skills: skills || null,
        publicStatus,
        createdAt: now,
        updatedAt: now,
      },
    });

    safeRevalidate();

    return { success: true };
  } catch (error: any) {
    console.error("Error creating assessment:", error);
    return {
      success: false,
      error: error?.message || "An unexpected error occurred while saving the assessment.",
    };
  }
}

export async function updateAssessmentAction(id: string, formData: FormData) {
  try {
    const company = (formData.get("company") as string)?.trim() || "";
    const title = (formData.get("title") as string)?.trim() || "";
    const rawSlug = (formData.get("slug") as string)?.trim() || "";
    const type = (formData.get("type") as string)?.trim() || "Assessment";
    const category = (formData.get("category") as string)?.trim() || "Technical";
    const date = (formData.get("date") as string)?.trim() || "";
    const duration = (formData.get("duration") as string)?.trim() || "";
    const description = (formData.get("description") as string)?.trim() || "";
    const liveUrl = (formData.get("liveUrl") as string)?.trim() || "";
    const githubUrl = (formData.get("githubUrl") as string)?.trim() || "";
    const technologies = (formData.get("technologies") as string)?.trim() || "";
    const skills = (formData.get("skills") as string)?.trim() || "";
    const publicStatus = (formData.get("publicStatus") as string)?.trim() || "public";

    if (!company || !title || !description) {
      return { success: false, error: "Company, Title, and Description are required." };
    }

    const baseSlug = rawSlug ? slugify(rawSlug) : slugify(`${company}-${title}`);
    const slug = await getUniqueSlug(baseSlug, id);

    const now = new Date().toISOString();

    await prisma.assessment.update({
      where: { id },
      data: {
        slug,
        company,
        title,
        type,
        category,
        date: date || null,
        duration: duration || null,
        description,
        liveUrl: liveUrl || null,
        githubUrl: githubUrl || null,
        technologies: technologies || null,
        skills: skills || null,
        publicStatus,
        updatedAt: now,
      },
    });

    safeRevalidate();

    return { success: true };
  } catch (error: any) {
    console.error("Error updating assessment:", error);
    return {
      success: false,
      error: error?.message || "An unexpected error occurred while updating the assessment.",
    };
  }
}

export async function deleteAssessmentAction(id: string) {
  try {
    if (!id) return { success: false, error: "Assessment ID is required." };
    await prisma.assessment.delete({ where: { id } });
    safeRevalidate();
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting assessment:", error);
    return { success: false, error: error?.message || "Failed to delete assessment." };
  }
}
