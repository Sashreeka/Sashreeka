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

import ViewOrderButton from "./buttons";

Feather.loadFont();

export default Main = ({ navigation }) => {
  const [historylist, setHistoryList] = useState([]);

  useEffect(() => {
    Axios.get("http://192.168.8.222:4000/getorderhistory").then((response) => {
      console.log(response.data[0].famerPhoneNumber);
      console.log(response.data[0].confirmationFlag);
      console.log(response.data[0].distance);
      setHistoryList(response.data);
    });
  }, []);

  const orderstatus = (flag) => {
    if (flag === 0) {
      return <Text style={styles.PendingDelivery}>Pending delivery</Text>;
    } else if (flag === 1) {
      return <Text style={styles.outForDelivery}>Out for Delivery</Text>;
    } else if (flag === 2) {
      return <Text style={styles.SuccessfulDelivery}>Successful delivery</Text>;
    } else {
    }
  };

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
          <Feather
            name="menu"
            size={24}
            color={colors.textDark}
            onPress={() => navigation.openDrawer()}
          ></Feather>
        </View>
      </SafeAreaView>

      {/* titles */}
      <View style={styles.titleView}>
        <Text style={styles.titlesTitle}>Organic Fertilizer</Text>
      </View>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        key={Math.random}
      >
        <View style={styles.pageTopicView}>
          <Text style={styles.pageTopic}>Order History</Text>
        </View>

        <View style={styles.itemDetailcardWrapper2}>
          <View style={styles.itemratingcardcontainer}>
            {historylist.map((val) => {
              return (
                <View key={val.orderId}>
                  <View style={styles.order}>
                    <Text style={styles.topicBold}>
                      <Text>ORD NO: {val.orderId}</Text>
                    </Text>
                    <Text style={styles.textRegular}>Date:12/05/2021</Text>
                    <Text style={styles.textRegular}>Price:RS.389.00</Text>
                    <Text style={styles.textRegular}>
                      Order Status:{orderstatus(val.confirmationFlag)}
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("OrderHistoryInside")}
                    >
                      <View style={styles.viewOrderButtonview}>
                        <ViewOrderButton />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.hr} />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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

  ratingTopBar: {},
  topicBold: {
    fontWeight: "bold",
    // paddingLeft:10,
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
    // paddingLeft:10,
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

  pageTopicView: {
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  pageTopic: {
    color: "#217756",
    fontSize: 20,
    fontWeight: "bold",
  },
  order: {
    paddingVertical: 20,
    alignItems: "center",
  },
  outForDelivery: {
    color: "#63B75D",
    fontWeight: "bold",
  },

  PendingDelivery: {
    color: "#DDB218",
    fontWeight: "bold",
  },

  SuccessfulDelivery: {
    color: "#217756",
    fontWeight: "bold",
  },

  viewOrderButtonview: {
    paddingTop: 10,
  },
});
