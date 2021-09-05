import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
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

      <View style={styles.dataForm}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.inputs}>
            <View style={styles.inputRow}>
              <Text style={styles.inputRowLabel}>Username</Text>
              <Text style={styles.inputRowData}>Sanduni Fernando</Text>
            </View>

            <View style={styles.inputRow}>
              <Text style={styles.inputRowLabel}>Email</Text>
              <Text style={styles.inputRowData}>sanduni@gmail.com</Text>
            </View>

            <View style={styles.inputRow}>
              <Text style={styles.inputRowLabel}>Contact Number</Text>
              <Text style={styles.inputRowData}>0713705751</Text>
            </View>

            <View style={styles.inputRow}>
              <Text style={styles.inputRowLabel}>Password</Text>
              <Text style={styles.inputRowData}>password</Text>
            </View>
          </View>
          {/* inputs-end */}
        </ScrollView>
      </View>
      {/* dataform-end */}

      {/* <Button>Save Changes</Button> */}
    </View> // container-end
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

  // styles for profile data
  dataForm: {
    margin: 25,
    // marginTop: 10,
    // marginLeft: 30,
    // marginRight: 30,
    backgroundColor: "red",
    padding: 5,
  },

  inputs: {
    marginTop: 10,
    paddingHorizontal: 5,
    backgroundColor: "green",
  },

  inputRow: {
    margin: 5,
    // alignItems: "flex-end",
    backgroundColor: "blue",
  },
  inputRowLabel: {
    marginBottom: 10,
  },

  inputRowData: {
    marginLeft: 10,
  },
});
