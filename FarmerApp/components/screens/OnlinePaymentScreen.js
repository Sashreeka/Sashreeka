// import { Icon } from "native-base";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import colors from "../../assets/colors/colors";

import Icon from "react-native-vector-icons/MaterialIcons";

Feather.loadFont();

export default function OnlinePaymentScreen({ navigation }) {
  const DATA = [
    {
      id: "1",
      bankName: "BOC",
      cardNo: "5535 6535 2345 3786",
      name: "SANDUNI FERNANDO",
      cvv: "123",
      expireDate: "07/22",
      image: require("../../assets/visa.png"),
      bg_color: "#FC328A",
    },
    {
      id: "2",
      bankName: "COMMERCIAL",
      cardNo: "5598 6545 4545 5686",
      name: "ANUKI ALWIS",
      cvv: "512",
      expireDate: "10/23",
      image: require("../../assets/masterCard.png"),
      bg_color: "#8961EE",
    },
    {
      id: "3",
      bankName: "SAMPATH",
      cardNo: "5598 6545 4545 5456",
      name: "CHAMODHI PERERA",
      cvv: "315",
      expireDate: "11/24",
      image: require("../../assets/masterCard.png"),
      bg_color: "#AC2DFE",
    },
  ];

  const [details, setDetails] = useState([]);

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
            paddingBottom: 20,
          }}
        >
          <Icon
            name="arrow-back-ios"
            size={28}
            onPress={() => navigation.goBack()}
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
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          Online Card Payments
        </Text>
      </View>

      {/* <View
        style={[
          styles.card,
          { backgroundColor: "#FC328A", alignSelf: "center" },
        ]}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
          BOC
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: "#fff",
            marginVertical: 10,
          }}
        >
          1452 2695 3502
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#fff" }}>
            SANDUNI FERNANDO
          </Text>
          <Image
            source={require("../../assets/masterCard.png")}
            style={{
              height: 25,
              width: 35,
              resizeMode: "contain",
              marginRight: 5,
            }}
          />
        </View>
      </View> */}

      <View
        style={[styles.card, { backgroundColor: "#000", alignSelf: "center" }]}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
          BOC
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: "#fff",
            marginVertical: 20,
          }}
        >
          1452 2695 3502
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 10, fontWeight: "bold", color: "#fff" }}>
            SANDUNI FERNANDO
          </Text>
          <Image
            source={require("../../assets/visa.png")}
            style={{
              height: 25,
              width: 35,
              resizeMode: "contain",
              marginRight: 5,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: 5 }}></View>

      <View style={{ paddingHorizontal: 30, marginTop: 20 }}>
        <Text style={styles.textLabel}>Card Number</Text>
        <View style={styles.textView}>
          <Text style={styles.text}></Text>
        </View>
        <Text style={styles.textLabel}>Name</Text>
        <View style={styles.textView}>
          <Text style={styles.text}></Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "40%" }}>
            <Text style={styles.textLabel}>Expiry date</Text>
            <View style={[styles.textView]}>
              <Text style={styles.text}></Text>
            </View>
          </View>
          <View style={{ width: "45%" }}>
            <Text style={styles.textLabel}>CVV</Text>
            <View style={[styles.textView]}>
              <Text style={styles.text}></Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#FBFBFB",
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    width: 250,
    height: 130,
    marginHorizontal: 15,
    borderRadius: 14,
    padding: 8,
  },
  textLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "grey",
    marginTop: 5,
  },
  textView: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 2,
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
