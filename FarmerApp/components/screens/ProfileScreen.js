import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import colors from "../../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";

import Axios from "axios";

// import Header from "../common/Header";

Feather.loadFont();

export default function ProfileScreen({ navigation }) {
  const [userDetails, setUserDetails] = useState([]);

  // get profile databy an array
  useEffect(() => {
    Axios.get("http://192.168.8.222:4000/farmer/getProfileDataById").then(
      (response) => {
        // console.log(response.data);
        setUserDetails(response.data);
      }
    );
  }, []);

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
            source={require("../../assets/images/profileimg_girl.jpg")}
            style={styles.profileImage}
          />
        </View>
      </SafeAreaView>
      <View style={styles.titleView}>
        <Text style={styles.titlesTitle}>My Profile</Text>
      </View>

      <ScrollView
        style={styles.dataForm}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
      >
        {userDetails.map((item) => (
          <View key={item.userId} style={styles.inputs}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                {/* <Avatar.Image
                  source={require("../assets/images/profileimg_girl.jpg")}
                  size={80}
                /> */}
                <View style={{ marginLeft: 20 }}>
                  <Title
                    style={[
                      styles.title,
                      {
                        marginTop: 15,
                        marginBottom: 5,
                      },
                    ]}
                  >
                    {item.firstName} {item.lastName}
                  </Title>
                  {/* <Caption style={styles.caption}>@j_doe</Caption> */}
                </View>
              </View>
            </View>

            <View style={styles.userInfoSection}>
              <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20} />
                <Text style={{ color: "#777777", marginLeft: 20 }}>
                  {item.phoneNumber}
                </Text>
              </View>
              <View style={styles.row}>
                <Icon name="email" color="#777777" size={20} />
                <Text style={{ color: "#777777", marginLeft: 20 }}>
                  {item.email}
                </Text>
              </View>
              <View style={styles.row}>
                <Icon name="map-marker-radius" color="#777777" size={20} />
                <Text style={{ color: "#777777", marginLeft: 20 }}>
                  {item.houseNumber},{item.streetName},{item.city}
                </Text>
              </View>
            </View>

            <View style={styles.infoBoxWrapper}>
              <View
                style={[
                  styles.infoBox,
                  {
                    borderRightColor: "#dddddd",
                    borderRightWidth: 1,
                  },
                ]}
              >
                <Title>{item.userId}</Title>
                <Caption>User ID</Caption>
              </View>
              <View style={styles.infoBox}>
                <Title>{item.loyaltyPoints}</Title>
                <Caption>Wallet</Caption>
              </View>
            </View>

            <View style={styles.menuWrapper}>
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Icon name="heart-outline" color="#FF6347" size={25} />
                  <Text style={styles.menuItemText}>My Favorites</Text>
                </View>
              </TouchableRipple>
              {/* <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Icon name="credit-card" color="#FF6347" size={25} />
                  <Text style={styles.menuItemText}>Payment Methods</Text>
                </View>
              </TouchableRipple> */}
              <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Icon name="share-outline" color="#FF6347" size={25} />
                  <Text style={styles.menuItemText}>Tell Your Friends</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple>
                <View style={styles.menuItem}>
                  <Icon
                    name="account-check-outline"
                    color="#FF6347"
                    size={25}
                  />
                  <Text style={styles.menuItemText}>Change Password</Text>
                </View>
              </TouchableRipple>
              {/* <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Icon
                    name="account-check-outline"
                    color="#FF6347"
                    size={25}
                  />
                  <Text style={styles.menuItemText}>Support</Text>
                </View>
              </TouchableRipple> */}
              {/* <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                  <Icon
                    name="account-check-outline"
                    color="#FF6347"
                    size={25}
                  />
                  <Text style={styles.menuItemText}>Settings</Text>
                </View>
              </TouchableRipple> */}
            </View>
          </View>
        ))}
      </ScrollView>
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
    margin: 5,
    // backgroundColor: "red",
    padding: 5,
  },

  inputs: {
    marginTop: 10,
    paddingHorizontal: 5,
    // backgroundColor: "green",
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

  //Newly added styles

  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 75,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
