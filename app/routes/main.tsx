import type { V2_MetaFunction } from "@remix-run/react";
import { Outlet } from "@remix-run/react";
import StandVirtualHeader from "~/components/Header";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Fest.dev Remix" }];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        height: "100%",
      }}
    >
      <StandVirtualHeader />

      <main style={{ width: "100%", marginTop: "8px" }}>
        <div
          className="banner"
          style={{
            position: "relative",
            background: "#F7F8FA",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "#040711",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "5vw",
              fontWeight: 700,
            }}
          >
            <img
              alt="qrcode"
              src="https://media.licdn.com/dms/image/D4D1EAQF-gb_CJFgQEA/event-background-image-crop_720_1280/0/1675122990018?e=1682020800&v=beta&t=10MNvnWWKQeENpxM7xG6zuY9rUZht9acqMAy081Sa8A"
              style={{
                position: "absolute",
                float: "left",
                left: 20,
                height: "100px",
                objectFit: "contain",
              }}
            />
            Hello Fest.dev
            <img
              alt="qrcode"
              src="/QR.jpg"
              style={{
                position: "absolute",
                float: "right",
                right: 20,
                height: "90px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        <Outlet />
      </main>
    </div>
  );
}
