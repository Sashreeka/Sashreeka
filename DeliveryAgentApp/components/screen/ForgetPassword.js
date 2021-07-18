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
import {Entypo} from '@expo/vector-icons';

import axios from 'axios';





export default function ForgetPassword() {


  const [collapsed,setCollapsed]=useState(true);
  const [details, setDetails]=useState([])

  const toggleExpanded = () => {
    setCollapsed( !collapsed);
  //  this.setState({ collapsed: !this.state.collapsed });
  console.log(collapsed);
  };
  
 
  

    // useEffect(()=>{

    //   axios.get('http://192.168.1.12:3001/api/order').then((response)=>{
    //   if(response)
    //   {
     
    //     setDetails(response.data);
    //     console.log(response.data)

       
     
    //   }else{
    //     console.log('error');
    //   }
    //  })

    // },[])







 



  
 //   const {} = this.state;
    const {container,header,headerText,content}=styles

    return (
      <View style={container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          


          <TouchableOpacity onPress={toggleExpanded}>
            <View style={header}>
              <Text style={headerText}>Polonnaruwa- Mr.P.B.N.Bandara</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed} align="center">
            <View style={content}>
            <Entypo name="calendar" size={24} color="black" />
              <Text>

              Sri Wiccrama Rajasinghe Mawatha, Polonnaruwa
              </Text>

              <Text>

              Compost Fertilizer 10kg x 50
              </Text>
              <Button
                title="Delivered"
                onPress={()=>{alert('Are you sure, You get the money')}}
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