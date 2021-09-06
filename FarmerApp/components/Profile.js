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
} from "react-native";

import colors from "../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";

import Axios from "axios";

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
      {userDetails.map((item) => (
        <View key={item.userId}>
          <Text>{item.email}</Text>
          <Text>{item.firstName}</Text>
          <TextInput
            value={item.email}
            // onChangeText={(e) => {
            //   setUserDetails(e);
            // }}
          />
        </View>
      ))}
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
        <View style={styles.inputs}>
          <View style={styles.inputRow}>
            <Text style={styles.inputRowLabel}>Username</Text>
            <Text style={styles.inputRowData}>
              Sanduni Fernando
              {/* {userDetails.firstName} {userDetails.lastName} */}
            </Text>
          </View>

          {/* <View style={styles.inputRow}>
            <Text style={styles.inputRowLabel}>Email</Text>
            <Text style={styles.inputRowData}>{item.email}</Text>
          </View> */}

          <View style={styles.inputRow}>
            <Text style={styles.inputRowLabel}>Contact Number</Text>
            <Text style={styles.inputRowData}>0713705751</Text>
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.inputRowLabel}>Password</Text>
            <Text style={styles.inputRowData}>Password</Text>
          </View>
        </View>
      </View>
      {/* dataform-end */}
      <Button title="SAVE"></Button>
      {/* style={styles.saveButton} */}

      {/* {userDetails.map((item) => ( */}
      <View>
        <Text>Hi</Text>
        {/* <Text>{userDetails[0]}</Text> */}
      </View>
      {/* ))} */}
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
    height: 350,
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
  saveButton: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "black",
  },
});
