import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AssessmentForm } from "@/components/AssessmentForm";

export default function NewAssessment() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/admin/assessments"
          className="p-2 text-gray-500 hover:text-gray-900 dark:text-white/40 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-black text-gray-900 dark:text-white">Add Assessment</h1>
      </div>

      <AssessmentForm />
    </div>
  );
}
