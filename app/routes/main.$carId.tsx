import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import { Form } from "@remix-run/react";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import type { Car } from "~/models/car.server";
import { deleteCar } from "~/models/car.server";
import { getCarById } from "~/models/car.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Fest.dev Car Page" },
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

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const id = Number(formData.get("id"));

  const car = await deleteCar({ id });

  return redirect(`/main/list`);
};

export default function CarView() {
  const { car } = useLoaderData() as LoaderData;

  return (
    <section>
      <Link
        to="/main/list"
        prefetch="intent"
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
      </Link>
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
          <Form method="POST">
            <input type="hidden" name="id" value={car.id} />
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
          </Form>
        </div>
      </div>
    </section>
  );
}
