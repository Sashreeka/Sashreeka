import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar, Image } from "react-native";
import { Text, TouchableOpacity } from "react-native-paper";

import colors from "../../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";

Feather.loadFont();

export default function PaymentMethodsScreen({ navigation }) {
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
        <Text style={styles.titlesTitle}>My Payment Methods</Text>
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
});
