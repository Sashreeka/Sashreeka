import "react-native-gesture-handler";
import React, { useState, useMemo, useEffect } from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./components/Home";
import Main from "./components/Main";
import ItemPage from "./components/ItemPage";
import OrderHistory from "./components/OrderHistory";
import OrderHistoryInside from "./components/OrderHistoryInside";
import CheckoutPage from "./components/CheckoutPage";

import MainStack from "./components/stack/MainStack";
import DrowerStack from "./components/stack/DrowerStack";
import LoginStack from "./components/stack/LoginStack";
//import SplashScreen from './components/pages/SplashScreen';
//import SigninScreen from './components/pages/SigninScreen';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./components/pages/DrawerContent";
import { AuthContext } from "./components/context/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null);
  const [phoneNumber, setphoneNumber] = useState("");
  //let userToken=null;

  const authContext = useMemo(
    () => ({
      signIn: (telephone, password) => {
        console.log(telephone);
        axios
          .post("http://192.168.8.222:4000/user/login", {
            phoneNumber: telephone,
            password: password,
          })
          .then((response) => {
            console.log(response);
            if (response.data.message) {
              alert(response.data.message);
            } else {
              if (response.data[0].userCategory === "farmer") {
                //console.log(response.data[0].userCategory)
                try {
                  setphoneNumber(response.data[0].phoneNumber);
                  // let phoneNumber=response.data[0].phoneNumber;

                  // userToken = "ishan";

                  // AsyncStorage.setItem("userToken", userToken);

                  AsyncStorage.setItem(
                    "phoneNumber",
                    response.data[0].phoneNumber
                  );
                } catch (e) {
                  console.log(e);
                }
              } else {
                alert("Wrong username/Password combination");
              }
            }
          })
          .catch((e) => {
            console.log(e);
          });
      },

      // signIn: async (telephone, password) => {
      //   // if(telephone =='119' && password=='pass')
      //   // {
      //   setUserToken("ishan");
      //   // setIsLoading(false);
      //   try {
      //     userToken = "ishan";

      //     await AsyncStorage.setItem("userToken", userToken);

      //     //console.log(userToken)
      //   } catch (e) {
      //     console.log("error", e);
      //   }

      //   // }else{
      //   //   alert('Username Or Password Invalid')
      //   // }

      //   // console.log(telephone,password);
      // },
      // signOut: async () => {
      //   setUserToken(null);
      //   //   setIsLoading(false);

      //   try {
      //     await AsyncStorage.removeItem("userToken");
      //     //  console.log(userToken)
      //   } catch (e) {
      //     console.log(e);
      //   }
      // },
      signOut: () => {
        try {
          AsyncStorage.removeItem("phoneNumber");
          AsyncStorage.clear();
          setphoneNumber(null);
        } catch (e) {
          console.log(e);
        }
      },
      signUp: () => {
        setUserToken("set");
        // setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      const token = await AsyncStorage.getItem("userToken");
      console.log(token);
      //    setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {phoneNumber !== null ? <DrowerStack /> : <LoginStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
