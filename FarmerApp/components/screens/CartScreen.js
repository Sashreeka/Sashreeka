import React, { useState, useEffect } from "react";

import { Text } from "react-native-paper";

import colors from "../../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
// import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../assets/consts/colors";

import Axios from "axios";

// context file
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

Feather.loadFont();

export default function CartScreen({ navigation }) {
  const {
    items,
    getItemsCount,
    getTotalPrice,
    removeItem,
    incrementQty,
    decrementQty,
  } = useContext(CartContext);

  function FooterBar() {
    let [total, setTotal] = useState(0);

    useEffect(() => {
      setTotal(getTotalPrice());
    });

    return (
      <View>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 15,
              marginHorizontal: 50,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Total Price
            </Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginRight: 10 }}>
              Rs. {total}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 5,
              marginHorizontal: 50,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Delivery Charge (5%)
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "bold", marginRight: 10 }}>
              Rs. 310
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
              marginHorizontal: 50,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Total payment
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginRight: 10 }}>
              Rs. 6515
            </Text>
          </View>

          <View style={{ marginHorizontal: 30 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("CheckoutScreen")}
            >
              <View style={styles.btnContainer}>
                <Text style={styles.btntitle}>CHECKOUT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  function removeItemFromCart(num) {
    console.log("removeItemFromCart");
    console.log(num);
    removeItem(num);
  }
  function incrementQtyFromCart(num) {
    console.log("incrementQtyFromCart");
    console.log(num);
    incrementQty(num);
  }
  function decrementQtyFromCart(num) {
    console.log("decrementQtyFromCart");
    console.log(num);
    decrementQty(num);
  }

  const CartCardNew = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        <Image
          // source={require("../../assets/consts/pictures/dummypic.png")}
          source={{ uri: item.product.photo }}
          style={{ height: 80, width: 80 }}
          resizeMode="contain"
        />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 5,
            flex: 1,
          }}
        >
          {/* <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {item.product.photo}
          </Text> */}
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {item.product.name}
          </Text>
          <Text>
            ({item.product.unitWeight}
            {item.product.measurementUnit})
          </Text>
          <Text numberOfLines={2} style={{ fontSize: 13, color: COLORS.grey }}>
            {item.description}
          </Text>
          {item.product.offer ? (
            <Text>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                Rs. {item.product.price}
              </Text>
              <Text style={{ textDecorationLine: "line-through" }}>
                {"  "}Rs. {item.product.unitPrice}
              </Text>
            </Text>
          ) : (
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              Rs. {item.product.unitPrice}
            </Text>
          )}
          {/* <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Rs. {item.product.unitPrice}
          </Text> */}

          {/* <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            {item.unitWeight}
             {item.measurementUnit}
          </Text> */}
        </View>

        <View style={{ marginRight: 10, alignItems: "center" }}>
          <View style={styles.actionBtn}>
            <Icon
              name="remove"
              size={25}
              color={COLORS.white}
              onPress={() => decrementQtyFromCart(item.id)}
            />
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                paddingHorizontal: 5,
              }}
            >
              {item.qty}
            </Text>
            <Icon
              name="add"
              size={25}
              color={COLORS.white}
              onPress={() => incrementQtyFromCart(item.id)}
            />
          </View>
          <View style={styles.removeBtn}>
            <Icon
              name="delete-outline"
              size={20}
              color={COLORS.white}
              onPress={() => removeItemFromCart(item.id)}
            />
          </View>
        </View>
      </View>
    );
  };

  function Headerbar() {
    return (
      <View>
        <Text>Yop bar</Text>
      </View>
    );
  }

  return (
    <View>
      <StatusBar backgroundColor={colors.primary} />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 15,
            alignItems: "center",
            backgroundColor: colors.secondary,
            backgroundColor: colors.secondary,
            padding: 8,
          }}
        >
          <Icon
            name="arrow-back-ios"
            size={28}
            onPress={() => navigation.goBack()}
          />
          {/* <Icon
            name="shopping-cart"
            size={28}
            onPress={() => navigation.navigate("CartScreen")}
          /> */}
          <Text
            onPress={
              // () => navigation.navigate("CartScreen")
              () => navigation.navigate("CartScreen")
              // navigation.navigate("Cart")
            }
          >
            <Icon name="shopping-cart" size={28} />
            <View>
              <Text>
                {getItemsCount() == 0 ? (
                  ""
                ) : (
                  <Text
                    style={{
                      color: COLORS.white,
                      fontSize: 14,
                      fontWeight: "bold",
                      backgroundColor: COLORS.green,
                      borderRadius: 100,
                      padding: 20,
                    }}
                  >
                    {" "}
                    {getItemsCount()}{" "}
                  </Text>
                )}
              </Text>
            </View>
          </Text>
        </View>
      </View>
      <View style={styles.header}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Cart</Text>
      </View>

      {getItemsCount() == 0 ? (
        <View style={[styles.cartCard, { alignSelf: "center" }]}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              alignSelf: "center",
              paddingHorizontal: 20,
            }}
          >
            Your cart is empty !!!
          </Text>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          // style={styles.itemsList}
          data={items}
          // renderItem={renderItem}
          renderItem={CartCardNew}
          keyExtractor={(item) => item.product.id.toString()}
          // ListHeaderComponent={Headerbar}
          ListFooterComponent={FooterBar}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 10,
    // flexDirection: "row",
    alignItems: "center",
    // marginHorizontal: 20,
  },
  cartCard: {
    height: 110,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 8,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.green,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  btntitle: { color: COLORS.white, fontWeight: "bold", fontSize: 18 },
  btnContainer: {
    backgroundColor: COLORS.green,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  removeBtn: {
    width: 28,
    height: 28,
    backgroundColor: COLORS.red,
    // borderRadius: 30,
    // paddingHorizontal: 5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
