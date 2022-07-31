import React from "react";
import { Edit } from "react-feather";
import { useSelector } from "react-redux";
import { Card, Col, Row } from "reactstrap";
import profile from "../../Images/ysquareimperial.png";
export default function AccountHome() {

  const { auth:{user}}  = useSelector((s)=>s)

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
                    <img className="profile-pic" src={profile} alt="" /> 
                    {user.firstname} {user.lastname}
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
                    {user.phone}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      marginLeft: 60,
                      padding: 0,
                      color: "grey",
                    }}
                  >
                    {user.email}
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
                    {user.username}<span>, {user.phone}</span>
                  </p>
                  <p style={{ margin: 0, padding: 0, fontSize: 13 }}>
                    {user.address}
                  </p>
                  <p style={{ margin: 0, padding: 0, fontSize: 13 }}>
                  {user.state}
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
