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
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwsome from "react-native-vector-icons/FontAwesome";
import categoriesData from "../assets/data/categoriesData";
import itemsData from "../assets/data/itemsData";
import colors from "../assets/colors/colors";
import Axios from "axios";
import { Directions } from "react-native-gesture-handler";
import photo from "../assets/images/bio3.png";

import RemoveButton from "./buttons";

Feather.loadFont();

export default function ShoppingCart({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require("../assets/images/profileimg_girl.jpg")}
            style={styles.profileImage}
          />
          {/* style={styles.profileImage} */}
          <Feather name="menu" size={24} color={colors.textDark}></Feather>
        </View>
      </SafeAreaView>

      {/* titles */}
      <View style={styles.titleView}>
        <Text style={styles.titlesTitle}>Shopping cart</Text>
      </View>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        key={Math.random}
      >
        <View style={styles.btnView}>
          <TouchableOpacity onPress={() => navigation.navigate("CheckoutPage")}>
            <Text style={styles.btnIcon}>CHECKOUT</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemDetailcardWrapper}>
          <View style={styles.itemImg}>
            <Image source={photo} style={styles.itemCardImage} />
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.itemHeader}>Bio Phos</Text>
            <Text style={styles.itemDetails}>RS.389.00</Text>
            <Text style={styles.itemPrice}>Qty :</Text>
          </View>
        </View>

        <View style={styles.itemDetailcardWrapper2}>
          <View style={styles.itemratingcardcontainer}>
            <Text style={styles.topicBold}>Rating</Text>
            <View style={styles.ratingrow}>
              <View style={styles.ratingStarTopBarVal}>
                <Text style={styles.textRegular}>4.5/5</Text>
              </View>
              <View style={styles.ratingStarTopBar}>
                <FontAwsome
                  name="star"
                  size={22}
                  color={colors.ratingStarColor}
                ></FontAwsome>
                <FontAwsome
                  name="star"
                  size={22}
                  color={colors.ratingStarColor}
                ></FontAwsome>
                <FontAwsome
                  name="star"
                  size={22}
                  color={colors.ratingStarColor}
                ></FontAwsome>
                <FontAwsome
                  name="star-half"
                  size={22}
                  color={colors.ratingStarColor}
                ></FontAwsome>
              </View>
            </View>
          </View>

          {/* comments */}
          <View style={styles.hr} />
          <View style={styles.itemratingcardcontainer}>
            <Text style={styles.topicBold}>Comments</Text>
            <View style={styles.commentContainer}>
              {/* one comments */}
              <View style={styles.oneCommentContainer}>
                <View style={styles.commenterImage}>
                  <Image
                    source={require("../assets/images/profileimg_girl.jpg")}
                    style={styles.profileImage}
                  />
                </View>
                <View style={styles.commentfull}>
                  <Text style={styles.commentline}>This Product is good.</Text>
                  <Text style={styles.commenter}>A A Fernando</Text>
                </View>
              </View>

              {/* one comments */}
              <View style={styles.oneCommentContainer}>
                <View style={styles.commenterImage}>
                  <Image
                    source={require("../assets/images/profileimg_girl.jpg")}
                    style={styles.profileImage}
                  />
                </View>
                <View style={styles.commentfull}>
                  <Text style={styles.commentline}>
                    Great! I highly recommend this product.
                  </Text>
                  <Text style={styles.commenter}>Madiri Manoharan</Text>
                </View>
              </View>

              {/* one comments */}
              <View style={styles.oneCommentContainer}>
                <View style={styles.commenterImage}>
                  <Image
                    source={require("../assets/images/profileimg_girl.jpg")}
                    style={styles.profileImage}
                  />
                </View>
                <View style={styles.commentfull}>
                  <Text style={styles.commentline}>good :)</Text>
                  <Text style={styles.commenter}>W W Sangakkara</Text>
                </View>
              </View>
            </View>
          </View>

          {/* your comments & rate */}
          <View style={styles.hr} />
          <View style={styles.itemratingcardcontainer}>
            <Text style={styles.topicBold}>
              Do you like to comment & rate ?
            </Text>
          </View>
        </View>
      </ScrollView>
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
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  titlesTitle: {
    // fontFamily:"Roboto-bold",
    fontSize: 32,
    color: colors.textDark,
    paddingLeft: 10,
  },
  titleView: {
    backgroundColor: colors.secondary,
    padding: 10,
    paddingBottom: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  itemDetailcardWrapper: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    marginBottom: 5,
    flexDirection: "row",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    // justifyContent:"space-between",
  },
  itemDetailcardWrapper2: {
    backgroundColor: "white",
    margin: 20,
    paddingHorizontal: 20,
    marginBottom: 5,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    // justifyContent:"space-between",
  },
  itemImg: {
    // backgroundColor:"yellow",
  },
  detailsView: {
    // backgroundColor:"green",
  },
  itemCardImage: {
    width: 160,
    height: 140,
    resizeMode: "contain",
  },

  itemHeader: {
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 10,
    color: "#8d8d8d",
  },

  itemDetails: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
  },

  itemPrice: {
    fontSize: 16,
    paddingLeft: 10,
  },

  detailsView: {
    // backgroundColor:"green",
  },

  ratingTopBar: {},
  topicBold: {
    fontWeight: "bold",
    paddingLeft: 10,
  },
  itemratingcardcontainer: {
    paddingVertical: 20,
  },
  hr: {
    borderBottomColor: "#DADADA",
    borderBottomWidth: 1,
  },
  textRegular: {
    paddingTop: 10,
    paddingLeft: 10,
  },
  ratingStarTopBar: {
    flexDirection: "row",
    marginLeft: 10,
    top: 8,
  },
  ratingStarTopBarVal: {},
  ratingrow: {
    flexDirection: "row",
  },

  commentContainer: {
    // paddingTop:15,
  },
  oneCommentContainer: {
    flexDirection: "row",
    paddingTop: 15,
  },
  commenterImage: {
    paddingRight: 20,
  },
  commentfull: {
    top: 3,
  },
  commentline: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 13,
  },
  commenter: {
    color: "#8C8C8C",
    fontSize: 13,
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
});
