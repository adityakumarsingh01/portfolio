import { prisma } from "./src/lib/prisma";

const educationData = [
  {
    title: "B.Tech. (Hons.) (CSE- Data Science and Data Engineering)",
    institution: "Lovely Professional University | Jalandhar, Punjab",
    date: "Aug' 23 - Present",
    icon: "🎓"
  },
  {
    title: "Intermediate",
    institution: "S.I College | Banka, Bihar",
    date: "Apr’ 20 – Mar’ 23",
    icon: "🏫"
  },
  {
    title: "Matriculation",
    institution: "S.P.S | Banka, Bihar",
    date: "Mar’ 19 – Mar’ 20",
    icon: "📚"
  }
];

async function main() {
  console.log("Wiping existing education data...");
  await prisma.education.deleteMany({});

  console.log(`Seeding ${educationData.length} education records...`);
  
  const now = Date.now();
  for (let i = 0; i < educationData.length; i++) {
    const edu = educationData[i];
    await prisma.education.create({
      data: {
        title: edu.title,
        institution: edu.institution,
        date: edu.date,
        icon: edu.icon,
        createdAt: new Date(now - i * 10000).toISOString(),
        updatedAt: new Date(now - i * 10000).toISOString(),
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
