import React, { useState, useEffect } from "react";
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
  Alert,
} from "react-native";

import colors from "../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";

import Axios from "axios";
import { PrimaryButton, RightButton } from "./common/NewButtons";

export default function Profile({ navigation }) {
  const [userDetails, setUserDetails] = useState([]);

  // get profile databy an array
  useEffect(() => {
    Axios.get("http://192.168.8.222:4000/farmer/getProfileDataById").then(
      (response) => {
        // console.log(response.data[0].email);
        // console.log(response.data[0].firstName);
        // console.log(response.data[0].lastName);
        console.log(response.data);
        setUserDetails(response.data);
      }
    );
  }, []);

  // useEffect(() => {
  //   console.log("use effect");
  //   axios.get("http://192.168.8.222:4000/getProfileData").then((response) => {
  //     // console.log("axios inside");
  //     if (response) {
  //       console.log(response.data);
  //       setUserDetails(response.data);
  //       console.log("response in profile data");
  //     } else {
  //       console.log("error in profile data");
  //     }
  //   });
  // }, []);

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
          <Image
            source={require("../assets/images/profileimg_girl.jpg")}
            style={styles.profileImage}
          />
        </View>
      </SafeAreaView>
      <View style={styles.titleView}>
        <Text style={styles.titlesTitle}>My Profile</Text>
      </View>
      <View
        style={styles.dataForm}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        {userDetails.map((item) => (
          <View key={item.userId} style={styles.inputs}>
            <View style={styles.inputRow}>
              <View style={styles.inputFlex}>
                <Text style={styles.inputRowLabel}>First Name</Text>
                <Text style={styles.inputRowLabel}>Last Name</Text>
              </View>
              <View style={styles.inputFlex}>
                <TextInput style={styles.inputRowData} value={item.firstName} />
                <TextInput
                  style={styles.inputRowData}
                  value={item.lastName}
                  // onChangeText={(e) => {
                  //   setUserDetails(e);
                  // }}
                />
              </View>
            </View>

            <View style={[styles.inputRow, styles.inputFlex]}>
              <Text style={styles.inputRowLabel}>Password</Text>
              <PrimaryButton
                title="CHANGE"
                onPress={() => navigation.navigate("Home")}
              />
            </View>
          </View>
        ))}
      </View>
      {/* dataform-end */}
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
  inputFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
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
  saveButton: {
    marginTop: 30,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#F31801",
    color: "red",
  },
  rightButton: {
    alignSelf: "flex-end",
    backgroundColor: "black",
    width: 30,
  },



});
