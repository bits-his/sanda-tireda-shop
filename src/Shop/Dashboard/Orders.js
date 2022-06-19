import React, { useState } from "react";
import { Edit, Mail, Phone, User, Trash } from "react-feather";
import { Button, Card, Col, Row } from "reactstrap";
import profile from "../../Images/ysquareimperial.png";
import { items } from "../Items";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import PendingOrders from "./PendingOrders";
import RecievedOrders from "./RecievedOrders";
export default function Orders() {
  const [select, setSelect] = useState(2);
  return (
    <div className="">
      <Card className="sidebar-card px-4 py-4 shadow-sm orders-div">
        <div>
          <button
            onClick={() => setSelect(2)}
            className={select === 2 ? "selected" : "not-selected"}
          >
            Pending Order
          </button>
          <button
            onClick={() => setSelect(3)}
            className={select === 3 ? "selected" : "not-selected"}
          >
            Received Order
          </button>
        </div>
        {select === 2 ? <PendingOrders /> : <RecievedOrders />}
      </Card>
    </div>
  );
}
