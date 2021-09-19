import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  StatusBar,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../assets/consts/colors";
import Feather from "react-native-vector-icons/Feather";
import FontAwsome from "react-native-vector-icons/FontAwesome";
import colors from "../../assets/colors/colors";
import Axios from "axios";

// const width = Dimensions.get("window").width / 2 - 30;
const screenwidth = Dimensions.get("window").width / 3 - 30;

export default function ViewFertilizerDetails({ navigation, route }) {
  const plant = route.params;

  const [productlist, setproductlist] = useState([]);

  useEffect(() => {
    Axios.get("http://192.168.8.222:4000/farmer/getproducts").then(
      (response) => {
        setproductlist(response.data);
        console.log(response.data);
      }
    );
  }, []);

  const Card = ({ val }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("ViewFertilizerDetails", val)}
      >
        <View
          style={{
            height: 130,
            backgroundColor: colors.light,
            width: screenwidth,
            marginHorizontal: 10,
            borderRadius: 5,
            marginBottom: 20,
            paddingBottom: 10,
          }}
        >
          <View style={{ alignItems: "flex-start" }}>
            <View
              style={{
                width: 70,
                height: 15,
                borderColor: "red",
                borderBottomRightRadius: 20,

                // alignItems: "flex-start",
                // backgroundColor:"red",
                backgroundColor: val.offer ? "red" : colors.light,
              }}
            >
              <Text
                style={{
                  // color=colors.white,
                  fontSize: 11,
                  fontWeight: "bold",
                  marginLeft: 5,
                  color: colors.light,
                }}
              >
                {val.offer} % OFF
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 70,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/consts/pictures/dummypic.png")}
              // source={{ uri: val.photo }}
              style={{
                flex: 1,
                resizeMode: "contain",
                width: 150,
                height: 80,
                alignSelf: "center",
              }}
            />
          </View>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 12,
              marginTop: 1,
              marginLeft: 8,
            }}
          >
            {val.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // marginTop: 5,
            }}
          >
            <Text
              style={{ fontSize: 12, fontWeight: "normal", marginLeft: 10 }}
            >
              Rs. {val.unitPrice}
            </Text>
            <View
              style={{
                height: 15,
                width: 15,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
              >
                <Icon name="shopping-cart" size={10} />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
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

      <ScrollView
        vertical={true}
        style={{
          marginTop: 10,
          backgroundColor: "white",
          // alignItems:"center",
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            // source={{ uri: plant.photo }}
            source={require("../../assets/consts/pictures/dummypic2.png")}
            style={styles.imageNew}
            // style={{
            //   resizeMode: "contain",
            //   flex: 1,
            // }}
          />
        </View>

        <View style={styles.detailsContainer}>
          <View
            style={{
              marginLeft: 20,
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          ></View>
          <View style={{ alignItems: "flex-start" }}>
            <View
              style={{
                width: 150,
                height: 40,
                borderColor: "red",
                borderBottomRightRadius: 50,

                // alignItems: "flex-start",
                // backgroundColor:"red",
                backgroundColor: plant.offer ? "red" : colors.light,
              }}
            >
              <Text
                style={{
                  // color=colors.white,
                  fontSize: 26,
                  fontWeight: "bold",
                  marginLeft: 20,
                  color: colors.light,
                }}
              >
                {plant.offer} % OFF
              </Text>
            </View>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                color: colors.green,
              }}
            >
              {plant.name}
            </Text>
            <View style={styles.priceTag}>
              <Text
                style={{
                  marginLeft: 15,
                  color: COLORS.white,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Rs. {plant.unitPrice}
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Description
            </Text>
            <Text
              style={{
                color: "grey",
                fontSize: 16,
                lineHeight: 22,
                marginTop: 10,
              }}
            >
              {plant.description}
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={styles.borderBtn}>
                  <Text style={styles.borderBtnText}>-</Text>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 10,
                    fontWeight: "bold",
                    paddingHorizontal: 5,
                  }}
                >
                  1
                </Text>
                <View style={styles.borderBtn}>
                  <Text style={styles.borderBtnText}>+</Text>
                </View>
              </View>

              <View style={styles.buyBtn}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                >
                  Add To Cart
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* line breal */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            marginRight: 10,
            marginVertical: 20,
          }}
        >
          {/* <View
            style={{ flex: 1, height: 2, backgroundColor: colors.primary }}
          /> */}
          <View>
            <Text
              style={{
                width: 150,
                textAlign: "left",
                fontFamily: "sans-serif-medium",
                fontSize: 19,
                color: colors.titleHead,
              }}
            >
              Similar Products
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              height: 2,
              backgroundColor: colors.primary,
            }}
          />
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={{
          //   marginTop: 10,
          //   paddingBottom: 50,
          // }}
          // numRows={2}
          data={productlist.filter((r) => r.fertilizerId != plant.fertilizerId)}
          keyExtractor={(item) => item.fertilizerId}
          renderItem={({ item }) => {
            return <Card val={item} />;
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    alignSelf: "flex-end",
    // justifyContent: "space-between",
  },
  imageContainer: {
    // flex: 0.45,
    marginBottom: 10,
    // justifyContent: "center",
    alignSelf: "center",
    // width: screenwidth/2,
    // width: 100,
    // height: 100,
  },

  imageNew: {
    width: 250,
    height: 200,
  },

  detailsContainer: {
    // flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 10,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 5,
    // paddingVertical: 15,
    paddingBottom: 15,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
  },
  borderBtnText: { fontWeight: "bold", fontSize: 28 },
  buyBtn: {
    width: 150,
    // height: 50,
    paddingVertical: 10,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 100,
    height: 40,
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },

  otherProducts: {
    backgroundColor: "white",
    marginTop: 20,
    flex: 1,
  },
});
