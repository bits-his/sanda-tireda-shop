import React from "react";
import { Outlet } from "react-router-dom";
import { Col, Row } from "reactstrap";
import ShopNavbar from "../Shop/ShopNavbar";

export default function AppIndex() {
  return (
    <div>
      <Row className="m-0 p-0">
        <Col md={12} className="m-0 p-0">
          <ShopNavbar />
          {/* <ShopItems /> */}
          {/* <AccountSidebar /> */}
        </Col>
      </Row>
      <Row className="m-0 p-0">
        <Col md={12}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}
