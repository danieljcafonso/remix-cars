import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.car.deleteMany({ where: { id: { gt: 0 } } });

  await prisma.car.create({
    data: {
      brand: "Audi",
      model: "Guinea",
      segment: "Van",
      price: 12000,
      fuel: "Diesel",
      photo:
        "https://as2.ftcdn.net/v2/jpg/00/16/14/89/1000_F_16148967_YvRk9vkq8eyVda5pDAeTRCvciG87ucqJ.jpg",
    },
  });

  await prisma.car.create({
    data: {
      brand: "Ferrari",
      model: "Hedgehog",
      segment: "Coupe",
      price: 82000,
      fuel: "Electric",
      photo:
        "https://i.pinimg.com/originals/f6/54/cd/f654cd0b1d30e6a75d101bc5603b3c49.jpg",
    },
  });

  console.log("Database has been seeded!");
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
