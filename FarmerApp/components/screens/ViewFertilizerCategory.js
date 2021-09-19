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

Feather.loadFont();

export default function ViewFertilizerCategory({ route, navigation }) {
  const { id, category } = route.params;

  const [categorylist, setcategorylist] = useState([]);
  const [productlist, setproductlist] = useState([]);

  useEffect(() => {
    Axios.get("http://192.168.8.222:4000/farmer/getcategories").then(
      (response) => {
        setcategorylist(response.data);
        console.log(response.data);
      }
    );

    Axios.get("http://192.168.8.222:4000/farmer/getproductsall").then(
      (response) => {
        setproductlist(response.data);
        console.log(response.data);
      }
    );
  }, []);

  const [catergoryIndex, setCategoryIndex] = React.useState(3);

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
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("ViewFertilizerDetails", val)}
      >
        <View style={styles.card}>
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
              {/* <Icon
                name="favorite"
                size={18}
                // color={val.like ? COLORS.red : COLORS.black}
                color={COLORS.red}
              /> */}
              <Text
                style={{
                  // color=colors.white,
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
              height: 100,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/consts/pictures/dummypic.png")}
              // source={{ uri: val.photo }}
              style={{
                flex: 1,
                resizeMode: "contain",
                width: 250,
                height: 150,
                alignSelf: "center",
              }}
            />
          </View>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            {val.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "normal", marginLeft: 10 }}
            >
              Rs. {val.unitPrice}
            </Text>
            <View
              style={{
                height: 25,
                width: 25,
                backgroundColor: COLORS.green,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
              >
                <Icon name="shopping-cart" size={15} />
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
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
          <Icon name="shopping-cart" size={28} />
          {/* <Image
            source={require("../../assets/images/profileimg_girl.jpg")}
            style={styles.profileImage}
          /> */}
        </View>
      </View>

      {/* <View>
        <Text>{JSON.stringify(categorylist[1].description)}</Text>
      </View> */}

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
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <View style={styles.searchContainer}>
            {/* <Icon name="search" size={25} style={{ marginLeft: 20 }} /> */}
            {/* <Icon name="search" size={25} style={{ marginLeft: 20 }} /> */}
            <TextInput placeholder="Search Here" style={styles.inputNew} />
          </View>
          <View style={styles.sortBtn}>
            <Icon name="search" size={30} color={COLORS.white} />
            {/* <Icon name="sort" size={30} color={COLORS.white} /> */}
          </View>
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
            (r) => r.fertilizerCategoryId == catergoryIndex+1
          )}
          keyExtractor={(item) => item.fertilizerId}
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
