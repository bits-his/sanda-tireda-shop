import React from "react";
import { Outlet } from "react-router";
import { Col, Row } from "reactstrap";
import AccountHome from "./AccountHome";
import AccountSidebar from "./AccountSidebar";
import "./Dashboard.css";
export default function Account() {
  return (
    <div
      className="container"
      div
      style={{ marginTop: 80, paddingBottom: 20 }}
    >
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
