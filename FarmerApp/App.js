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

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [userToken, setUserToken] = useState(null);
  //let userToken=null;

  const authContext = useMemo(
    () => ({
      signIn: async (telephone, password) => {
        // if(telephone =='119' && password=='pass')
        // {
        setUserToken("ishan");
        // setIsLoading(false);
        try {
          userToken = "ishan";

          await AsyncStorage.setItem("userToken", userToken);

          //console.log(userToken)
        } catch (e) {
          console.log("error", e);
        }

        // }else{
        //   alert('Username Or Password Invalid')
        // }

        // console.log(telephone,password);
      },
      signOut: async () => {
        setUserToken(null);
        //   setIsLoading(false);

        try {
          await AsyncStorage.removeItem("userToken");
          //  console.log(userToken)
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
        {userToken !== null ? <DrowerStack /> : <LoginStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
