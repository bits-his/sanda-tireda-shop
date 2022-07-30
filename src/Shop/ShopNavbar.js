import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Search,
  ShoppingCart,
  User,
} from "react-feather";
import {
  CardText,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import logo from "../Images/logo.png";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
export default function ShopNavbar() {

  const {carts}  = useSelector((s)=>s.shop)

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => {
    setOpen1(!open1);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Row className="nav-row">
        <Col md={2} className="col1">
          <img
            src={logo}
            style={{ width: 50, marginTop: 12, cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </Col>
        <Col md={6} className="col2 text-center">
          <div className="search">
            <input placeholder="Search item here" />
            <span>
              <Search className="icon" />
            </span>
            <button>Search</button>
          </div>
        </Col>
        <Col md={4} className="col3">
          <nav>
            <ul>
              <li>
                <Dropdown className="d" isOpen={open} toggle={toggle}>
                  <DropdownToggle
                    className="btn"
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      color: "rgb(99, 99, 99)",
                    }}
                  >
                    <User size="1.5em" /> Account <ChevronDown />
                  </DropdownToggle>
                  <DropdownMenu className="drop-down-menu">
                    {/* <DropdownItem header>Settings & Privacy</DropdownItem> */}
                    {/* <DropdownItem disabled>Action</DropdownItem> */}
                    <DropdownItem
                      className="drop-down-item"
                      onClick={() => navigate("/account")}
                    >
                      Account
                    </DropdownItem>
                    <DropdownItem className="drop-down-item">
                      Orders
                    </DropdownItem>
                    <DropdownItem className="drop-down-item" divider />
                    <DropdownItem className="drop-down-item">
                      Sign Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
              <li>
                <Dropdown className="d" isOpen={open1} toggle={toggle1}>
                  <DropdownToggle
                    className="btn"
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      color: "rgb(99, 99, 99)",
                    }}
                  >
                    <HelpCircle size="1.5em" /> Help <ChevronDown />
                  </DropdownToggle>
                  <DropdownMenu className="drop-down-menu">
                    {/* <DropdownItem header>Settings & Privacy</DropdownItem> */}
                    {/* <DropdownItem disabled>Action</DropdownItem> */}
                    <DropdownItem className="drop-down-item">
                      Settings
                    </DropdownItem>
                    <DropdownItem className="drop-down-item">
                      Help & Support
                    </DropdownItem>
                    <DropdownItem className="drop-down-item" divider />
                    <DropdownItem className="drop-down-item">
                      Sign Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
              <li className="btn" onClick={() => navigate("/cart")}>
                {/* <div className="cart-div"> */}
                <ShoppingCart size="1.5em" /> Cart
                <span className="cart-count">{carts.length && carts.reduce((p, c) => p + c.qty,0)}</span>
                {/* </div> */}
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </div>
  );
}
