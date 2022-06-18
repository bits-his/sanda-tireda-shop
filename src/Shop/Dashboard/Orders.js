import React from "react";
import { Edit, Mail, Phone, User, Trash } from "react-feather";
import { Card, Col, Row } from "reactstrap";
import profile from "../../Images/ysquareimperial.png";
import { items } from "../Items";

export default function Orders() {
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  return (
    <div>
      <Card className="sidebar-card px-4 py-4 shadow-sm">
        <Row style={{ overflowY: "scroll" }}>
          <Col md={12}>
            <Card className="shadow-sm profile-card">
              <Row className="p-2">
                <Col md={10}>
                  <h6>Pending</h6>
                </Col>
                <Col md={2}>
                  <Edit className="profile-icon" size="1.3em" title="edit" />
                </Col>
              </Row>
              <hr style={{ margin: 0, padding: 0 }}></hr>

              <Row>
                {items.map((item, index) => (
                  <Col md={6}>
                    <Card className="shadow-sm orders-card m-2 p-3">
                      <Row>
                        <Col md={4}>
                          <img
                            src={item.item_image}
                            alt=""
                            style={{ margin: "auto", width: 100, height: 100 }}
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
            </Card>
          </Col>
        </Row>
      </Card>

      <div className="tab">
        <button
          className="tablinks"
          onClick={() => {
            openCity("London");
          }}
        >
          London
        </button>
        <button
          className="tablinks"
          onClick={() => {
            openCity("Paris");
          }}
        >
          Paris
        </button>
        <button
          className="tablinks"
          onClick={() => {
            openCity("Tokyo");
          }}
        >
          Tokyo
        </button>
      </div>

      <div id="London" className="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" className="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </div>
  );
}
