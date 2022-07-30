import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Row,
  Spinner,
} from "reactstrap";
import { _fetchApi } from "../redux/action/api";
import { addCart,updateCart } from "../redux/action/shop";

export default function ShopItems() {

  const {carts, cart}  = useSelector((s)=>s.shop)
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  const addToCart = useCallback((it) => {
    console.log(it);
    dispatch(addCart({...it, qty:1}));
  });

  const deleteCart = useCallback((it) => {
    console.log(it);
    dispatch(updateCart({...it, qty: cart.qty-1}));
  });

  const addOneItem = useCallback((it) => {
    console.log(it);
    dispatch(updateCart({...it, qty: cart.qty+1}));
  });

  const [itemList, setItemList] = useState([]);

  const getItemList = () => {
    _fetchApi(
      "/account/get/inventory2/d8d7a732-1832-4e25-9a98-e68ddc3f0b26?query_type=web",
      (data) => {
        if (data.results && data.results.length) {
          setItemList(data.results);
        }
      },
    (e) => {
      console.log(e);
    })
  };

  useEffect(() => {
    getItemList();
  }, []);

  return (
    <div style={{ paddingTop: 70, paddingBottom: 20 }}>

    {/* {JSON.stringify({cart})} */}
      <Container>
        <Card className="mt-3 shop-main-card shadow">
          <p className="shop-card-title text-center">Select item to buy</p>
         {loading && <center ><Spinner /> Loading, Please wait...</center >}
          <Row>
            {/* {JSON.stringify(itemList)} */}
            {itemList.map((item, index) => {
              let selected = carts.find((a) => a.item_code === item.item_code);
              return (
                <Col key={index} md={2} className="mt-3">
                  <Card className="item-card mb-3">
                    <CardBody className="item-card-body">
                      <div className="text-center">
                        <img
                          src={
                            "https://yge.wvi.mybluehost.me/test/sanda-server/" +
                            item.item_image
                          }
                          alt=""
                          style={{ height: 150, width: 120 }}
                        />
                      </div>
                      {/* {item.body.length > 250
                        ? `${item.body.substring(0, 250)}...`
                        : item.body} */}
                      <p className="item-name">
                        {item.item_name.length > 16
                          ? `${item.item_name.substring(0, 16)}...`
                          : item.item_name}
                      </p>
                      <p className="item-price">₦{item.unit_price}</p>
                      
                    </CardBody>
                    <CardFooter className="item-card-footer">
                      {selected ? (
                        <div className="q-div text-center">
                          <Button
                            className="plus"
                            onClick={() => addOneItem(item)}
                          >
                            +
                          </Button>
                          <p className="item-quantity">
                            {selected.selected_quantity}
                          </p>
                          <Badge>{carts.filter(ct=>ct.item_code===item.item_code)[0].qty}</Badge>
                          <Button
                            className="minus"
                            onClick={() => deleteCart(item)}
                          >
                            -
                          </Button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Button
                            className="add"
                            onClick={() =>{ addToCart(item)}}
                          >
                            Add to cart
                          </Button>
                        </div>
                      )}
                    </CardFooter>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Card>
      </Container>
    </div>
  );
}

// let v = {
//   item_name: "BUA SUGAR",
//   unit_price: "24000",
//   item_code: "/BUA/",
//   item_image: "images (25).jpeg",
//   balance: 0,
//   group_code: "FOO",
//   item_category: "FOO",
// };
