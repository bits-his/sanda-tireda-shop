import React, { memo, useCallback, useEffect, useState } from "react";
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
import { addCart,getStockList,updateCart } from "../redux/action/shop";

const ShopItems = () =>{

  const {carts, stocks}  = useSelector((s)=>s.shop)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  const addToCart = (it) => {
    dispatch(addCart({...it, qty:1}));
  }

  const deleteCart = (it) => {
    dispatch(updateCart({item_code:it.item_code, qty: it.qty-1}));
  }

  const addCartItem = (it) => {
    dispatch(updateCart({item_code:it.item_code, qty: it.qty+1}));
  }

  const getList = useCallback(() => {
    if(stocks.length<1){
      dispatch(getStockList((setLoading)));
    }
  }, [stocks.length,dispatch]);

  useEffect(()=>{
    getList()
  })

  return (
    <div style={{ paddingTop: 70, paddingBottom: 20 }}>
      <Container>
        <Card className="mt-3 shop-main-card shadow">
          <p className="shop-card-title text-center">Select item to buy</p>
         {loading && <center ><Spinner /> Loading, Please wait...</center >}
          <Row>
            {/* {JSON.stringify(carts)} */}
            {stocks&&stocks.filter(itm=>itm.balance>0).map((item, index) => {
              let selected = carts.find((a) => a.item_code === item.item_code);
              return (
                <Col key={index} itmmd={2} className="mt-3">
                  <Card className="item-card mb-3">
                    <CardBody className="item-card-body">
                      <div className="text-center">
                        <img
                          src={
                            "https://yge.wvi.mybluehost.me/test/sanda-server/uploads/" +
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
                            onClick={() =>{ addCartItem(carts.filter(ct=>ct.item_code===item.item_code)[0])}}
                          >
                            +
                          </Button>
                          <Badge>{selected.qty}</Badge>
                          <Button
                            className="minus"
                            onClick={() =>{ deleteCart(carts.filter(ct=>ct.item_code===item.item_code)[0])}}
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
export default memo(ShopItems)