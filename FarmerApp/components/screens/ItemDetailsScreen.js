import React from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import colors from "../../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";
import FontAwsome from "react-native-vector-icons/FontAwesome";

Feather.loadFont();

export default function ItemDetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Feather
            name="menu"
            size={24}
            color={colors.textDark}
            onPress={() => navigation.openDrawer()}
          ></Feather>
          {/* <Image
            source={require("../../assets/images/profileimg_girl.jpg")}
            style={styles.profileImage}
          /> */}
        </View>
      </SafeAreaView>

      <View style={styles.titleView}>
        <Text style={styles.titlesTitle}>Fertilizer Details</Text>
      </View>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        key={Math.random}
      >
        <View style={styles.itemDetailcardWrapper}>
          <View style={styles.itemImg}>
            <Image
              source={{
                uri: "https://www.stones4homes.co.uk/wp-content/uploads/2021/04/Farmyard-Manure-1-004.jpg",
              }}
              style={styles.itemCardImage}
            />
          </View>
          <View style={styles.detailsView}>
            <Text style={styles.itemHeader}>Manure</Text>
            <View>
              <Text style={styles.itemPrice}>item unit : 5KG</Text>
              <View>
                <Text style={styles.itemValue}>Rs.950.00</Text>
                <Text style={styles.itemValueWithoutOffer}>Rs.1000.00</Text>
              </View>
              <View>
                {/* <PlusMinusButton/> */}
                <TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: "green",
                      left: 100,
                      width: 70,
                      height: 30,
                      borderRadius: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        paddingLeft: 15,
                        marginTop: -3,
                        color: "yellow",
                      }}
                    >
                      +{" "}
                      <FontAwsome
                        name="shopping-cart"
                        size={22}
                        color={colors.ratingStarColor}
                      ></FontAwsome>
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
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
                  {/* <Image
                    source={require("../assets/images/profileimg_girl.jpg")}
                    style={styles.profileImage}
                  /> */}
                </View>
                <View style={styles.commentfull}>
                  <Text style={styles.commentline}>This Product is good.</Text>
                  <Text style={styles.commenter}>A A Fernando</Text>
                </View>
              </View>

              {/* one comments */}
              <View style={styles.oneCommentContainer}>
                <View style={styles.commenterImage}>
                  {/* <Image
                    source={require("../assets/images/profileimg_girl.jpg")}
                    style={styles.profileImage}
                  /> */}
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
                  {/* <Image
                    source={require("../assets/images/profileimg_girl.jpg")}
                    style={styles.profileImage}
                  /> */}
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
    paddingLeft: 20,
    marginLeft: 10,
  },

  titleView: {
    backgroundColor: colors.secondary,
    padding: 5,
    paddingBottom: 10,
    borderBottomLeftRadius: 75,
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
  itemValue: {
    fontSize: 26,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  itemValueWithoutOffer: {
    fontSize: 16,
    color: "red",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    paddingLeft: 10,
  },
});
