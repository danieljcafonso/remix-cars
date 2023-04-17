import { Form } from "@remix-run/react";

export const CarCreateForm = () => (
  <article
    style={{
      borderRadius: "4px",
      boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
      backgroundColor: "#ffffff",
      display: "flex",
      maxHeight: "calc(45%)",
      width: "100%",
    }}
  >
    <fieldset
      style={{
        border: 0,
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          margin: 0,
          border: 0,
        }}
      >
        <h1
          style={{
            fontWeight: 700,
            letterSpacing: "0.5px",
            fontSize: "16px",
            color: "#020309",
            margin: 0,
            marginBottom: "16px",
            lineHeight: "unset",
          }}
        >
          What car do you want to sell?
        </h1>
        <Form method="post">
          <div style={{ display: "flex", flexFlow: "row wrap" }}>
            <div
              style={{
                marginRight: "24px",
                width: "calc(50% - 12px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginBottom: "16px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: 600,
                    color: "#020309",
                    margin: 0,
                    marginBottom: "4px",
                  }}
                >
                  Segment
                </p>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderRadius: "4px",
                      padding: 0,
                      backgroundColor: "#EBECEF",
                      borderColor: "#EBECEF",
                      borderBottomColor: "#EBECEF",
                    }}
                  >
                    <select
                      name="segment"
                      defaultValue=""
                      required
                      style={{
                        cursor: "pointer",
                        width: "100%",
                        height: "44px",
                        background: "transparent",
                        border: 0,
                        caretColor: "#020309",
                        color: "#66676C",
                        flex: 1,
                        fontSize: "16px",
                        lineHeight: "20px",
                        outline: 0,
                        paddingLeft: "16px",
                        appearance: "none",
                      }}
                    >
                      <option hidden disabled value="">
                        -- select an option --
                      </option>
                      <option value="cabrio">Cabrio</option>
                      <option value="coupe">Coupe</option>
                      <option value="suv">SUV</option>
                      <option value="minivan">Minivan</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "calc(50% - 12px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginBottom: "16px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: 600,
                    color: "#020309",
                    margin: 0,
                    marginBottom: "4px",
                  }}
                >
                  Brand
                </p>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderRadius: "4px",
                      padding: 0,
                      backgroundColor: "#EBECEF",
                      borderColor: "#EBECEF",
                      borderBottomColor: "#EBECEF",
                    }}
                  >
                    <input
                      name="brand"
                      required
                      style={{
                        cursor: "pointer",
                        width: "100%",
                        height: "44px",
                        background: "transparent",
                        border: 0,
                        caretColor: "#020309",
                        color: "#66676C",
                        flex: 1,
                        fontSize: "16px",
                        lineHeight: "20px",
                        outline: 0,
                        paddingLeft: "16px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginRight: "24px",
                width: "calc(50% - 12px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginBottom: "16px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: 600,
                    color: "#020309",
                    margin: 0,
                    marginBottom: "4px",
                  }}
                >
                  Model
                </p>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderRadius: "4px",
                      padding: 0,
                      backgroundColor: "#EBECEF",
                      borderColor: "#EBECEF",
                      borderBottomColor: "#EBECEF",
                    }}
                  >
                    <input
                      name="model"
                      required
                      style={{
                        cursor: "pointer",
                        width: "100%",
                        height: "44px",
                        background: "transparent",
                        border: 0,
                        caretColor: "#020309",
                        color: "#66676C",
                        flex: 1,
                        fontSize: "16px",
                        lineHeight: "20px",
                        outline: 0,
                        paddingLeft: "16px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "calc(50% - 12px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginBottom: "16px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: 600,
                    color: "#020309",
                    margin: 0,
                    marginBottom: "4px",
                  }}
                >
                  Photo URL
                </p>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderRadius: "4px",
                      padding: 0,
                      backgroundColor: "#EBECEF",
                      borderColor: "#EBECEF",
                      borderBottomColor: "#EBECEF",
                    }}
                  >
                    <input
                      name="photo"
                      type="url"
                      required
                      style={{
                        cursor: "pointer",
                        width: "100%",
                        height: "44px",
                        background: "transparent",
                        border: 0,
                        caretColor: "#020309",
                        color: "#66676C",
                        flex: 1,
                        fontSize: "16px",
                        lineHeight: "20px",
                        outline: 0,
                        paddingLeft: "16px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginRight: "24px",
                width: "calc(50% - 12px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginBottom: "16px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: 600,
                    color: "#020309",
                    margin: 0,
                    marginBottom: "4px",
                  }}
                >
                  Fuel
                </p>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderRadius: "4px",
                      padding: 0,
                      backgroundColor: "#EBECEF",
                      borderColor: "#EBECEF",
                      borderBottomColor: "#EBECEF",
                    }}
                  >
                    <input
                      name="fuel"
                      required
                      style={{
                        cursor: "pointer",
                        width: "100%",
                        height: "44px",
                        background: "transparent",
                        border: 0,
                        caretColor: "#020309",
                        color: "#66676C",
                        flex: 1,
                        fontSize: "16px",
                        lineHeight: "20px",
                        outline: 0,
                        paddingLeft: "16px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "calc(50% - 12px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                marginBottom: "16px",
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "18px",
                    fontWeight: 600,
                    color: "#020309",
                    margin: 0,
                    marginBottom: "4px",
                  }}
                >
                  Price
                </p>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderRadius: "4px",
                      padding: 0,
                      backgroundColor: "#EBECEF",
                      borderColor: "#EBECEF",
                      borderBottomColor: "#EBECEF",
                    }}
                  >
                    <input
                      name="price"
                      type="number"
                      required
                      min={0}
                      style={{
                        cursor: "pointer",
                        width: "100%",
                        height: "44px",
                        background: "transparent",
                        border: 0,
                        caretColor: "#020309",
                        color: "#66676C",
                        flex: 1,
                        fontSize: "16px",
                        lineHeight: "20px",
                        outline: 0,
                        paddingLeft: "16px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              alignSelf: "flex-end",
              gap: "20px",
            }}
          >
            <button
              type="submit"
              style={{
                width: "100%",
                alignItems: "center",
                boxSizing: "border-box",
                cursor: "pointer",
                display: "inline-flex",
                justifyContent: "center",
                margin: 0,
                minHeight: "40px",
                position: "relative",
                textDecoration: "none",
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
              Add Car
            </button>
          </div>
        </Form>
      </div>
    </fieldset>
  </article>
);

export default CarCreateForm;
