import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedDatabase() {
  console.warn("No seeds configured!");
}

seedDatabase()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error("Failed to seed database!");
    console.error(err);

    await prisma.$disconnect();

    process.exit(1);
  });
