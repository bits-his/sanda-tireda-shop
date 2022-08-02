import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Button, Card } from "reactstrap";
import { _fetchApi } from "../../redux/action/api";
// import "react-tabs/style/react-tabs.css";
import PendingOrders from "./PendingOrders";
import RecievedOrders from "./RecievedOrders";
export default function Orders() {
  const [select, setSelect] = useState(2);
  const [orders, setOrders] = useState([]);
  const { customer } = useSelector((s) => s.auth)

  const listOrders = (id) => {
    if (id && orders.length<1) {
      _fetchApi(`/orders/get-order?request_by=${id}`, (resp) => {
        setOrders(resp.data)
      }, (error) => {
        console.error(error);
      })
    }
  };

  useEffect(() => {
    listOrders(customer?.accountNo)
  });

  return (
    <div className="">
      {/* {JSON.stringify({ orders })} */}
      <Card className="sidebar-card px-4 py-4 shadow-sm orders-div">
        <div>
          <Button
            onClick={() => setSelect(2)}
            className={select === 2 ? "selected" : "not-selected"}
          >
            Pending Order
          </Button>
          <Button
            onClick={() => setSelect(3)}
            className={select === 3 ? "selected" : "not-selected"}
          >
            Received Order
          </Button>
        </div>
        {select === 2 ? <PendingOrders orders={orders.filter(or=>or.req_status==='pending')} /> : <RecievedOrders  orders={orders.filter(or=>or.req_status==='approved')} />}
      </Card>
    </div>
  );
}
