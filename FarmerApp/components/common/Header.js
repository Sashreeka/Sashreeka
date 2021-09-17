import React from "react";
import { StatusBar, View, StyleSheet, SafeAreaView, Image } from "react-native";

import Feather from "react-native-vector-icons/Feather";
import colors from "../../assets/colors/colors";

Feather.loadFont();

export default function Header({ navigation }) {
  return (
    <View>
      <StatusBar backgroundColor={colors.primary} />
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Feather
            name="menu"
            size={24}
            color={colors.textDark}
            onPress={() => navigation.openDrawer()}
          ></Feather>
          <Image
            source={require("../../assets/images/profileimg_girl.jpg")}
            style={styles.profileImage}
          />
        </View>
      </SafeAreaView>
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
});
