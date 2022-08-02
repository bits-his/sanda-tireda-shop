import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  Search,
  ShoppingCart,
  User,
} from "react-feather";
import {
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalBody,
  NavItem,
  Row,
} from "reactstrap";
import logo from "../Images/logo.png";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/action/auth";
import AuthModal from "../Auths/AuthModal";
export default function ShopNavbar() {

  const {shop:{carts}, auth:{user, authenticated}}  = useSelector((s)=>s)
  const [auth_type, setAuthType] = useState('Login');
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(false);
  const toggle1 = () => {
    setOpen1(!open1);
  };


  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);


  const navigate = useNavigate();
  return (
    <div>
      <Row className="nav-row">
        <Col md={2} className="col1">
          <img
            alt="logo"
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
              <li>{authenticated?
                (<Dropdown className="d" isOpen={open} toggle={toggle}>
                  <DropdownToggle
                    className="btn"
                    style={{
                      backgroundColor: "white",
                      border: "none",
                      color: "rgb(99, 99, 99)",
                    }}
                  >
                    <User size="1.5em" />{user.username||user.email}<ChevronDown />
                  </DropdownToggle>
                  <DropdownMenu className="drop-down-menu">
                    {/* <DropdownItem header>Settings & Privacy</DropdownItem> */}
                    {/* <DropdownItem disabled>Action</DropdownItem> */}
                    <DropdownItem className="drop-down-item" onClick={()=>navigate('/account')} >
                      Account
                    </DropdownItem>
                    <DropdownItem onClick={()=>navigate('/account/orders')}  className="drop-down-item">
                      Orders
                    </DropdownItem>
                    <DropdownItem className="drop-down-item" divider />
                    <DropdownItem onClick={()=>{ dispatch(logout())}} className="drop-down-item">
                      Sign Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>):(<NavItem>
                  <Button onClick={()=>toggleModal()} className="btn-default">Login</Button>
              </NavItem>)}
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
                      About us
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>
              <li className="btn" onClick={() => navigate("/cart")}>
                {/* <div className="cart-div"> */}
                <ShoppingCart size="1.5em" /> Cart
                <span className="cart-count">{carts.length && carts.reduce((p, c) => p + parseInt(c.qty),0)}</span>
                {/* </div> */}
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggleModal}>
                <ModalBody>
                  <AuthModal type={auth_type} toggle={toggleModal} setType={setAuthType} />
                </ModalBody>
            </Modal>
    </div>
  );
}
