import React from "react";
import { Card, Col, Row } from "reactstrap";
import { items } from "./Items";
import { Delete, Trash, CheckCircle } from "react-feather";

export default function CartCard() {
  return (
    <div>
      <Row>
        <Col md={12}>
          {items.map((item, index) => (
            <Card className="shadow cart-left-card mt-4 px-3 py-3">
              <Row>
                <Col md={1}>
                  <label class="container1" style={{ marginTop: 40 }}>
                    <input type="radio" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                </Col>
                <Col md={2}>
                  <img
                    src={item.item_image}
                    alt=""
                    style={{ margin: "auto", width: 100, height: 100 }}
                  />
                </Col>
                <Col md={9}>
                  <Row>
                    <Col md={10}>
                      <p>
                        {item.item_name.length > 55
                          ? `${item.item_name.substring(0, 55)}...`
                          : item.item_name}{" "}
                      </p>
                    </Col>

                    <Col md={2}>
                      <Trash className="trash" size="2.5em" />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={9}>
                      <p
                        style={{
                          display: "inline-block",
                          fontWeight: "bold",
                        }}
                      >
                        NGN ₦<span>{item.item_price}</span>
                      </p>
                    </Col>

                    <Col md={3}>
                      <div className="" style={{ float: "right" }}>
                        <button
                          className=""
                          style={{
                            border: "none",
                            borderRadius: "50%",
                            width: 25,
                            fontWeight: "bold",
                          }}
                        >
                          -
                        </button>
                        <p className="item-quantity">{item.item_quantity}</p>
                        <button
                          className=""
                          style={{
                            border: "none",
                            borderRadius: "50%",
                            width: 25,
                            fontWeight: "bold",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
      </Row>
    </div>
  );
}
