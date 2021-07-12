import React,{useState,useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const MainTabScreen = ()=>(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'#009387',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor:'#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'#694fad',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={26} />
          ),
        }}
      />

    <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor:'#d02868',
          tabBarIcon: ({ color }) => (
            <Ionicons name="aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>

);

export default MainTabScreen;
const HomeStackScreen= ({navigation})=>(

    <HomeStack.Navigator screenOptions={{
      headerStyle:{
            backgroundColor:'#009387',
            
            
           
          },
          headerTitleAlign:'center',
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold'
          }
  
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} 
      options={{
        headerLeft: ()=>(
          <Ionicons name="menu" size={25} backgroundColor='#009387'
          
          onPress={()=>navigation.openDrawer()} />
        )
      }}
        
      />
     
    </HomeStack.Navigator>
  
  
  )
  
  
  const DetailsStackScreen= ({navigation})=>(
  
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
            backgroundColor:'#1f65ff',
            
            
           
          },
          headerTitleAlign:'center',
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold'
          }
  
    }}>
      <DetailsStack.Screen name="Details" component={DetailsScreen} 
  
      options={{
        headerLeft: ()=>(
          <Ionicons name="menu" size={25} backgroundColor='#1f65ff'
          onPress={()=>navigation.openDrawer()} />
        )
      }}
        
      />
     
    </DetailsStack.Navigator>
  
  
  )
  