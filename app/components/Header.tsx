export const StandVirtualHeader = () => {
  return (
    <header
      style={{
        background: "#ffffff",
        left: 0,
        position: "sticky",
        right: 0,
        textAlign: "left",
        top: 0,
        width: "100%",
        zIndex: 1020,
        boxShadow: "rgb(20 35 85 / 15%) 0px 2px 6px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div
          style={{ display: "flex", alignItems: "center", padding: "8px 24px" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <a
              href="https://www.standvirtual.com/"
              style={{ textDecoration: "none" }}
            >
              <img alt="logo" src="/logo.svg" height={30} width={150} />
              <span
                style={{
                  display: "block",
                  fontSize: "13px",
                  fontWeight: "600",
                  lineHeight: "11px",
                  textAlign: "right",
                  color: "#020309",
                }}
              >
                O nº 1 em Carros
              </span>
            </a>
          </div>
          <div style={{ display: "flex", marginLeft: "16px" }}>
            <div style={{ marginRight: "8px" }}>
              <img
                src="/badge.png"
                width={31}
                height={51}
                style={{ marginRight: "8px" }}
              />
            </div>
            <p
              style={{
                color: "#398B72",
                margin: 0,
                display: "inline-block",
                width: "120px",
                fontSize: "10px",
                lineHeight: "16px",
                fontWeight: 700,
              }}
            >
              Há 10 anos consecutivos a Escolha dos consumidores
            </p>
          </div>
        </div>
        <nav style={{ width: "100%" }}>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              float: "right",
              padding: "13px 0",
              height: "100%",
              alignItems: "center",
              marginRight: "1rem",
            }}
          >
            <li
              style={{
                color: "#66676C",
                borderLeft: "1px solid #f6f7f8",
                position: "relative",
              }}
            >
              <a
                href="/main/create"
                style={{
                  padding: "0 8px",
                  color: "#66676C",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Add Car
              </a>
            </li>
            <li
              style={{
                color: "#66676C",
                borderLeft: "1px solid #f6f7f8",
                position: "relative",
              }}
            >
              <a
                href="/main/list"
                style={{
                  padding: "0 8px",
                  color: "#66676C",
                  fontSize: "13px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                View All
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default StandVirtualHeader;
