import { prisma } from "@/lib/prisma";
import CertificatesClient from "./CertificatesClient";

export default async function CertificatesPage() {
  const certificates = await prisma.certificate.findMany({
    orderBy: { createdAt: "desc" },
  });
  
  const activities = await prisma.extraCurricular.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <CertificatesClient certificates={certificates} activities={activities} />;
}
