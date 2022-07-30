import React from "react";
import { Outlet } from "react-router";
import { Col, Row } from "reactstrap";
import ShopNavbar from "../ShopNavbar";
import AccountSidebar from "./AccountSidebar";
import "./Dashboard.css";
export default function Account() {
  return (
    <div
      className="container"
      style={{ marginTop: 80, paddingBottom: 20 }}
    >
      <Row className="m-0 p-0">
        <Col md={12} className="m-0 p-0">
          <ShopNavbar />
          {/* <ShopItems /> */}
          {/* <AccountSidebar /> */}
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <AccountSidebar />
        </Col>
        <Col md={9}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}
