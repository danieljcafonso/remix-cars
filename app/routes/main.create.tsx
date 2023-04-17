import { Car } from "@prisma/client";
import { json, ActionFunction, redirect } from "@remix-run/node";
import CarCreateForm from "~/components/CarCreateForm";
import { createCar } from "~/models/car.server";

type ActionData = {
  formError?: string;
  errors?: {
    brand?: string;
    segment?: string;
    price?: string;
    fuel?: string;
    model?: string;
    photo?: string;
  };
  fields?: Car;
};
const validateIfEmpty = (value: string) =>
  value.length === 0 ? "This field is required" : undefined;

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  console.log("hello");
  const formData = await request.formData();
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

  if (
    typeof fields.brand !== "string" ||
    typeof fields.segment !== "string" ||
    typeof fields.model !== "string" ||
    typeof fields.fuel !== "string" ||
    typeof fields.photo !== "string" ||
    typeof fields.price !== "number"
  ) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  // const errors = {
  //   brand: validateIfEmpty(brand),
  //   segment: validateIfEmpty(seg),
  //   weakness: validateIfEmpty(weakness),
  // };

  // if (Object.values(errors).some(Boolean)) {
  //   return badRequest({ errors, fields });
  // }

  const car = await createCar(fields);

  return redirect(`/main/${car.id}`);
};

export default function CreateCar() {
  return <CarCreateForm />;
}
