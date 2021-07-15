import React,{useState,useEffect,useMemo,useReducer} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


import { StyleSheet, 
        Text, 
        View, 
        FlatList,
        Image,
        TouchableOpacity,
        Alert,
        Modal,
        Button, 
        ActivityIndicator
      } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './components/screen/MainTabScreen';
//import MainTabScreen from './components/screen/MainTabScreen';
import { DrawerContent } from './components/screen/DrawnContent';
import SupportScreen from './components/screen/SupportScreen';
import SettingsScreen from './components/screen/SettingScreen';

import PaymentScreen from './components/screen/PaymentScreen';
import ProfileScreen from './components/screen/ProfileScreen';




import { AuthContext } from './components/context/context';

import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginStack from './components/stack/LoginStack';
const Drawer = createDrawerNavigator();



export default function App({navigation}) {
 

  // const initialLoginState={

  //   isLoading: true,
  //   username: null,
  //   userToken: null,
  // };
  // const loginReducer= (prevState,action)=>{
  //   switch(action.type){
  //     case 'RETRIEVE_TOKEN':
  //       return{

  //         ...prevState,
  //         userToken: action.token,
  //         isLoading :false,
  //       };
  //     case 'LOGIN':
  //         return{
  //           ...prevState,
  //           username: action.id,
  //           userToken: action.token,
  //           isLoading :false,
            
  //         }; 
  //     case 'LOGOUT':
  //           return{
  //             ...prevState,

  //          username: null,
  //           userToken: null,
  //           isLoading :false,
              
  //           }; 
  //     case 'REGISTER':
  //             return{
  //               ...prevState,
  //           username: action.id,
  //           userToken: action.token,
  //           isLoading :false,
  //             };         
  //   }
  // }

  // const [loginState,dispatch]=useReducer(loginReducer,initialLoginState)

  // const authContext=useMemo(()=>({
  //   signIn: async(username,password)=>{
  //     // setUserToken('set');
  //     // setIsLoading(false);
      
  //     let userToken;
  //     userToken=null;
  //     if(username =='user' && password =='pass'){
        
  //       try{
  //         userToken='dfgdfg';
  //         await AsyncStorage.setItem('userToken', userToken);
  //       }
  //       catch(e){
  //         console.log(e);
  //       }
  //      // console.log('user token',userToken)
  //     }
  //     dispatch({type: 'LOGIN', id: username, token: userToken})
  //   },
  //   signOut: async ()=>{
  //     // setUserToken(null);
  //     // setIsLoading(false);

  //     try{
        
  //       await AsyncStorage.removeItem('userToken');
  //     }
  //     catch(e){
  //       console.log(e);
  //     }

  //     dispatch({type:'LOGOUT'})
  //   },
  //   signUp: ()=>{
  //     // setUserToken('set');
  //     // setIsLoading(false);
  //   },

  // }),[])

  const [isLoading,setIsLoading]=useState(true);
  const [userToken,setUserToken]=useState(null);
  //let userToken=null;

  const authContext=useMemo(()=>({
    signIn: async (telephone,password)=>{
      // if(telephone =='119' && password=='pass')
      // {
        setUserToken('ishan');
        setIsLoading(false);
        try{
          userToken="ishan"
  
          await AsyncStorage.setItem('userToken', userToken)
  
          //console.log(userToken)
        }catch(e)
        {
          console.log("error",e);
        }
       

      // }else{
      //   alert('Username Or Password Invalid')
      // }
      
     // console.log(telephone,password);
    

     
    },
    signOut: async ()=>{
      setUserToken(null);
      setIsLoading(false);

      try{

        await AsyncStorage.removeItem('userToken')
      //  console.log(userToken)

      }catch(e){
        console.log(e)
      }

      

      
    },
    signUp: ()=>{
      setUserToken('set');
      setIsLoading(false);
    },

  }),[])


  useEffect(()=>{

    setTimeout(async()=>{

      const token=await AsyncStorage.getItem('userToken')
      console.log(token)
     setIsLoading(false);


    },1000);
  },[])

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
        

        { userToken !== null ?(
       

        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="PaymentScreen" component={PaymentScreen}/>
            
        </Drawer.Navigator>)
        :

        <LoginStack/>
        }
        

        </NavigationContainer>

    </AuthContext.Provider>

  

  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

 
});


