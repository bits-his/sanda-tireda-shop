import React from "react";
import { Delete, Trash,CheckCircle } from "react-feather";
import { Card, Col, Row } from "reactstrap";
import bag from "../Images/bag.png";
import shoebag from "../Images/shoebag.png";
import shoe from "../Images/shoe.png";
import visa from "../Images/visa.png";
import master from "../Images/master.png";
export default function ShopCart() {
  const items = [
    {
      item_image: bag,
      item_name: "Louis Vuitton Hand Bag For Women 3",
      item_quantity: 2,
      item_price: "120,000",
    },
    {
      item_image: shoe,
      item_name: "Black Leather Shoe For Men 5",
      item_quantity: 2,
      item_price: "11,000",
    },
    {
      item_image: shoebag,
      item_name: "Shoe and Bag For Women 1",
      item_quantity: 2,
      item_price: "23,000",
    },
    {
      item_image: bag,
      item_name: "Louis Vuitton Hand Bag For Women 9",
      item_quantity: 2,
      item_price: "120,000",
    },
    {
      item_image: shoe,
      item_name: "Black Leather Shoe For Men 8",
      item_quantity: 2,
      item_price: "11,000",
    },
    {
      item_image: shoebag,
      item_name: "Shoe and Bag For Women 2",
      item_quantity: 2,
      item_price: "23,000",
    },
  ];
  return (
    <div
      className="whole container"
      div
      style={{ paddingTop: 70, paddingBottom: 20 }}
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
                          <p>{item.item_name} </p>
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
                              +
                            </button>
                            <p className="item-quantity">
                              {item.item_quantity}
                            </p>
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
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Col>
          </Row>
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
            <button className="check">Checkout(2)</button>
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
            <p style={{fontSize:14}}>
              <CheckCircle/> Get full refund if the item is not as described or if is not
              delivered
            </p>

          </Card>
        </Col>
      </Row>
    </div>
  );
}
