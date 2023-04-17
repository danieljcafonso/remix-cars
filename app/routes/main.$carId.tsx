import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import type { Car } from "~/models/car.server";
import { getCarById } from "~/models/car.server";

type LoaderData = {
  car: Car;
};

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.carId, "carId not found");

  const car = await getCarById({ id: Number(params.carId) });
  if (!car) {
    throw new Response("Not found", { status: 404 });
  }
  return json<LoaderData>({ car });
};

export default function CarView() {
  const { car } = useLoaderData() as LoaderData;

  return (
    <section>
      <a
        href="/main/list"
        style={{
          color: "#0071ce",
          display: "inline",
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "16px",
          paddingLeft: "10px",
        }}
      >
        Go back
      </a>
      <div style={{ columnCount: 2 }}>
        <img
          alt="car"
          src={car.photo}
          style={{
            width: "100%",
            marginLeft: "10px",
            marginTop: "10px",
            maxHeight: "500px",
            objectFit: "contain",
          }}
        />
        <div style={{ marginLeft: "16px", paddingTop: "20px" }}>
          <span
            style={{
              display: "block",
              color: "#040711",
              fontWeight: 600,
              fontSize: "20px",
              textTransform: "capitalize",
            }}
          >
            {car.brand} {car.model}
          </span>
          <span
            style={{
              marginTop: "10px",
              display: "block",
              color: "#040711",
              fontWeight: 400,
              fontSize: "14px",
              paddingLeft: 0,
              lineHeight: "20px",
              letterSpacing: "-0.15px",
            }}
          >
            {car.segment} - {car.fuel}
          </span>
          <span
            style={{
              marginTop: "20px",
              display: "block",
              color: "#c82814",
              fontSize: "36px",
              fontWeight: 600,
              lineHeight: "26px",
            }}
          >
            {car.price}
            <span
              style={{
                marginLeft: "5px",
                fontSize: "18px",
              }}
            >
              EUR
            </span>
          </span>
          <button
            type="submit"
            style={{
              marginTop: "15px",
              alignItems: "center",
              boxSizing: "border-box",
              cursor: "pointer",
              display: "inline-flex",
              justifyContent: "center",
              textDecoration: "none",
              width: "50%",
              fontWeight: 700,
              fontSize: "16px",
              lineHeight: "18px",
              backgroundColor: "#C82814",
              border: "5px solid #C82814",
              borderRadius: "4px",
              color: "#FFFFFF",
              padding: "10px 30px 8px 30px",
            }}
          >
            Delete Car
          </button>
        </div>
      </div>
    </section>
  );
}
