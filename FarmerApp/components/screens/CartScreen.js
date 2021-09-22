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
  const { items, getItemsCount, getTotalPrice, removeItem } =
    useContext(CartContext);

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
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Total Price
            </Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginRight: 10 }}>
              Rs. {total}
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

  function renderItem({ item }) {
    return (
      <View style={{ margin: 10 }}>
        <Text>
          {item.product.name} x {item.qty}
        </Text>
        {/* <Icon
          name="remove"
          onPress={() => items.find((i) => i.id == id)}
        />
        <Text
          style={{ fontWeight: "bold", fontSize: 18, paddingHorizontal: 5 }}
        >
          {item.qty}
        </Text>
        <Icon
          name="add"
          onPress={() => setquantity(item.qty + 1)}
        /> */}
        <Text>$ {item.totalPrice}</Text>

        <Icon
          name="delete-outline"
          size={20}
          color={COLORS.white}
          onPress={() => removeItemFromCart(item.id)}
          // onPress={() => removeItem(item.id)}
        />
      </View>
    );
  }

  const CartCard = ({ item }) => {
    return (
      <View style={styles.cartCard}>
        <Image
          source={require("../../assets/consts/pictures/dummypic.png")}
          // source={{ uri: item.photo }}
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
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.name}</Text>
          <Text numberOfLines={2} style={{ fontSize: 13, color: COLORS.grey }}>
            {item.description}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Rs. {item.unitPrice} ({item.unitWeight} {item.measurementUnit})
          </Text>

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
              onPress={() => setquantity(quantity - 1)}
            />
            <Text
              style={{ fontWeight: "bold", fontSize: 18, paddingHorizontal: 5 }}
            >
              {quantity}
            </Text>
            <Icon
              name="add"
              size={25}
              color={COLORS.white}
              onPress={() => setquantity(quantity + 1)}
            />
          </View>
          <View style={styles.removeBtn}>
            <Icon
              name="delete-outline"
              size={20}
              color={COLORS.white}
              onPress={() => removeItem(item.fertilizerId)}
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
          <Icon
            name="shopping-cart"
            size={28}
            onPress={() => navigation.navigate("CartScreen")}
          />
        </View>
      </View>
      <View style={styles.header}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        // style={styles.itemsList}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
        ListHeaderComponent={Headerbar}
        ListFooterComponent={FooterBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 20,
    // flexDirection: "row",
    alignItems: "center",
    // marginHorizontal: 20,
  },
  cartCard: {
    height: 110,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
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
