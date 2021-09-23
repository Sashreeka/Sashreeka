import React, { useState, useEffect } from "react";
import { ImageBackground, StatusBar } from "react-native";

import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../assets/consts/colors";
import plants from "../../assets/consts/plants";

const width = Dimensions.get("window").width / 2 - 30;

import Feather from "react-native-vector-icons/Feather";

import categoriesData from "../../assets/data/categoriesData";
import colors from "../../assets/colors/colors";
import Axios from "axios";

// context file
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

Feather.loadFont();

export default function ViewFertilizerCategory({ route, navigation }) {
  const { id, category } = route.params;

  const { getItemsCount } = useContext(CartContext);
  const { addItemToCart } = useContext(CartContext);

  const screenwidth = Dimensions.get("window").width / 2 - 20;

  const width = Dimensions.get("window").width / 2 - 30;

  const [categorylist, setcategorylist] = useState([]);
  const [productlist, setproductlist] = useState([]);

  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setSearchData(productlist);
    } else {
      const filterData = productlist.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(lowerCaseValue);
        });
      });
      setSearchData(filterData);
    }
  };

  const handleChange = (text) => {
    setSearchText(text);
    filterData(text);
  };

  function onAddToCart(num) {
    console.log("addItemToCart");
    console.log(num);
    addItemToCart(num);
  }

  useEffect(() => {
    // console.log(id);
    // console.log(category);
    Axios.get("http://192.168.8.222:4000/farmer/getcategories").then(
      (response) => {
        setcategorylist(response.data);
        // console.log(response.data[0]);
      }
    );

    Axios.get("http://192.168.8.222:4000/farmer/getproductsall").then(
      (response) => {
        setproductlist(response.data);
        setSearchData(response.data);
        console.log(response.data[0]);
      }
    );
  }, []);

  const [catergoryIndex, setCategoryIndex] = React.useState(1);

  const categories = [
    // "All",
    "Paddy",
    "Flowers",
    "Tea",
    "Fruits",
    "Pesticides",
    "Coconut",
    "Rubber",
    "Vegetables",
  ];

  const CategoryList = () => {
    return (
      <ScrollView
        horizontal={true}
        style={{
          marginTop: 12,
          height: 60,
          backgroundColor: colors.white,
        }}
      >
        {/* <View> */}
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}
          >
            <Text
              style={[
                styles.categoryText,
                catergoryIndex === index && styles.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
        {/* </View> */}
      </ScrollView>
    );
  };

  const Card = ({ val }) => {
    return (
      <View
        style={{
          height: 200,
          backgroundColor: COLORS.light,
          width,
          marginHorizontal: 2,
          borderRadius: 25,
          marginBottom: 20,
          paddingBottom: 15,
          // paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <View style={{ alignItems: "flex-start" }}>
          <View
            style={{
              width: 80,
              height: 20,
              borderColor: "red",
              borderBottomRightRadius: 20,

              // alignItems: "flex-start",
              // backgroundColor:"red",
              backgroundColor: val.offer ? "red" : colors.light,
            }}
          >
            <Text
              style={{
                fontSize: 14,
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
            height: 90,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("ViewFertilizerDetails", val)}
          >
            <Image
              // source={require("../../assets/consts/pictures/dummypic.png")}
              source={{ uri: val.photo }}
              style={{
                flex: 1,
                resizeMode: "contain",
                width: 90,
                height: 90,
                alignSelf: "center",
              }}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginTop: 10,
            marginLeft: 10,
            marginLeft: 8,
          }}
        >
          {val.name}
        </Text>

        {/* <Text
            style={{
              fontSize: 16,
              color: COLORS.red,
              fontWeight: "bold",

              marginLeft: 8,
            }}
          >
            <Icon name="star" size={8} />
            <Icon name="star" size={8} />
            <Icon name="star" size={8} />
            <Icon name="star-half" size={8} />
            <Icon name="star-half" size={8} />
          </Text> */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            // marginTop: 5,
          }}
        >
          {val.offer ? (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "normal",
                  marginLeft: 10,
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                  // lineHeight:10,
                }}
              >
                Rs. {val.unitPrice}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  marginLeft: 10,
                  color: "#e23a3a",
                }}
              >
                Rs. {val.price}
              </Text>
            </View>
          ) : (
            <Text
              style={{
                fontSize: 16,
                fontWeight: "normal",
                marginLeft: 10,
              }}
            >
              Rs. {val.unitPrice}
            </Text>
          )}
          <View
            style={{
              height: 30,
              width: 30,
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
              onPress={() => onAddToCart(val.fertilizerId)}
            >
              <Icon name="shopping-cart" size={25} />
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <View>
        <View
          style={[
            styles.headerWrapper,
            {
              backgroundColor: colors.secondary,
              padding: 8,
            },
          ]}
        >
          <Feather
            name="menu"
            size={24}
            color={colors.textDark}
            onPress={() => navigation.openDrawer()}
          ></Feather>
          <Text onPress={() => navigation.navigate("CartScreen")}>
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

      {/* newly added ones */}

      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: COLORS.white,
          marginTop: 1,
        }}
      >
        <View style={styles.headerNew}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hi</Text>
            <Text
              style={{ fontSize: 24, color: COLORS.green, fontWeight: "bold" }}
            >
              Sanduni,
            </Text>
          </View>
          {/* <Icon name="shopping-cart" size={28} /> */}
        </View>

        <CategoryList />
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
          }}
          numColumns={2}
          data={productlist.filter(
            (r) => r.fertilizerCategoryId == catergoryIndex + 1
          )}
          keyExtractor={(item) => item.fertilizerId.toString()}
          renderItem={({ item }) => {
            return <Card val={item} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 15,
    alignItems: "center",
    backgroundColor: colors.secondary,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginLeft: 10,
  },
  imageNew: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },

  titlesTitle: {
    // fontFamily:"Roboto-bold",
    fontSize: 32,
    color: colors.textDark,
    paddingLeft: 20,
    marginLeft: 10,
  },

  titleView: {
    backgroundColor: colors.secondary,
    padding: 5,
    paddingBottom: 10,
    borderBottomLeftRadius: 75,
  },

  //Newly added styles

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  btnView: {
    padding: 5,
    marginRight: 30,
    alignItems: "flex-end",
  },
  btnIcon: {
    backgroundColor: "yellow",
    padding: 10,
  },

  // new styles

  categoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 30,
    justifyContent: "space-between",
  },
  categoryText: {
    fontSize: 16,
    color: "grey",
    fontWeight: "bold",
    width: 92,
    textAlign: "center",
  },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
    width: 92,
    textAlign: "center",
  },
  card: {
    height: 200,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 25,
    marginBottom: 20,
    paddingBottom: 15,
    // paddingLeft: 15,
    paddingRight: 15,
  },
  headerNew: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchContainer: {
    height: 45,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  inputNew: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    color: COLORS.dark,
    // marginLeft: 15,
    height: 40,
    margin: 12,
    // borderWidth: 1,
    // padding: 10,
  },
  sortBtn: {
    marginLeft: 10,
    height: 45,
    width: 45,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
  },
});
