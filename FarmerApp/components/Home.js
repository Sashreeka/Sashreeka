import * as React from 'react';
import {FlatList,StatusBar,View, Text, StyleSheet,SafeAreaView,Image, ScrollView} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import fontAwsome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import categoriesData from '../assets/data/categoriesData';
import itemsData from '../assets/data/itemsData';
import colors from '../assets/colors/colors';

Feather.loadFont();

export default Home = ()=>{

    const renderCategoryItem=({ item })=>{
        return(
            // <View style={styles.categoriesListWrapper}>
            <View style={[styles.categoryItemWrapper, {
                backgroundColor:item.selected ? colors.secondaryT50 : colors.background,
                marginLeft: item.id==1 ? 20 : 0,
            },
            ]}>
               <Image source={item.image} style={styles.categoryItemImage}/>
               <Text style={styles.categoryItemTitle}>{item.title}</Text>
               <View style={styles.categorySelectWrapper}>
                   {/* <Feather
                   name="shevron-right"
                   size={8}
                   style={styles.categorySelectIcon}
                   /> */}
               </View>
            </View>
        );
    };

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

            {/* <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}
            key={Math.random}
            > */}
            {/* Search */}
            <View style={styles.searchWrapper}>
                <Feather name="search" size={16} color={colors.textDark}/>
                <View style={styles.search}>
                    <Text style={styles.searchText}>Search...</Text>
                </View>
            </View>

            {/* Categories */}
            <View style={styles.categoriesWrapper}>
                <Text style={styles.categoriesTitle}>Categories</Text>
                <View style={styles.categoriesListWrapper}>
                <FlatList
                data={categoriesData}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.id}
                horizontal={true}
                /> 
                
                </View> 
            </View>

            {/* items list */}
            <View style={styles.itemsWrapper}>
                <Text style={styles.itemsTitle}>Shop Items</Text>
                {itemsData.map((item)=>(
                     <View 
                     key={item.id}
                     style={[styles.itemsCardwrapper,
                     {
                         marginTop:item.id==1 ? 10 : 20,
                     }
                     ]}>
                         <View style={styles.itemCardWrapOuter}>
                            <View>
                                <View style={styles.itemWrapperMain}>
                                    <Text style={styles.itemTitleMain}>{item.title}</Text>  
                                </View>
                                <View style={styles.itemDescriptionWrapper}>
                                    <Text style={styles.itemDescription}>{item.description}</Text>
                                    <Text style={styles.itemUnitWeight}>{item.UnitWeight}</Text>
                                </View>
                                <View style={styles.itemADDbutton}>
                                    <Text>ADD<Feather name="plus" size={15} color='#000'/>
                                    </Text>
                                </View>
                            </View>
                            <View styles={styles.itemcardRight}>
                                <Image source={item.image} styles={styles.itemcardimage}/>
                            </View>
                         </View>
                         
                 </View>
                )   
                )}
            </View>
            {/* </ScrollView> */}
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
    searchWrapper:{
        paddingTop:20,
        paddingBottom:10,
        flexDirection:"row",
        alignItems:"center",  
        borderBottomColor:colors.textlight,
        borderBottomWidth:2,
        marginHorizontal:20,
    },
    search:{
        marginLeft:20,
    },
    searchText:{
        fontSize:15,
        color:colors.textlight,
    },
    categoriesWrapper:{
       marginTop:30,

    },
    categoriesTitle:{
        fontWeight:"bold",
        fontSize:20,
        paddingHorizontal:20,
    },

    categoriesListWrapper:{
        paddingTop:15,
        paddingBottom:20,
        // paddingLeft:20,
    },

    categoryItemWrapper:{
       backgroundColor:colors.secondaryT50,
       display:'flex',
       marginRight:20,
       borderRadius:20,
       width:130,
       padding:10,
       alignItems:"center",
       justifyContent:"center",
       shadowColor:"black",
       shadowOffset:{
           width:1,
           height:2,
       },
       shadowOpacity:0.05,
       shadowRadius:10,
       elevation:2,

    },

    categoryItemImage:{
        marginTop:25,
        alignSelf:"center",
        marginHorizontal:27,
    },

    categoryItemTitle:{
        display:"flex",
        textAlign:"center",
        fontSize:16,
        fontWeight:"600",
        marginTop:10,
        textTransform:'uppercase',
    },

    categorySelectWrapper:{
        height:30,
        alignSelf:"center",
        justifyContent:"center",
        
    },

    categoryItemimage:{

    },


    itemsWrapper:{
       paddingHorizontal:20,
    },

    itemsTitle:{
        fontSize:20,
        fontWeight:"bold",  
    },

    itemsCardwrapper:{
        backgroundColor:colors.background,
        borderRadius:15,
        paddingTop:20,
        paddingLeft:20,
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
    itemDescription:{

    },

    itemDescriptionWrapper:{
       marginTop:10,

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

    itemCardWrapOuter:{
        flexDirection:"row",
    
    },

    itemcardRight:{
        marginTop:20,
    },
    itemcardimage:{
        width:210,
        height:125,
        resizeMode:"contain",

    },

})