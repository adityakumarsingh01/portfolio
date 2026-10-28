"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Loader2, AlertCircle } from "lucide-react";
import { createAssessmentAction, updateAssessmentAction } from "@/app/actions/assessment";

interface AssessmentInitialData {
  id?: string;
  slug?: string;
  company?: string;
  title?: string;
  type?: string;
  category?: string;
  date?: string | null;
  duration?: string | null;
  description?: string;
  liveUrl?: string | null;
  githubUrl?: string | null;
  technologies?: string | null;
  skills?: string | null;
  publicStatus?: string;
}

export function AssessmentForm({
  initialData,
  isEdit = false,
}: {
  initialData?: AssessmentInitialData;
  isEdit?: boolean;
}) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData(e.currentTarget);
      let result;

      if (isEdit && initialData?.id) {
        result = await updateAssessmentAction(initialData.id, formData);
      } else {
        result = await createAssessmentAction(formData);
      }

      if (result.success) {
        router.push("/admin/assessments");
        router.refresh();
      } else {
        setErrorMessage(result.error || "Failed to save assessment.");
        setIsSubmitting(false);
      }
    } catch (err: any) {
      console.error("Form submission error:", err);
      setErrorMessage(err?.message || "An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 p-8 rounded-2xl shadow-sm"
    >
      {errorMessage && (
        <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl text-red-700 dark:text-red-400 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Unable to save assessment</p>
            <p className="mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="company"
              defaultValue={initialData?.company || ""}
              required
              placeholder="e.g. TAPLEND INDIA"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">
              Slug / URL Identifier <span className="text-xs font-normal text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              name="slug"
              defaultValue={initialData?.slug || ""}
              placeholder="auto-generated if left blank"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            defaultValue={initialData?.title || ""}
            required
            placeholder="e.g. Credit Risk Analysis and Prediction Using Machine Learning"
            className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">
              Type
            </label>
            <input
              type="text"
              name="type"
              defaultValue={initialData?.type || "Technical / Industry Assessment"}
              required
              placeholder="e.g. Data Science Assessment"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">
              Category
            </label>
            <input
              type="text"
              name="category"
              defaultValue={initialData?.category || "Data Science / Machine Learning"}
              required
              placeholder="e.g. Data Science / Machine Learning, Frontend, etc."
              className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">
              Date
            </label>
            <input
              type="text"
              name="date"
              defaultValue={initialData?.date || ""}
              placeholder="e.g. Oct 2026"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              defaultValue={initialData?.duration || ""}
              placeholder="e.g. 3 days"
              className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">
              Public Status
            </label>
            <select
              name="publicStatus"
              defaultValue={initialData?.publicStatus || "public"}
              className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            >
              <option value="public" className="text-gray-900">Public</option>
              <option value="limited" className="text-gray-900">Limited</option>
              <option value="private" className="text-gray-900">Private</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">
              Live Demo / Product URL
            </label>
            <input
              type="url"
              name="liveUrl"
              defaultValue={initialData?.liveUrl || ""}
              placeholder="https://..."
              className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">
              GitHub Repository URL
            </label>
            <input
              type="url"
              name="githubUrl"
              defaultValue={initialData?.githubUrl || ""}
              placeholder="https://github.com/..."
              className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">
            Technologies (comma separated)
          </label>
          <input
            type="text"
            name="technologies"
            defaultValue={initialData?.technologies || ""}
            placeholder="e.g. Python, Pandas, Scikit-learn, Next.js"
            className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">
            Core Skills (comma separated)
          </label>
          <input
            type="text"
            name="skills"
            defaultValue={initialData?.skills || ""}
            placeholder="e.g. Exploratory Data Analysis, Machine Learning, Feature Engineering"
            className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-white/70 mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            defaultValue={initialData?.description || ""}
            required
            rows={5}
            placeholder="Detailed description of the assessment challenge and your implementation..."
            className="w-full px-4 py-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white text-justify"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-2 w-full py-3 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Saving Assessment...</span>
          </>
        ) : (
          <>
            <Save className="w-5 h-5" />
            <span>{isEdit ? "Update Assessment" : "Save Assessment"}</span>
          </>
        )}
      </button>
    </form>
  );
}
