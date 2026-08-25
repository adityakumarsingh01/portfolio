import { prisma } from "@/lib/prisma";
import EducationClient from "./EducationClient";

export default async function EducationPage() {
  const education = await prisma.education.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <EducationClient education={education} />;
}
