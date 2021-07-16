import React,{useState,useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
import ModalScreen from './ModalScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

const MainTabScreen = ()=>(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#fff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Today',
          tabBarColor:'#fff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="truck-delivery" color={color} size={30} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'#694fad',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
      /> */}

    {/* <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor:'#d02868',
          tabBarIcon: ({ color }) => (
            <Ionicons name="aperture" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>

);

// function ModalScreen(){
//   return (
//     <View>
//       <Text style={{fontSize:24}}>Hey am a model</Text>
//     </View>
//   );
// }

export default MainTabScreen;
const HomeStackScreen= ({navigation})=>(

    <HomeStack.Navigator screenOptions={{
     
      headerStyle:{
            backgroundColor:'#B7F785',
            
            
            
           
          },
          headerTitleAlign:'center',
          headerTintColor:'#217756',
          headerTitleStyle:{
            fontWeight:'bold'
          }
  
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} 
      options={{
        // headerLeft: ()=>(
        //   <Ionicons name="menu" size={25} color='#217756' backgroundColor='#009387' style={{marginLeft:10}}
          
        //   onPress={()=>navigation.openDrawer()} />
        // )
        headerShown:false
      }}
        
      />

    {/* <HomeStack.Screen name="ModalScreen" component={ModalScreen} 
      
        
      /> */}
     
    </HomeStack.Navigator>
  
  
  )
  
  
  const DetailsStackScreen= ({navigation})=>(
  
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
            backgroundColor:'#B7F785',
            
            
           
          },
          headerTitleAlign:'center',
          headerTintColor:'#217756',
          headerTitleStyle:{
            fontWeight:'bold'
          }
  
    }}>
      <DetailsStack.Screen name="Today Delivery" component={DetailsScreen} 
      
  
      options={{
        headerLeft: ()=>(
          <Ionicons name="menu" size={25} color='#217756' backgroundColor='#1f65ff' style={{marginLeft:5}}
          onPress={()=>navigation.openDrawer()} />
        ),
       
      

      }}
        
      />
      
     
    </DetailsStack.Navigator>
  
  
  )
  