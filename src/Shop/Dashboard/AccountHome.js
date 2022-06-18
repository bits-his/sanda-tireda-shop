import React from "react";
import { Edit, Mail, Phone, User } from "react-feather";
import { Card, Col, Row } from "reactstrap";
import profile from "../../Images/ysquareimperial.png";
export default function AccountHome() {
  return (
    <div>
      <Card className="sidebar-card px-4 py-4 shadow-sm">
        <div className="profile">
          <Row>
            <Col md={6}>
              <Card className="shadow-sm profile-card">
                <Row className="p-2">
                  <Col md={10}>
                    <h6>User Information</h6>
                  </Col>
                  <Col md={2}>
                    <Edit className="profile-icon" size="1.3em" title="edit" />
                  </Col>
                </Row>
                <hr style={{ margin: 0, padding: 0 }}></hr>
                <div className="p-2">
                  <h4 style={{ fontWeight: "", margin: 0, padding: 0 }}>
                    <img className="profile-pic" src={profile} alt="" /> Yasir
                    Ado Hassan
                  </h4>
                  <p
                    className=""
                    style={{
                      fontWeight: "",
                      margin: 0,
                      marginLeft: 60,
                      padding: 0,
                    }}
                  >
                    +234 9018661696
                  </p>
                  <p
                    style={{
                      margin: 0,
                      marginLeft: 60,
                      padding: 0,
                      color: "grey",
                    }}
                  >
                    ysquare.theimperial@gmail.com
                  </p>
                </div>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="profile-card shadow-sm">
                <Row className="p-2">
                  <Col md={10}>
                    <h6>Shipping Information</h6>
                  </Col>
                  <Col md={2}>
                    <Edit className="profile-icon" size="1.3em" title="edit" />
                  </Col>
                </Row>
                <hr style={{ margin: 0, padding: 0 }}></hr>
                <div className="p-2">
                  <p style={{ fontWeight: "bold", margin: 0, padding: 0 }}>
                    Yasir Ado Hassan<span>, +234 9018661696</span>
                  </p>
                  <p style={{ margin: 0, padding: 0, fontSize: 13 }}>
                    Kano Post Office
                  </p>
                  <p style={{ margin: 0, padding: 0, fontSize: 13 }}>
                    Kano Nigeria
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}
