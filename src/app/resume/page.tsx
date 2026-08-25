import { prisma } from "@/lib/prisma";
import ResumeClient from "./ResumeClient";

export default async function ResumePage() {
  const resume = await prisma.resume.findFirst();

  const pdfUrl = resume?.pdfUrl || "/resume/Aditya%20Kumar%20Singh.pdf";
  const imageUrl = resume?.imageUrl || "/resume/Aditya%20Kumar%20Singh_Resume.jpg";

  return <ResumeClient pdfUrl={pdfUrl} imageUrl={imageUrl} />;
}
