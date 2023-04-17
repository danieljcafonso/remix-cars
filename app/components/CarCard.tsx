import type { Car } from "~/models/car.server";

const randomPhotos = [
  "https://external-preview.redd.it/V5bU4RPx7sI6WPvXoYx5P1Y4MXxCnWqXA6r5_MQtO3Q.jpg?auto=webp&s=df7e02a40953745419d4bd7e1ee52cb5f0f81148",
  "https://ogimg.infoglobo.com.br/in/24204999-a8f-186/FT1500A/690/bruno-aleixo.jpg",
];

export const CarCard = ({ car }: { car: Car }) => (
  <a
    href={`/main/${car.id}`}
    style={{
      display: "block",
      width: "312px",
      flexShrink: 0,
      marginLeft: "16px",
      marginBottom: "16px",
      textDecoration: "none",
    }}
  >
    <article
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        color: "#020309",
        background: "#ffffff",
        borderRadius: "4px",
        boxShadow: "0 8px 20px 0 rgba(20, 35, 85, 0.1)",
      }}
    >
      <img
        style={{
          maxHeight: "208px",
          flexBasis: "208px",
          width: "100%",
          height: "auto",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
          objectFit: "cover",
          flex: "2 1",
          aspectRatio: "4/3",
        }}
        alt="car"
        src={car.photo}
      />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1 2 auto",
          padding: "8px",
          boxPack: "start",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              lineHeight: "34px",
              fontWeight: 700,
              color: "#020309",
              margin: 0,
              marginBottom: "4px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "16px",
            }}
          >
            {car.brand} {car.model}
          </h2>
          <section>
            <ul
              style={{
                paddingInlineStart: "0px",
                display: "flex",
                flexWrap: "wrap",
                marginBottom: "8px",
                marginTop: "0px",
              }}
            >
              <li
                style={{
                  display: "inline-block",
                  position: "relative",
                  paddingRight: "16px",
                }}
              >
                <span style={{ fontSize: "14px" }}>{car.segment}</span>
              </li>
              <li
                style={{
                  display: "inline-block",
                  position: "relative",
                  paddingRight: "16px",
                }}
              >
                <span style={{ fontSize: "14px" }}>{car.fuel}</span>
              </li>
            </ul>
          </section>
        </div>
        <section style={{ display: "flex" }}>
          <div
            style={{
              lineHeight: "22px",
              fontWeight: 700,
              fontSize: "22px",
              color: "#C82814",
              margin: 0,
            }}
          >
            <span>{car.price}</span>
            <sup
              style={{
                paddingLeft: "4px",
                fontSize: "10px",
                lineHeight: "20px",
                verticalAlign: "baseline",
              }}
            >
              EUR
            </sup>
          </div>
        </section>
      </section>
    </article>
  </a>
);

export default CarCard;
