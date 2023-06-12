import type { Car } from ".prisma/client";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { useNavigation } from "@remix-run/react";
import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import CarCard from "~/components/CarCard";
import CarCreateForm from "~/components/CarCreateForm";
import { createCar, getAllCars } from "~/models/car.server";
import { createOptimisticCar, getCarFormData, isError } from "~/utils/utils";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "React Norway Car List Page" },
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

  return redirect(`/main/createandlist`);
};

type LoaderData = {
  cars: Car[];
};

export const loader: LoaderFunction = async () => {
  const cars = await getAllCars();
  if (!cars) {
    throw new Response("Not found", { status: 404 });
  }
  return json<LoaderData>({ cars });
};

export default function CreateAndList() {
  const { cars } = useLoaderData() as LoaderData;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <CarCreateForm />
      <section
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          overflowX: "scroll",
          marginTop: "18px",
        }}
      >
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
        {isSubmitting ? (
          <CarCard
            isOptimistic
            key={"random"}
            car={createOptimisticCar(navigation.formData)}
          />
        ) : null}
      </section>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </div>
    );
  }

  let errorMessage = "Unexpected error";
  if (isError(error)) errorMessage = error.message;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
      <pre>{errorMessage}</pre>
    </div>
  );
}
