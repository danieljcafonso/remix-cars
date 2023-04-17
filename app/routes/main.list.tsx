import type { Car } from ".prisma/client";
import { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CarCard from "~/components/CarCard";
import { getAllCars } from "~/models/car.server";

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
