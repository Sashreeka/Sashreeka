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

            <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}>
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
                     <View style={[styles.itemsCardwrapper,
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
            </ScrollView>
        </View>
        
    );
}
