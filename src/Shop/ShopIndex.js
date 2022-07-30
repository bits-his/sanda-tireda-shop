import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action/shop";
import "./ShopIndex.css";
import ShopItems from "./ShopItems";
import ShopNavbar from "./ShopNavbar";

export default function ShopIndex() {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

 
  const dispatch = useDispatch()

  const addToCart = useCallback((it) => {
    console.log(it);
    dispatch(addCart(it));
  });

  const onPlusClick = (it) => {
    let newCart = [];
    cart.forEach((i) => {
      if (i.item_code === it.item_code) {
        newCart.push({ ...i, selected_quantity: i.selected_quantity + 1 });
      } else {
        newCart.push(i);
      }
    });

    setCart(newCart);
  };

  const onMinusClick = (it) => {
    let newCart = [];
    cart.forEach((i) => {
      if (i.item_code === it.item_code) {
        if (i.selected_quantity - 1 === 0) {
          console.log("remove");
        } else {
          newCart.push({ ...i, selected_quantity: i.selected_quantity - 1 });
        }
      } else {
        newCart.push(i);
      }
    });

    setCart(newCart);
  };

  useEffect(()=>{
    if(cart.item_code){
      setItems((p)=>([...p,{cart}]))
    }
  },[cart])
  return (
    <div className="">
      <ShopNavbar cart={cart.length} />
      <ShopItems
        cart={items}
        addToCart={addToCart}
        onMinusClick={onMinusClick}
        onPlusClick={onPlusClick}
      />
    </div>
  );
}
