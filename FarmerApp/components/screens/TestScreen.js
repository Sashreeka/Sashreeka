import React, { useState, useEffect } from "react";
import {
  FlatList,
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Button,
} from "react-native";
import Axios from "axios";

export default function TestScreen() {
  const [productlist, setproductlist] = useState([]);

  const [cartlist, setcartlist] = useState([]);

  const funcRemoveItem = (id) => {
    console.log(id);
  };

  useEffect(() => {
    Axios.get("http://192.168.8.222:4000/farmer/getproducts5").then(
      (response) => {
        setproductlist(response.data);
        // console.log(response.data);
      }
    );
  }, []);

  return (
    <View>
      <View>
        {productlist
          //   .filter((item) => item.fertilizerId == 1)
          .map((item) => (
            <View style={styles.card}>
              {/* <Text>{item.fertilizerId}</Text> */}
              <Text style={styles.cardText}>{item.name}</Text>
              {/* <Button></Button> */}
              <Text
                style={styles.cardBtn}
                onPress={() => {
                  setcartlist(item);
                  //   console.log(cartlist);
                }}
              >
                Add
              </Text>
            </View>
          ))}
      </View>

      <View style={styles.cart}>
        <Text>Online Cart</Text>

        {cartlist.map((x) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{x.name}</Text>
            {/* <Text style={styles.cardBtn} onPress={funcRemoveItem()}>
              Remove
            </Text> */}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // height: 50,
    backgroundColor: "blue",
    width: 200,
    marginHorizontal: 10,
    padding: 5,
    margin: 5,
  },
  cardText: {
    fontSize: 16,
    // margin: 5,
    // padding:5,
  },
  cardBtn: {
    // height: 50,
    backgroundColor: "green",
    width: 100,
    padding: 5,
    margin: 5,
  },

  cart: {
    // height: 50,
    backgroundColor: "red",
    width: 200,
    marginHorizontal: 2,
    padding: 20,
    margin: 10,
    alignItems: "center",
    alignSelf: "center",
  },
});
