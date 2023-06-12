import type { Car } from ".prisma/client";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import CarCard from "~/components/CarCard";
import { getAllCars } from "~/models/car.server";
import { isError } from "~/utils/utils";

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

export default function ListCars() {
  const { cars } = useLoaderData() as LoaderData;

  return (
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
    </section>
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
