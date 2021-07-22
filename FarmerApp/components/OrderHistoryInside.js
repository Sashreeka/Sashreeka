import React, { useState, useEffect} from 'react';
import {FlatList,StatusBar,View, Text, StyleSheet,SafeAreaView,Image, ScrollView, TouchableOpacity} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwsome from "react-native-vector-icons/FontAwesome";
import categoriesData from '../assets/data/categoriesData';
import itemsData from '../assets/data/itemsData';
import colors from '../assets/colors/colors';
import Axios from "axios";
import { Directions } from 'react-native-gesture-handler';
import photo from "../assets/images/bio3.png";

import ViewOrderButton from "./buttons";

Feather.loadFont();


export default Main = ({navigation})=>{

    var getInitialState=() =>{
        return {
            color: 'orange',
          backgroundColor: 'rgba(0,0,0,.1)'
        }
      }

    _changeStyle=()=>{
        this.setstate({
            color:color,
            backgroundColor:backgroundColor
        })
    }

    
    const delivery_accepted_button=()=>{

    }

    const orderstatus=(flag)=>{
        if(flag===0){
            return(<Text style={styles.PendingDelivery}>Pending delivery</Text>);
        }else if(flag===1){
            return(<Text style={styles.outForDelivery}>Out for Delivery</Text>);
        }else if(flag===2){
            return(<Text style={styles.SuccessfulDelivery}>Successful delivery</Text>);
        }else{

        }
  }
    
    return(
        <View style={styles.container}>
            
            <StatusBar backgroundColor={colors.primary}/>
            <SafeAreaView>
                <View style={styles.headerWrapper}>
                    <Image source={require("../assets/images/profileimg_girl.jpg")} style={styles.profileImage}/>
                    {/* style={styles.profileImage} */}
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

            <View style={styles.pageTopicView}>
                <Text style={styles.pageTopic}>Order History</Text>
            </View>

            <View style={styles.itemDetailcardWrapper2}>

                <View style={styles.itemratingcardcontainer}>
                <View style={styles.center}>
                    
                        <View>
                            <Text>Summary</Text>    
                        </View>
                        <View>
                            <Text style={styles.topicBold}>Order ID: 112130000</Text>                        
                        </View>
                        <View style={styles.center}>
                            <Text style={styles.textRegular}>Date: 2021-06-21</Text> 
                            <Text style={styles.textRegular}>Payment Method: cash</Text>
                            <Text style={styles.textRegular}>Order Status:{orderstatus(1)} </Text> 
                            <TouchableOpacity className="accept_button" onPress={()=>_changeStyle()} >
                            <View>
                                <Text >Confirm Delivery by clicking :
                                <View style={{backgroundColor:"green",width:130,height:30, top:20, borderRadius:15, }}>
                                    <Text style={{paddingTop:3, color:"white", paddingLeft:5}}>Delivery Recieved</Text></View>
                                </Text>
                            </View>
                            </TouchableOpacity>                      
                        </View>
                       
                </View>
                    
                </View>
            </View>  

            <Text style={{paddingLeft:30, paddingTop:20,fontWeight:'bold'}}>Ordered Items List</Text>
            <View style={styles.itemDetailcardWrapper2}>
                <View style={{padding:20}}>
                        <View style={styles.itemCardWrapOuter}>
                            <View style={styles.itemcardLeft}>
                                <View style={styles.itemWrapperMain}>
                                    <Text style={styles.itemTitleMain} >Bio vermi Compost</Text>  
                                </View>
                                
                                <View>
                                    <Text style={styles.itemDescription}>Item unit: 4kg X 3 </Text>
                                </View>
                                <View>
                                    <Text style={styles.itemValue}>Rs.7608.00</Text>
                                </View>
                                <View>
                                    <Text style={styles.itemValueWithoutOffer}>Rs.8430.00</Text>
                                </View>
                                
                               
                            </View>
                            <View style={styles.itemcardRight}>
                                <Image source={{uri: `https://m.media-amazon.com/images/I/61NDpj1AUWL._SX466_.jpg` }} style={styles.itemcardimage} />
                            </View>
                         </View>
                    </View>
                </View>

                <View style={styles.itemDetailcardWrapper2}>
                <View style={{padding:20}}>
                        <View style={styles.itemCardWrapOuter}>
                            <View style={styles.itemcardLeft}>
                                <View style={styles.itemWrapperMain}>
                                    <Text style={styles.itemTitleMain} >Bio vermi Compost</Text>  
                                </View>
                                
                                <View>
                                    <Text style={styles.itemDescription}>Item unit: 4kg X 3 </Text>
                                </View>
                                <View>
                                    <Text style={styles.itemValue}>Rs.7608.00</Text>
                                </View>
                                <View>
                                    <Text style={styles.itemValueWithoutOffer}>Rs.8430.00</Text>
                                </View>
                                
                               
                            </View>
                            <View style={styles.itemcardRight}>
                                <Image source={{uri: `http://www.biopowerlanka.com/images/bio-gold.jpg` }} style={styles.itemcardimage} />
                            </View>
                         </View>
                    </View>
                </View>

















           
            {/* <View style={styles.itemDetailcardWrapper}>
                 <View style={styles.itemImg}>
                    <Image source={photo} style={styles.itemCardImage}/>
                 </View>
                 <View style={styles.detailsView}>
                    <Text style={styles.itemHeader}>Bio Phos</Text>
                    <Text style={styles.itemDetails}>RS.389.00</Text>
                    <Text style={styles.itemPrice}>Qty :</Text>
                 </View>
            </View> */}
            

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
    itemImg:{
        // backgroundColor:"yellow",
    },
    detailsView:{
        // backgroundColor:"green",
    },
    itemCardImage:{
        width:160,
        height:140,
        resizeMode:"contain",
        
    },

    itemHeader:{
        fontSize:22,
        fontWeight:"bold",
        paddingLeft:10,
        color:"#8d8d8d",

    },

    itemDetails:{
        fontSize:16,
        fontWeight:"bold",
        paddingLeft:10,
    },

    itemPrice:{
        fontSize:16,
        paddingLeft:10,
    },

    detailsView:{
        // backgroundColor:"green",
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

    ratingTopBar:{

    },
    topicBold:{
        fontWeight:"bold",
        // paddingLeft:10,
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
        // paddingLeft:10,
    },
    ratingStarTopBar:{
        flexDirection:"row",
        marginLeft:10,
        top:8,
    },
    ratingStarTopBarVal:{
    },
    ratingrow:{
        flexDirection:"row",
    },
    
    commentContainer:{
        // paddingTop:15,
    },
    oneCommentContainer:{
        flexDirection:"row",
        paddingTop:15,
    },
    commenterImage:{
        paddingRight:20,
    },
    commentfull:{
        top:3,
    },
    commentline:{
        color:"#000000",
        fontWeight:"600",
        fontSize:13,
    },
    commenter:{
        color:"#8C8C8C",
        fontSize:13,
    },


    pageTopicView:{
        display:'flex',
        alignItems:'center',
        paddingHorizontal:30,
        paddingVertical:10,
    },
    pageTopic:{
        color:"#217756",
        fontSize:20,
        fontWeight:"bold",

    },
    order:{
        paddingVertical:20,
        alignItems:'center',
    },
    outForDelivery:{
        color:"#63B75D",
        fontWeight:'bold',
    },

    PendingDelivery:{
        color:"#DDB218",
        fontWeight:'bold',
    },

    SuccessfulDelivery:{
        color:"#217756",
        fontWeight:'bold',
    },

    viewOrderButtonview:{
        paddingTop:10,
    },
    center:{
        alignItems:'center',
    },

    itemsWrapper:{
        paddingHorizontal:10,
        paddingVertical:10,
     },
 
     itemsTitle:{
         fontSize:20,
         fontWeight:"bold",  
     },
 
     itemsCardwrapper:{
         backgroundColor:colors.background,
         borderRadius:15,
         paddingTop:20,
         paddingLeft:10,
         paddingBottom:20,
         flexDirection:"row",
         shadowColor:"black",
         shadowOffset:{
             width:1,
             height:2,
         },
         shadowOpacity:0.05,
         shadowRadius:10,
         elevation:2,
 
     },
 
     itemWrapperMain:{
         flexDirection:"row",
         alignItems:"center",
 
     },
 
     itemTitleMain:{
         fontSize:20 ,
         color: colors.textlight,
         fontWeight:'700',
     },
 
 
     itemDescriptionWrapper:{
        marginTop:10,
        marginBottom:10,
 
     },
 
     itemDescription:{
         fontSize:14,
         color:colors.textDark,
        
     },
 
     itemUnitWeight:{
         fontSize:12,
         color:colors.textlight,
         marginTop:5,
     },
     itemADDbutton:{
         backgroundColor:colors.primary,
         width:150,
         alignItems:"center",
         justifyContent:"center",
         padding:10,
         borderRadius:15,
         
     },
     itemADDbuttonText:{
         color:"black",
         fontWeight:"bold",
     },
 
     itemCardWrapOuter:{
         // backgroundColor:"red",
         flexDirection:"row",
         flexWrap:'wrap',
         marginRight:0,
         justifyContent:"space-around",
     },
     
     itemcardLeft:{
         // backgroundColor:'yellow',
         width:"65%",
     },
     itemcardRight:{
         // backgroundColor:'blue',
         width:"35%",
         alignItems:"flex-end",
     },
     
     itemcardimage:{
         width:130,
         height:150,
         resizeMode:"contain",
         margin:10,
     
     },
 
     itemValue:{
         fontSize:26,
         fontWeight:"bold",
     },
     itemValueWithoutOffer:{
         fontSize:16,
         color:"red",
         textDecorationLine: 'line-through', 
         textDecorationStyle: 'solid'
     }
     

})