import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import colors from "../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />

      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require("../assets/images/profileimg_girl.jpg")}
            style={styles.profileImage}
          />
          <Feather
            name="menu"
            size={24}
            color={colors.textDark}
            onPress={() => navigation.openDrawer()}
          ></Feather>
        </View>
      </SafeAreaView>

      <View style={styles.titleView}>
        <Text style={styles.titlesTitle}>My Profile</Text>
      </View>

      <View>
        <Text>Full Name</Text>
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
  },

  titleView: {
    backgroundColor: colors.secondary,
    padding: 5,
    paddingBottom: 10,
    borderBottomLeftRadius: 75,
  },
});
