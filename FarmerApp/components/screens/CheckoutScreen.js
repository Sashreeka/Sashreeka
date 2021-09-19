import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";

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

      <View style={{ marginHorizontal: 30 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("OnlinePaymentScreen")}
        >
          <View style={styles.btnContainer}>
            <Text style={styles.btntitle}>CHECKOUT</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
