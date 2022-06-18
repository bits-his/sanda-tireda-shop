import React, { useState } from "react";
import "./ShopIndex.css";
import ShopItems from "./ShopItems";
import ShopNavbar from "./ShopNavbar";

export default function ShopIndex() {
  const [cart, setCart] = useState([]);

  const addToCart = (it) => {
    setCart((prev) => [...prev, { ...it, selected_quantity: 1 }]);
  };

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

  return (
    <div className="">
      <ShopNavbar cart={cart} />
      <ShopItems
        cart={cart}
        addToCart={addToCart}
        onMinusClick={onMinusClick}
        onPlusClick={onPlusClick}
      />
    </div>
  );
}
