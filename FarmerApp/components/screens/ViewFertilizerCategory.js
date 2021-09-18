import React, { useState, useEffect } from "react";
import {
  FlatList,
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import FontAwsome from "react-native-vector-icons/FontAwesome";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import categoriesData from "../../assets/data/categoriesData";
import colors from "../../assets/colors/colors";
import Axios from "axios";

Feather.loadFont();

export default function ViewFertilizerCategory({ route, navigation }) {
  const { id, category } = route.params;

  const [categorylist, setcategorylist] = useState([]);

  useEffect(() => {
    Axios.get("http://192.168.8.222:4000/farmer/getcategories").then(
      (response) => {
        setcategorylist(response.data);
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
        <Text style={styles.titlesTitle}>{category}</Text>
      </View>

      {categorylist.map((val) => {
        return (
          <View key={val.fertilizerCategoryId} style={styles.itemsCardwrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewFertilizerCategory")}
            >
              <View style={styles.itemCardWrapOuter}>
                <View
                  style={styles.itemcardLeft}
                  onPress={() => navigation.navigate("ViewFertilizerCategory")}
                >
                  <View style={styles.itemWrapperMain}>
                    <Text style={styles.itemTitleMain}>{val.description}</Text>
                  </View>
                </View>
                <View style={styles.itemcardRight}>
                  <Image
                    source={{ uri: "${val.photo}" }}
                    style={styles.imageNew}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
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
  imageNew: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
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
