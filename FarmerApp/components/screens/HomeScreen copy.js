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

export default function HomeScreen({ navigation }) {
  const [ferlilizerlist, setferlilizerlist] = useState([]);

  useEffect(() => {
    Axios.get("http://192.168.8.222:4000/farmer/getfertilizerall").then(
      (response) => {
        setferlilizerlist(response.data);
      }
    );
  }, []);

  const renderCategoryItem = ({ item }) => {
    return (
      // <View style={styles.categoriesListWrapper}>
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected
              ? colors.secondaryT50
              : colors.background,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View style={styles.categorySelectWrapper}>
          {/* <Feather
                   name="shevron-right"
                   size={8}
                   style={styles.categorySelectIcon}
                   /> */}
        </View>
      </View>
    );
  };

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
      {/* titles */}
      <View style={styles.titleView}>
        {/* <View style={styles.titleCart}> */}
        <Text style={styles.titlesTitle}>Organic Fertilizer</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("CartScreen")}
          style={styles.cartIcon}
        >
          <FontAwsome name="shopping-cart" color="#05375a" size={30} />
        </TouchableOpacity>
        {/* </View> */}
      </View>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        key={Math.random}
      >
        {/* Search */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={colors.textDark} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search...</Text>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
            />
          </View>
        </View>

        <View style={styles.itemsWrapper}>
          <Text style={styles.itemsTitle}>Shop Items</Text>
          {ferlilizerlist.map((val) => {
            return (
              <View
                key={val.fertilizerId}
                style={[
                  styles.itemsCardwrapper,
                  {
                    marginTop: val.fertilizerId == 1 ? 10 : 20,
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("ItemDetailsScreen")}
                >
                  <View style={styles.itemCardWrapOuter}>
                    <View
                      style={styles.itemcardLeft}
                      onPress={() => navigation.navigate("ItemDetailsScreen")}
                    >
                      <View style={styles.itemWrapperMain}>
                        <Text style={styles.itemTitleMain}>{val.name}</Text>
                      </View>
                      <View style={styles.itemDescriptionWrapper}>
                        <Text style={styles.itemDescription}>
                          {val.caption}
                        </Text>
                      </View>
                      <View style={styles.itemADDbutton}>
                        <Text
                          style={styles.itemADDbuttonText}
                          onPress={() =>
                            navigation.navigate("ItemDetailsScreen")
                          }
                        >
                          ADD
                          <Feather name="plus" size={15} color="#000" />
                        </Text>
                      </View>
                    </View>
                    <View style={styles.itemcardRight}>
                      <Image
                        source={{ uri: `${val.photo}` }}
                        style={styles.itemcardimage}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
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
  // titleCart:{
  //   flex:1,
  //   flexDirection:"row",
  // },

  searchWrapper: {
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: colors.textlight,
    borderBottomWidth: 2,
    marginHorizontal: 20,
  },
  search: {
    marginLeft: 20,
  },
  searchText: {
    fontSize: 15,
    color: colors.textlight,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 20,
  },

  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
    // paddingLeft:20,
  },

  categoryItemWrapper: {
    backgroundColor: colors.secondaryT50,
    display: "flex",
    marginRight: 20,
    borderRadius: 20,
    width: 130,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  categoryItemImage: {
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 27,
  },

  categoryItemTitle: {
    display: "flex",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    textTransform: "uppercase",
  },

  categorySelectWrapper: {
    height: 30,
    alignSelf: "center",
    justifyContent: "center",
  },

  categoryItemimage: {},

  itemsWrapper: {
    paddingHorizontal: 20,
  },

  itemsTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  itemsCardwrapper: {
    backgroundColor: colors.background,
    borderRadius: 15,
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },

  itemWrapperMain: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemTitleMain: {
    fontSize: 20,
    color: colors.textlight,
    fontWeight: "700",
  },

  itemDescriptionWrapper: {
    marginTop: 10,
    marginBottom: 20,
  },

  itemDescription: {
    fontSize: 14,
    color: colors.textDark,
  },

  itemUnitWeight: {
    fontSize: 12,
    color: colors.textlight,
    marginTop: 5,
  },
  itemADDbutton: {
    backgroundColor: colors.primary,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 15,
  },
  itemADDbuttonText: {
    color: "black",
    fontWeight: "bold",
  },

  itemCardWrapOuter: {
    // backgroundColor:"red",
    flexDirection: "row",
    flexWrap: "wrap",
    marginRight: 20,
    justifyContent: "space-around",
  },

  itemcardLeft: {
    // backgroundColor:'yellow',
    width: "55%",
  },
  itemcardRight: {
    // backgroundColor:'blue',
    width: "45%",
    alignItems: "flex-end",
  },

  itemcardimage: {
    width: 140,
    height: 150,
    resizeMode: "contain",
  },

  btnView: {
    padding: 5,
    marginRight: 30,
    alignItems: "flex-end",
    flex: 1,
    flexDirection: "row",
  },
  btnIcon: {
    backgroundColor: "yellow",
    padding: 10,
  },

  cartIcon: {
    alignSelf: "flex-end",
    marginEnd: 15,
  },
});
