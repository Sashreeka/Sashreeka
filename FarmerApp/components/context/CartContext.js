import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

import { getProduct } from "../screens/services/ProductsService";

export function CartProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToCart(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == id);
      if (!item) {
        return [
          ...prevItems,
          {
            id,
            qty: 1,
            product,
            totalPrice: product.price,
          },
        ];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            item.qty++;
            item.totalPrice += product.price;
          }
          return item;
        });
      }
    });
  }

  function removeItem(id){

    setItems((items) => {
      let newlist = items.filter(
        (item) => item.id !== id
      );
      // console.log(newlist);
      return newlist;
    });
  };

  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        getItemsCount,
        addItemToCart,
        getTotalPrice,
        removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
