import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { Text } from "react-native-paper";

import colors from "../../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialIcons";

Feather.loadFont();

export default function TopBarBack({ navigation }) {
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
    </View>
  );
}
