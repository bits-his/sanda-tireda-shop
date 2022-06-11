import React, { useEffect, useState } from "react";
import { Rewind } from "react-feather";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import bag from "../Images/bag.png";
import shoebag from "../Images/shoebag.png";
import shoe from "../Images/shoe.png";
export default function ShopItems({
  cart = [],
  addToCart = (f) => f,
  onMinusClick = (f) => f,
  onPlusClick = (f) => f,
}) {
  const [itemList, setItemList] = useState([]);

  const getItemList = () => {
    fetch(
      "https://yge.wvi.mybluehost.me/test/sanda-server/account/get/inventory2/d8d7a732-1832-4e25-9a98-e68ddc3f0b26?query_type=web"
    )
      .then((raw) => raw.json())
      .then((data) => {
        if (data.results && data.results.length) {
          setItemList(data.results);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getItemList();
  }, []);

  return (
    <div style={{ paddingTop: 70, paddingBottom: 20 }}>
      <Container>
        <Card className="mt-3 shop-main-card">
          <p className="shop-card-title text-center">Select item to buy</p>
          <Row>
            {/* {JSON.stringify(itemList)} */}
            {itemList.map((item, index) => {
              let selected = cart.find((a) => a.item_code === item.item_code);
              return (
                <Col md={2} classNae="mt-3">
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
                          <button
                            className="plus"
                            onClick={() => onPlusClick(item)}
                          >
                            +
                          </button>
                          <p className="item-quantity">
                            {selected.selected_quantity}
                          </p>
                          <button
                            className="minus"
                            onClick={() => onMinusClick(item)}
                          >
                            -
                          </button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <button
                            className="add"
                            onClick={() => addToCart(item)}
                          >
                            Add to cart
                          </button>
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
