import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  StatusBar,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../assets/consts/colors";
import Feather from "react-native-vector-icons/Feather";
import FontAwsome from "react-native-vector-icons/FontAwesome";
import colors from "../../assets/colors/colors";
import Axios from "axios";

import { Alert } from "react-native";

// const width = Dimensions.get("window").width / 2 - 30;
const screenwidth = Dimensions.get("window").width / 3 - 30;

// context file
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
// import { TextInput } from "react-native-paper";

export default function CheckoutScreen({ navigation }) {
  const { emptymyCart } = useContext(CartContext);

  // Data segments to be written to the backend
  const [farmernumber, setFarmer] = useState([]);
  const [receivernumber, setPhonenumber] = useState("");
  const [receivername, setRecname] = useState("");
  const [housenumber, setHousenumber] = useState("");
  const [streetname, setStreetname] = useState("");
  const [city, setCity] = useState("");
  const [quickflag, setQuick] = useState("");
  const [dilivercharge, setCharge] = useState("");
  const [paymenttype, setPayment] = useState("");
  const [transactionst, setTrans] = useState("");
  const [loyaltyratio, setLoyalty] = useState("");
  const [amount, setAmount] = useState("");
  const [district, setDistrict] = useState("");
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Order Placed Succesfuly",
      "Your order will be delivered succuesfully.",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            emptymyCart();
            navigation.navigate("HomeScreen");
          },
        },
      ]
    );

  //payment gateway button control
  // const [shpaybtn, showPaymentGateway] = useState([]);
  // const showPaybtn = (event) => {
  //   showPaymentGateway(event.target.value);
  //   setPayment(event.target.value);

  //   if (event.target.value == "online") {
  //     setTrans(1);
  //   } else {
  //     setTrans(0);
  //   }
  // };

  //quick delivery status
  const [quickchrg, quickCharged] = useState([]);
  const quickCharge = (event) => {
    quickCharged(event.target.value);
    setQuick(event.target.value);
    if (event.target.value == 1) {
      setCharge(dilivronw * 3);
    } else {
      setCharge(dilivronw);
    }

    //  setAmount(cartTotal+dilivercharge-loyaltyminus);
  };

  //calculate dilivery charge
  const [dilivronw, dilchargeOnweight] = useState([]);
  const diliverCharge = (event) => {
    function isDistrict(district) {
      return district.dis === event.target.value;
    }

    const distance = DiliveryDistrict.districtdata.find(isDistrict);
    dilchargeOnweight(
      items.reduce((a, v) => (a = a + v.quantity * v.weight * 10), 0) +
        distance.distance * 10
    );

    setDistrict(event.target.value);
    //   setAmount(cartTotal+dilivercharge-loyaltyminus);
  };

  // //redeem loyalty points
  // const [loyaltyminus, setRedeem] = useState([]);
  // const redeemAmount = (event) => {
  //   setRedeem(event.target.value);
  //   setLoyalty(maxloyal - event.target.value + Math.round(cartTotal / 100));

  //   //  setAmount(cartTotal+dilivercharge-loyaltyminus);
  // };

  //render data from local storage
  // const [maxloyal, setLoyal] = useState([]);
  // useEffect(() => {
  //   setLoyal(localStorage.loyaltyPoints);
  //   setFarmer(localStorage.phoneNumber);
  // }, []);

  //share location
  // const [location, setLocation] = useState({
  //   loaded: false,
  //   coordinates: { lat: "", lng: "" },
  // });

  // const onSuccess = (location) => {
  //   setLocation({
  //     lat: location.coords.latitude,
  //     lng: location.coords.longitude,
  //   });

  //   setLatitude(location.coords.latitude);
  //   setLongitude(location.coords.longitude);
  // };

  // const onError = (error) => {
  //   setLocation({
  //     loaded: true,
  //     error,
  //   });
  // };

  // const shareLocation = (event) => {
  //   if (!("geolocation" in navigator)) {
  //     onError({
  //       code: 0,
  //       message: "Geolacation not supported",
  //     });
  //   }

  //   navigator.geolocation.getCurrentPosition(onSuccess, onError);
  // };

  //set total amount
  useEffect(() => {
    // if (quickchrg == 1) {
    //   setAmount(cartTotal + dilivronw * 2 - loyaltyminus);
    // } else {
    //   setAmount(cartTotal + dilivronw - loyaltyminus);
    // }
    // console.log(amount);
  });

  // //payment gateway paypal
  // const [checkout, setCheckout] = useState(false);
  //const success = PayPal();

  //write data to the database
  const submitOrder = () => {
    // Axios
    //   .post("http://localhost:4000/placeOrder", {
    //     amount: amount,
    //     houseNumber: housenumber,
    //     streetName: streetname,
    //     city: city,
    //     district: district,
    //     quickFlag: quickflag,
    //     receiverName: receivername,
    //     deliveryCharge: dilivercharge,
    //     farmerPhoneNumber: farmernumber,
    //     latitude: latitude,
    //     longitude: longitude,
    //     receiverNumber: receivernumber,
    //     orderCfertilizer: items,
    //     paymentType: paymenttype,
    //     transactionStatus: transactionst,
    //     loyaltyPoints: loyaltyratio,
    //   })
    //   .then(alert("Order placed successfully"));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingTop: 15,
            alignItems: "center",
            backgroundColor: colors.secondary,
            backgroundColor: colors.secondary,
            padding: 8,
          }}
        >
          <Icon
            name="arrow-back-ios"
            size={28}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>

      {/* <View
        style={{
          height: 20,
          padding: 30,
          width: 200,
          marginHorizontal: 30,
        }}
      >
        <Text>Receiver's Name</Text>

        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            placeholderTextColor: "gray",
          }}
          onChangeText={(e) => {
            setRecname(e);
          }}
          name="name"
          // placeholder="Insert your text!"
        />
      </View> */}
      <View
        style={{
          margin: 30,
        }}
      >
        <Text style={{ marginTop: 35, color: "#05375a", fontSize: 18 }}>
          Enter Receiver's Name
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#f2f2f2",
            paddingBottom: 5,
          }}
        >
          <TextInput
            placeholder="Sanduni Fernando"
            name="name"
            style={{
              flex: 1,
              paddingLeft: 10,
              color: "#05375a",
              marginLeft: 10,
              height: 32,
            }}
            autoCapitalize="none"
            onChangeText={(e) => setRecname(e)}
          />
        </View>

        <Text style={{ marginTop: 35, color: "#05375a", fontSize: 18 }}>
          Enter Receiver's Phone Number
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#f2f2f2",
            paddingBottom: 5,
          }}
        >
          <TextInput
            placeholder="+94768610084"
            name="phoneNumber"
            style={{
              flex: 1,
              paddingLeft: 10,
              color: "#05375a",
              marginLeft: 10,
              height: 32,
            }}
            autoCapitalize="none"
            onChangeText={(e) => setPhonenumber(e)}
          />
        </View>
        <Text style={{ marginTop: 35, color: "#05375a", fontSize: 18 }}>
          Any Delivery Special Instructions
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#f2f2f2",
            paddingBottom: 5,
          }}
        >
          <TextInput
            placeholder="Famous places near your home."
            name="streetName"
            style={{
              flex: 1,
              paddingLeft: 10,
              color: "#05375a",
              marginLeft: 10,
              height: 32,
            }}
            autoCapitalize="none"
            onChangeText={(e) => setStreetname(e)}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity>
          <View style={styles.buyBtn}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 14,
                fontWeight: "bold",
              }}
              onPress={() => navigation.navigate("OnlinePaymentScreen")}
            >
              Online Payments
            </Text>
            {/* <Text>{state}</Text> */}
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.buyBtn}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 14,
                fontWeight: "bold",
              }}
              onPress={() => createTwoButtonAlert()}
            >
              Cash On Delivery
            </Text>
            {/* <Text>{state}</Text> */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  borderBtnText: { fontWeight: "bold", fontSize: 28 },
  buyBtn: {
    // width: 150,
    width: 150,
    // alignSelf: "center",
    // height: 50,
    paddingVertical: 10,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginHorizontal: 10,
  },
});
