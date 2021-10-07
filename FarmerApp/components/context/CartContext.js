import React, { createContext, useState, useEffect } from "react";

import { View, StyleSheet, Button, Alert } from "react-native";

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

  function removeItem(id) {
    setItems((items) => {
      let newlist = items.filter((item) => item.id !== id);
      // console.log(newlist);
      return newlist;
    });
  }

  function incrementQty(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == id);

      return prevItems.map((item) => {
        if (item.id == id) {
          item.qty++;
          item.totalPrice += product.price;
        }
        return item;
      });
    });
  }
  function decrementQty(id) {
    const product = getProduct(id);

    setItems((prevItems) => {
      const item = prevItems.find((item) => item.id == id);

      return prevItems.map((item) => {
        if (item.id == id) {
          if (item.qty == 1) {
            createTwoButtonAlert(id);

            console.log(
              "Item count should be greater than 1. Please remove otherwise."
            );
          } else {
            item.qty--;
            item.totalPrice -= product.price;
          }
        }
        return item;
      });
    });
  }

  function getItemsCount() {
    return items.reduce((sum, item) => sum + item.qty, 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  function emptymyCart() {
    setItems([]);
  }

  const createTwoButtonAlert = (id) =>
    Alert.alert(
      "Alert",
      "Item count cannot be 0. You can either keep it or delete.",
      [
        {
          text: "Keep",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Delete", onPress: () => removeItem(id) },
      ]
    );

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        getItemsCount,
        addItemToCart,
        getTotalPrice,
        removeItem,
        decrementQty,
        incrementQty,
        emptymyCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
