import React from "react";
import { prisma } from "@/lib/prisma";
import IndustryAssessments from "@/components/IndustryAssessments";

export default async function AssessmentsPage() {
  const assessments = await prisma.assessment.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen pt-24 bg-gray-50 dark:bg-[#0a0026]">
      <IndustryAssessments dbAssessments={assessments} />
    </main>
  );
}
