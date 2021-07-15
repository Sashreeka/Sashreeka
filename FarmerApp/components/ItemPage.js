import React, { useState, useEffect} from 'react';
import {FlatList,StatusBar,View, Text, StyleSheet,SafeAreaView,Image, ScrollView} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import categoriesData from '../assets/data/categoriesData';
import itemsData from '../assets/data/itemsData';
import colors from '../assets/colors/colors';
import Axios from "axios";
import { Directions } from 'react-native-gesture-handler';
import photo from "../assets/images/bio1.png";

Feather.loadFont();


export default Main = ()=>{
    return(
        <View style={styles.container}>
            
            <StatusBar backgroundColor={colors.primary}/>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require("../assets/images/profileimg_girl.jpg")} style={styles.profileImage}/>
                    <Feather name="menu" size={24} color={colors.textDark}></Feather>
                </View>
                
            </SafeAreaView>

            {/* titles */}
            <View style={styles.titleView}>
                <Text style={styles.titlesTitle}>Organic Fertilizer</Text>
            </View>

            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}
            key={Math.random}
            >

                {/* put any thing you want */}
             <View style={styles.itemDetailcardWrapper}>
                 <View style={styles.itemImg}>
                 <Image source={photo} styles={styles.itemcardimage}/>
                 </View>
                 <View style={styles.detailsView}>
                    <Text style={styles.itemheader}>Bio Phos</Text>
                    <Text style={styles.itemheader}>Bio Phos</Text>
                    <Text style={styles.itemheader}>Bio Phos</Text>
                 </View>
            </View>
            <View style={styles.itemDetailcardWrapper2}>
                 <View style={styles.itemratingcardcontainer}>
                    <Text style={styles.topicBold}>Rating</Text>
                    <Text style={styles.textRegular}>4.0/5</Text>                
                 </View>
                <View style={styles.hr}/>
                 <View style={styles.itemratingcardcontainer}>
                     <Text style={styles.topicBold}>Comments</Text>
                 </View>
                 <View style={styles.hr}/>
                 <View style={styles.itemratingcardcontainer}>
                     <Text style={styles.topicBold}>Do you like to comment & rate ?</Text>
                 </View>
                 
            </View>    

            </ScrollView>
        </View>
        
    );
}



const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    headerWrapper:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        paddingTop:15,
        alignItems:"center",
        backgroundColor:colors.secondary,
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:40,
        
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:40,
        
    },
    titlesTitle:{
        // fontFamily:"Roboto-bold",
        fontSize:32,
        color:colors.textDark,
        paddingLeft:10,
    },
    titleView:{
        backgroundColor:colors.secondary,
        padding:10,
        paddingBottom:10,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
    },
    itemDetailcardWrapper:{
        backgroundColor:"white",
        margin:20,
        padding:20,
        marginBottom:5,
        flexDirection:"row",
        borderRadius:20,
        shadowColor:"black",
        shadowOffset:{
            width:1,
            height:2,
        },
        shadowOpacity:0.05,
        shadowRadius:10,
        elevation:2,
        // justifyContent:"space-between",
       
    },
    itemDetailcardWrapper2:{
        backgroundColor:"white",
        margin:20,
        paddingHorizontal:20,
        marginBottom:5,
        borderRadius:20,
        shadowColor:"black",
        shadowOffset:{
            width:1,
            height:2,
        },
        shadowOpacity:0.05,
        shadowRadius:10,
        elevation:2,
        // justifyContent:"space-between",
       
    },
    itemImg:{
        backgroundColor:"yellow",
    },
    detailsView:{
        backgroundColor:"green",
    },
    itemcardimage:{
        resizeMode: "contain",
            height: 100,
            width: 50,
    },
    ratingTopBar:{

    },
    topicBold:{
        fontWeight:"bold",
        paddingLeft:10,
    },
    itemratingcardcontainer:{
        paddingVertical:20,
    },
    hr:{
        borderBottomColor: '#DADADA',
        borderBottomWidth: 1, 
    },
    textRegular:{
        paddingTop:10,
        paddingLeft:10,
    },
})