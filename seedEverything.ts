import { prisma } from "./src/lib/prisma";
import { allProjects } from "./src/app/projects/page";
import { assessmentsData } from "./src/components/IndustryAssessments";
import { certificates } from "./src/app/certificates/page";

async function main() {
  console.log("Wiping existing data...");
  await prisma.project.deleteMany({});
  await prisma.assessment.deleteMany({});
  await prisma.certificate.deleteMany({});

  console.log(`Seeding ${allProjects.length} projects...`);
  for (const proj of allProjects) {
    await prisma.project.create({
      data: {
        title: proj.title,
        date: proj.date || "",
        description: proj.description,
        detailedDescription: proj.detailedDescription || "",
        technologies: proj.tags ? proj.tags.join(", ") : "",
        liveUrl: proj.live || "",
        githubUrl: proj.github || "",
        linkedinUrl: proj.linkedin || "",
        imageUrl: proj.image || "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    });
  }

  console.log(`Seeding ${assessmentsData.length} assessments...`);
  for (const asmt of assessmentsData) {
    await prisma.assessment.create({
      data: {
        slug: asmt.id,
        company: asmt.company,
        title: asmt.title,
        type: asmt.type,
        category: asmt.category,
        date: asmt.date || "",
        description: asmt.description,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    });
  }

  console.log(`Seeding ${certificates.length} certificates...`);
  for (const cert of certificates) {
    await prisma.certificate.create({
      data: {
        title: cert.title,
        issuer: cert.issuer,
        issueDate: cert.date,
        credentialUrl: cert.verificationLink,
        imageUrl: cert.image || "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
    });
  }

  console.log("Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
