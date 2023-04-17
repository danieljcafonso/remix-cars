import type { Car } from "@prisma/client";

export const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

export const getCarFormData = (formData: FormData) => {
  const brand = formData.get("brand");
  const segment = formData.get("segment");
  const price = Number(formData.get("price"));
  const fuel = formData.get("fuel");
  const model = formData.get("model");
  const photo = formData.get("photo");

  const fields = {
    brand,
    segment,
    price,
    fuel,
    model,
    photo,
  } as unknown as Pick<
    Car,
    "brand" | "segment" | "price" | "fuel" | "model" | "photo"
  >;

  return fields;
};

export const createOptimisticCar = (formData: FormData) => {
  const car: Car = {
    id: Math.random(),
    ...getCarFormData(formData),
  };
  return car;
};
