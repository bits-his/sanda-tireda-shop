import React, { useCallback, useState } from "react";
import { Badge, Button, Card, Col, Row } from "reactstrap";
import { Trash } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../redux/action/shop";

export default function CartCard() {
  const {carts}  = useSelector((s)=>s.shop)
  const dispatch = useDispatch()
  const [cart,setCart] = useState({})

  const deleteCartItem = useCallback((it) => {
    setCart({...it,  qty: cart.qty-1})
    dispatch(updateCart({...it, qty: cart.qty-1}));
  });

  const addCartItem = useCallback((it) => {
    setCart({...it,  qty: cart.qty+1})
    dispatch(updateCart({...it, qty: cart.qty+1}));
  });

  return (
    <div>
      <Row>
        <Col md={12}>
          {carts.length ? carts.map((item, index) => (
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
                    src={item.item_image}
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
                          <Badge>{item.qty}</Badge>
                      </p>
                    </Col>

                    <Col md={4}>
                      
                  <Trash className="trash" size="2.5em" /> 
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={9}>
                      <p>
                      Avaibale at store: <Badge>{item.balance}</Badge>
                      </p>
                      <p
                        style={{
                          display: "inline-block",
                          fontWeight: "bold",
                        }}
                      >
                        
                        Unit price NGN ₦<span>{item.unit_price}</span>
                      </p>
                      <p>Cost price: NGN {parseFloat(item.unit_price)*parseInt(item.balance)} </p> 
                    </Col>

                    <Col md={3}>
                      <div className="" style={{ float: "right" }}>
                       
                        <Button
                          className=""
                          style={{
                            border: "none",
                            borderRadius: "50%",
                            width: 25,
                            fontWeight: "bold",
                          }}
                          onClick={()=>deleteCartItem(item)}
                        >
                          -
                        </Button>
                        <p className="item-quantity">{item.item_quantity}</p>
                        <Button
                          className=""
                          style={{
                            border: "none",
                            borderRadius: "50%",
                            width: 25,
                            fontWeight: "bold",
                          }}
                          onClick={()=>addCartItem(item)}
                        >
                          +
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          )):<></>}
        </Col>
      </Row>
    </div>
  );
}