import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar, Image } from "react-native";
import { Text, TouchableOpacity } from "react-native-paper";

import colors from "../../assets/colors/colors";

import Icon from "react-native-vector-icons/MaterialIcons";

export default function CheckoutScreen({ navigation }) {
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

      <View
        style={{
          paddingVertical: 20,
          alignItems: "center",
        }}
      >
        {/* <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} /> */}
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>CHECKOUT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
