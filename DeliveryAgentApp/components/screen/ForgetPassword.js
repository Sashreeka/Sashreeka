import React, { useState,useEffect } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
// import Constants from 'expo-constants';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';

import axios from 'axios';





export default function ForgetPassword() {


  const [collapsed,setCollapsed]=useState(true)

  const toggleExpanded = () => {
    setCollapsed( !collapsed);
  //  this.setState({ collapsed: !this.state.collapsed });
  console.log(collapsed);
  };
  
 

    useEffect(()=>{

      axios.get('http://192.168.1.12:3001/api/order').then((response)=>{
      if(response)
      {
     
     
      }else{
        console.log('error');
      }
     })

    },[])







 



  
 //   const {} = this.state;
    const {container,header,headerText,content}=styles

    return (
      <View style={container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          


          <TouchableOpacity onPress={toggleExpanded}>
            <View style={header}>
              <Text style={headerText}>Single Collapsible</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed} align="center">
            <View style={content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
              <Button
                title="click"
                onPress={()=>{console.log("Pressed")}}
              />
            </View>
          </Collapsible>
         
        </ScrollView>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 55,
  },

  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },





});