import React, { useState, useEffect, useMemo, useReducer } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Button,
  ActivityIndicator,
} from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTabScreen from "./components/screen/MainTabScreen";
//import MainTabScreen from './components/screen/MainTabScreen';
import { DrawerContent } from "./components/screen/DrawnContent";
import SupportScreen from "./components/screen/SupportScreen";
import SettingsScreen from "./components/screen/SettingScreen";

import PaymentScreen from "./components/screen/PaymentScreen";
import ProfileScreen from "./components/screen/ProfileScreen";

import { AuthContext } from "./components/context/context";

//import AsyncStorage from '@react-native-async-storage/async-storage';

import { AsyncStorage } from "react-native";

import LoginStack from "./components/stack/LoginStack";

import DetailsScreen from "./components/screen/DetailsScreen";
import axios from "axios";
import Map from "./components/screen/Map";

const Drawer = createDrawerNavigator();

export default function App({ navigation }) {
  const [phoneNumber, setphoneNumber] = useState(null);
  
  const [userRole, setUserRole] = useState("");

  useEffect(()=>{
  
    const phoneNumber1=AsyncStorage.getItem("phoneNumber");
    
    console.log(phoneNumber1);
    console.log("ishan");
   


  },[])
  const authContext = useMemo(
    () => ({
      signIn: (telephone, password) => {
        axios
          .post("http://192.168.1.11:4000/user/login", {
            phoneNumber: telephone,
            password: password,
          })
          .then((response) => {
            if(response.data.message)
            {
              alert(response.data.message);
            }else{
              if(response.data[0].userCategory==="deliveryAgent"){
                //console.log(response.data[0].userCategory)
                try{

                  setphoneNumber(response.data[0].phoneNumber)
                 // let phoneNumber=response.data[0].phoneNumber;
                
                  AsyncStorage.setItem("phoneNumber",response.data[0].phoneNumber);


                }catch(e)
                {
                  console.log(e);
                }

              }else{
                alert("Wrong username/Password combination");
              }
             
            }



            //console.log(response);


            //  console.log(response);
            // if (response) {
            //   //  console.log(response.data[0].id);
            //   // console.log(response.data[0].password);
            //   // console.log(response.data[0].phoneNumber);
            //   // console.log(response.data[0].userCategory);

            //   // setUserRole(response.data[0].userCategory);
            //   // if(userRole==='deliveryAgent')
            //   // {

            //   try {
            //     setphoneNumber(response.data[0].phoneNumber);
            //     AsyncStorage.setItem("phoneNumber", phoneNumber);
            //   } catch (e) {
            //     console.log(e);
            //   }

            //   // }else{
            //   //   alert('Telephone Number or Password Invalid');
            //   // }
            // } else {
            //   alert("Telephone Number or Password Invalid");
            // }
          })
          .catch((e) => {
            console.log(e);
          });

        //  if(telephone =='119' && password=='pass')
        // {
        //   // setUserToken('ishan');
        //   // setIsLoading(false);
        //   console.log(telephone)
        //   setUserToken(telephone);
        //   try{
        //    // userToken="ishan"

        //      AsyncStorage.setItem('userToken', userToken)

        //     //console.log(userToken)
        //   }catch(e)
        //   {
        //     console.log("error",e);
        //   }
        //CLOUDINARY_URL=cloudinary://893724358878283:gCESDBiCIz-8RmGMpL0EUK-V8kk@do1sv3tbt
        //  }else{
        //   alert('Username Or Password Invalid')
        //  }

        // console.log(telephone,password);
      },
      signOut: () => {
        try {
          AsyncStorage.removeItem("phoneNumber");
          AsyncStorage.clear();
          setphoneNumber(null);
        } catch (e) {
          console.log(e);
        }
      },
    }),
    []
  );

  // useEffect(()=>{

  //   setTimeout(async()=>{
  //   //  setIsLoading(false);
  //   let userToken;
  //   userToken=null;

  //   try{
  //     userToken=await AsyncStorage.getItem('userToken');

  //   }
  //   catch(e){
  //     console.log(e);
  //   }

  //   console.log('user token',userToken)
  //   dispatch({type: 'RETRIEVE_TOKEN', token: userToken})

  //   },1000);
  // },[])

  // if(isLoading){
  //   return (
  //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  //         <ActivityIndicator size='large'/>

  //     </View>
  //   );
  // }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {phoneNumber!== null? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
          >
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="PaymentScreen" component={PaymentScreen} />
            <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
            <Drawer.Screen name="Map" component={Map}/>
          </Drawer.Navigator>
        ) : (
          <LoginStack />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
