import type { Car } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Car } from "@prisma/client";

export function getCarById({ id }: Pick<Car, "id">) {
  return prisma.car.findFirst({
    where: { id },
  });
}

export async function createCar({
  brand,
  segment,
  price,
  fuel,
  model,
  photo,
}: Pick<Car, "brand" | "segment" | "price" | "fuel" | "model" | "photo">) {
  return prisma.car.create({
    data: {
      brand,
      model,
      segment,
      price,
      fuel,
      photo,
    },
  });
}

export function getAllCars() {
  return prisma.car.findMany();
}

export function deleteCar({ id }: Pick<Car, "id">) {
  return prisma.car.deleteMany({
    where: { id },
  });
}
