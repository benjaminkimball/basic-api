import { randEmail, randPassword } from "@ngneat/falso";
import { Prisma, PrismaClient } from "@prisma/client";
import { hashPassword } from "../src/auth";

const prisma = new PrismaClient();

async function seedDatabase() {
  const data: Prisma.UserCreateManyInput[] = Array.from({ length: 50 }, () => {
    const { hash: password, salt } = hashPassword(randPassword());

    return { email: randEmail(), password, salt };
  });

  await prisma.user.createMany({ data });
}

seedDatabase()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Failed to seed database!");
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
