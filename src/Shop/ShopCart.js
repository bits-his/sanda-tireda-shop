import React from "react";
import { Trash, CheckCircle } from "react-feather";
import { Badge, Button, Card, Col, Modal, ModalBody, Row } from "reactstrap";

import visa from "../Images/visa.png";
import master from "../Images/master.png";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import AuthModal from "../Auths/AuthModal";
import { useState } from "react";
import { _postApi } from "../redux/action/api";
import { deleteCarts } from "../redux/action/shop";
export default function ShopCart() {
  const {shop:{carts}, auth:{authenticated,customer} } = useSelector((s)=>s)
  const dispatch = useDispatch()
  const [auth_type, setAuthType] = useState('Login');
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const checkout = () =>{
    const data = carts.map((dt)=>({...dt,requisition_type:'Walk-in',item_id:parseInt(dt.id),request_by:customer.accountNo}))
    _postApi('/orders/new-order', data,
    (res)=>{
      console.log(data)
      dispatch(deleteCarts())
    },
    (err)=>console.error(err))
  }

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
                       Order checkout
                      </h4>
                    </Col>
                    <Col md={6}>
                      <h4 className="text-right">
                       Items in cart <Badge>{carts.length && carts.reduce((p, c) => p + c.qty,0)}</Badge>
                      </h4>
                    </Col>
                  </Row>
                  <hr></hr>
                  <Row className="">
                    <Col md={6}>
                      <label className="container1" style={{}}>
                        Select all items
                        <input type="radio" name="radio" />
                        <span className="checkmark"></span>
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
              <h4>Summary</h4>
              <Row className="mt-4">
                <Col md={4}>
                  <h6>Total</h6>
                </Col>
                <Col md={8}>
                  <h4>NGN ₦ {carts.length && carts.reduce((p, c) => p + (c.qty*c.unit_price),0)}</h4>
                </Col>
              </Row>
              <Button onClick={()=>{authenticated?checkout(): toggle()}} className="check">Checkout ({carts.length && carts.reduce((p, c) => p + c.qty,0)})</Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>
                  <AuthModal type={auth_type} toggle={toggle} setType={setAuthType} />
                </ModalBody>
            </Modal>
            </Card>
            <Card className="shadow p-3 mt-3 cart-right-card">
              <h5>Payments Methods</h5>
              <Row className="">
                <Col md={2}>
                  <img alt='Master' src={master} />
                </Col>
                <Col md={2}>
                  <img alt='Visa' src={visa} mar />
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
