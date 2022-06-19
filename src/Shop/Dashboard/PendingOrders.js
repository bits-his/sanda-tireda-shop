import React from "react";
import { Edit } from "react-feather";
import { Card, Col, Row } from "reactstrap";
import { items } from "../Items";

export default function PendingOrders() {
  return (
    <div className="">
      <Row>
        <Col md={12}>
          <Card className="shadow-sm profile-card">
            <Row className="p-2">
              <Col md={10}>
                <h6>Pending</h6>
              </Col>
              <Col md={2}>
                {/* <Edit className="profile-icon" size="1.3em" title="edit" /> */}
              </Col>
            </Row>
            <hr style={{ margin: 0, padding: 0 }}></hr>
            <div>
              <Row>
                {items.map((item, index) => (
                  <Col md={6}>
                    <Card className="shadow-sm orders-card m-2 p-3">
                      <Row>
                        <Col md={4}>
                          <img
                            src={item.item_image}
                            alt=""
                            style={{
                              margin: "auto",
                              width: 100,
                              height: 100,
                            }}
                          />
                        </Col>
                        <Col md={8}>
                          <p>
                            {item.item_name.length > 25
                              ? `${item.item_name.substring(0, 25)}...`
                              : item.item_name}{" "}
                          </p>
                          <p
                            style={{
                              display: "inline-block",
                              fontWeight: "bold",
                            }}
                          >
                            NGN ₦<span>{item.item_price}</span>
                          </p>
                          <button className="cancel-btn shadow-sm">
                            Cancel
                          </button>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
