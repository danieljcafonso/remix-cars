import type { Car } from "@prisma/client";
import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import CarCreateForm from "~/components/CarCreateForm";
import { createCar } from "~/models/car.server";
import { getCarFormData } from "~/utils/utils";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "React Norway Create Car Page" },
    {
      property: "og:title",
      content: "Very cool app",
    },
    {
      name: "description",
      content: "I am describing this app",
    },
  ];
};

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

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const fields = getCarFormData(formData);

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

  const car = await createCar(fields);

  return redirect(`/main/${car.id}`);
};

export default function CreateCar() {
  return <CarCreateForm />;
}
