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
import colors from "../../assets/colors/colors";
import Axios from "axios";

import ViewOrderButton from "../common/Buttons";

Feather.loadFont();

export default function OrderHistoryScreen({ navigation }) {
  const [historylist, setHistoryList] = useState([]);

  useEffect(() => {
    Axios.get("http://192.168.8.222:4000/farmer/getOrderHistoryById").then(
      (response) => {
        // console.log(response.data[0].famerPhoneNumber);
        // console.log(response.data[0].confirmationFlag);
        console.log(response.data[0]);
        setHistoryList(response.data);
      }
    );
  }, []);

  const orderstatus = (flag) => {
    if (flag === 0) {
      return <Text style={styles.PendingDelivery}>Please wait fot grace period.</Text>;
    } else if (flag === 1) {
      return <Text style={styles.outForDelivery}>Delivery is on the way.</Text>;
    } else if (flag === 2) {
      return <Text style={styles.SuccessfulDelivery}>Successfully delivered.</Text>;
    } else {
    }
  };

  return (
    <View style={styles.container}>
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
            padding: 8,
          }}
        >
          <Feather
            name="menu"
            size={24}
            color={colors.textDark}
            onPress={() => navigation.openDrawer()}
          ></Feather>
          <Image
            source={require("../../assets/images/profileimg_girl.jpg")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              marginLeft: 10,
            }}
            // onPress={() => navigation.openDrawer()}
          />
        </View>
      </View>

      <View
        style={{
          paddingVertical: 20,
          alignItems: "center",
        }}
      >
        {/* <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} /> */}
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>My Orders</Text>

        <Image
          source={require("../../assets/consts/pictures/orderdummypic5.png")}
          style={{
            height: 125,
            width: 400,
            resizeMode: "contain",
            marginTop: 5,
            borderTopLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        />
      </View>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        key={Math.random}
      >
        <View style={styles.itemDetailcardWrapper2}>
          <View style={styles.itemratingcardcontainer}>
            {historylist.map((val) => {
              return (
                <View key={val.orderId}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("OrderDetailsScreen", val)
                    }
                  >
                    <View style={styles.order}>
                      <Text style={styles.topicBold}>
                        ORD NO: {val.orderId}
                      </Text>
                      <Text style={styles.textRegular}>
                        Order Date: {val.ordereddate}
                      </Text>
                      <Text style={styles.textRegular}>
                        Delivery Date: {val.date}
                      </Text>

                      <Text style={styles.textRegular}>
                        Total Price: RS. {val.amount}
                      </Text>
                      <Text style={styles.textRegular}>
                        Delivery Charge: RS. {val.deliveryCharge}
                      </Text>
                      <Text style={styles.textRegular}>
                        {orderstatus(val.status)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.hr} />
                </View>
              );
            })}
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

  itemDetailcardWrapper2: {
    backgroundColor: "white",
    marginTop: 5,
    marginHorizontal: 30,
    paddingHorizontal: 5,
    marginBottom: 10,
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
    paddingTop: 10,
    paddingBottom: 15,
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
