import React, { useState } from "react";
import { Badge, Button, Card, Col, Row } from "reactstrap";
import { Minus, Plus, Trash } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, updateCart } from "../redux/action/shop";

export default function CartCard() {
  const { carts } = useSelector((s) => s.shop)
  const dispatch = useDispatch()
  
  const deleteCartItem = (it) => {
    if(it.qty<1){
      dispatch(deleteCart(it));
    }
    dispatch(updateCart({ item_code: it.item_code, qty: parseInt(it.qty) - 1 }));
  }
  const removeCart = (it) => {
    dispatch(deleteCart(it));
  }
  const addCartItem = (it) => {
    dispatch(updateCart({ item_code: it.item_code, qty: parseInt(it.qty) + 1 }));
  }

  return (
    <div>
      <Row>
        <Col md={12}>
          {carts.length ? carts.map((item, index) => {
            let selected = carts.find((a) => a.item_code === item.item_code);
            return (
              <Card key={index} className="shadow cart-left-card mt-4 px-3 py-3">
                <Row>
                  <Col md={1}>
                    <label className="container1" style={{ marginTop: 40 }}>
                      <input type="checkbox" name="radio" />
                      <span className="checkmark"></span>
                    </label>
                  </Col>
                  <Col md={2}>
                    <img
                      src={"https://yge.wvi.mybluehost.me/test/sanda-server/uploads/" +item.item_image}
                      alt=""
                      style={{ margin: "auto", width: 100, height: 100 }}
                    />
                  </Col>
                  <Col md={9}>
                    <Row>
                      <Col md={8}>
                        <p>
                          {item.item_name.length > 55
                            ? `${item.item_name.substring(0, 55)}...`
                            : item.item_name}{" "}
                          {/* <Badge>{item.qty}</Badge> */}
                        </p>
                      </Col>
                      <Col md={4}>
                        <Trash className="trash" onClick={() => removeCart(item)} size="2.5em" />
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col md={9}>
                        <p>
                          Available at store: <Badge>{item.balance}</Badge>
                        </p>
                        <p
                          style={{
                            display: "inline-block",
                            fontWeight: "bold",
                          }}
                        >

                          Unit price NGN ₦<span>{item.unit_price}</span>
                        </p>
                        <p>Cost price: NGN {parseFloat(item.unit_price) * parseInt(item.balance)} </p>
                      </Col>

                      <Col md={3}>
                        <div className="" style={{ float: "right" }}>
                          <Button
                            className=" plus"
                            style={{
                              // border: "none",
                              // fontSize:15,
                              padding:2,
                              marginRight:10
                              // // borderRadius: "50%",
                              // // width: 25,
                              // fontWeight: "bold",
                            }}
                            onClick={() =>{ deleteCartItem(carts.filter(ct=>ct.item_code===item.item_code)[0])}}
                        
                          >
                            <Minus/>
                          </Button>
                          <span style={{
                            fontSize:18,
                            fontWeight:600
                          }}>{selected.qty}</span>
                          <Button
                            className="plus"
                            style={{
                              // border: "none",
                              // borderRadius: "50%",
                              // width: 25,
                              // fontWeight: "bold",
                              padding:2,
                              marginLeft:10
                              // margin
                            }}
                            onClick={() =>{ addCartItem(carts.filter(ct=>ct.item_code===item.item_code)[0])}}
                          >
                            <Plus/>
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            )
          }) : <></>}
        </Col>
      </Row>
    </div>
  );
}