import React, { useState, useEffect} from 'react';
import {FlatList,StatusBar,View, Text, StyleSheet,SafeAreaView,Image, ScrollView} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwsome from "react-native-vector-icons/FontAwesome";
import colors from '../assets/colors/colors';


const ViewOrderButton = ()=>{
    return(
    <View style={{
        backgroundColor:"#217756",
        paddingHorizontal:14,
        paddingVertical:4,
        borderRadius:15,
        color:"#ffffff",
    }}>
        <Text style={{color:"#ffffff"}}>View Order</Text>
    </View>
    );
}

export default ViewOrderButton;



