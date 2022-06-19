import React from "react";
import { Delete, Trash, CheckCircle } from "react-feather";
import { Card, Col, Row } from "reactstrap";

import visa from "../Images/visa.png";
import master from "../Images/master.png";
import CartItems from "./CarCard";
import CartCard from "./CarCard";
export default function ShopCart() {
  return (
    <>
      <div
        className="container"
        div
        style={{ marginTop: 80, paddingBottom: 20 }}
      >
        <Row className="mt-3">
          <Col md={8}>
            <Row>
              <Col md={12}>
                <Card className=" shadow p-3 cart-left-card">
                  <Row>
                    <Col md={6}>
                      <h4>
                        Shopping Cart <span>(0)</span>
                      </h4>
                    </Col>
                  </Row>
                  <hr></hr>
                  <Row className="">
                    <Col md={6}>
                      <label class="container1" style={{}}>
                        Select all items
                        <input type="radio" name="radio" />
                        <span class="checkmark"></span>
                      </label>
                    </Col>
                    <Col md={6}>
                      <Trash className="trash" size="2.5em" />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <CartCard />
          </Col>
          <Col md={4}>
            <Card className="shadow p-3 cart-right-card">
              <h4>Sumarry</h4>
              <Row className="mt-4">
                <Col md={4}>
                  <h6>Total</h6>
                </Col>
                <Col md={8}>
                  <h4>NGN ₦ 21,212</h4>
                </Col>
              </Row>
              <button className="check">Checkout (2)</button>
            </Card>
            <Card className="shadow p-3 mt-3 cart-right-card">
              <h5>Payments Methods</h5>
              <Row className="">
                <Col md={2}>
                  <img src={master} />
                </Col>
                <Col md={2}>
                  <img src={visa} mar />
                </Col>
              </Row>
              <hr></hr>
              <h5>Buyer Protection</h5>
              <p style={{ fontSize: 14 }}>
                <CheckCircle /> Get full refund if the item is not as described
                or if is not delivered
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
