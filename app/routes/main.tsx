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
            background: "#ffffff",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "#fbfbfb",
              color: "#040711",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "5vw",
              fontWeight: 700,
            }}
          >
            <img
              alt="qrcode"
              src="/reactnorway.png"
              style={{
                position: "absolute",
                float: "left",
                left: 20,
                height: "160px",
                objectFit: "contain",
              }}
            />
            React Norway
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
