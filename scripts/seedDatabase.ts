import { randEmail } from "@ngneat/falso";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedDatabase() {
  const data: Prisma.UserCreateManyInput[] = Array.from({ length: 50 }, () => ({
    email: randEmail(),
  }));

  await prisma.user.createMany({ data });
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
