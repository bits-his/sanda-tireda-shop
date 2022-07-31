import React from "react";
import { Card, NavItem } from "reactstrap";
import { useLocation, useNavigate } from "react-router";
import { Grid, Settings, ShoppingBag, User } from "react-feather";
import { Link } from "react-router-dom";
export default function AccountSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <Card className="sidebar-card shadow-sm">
        <div>
          <h5 className="p-3 pb-0">Account</h5>
          <hr></hr>
        </div>
        <div className="active-links">
          <ul>
            <li
              className={`active1 ${
                location.pathname === "/account" && "active_sidebar"
              }`}
              onClick={() => navigate("/account")}
            >
              <User size="1.3em" className="sidebar-icon" /> Profile
            </li>
            <li  className={`active1 ${
                location.pathname === "/account/orders" && "active_sidebar"
              }`}>
              <ShoppingBag size="1.3em" className="sidebar-icon" /> Orders
            </li>
            <li
              className={`active1 ${
                location.pathname === "/account/overview" && "active_sidebar"
              }`}
              onClick={() => navigate("overview")}
            >
              <Grid size="1.3em" className="sidebar-icon" /> Overview
            </li>
            <li className={`active1 ${
                location.pathname === "/account/settings" && "active_sidebar"
              }`}
              onClick={() => navigate("settings")}>
              <Settings size="1.3em" className="sidebar-icon"
               /> Settings
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
