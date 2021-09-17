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
  Dimensions,
  ImageBackground,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import colors from "../../assets/colors/colors";
import Axios from "axios";

Feather.loadFont();

const windowWidth = Dimensions.get("window").width;
const image = { uri: "https://reactjs.org/logo-og.png" };

export default function HomeScreen({ navigation }) {
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
      {/* titles */}
      <View style={styles.titleView}>
        <Text style={styles.titlesTitle}>Organic Fertilizer</Text>
      </View>

      {/* Search */}
      <View style={styles.searchWrapper}>
        <Feather name="search" size={16} color={colors.textDark} />
        <View style={styles.search}>
          <Text style={styles.searchText}>Search...</Text>
        </View>
      </View>

      <FlatList
        numColumns={2}
        data={categorylist}
        keyExtractor={(item) => item.fertilizerCategoryId}
        renderItem={({ item }) => (
          <View style={styles.contentContainerNew}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewFertilizerCategory")}
            >
              <View style={styles.cardNew}>
                <ImageBackground
                  source={{ uri: item.photo }}
                  resizeMode="cover"
                  style={styles.imageBg}
                >
                  <Text style={styles.imageBgText}>{item.description}</Text>
                </ImageBackground>
                {/* <ImageBackground
                  source={{ uri: item.photo }}
                  style={styles.imageBackgroundNew}
                />
                // <Text>{item.description}</Text>
                <ImageBackground /> */}
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    justifyContent: "flex-end",
    width: windowWidth / 2 - 10,
    height: 150,
  },
  imageBgText: {
    width: windowWidth / 2 - 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
    alignSelf: "center",
    color: "#292929",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
    backgroundColor: "rgba(255,255,255,0.6)",
  },
  col1: {
    flex: 1,
    padding: 5,
  },
  col2: {
    flex: 2,
    padding: 5,
  },
  colBanner: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },

  // imageNew: {
  //   width: windowWidth / 2 - 10,
  //   height: 150,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   padding: 5,
  // },

  imageBackgroundNew: {
    flex: 1,
    justifyContent: "center",
  },
  contentContainerNew: {
    flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",
  },
  cardNew: {
    margin: 5,
  },

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
    marginBottom: 10,
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
