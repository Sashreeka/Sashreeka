import React,{useState} from 'react';
import { StyleSheet, 
    Text, 
    View, 
    FlatList,
    Image,
    TouchableOpacity,
    Alert,
    Modal,
    Button ,
    TouchableRipple,
    Dimensions,
    ScrollView,
    
  } from 'react-native';

  import {
    Switch
  }from 'react-native-paper';

  import * as Animatable from 'react-native-animatable';
  import { LinearGradient } from 'expo-linear-gradient';
  import { Ionicons,Feather,FontAwesome,FontAwesome5,AntDesign } from '@expo/vector-icons';

  import Collapsible from 'react-native-collapsible';
  const deviceHeight=Dimensions.get('window').height
  const deviceWidth=Dimensions.get('window').width

  import {Entypo} from '@expo/vector-icons';

  const DetailsScreen = ({navigation})=>{

    const [collapsed,setCollapsed]=useState(true);
    const [details, setDetails]=useState([])
  
    const toggleExpanded = () => {
      setCollapsed( !collapsed);
    //  this.setState({ collapsed: !this.state.collapsed });
    console.log(collapsed);
    };


   
    return(
      <ScrollView>
      <View style={{flex:1, backgroundColor:'#f9f9fb'}}>
        <View style={styles.header}>
          <Image
          style={styles.map}
            source={require('../../assets/map.png')}
          />
        </View>
        <View style={styles.footer}>





            <View style={styles.todayFirstRow}>
              <Text style={styles.todayFirstRowTitle} >Today</Text>
              <Text style={styles.todayFirstRowDel}>Deliveries</Text>
              <View
              style={styles.todayFirstRowIcon}
             >
              <Text>3</Text>

              </View>
             

               
            

            </View>

            <View style={styles.todaySecondRow}>
               


            <Animatable.Image
            animation="fadeIn"
              source={require('../../assets/vector.png')}
              style={styles.todaySecondRowImg1}
              
            />

            <View style={styles.todaySecondRowNew}>

            <Animatable.Image
              animation="bounce"
              source={require('../../assets/line.png')}
              style={styles.todaySecondRowImg2}
            />
              <View style={styles.todaySecondRowNewText}>
                  <Text style={styles.todaySecondRowNewText1}>Colombo</Text>
                  <Text style={styles.todaySecondRowNewText2}>Galle</Text>
                   <Text style={styles.todaySecondRowNewText3}>Matara</Text>
              </View>

            </View>

            </View>

              
            <ScrollView>


            
            <Animatable.View
                  animation="fadeInUpBig"
                 

                  >
                    <TouchableOpacity onPress={toggleExpanded}>
                      <View style={styles.headerList}>
                        <Text style={styles.headerText}>Colombo- Sugath Bandara</Text>
                      </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={collapsed} align="center">
                      <View style={styles.content}>

                      <View>

                      <Entypo name="calendar" size={65} color="#217756"  />
                      <Text style={{
                        marginLeft:20,
                        marginTop:-40,
                        fontSize:14,
                        fontWeight:'bold',

                      }}>Jul</Text>
                      <Text style={{
                        marginLeft:22,
                       marginTop:-5,
                        fontSize:12,
                      }}>24</Text>

                      </View>

                      
                       <View style={{flexDirection:'column'}}>
                       <Text style={{color:'#8C8C8C',fontSize:13,marginLeft:10,marginTop:10,textDecorationLine: 'underline',textDecorationColor:'#000'}}>Sri Wiccrama Rajasinghe Mawatha, Colombo</Text>
                       <View style={{flexDirection:'row'}}>
                         <Text style={{color:'#000',fontSize:13,marginLeft:10,marginTop:0,}}>Tel:</Text>
                         <Text style={{color:'#000',fontSize:13,marginLeft:10,marginTop:0,}}>0715822452</Text>

                       </View>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0,fontWeight:'bold'}}>Order Details</Text>

                       <View style={styles.order}>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0}}>1.Compost Fertilizer</Text>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0}}>10kg x 5</Text>

                       </View>
                       <View style={styles.order}>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0}}>2.Compost Fertilizer</Text>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0}}>10kg x 5</Text>

                       </View>

                       <View style={styles.order}>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0}}>3.Compost Fertilizer</Text>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0}}>10kg x 5</Text>

                       </View>



                       
                       <View style={{flexDirection:'row'}}>
                         <Text style={{color:'#000',fontSize:13,marginLeft:10,marginTop:0}}>Total Amount(Rs):</Text>
                         <Text style={{color:'#000',fontSize:13,marginLeft:10,marginTop:0,}}>750</Text>
                         {/* <View
                         style={{
                           borderRadius:10,
                           backgroundColor:'#fff',
                           color:'#217756',
                           marginLeft:50,
                           paddingLeft:10,
                           paddingRight:10,
                         }}>
                           <Text>Paid</Text>
                         </View> */}

                       </View>


                  <LinearGradient
                     colors={['#80B953','#2C9984']}
                    // colors={['#217756','#FFFFFF']}
                    style={styles.orderbtn}
                    >
                     <TouchableOpacity
                      >

                        <Text
                        style={{color:'#fff'}}>Delivered</Text>
                        </TouchableOpacity>
                    


                    </LinearGradient>

                      
                      
                       
                      
                       
                       </View>
                      
                        
                      </View>
                    </Collapsible>

                    </Animatable.View>





                    <Animatable.View
                  animation="fadeInUpBig"
                 

                  >
                    <TouchableOpacity onPress={toggleExpanded}>
                      <View style={styles.headerList}>
                        <Text style={styles.headerText}>Galle- Kamal Jayasekara</Text>
                      </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={collapsed} align="center">
                      <View style={styles.content}>

                      <View>

                      <Entypo name="calendar" size={65} color="#217756"  />
                      <Text style={{
                        marginLeft:20,
                        marginTop:-40,
                        fontSize:14,
                        fontWeight:'bold',

                      }}>Jul</Text>
                      <Text style={{
                        marginLeft:22,
                       marginTop:-5,
                        fontSize:12,
                      }}>24</Text>

                      </View>

                      
                       <View style={{flexDirection:'column'}}>
                       <Text style={{color:'#8C8C8C',fontSize:13,marginLeft:10,marginTop:10,textDecorationLine: 'underline',textDecorationColor:'#000'}}>Sri Wiccrama Rajasinghe Mawatha, Galle</Text>
                       <View style={{flexDirection:'row'}}>
                         <Text style={{color:'#000',fontSize:13,marginLeft:10,marginTop:0,}}>Tel:</Text>
                         <Text style={{color:'#000',fontSize:13,marginLeft:10,marginTop:0,}}>0715822452</Text>

                       </View>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0,fontWeight:'bold'}}>Order Details</Text>

                       <View style={styles.order}>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0}}>1.Compost Fertilizer</Text>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0}}>10kg x 5</Text>

                       </View>
                     



                       
                       <View style={{flexDirection:'row'}}>
                         <Text style={{color:'#000',fontSize:13,marginLeft:10,marginTop:0}}>Total Amount(Rs):</Text>
                         <Text style={{color:'#000',fontSize:13,marginLeft:10,marginTop:0,}}>750</Text>
                         {/* <View
                         style={{
                           borderRadius:10,
                           backgroundColor:'#fff',
                           color:'#217756',
                           marginLeft:50,
                           paddingLeft:10,
                           paddingRight:10,
                         }}>
                           <Text>Paid</Text>
                         </View> */}

                       </View>


                  <LinearGradient
                     colors={['#80B953','#2C9984']}
                    // colors={['#217756','#FFFFFF']}
                    style={styles.orderbtn}
                    >
                     <TouchableOpacity
                      >

                        <Text
                        style={{color:'#fff'}}>Delivered</Text>
                        </TouchableOpacity>
                    


                    </LinearGradient>

                      
                      
                       
                      
                       
                       </View>
                      
                        
                      </View>
                    </Collapsible>

                    </Animatable.View>





                    <Animatable.View
                  animation="fadeInUpBig"
                 

                  >
                    <TouchableOpacity onPress={toggleExpanded}>
                      <View style={styles.headerList}>
                        <Text style={styles.headerText}>Matara- Malitha Madushan</Text>
                      </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={collapsed} align="center">
                      <View style={styles.content}>

                      <View>

                      <Entypo name="calendar" size={65} color="#217756"  />
                      <Text style={{
                        marginLeft:20,
                        marginTop:-40,
                        fontSize:14,
                        fontWeight:'bold',

                      }}>Jul</Text>
                      <Text style={{
                        marginLeft:22,
                       marginTop:-5,
                        fontSize:12,
                      }}>24</Text>

                      </View>

                      
                       <View style={{flexDirection:'column'}}>
                       <Text style={{color:'#8C8C8C',fontSize:13,marginLeft:10,marginTop:10,textDecorationLine: 'underline',textDecorationColor:'#000'}}>Sri Wiccrama Rajasinghe Mawatha, Matara</Text>
                       <View style={{flexDirection:'row'}}>
                         <Text style={{color:'#000',fontSize:13,marginLeft:10,marginTop:0,}}>Tel:</Text>
                         <Text style={{color:'#000',fontSize:13,marginLeft:10,marginTop:0,}}>0715822452</Text>

                       </View>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0,fontWeight:'bold'}}>Order Details</Text>

                       <View style={styles.order}>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0}}>1.Compost Fertilizer</Text>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0}}>10kg x 5</Text>

                       </View>
                       <View style={styles.order}>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0}}>2.Bio Fertilizer</Text>
                       <Text style={{color:'#000000',fontSize:13,marginLeft:10,marginTop:0}}>10kg x 5</Text>

                       </View>




                       
                       <View style={{flexDirection:'row'}}>
                         <Text style={{color:'#000',fontSize:13,marginLeft:10,marginTop:0}}>Total Amount(Rs):</Text>
                         <Text style={{color:'#000',fontSize:13,marginLeft:10,marginTop:0,}}>750</Text>
                         {/* <View
                         style={{
                           borderRadius:10,
                           backgroundColor:'#fff',
                           color:'#217756',
                           marginLeft:50,
                           paddingLeft:10,
                           paddingRight:10,
                         }}>
                           <Text>Paid</Text>
                         </View> */}

                       </View>


                  <LinearGradient
                     colors={['#80B953','#2C9984']}
                    // colors={['#217756','#FFFFFF']}
                    style={styles.orderbtn}
                    >
                     <TouchableOpacity
                      >

                        <Text
                        style={{color:'#fff'}}>Delivered</Text>
                        </TouchableOpacity>
                    


                    </LinearGradient>

                      
                      
                       
                      
                       
                       </View>
                      
                        
                      </View>
                    </Collapsible>

                    </Animatable.View>





                 

                    </ScrollView>  
              

           







          
            
         


        </View>


      
      


    
       
                       
       
      </View>

      </ScrollView>
    );
  }
  export default DetailsScreen;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    header:{
      flex:2,

    },
    map:{

      width:'100%',

    

    },
    order:{
      flexDirection:'row',
      borderRadius:10,
      backgroundColor:'#fff',
      marginLeft:30,
      marginRight:50,
      marginBottom:5,



    },
    orderbtn:{

      backgroundColor:'red',
      borderRadius:20,
      width:120,
      padding:5,
      alignItems:'center',
      marginLeft:125,
      marginTop:7,
      marginBottom:10,


    },
    footer:{
      flex:3,
      backgroundColor:'#fff',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      marginTop:-70,
      marginBottom:110,

     



    },

    txtSize:{
      fontSize:20,
    },


     todayWrapper:{
      //  backgroundColor:colors.secondaryT50,
        display:'flex',
        // marginRight:20,
        borderRadius:20,
        width:370,
        padding:10,
        height:110,
        marginStart:20,
      
       
        // alignItems:"center",
        // justifyContent:"center",
        shadowColor:"black",
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowOpacity:0.05,
        shadowRadius:20,
        elevation:2,
  
     },

     todayFirstRow:{
       flexDirection:'row',
       marginTop:17,
       marginLeft:40,

      

     },
     todayFirstRowTitle:{
       color:'#217756',
       fontSize:18,
       fontWeight:'bold',
       marginLeft:-10,
      
       
     },
     todayFirstRowDel:{
      color:'#217756',
      fontSize:16,
      marginStart:180,


     },
     todayFirstRowIcon:{
      marginStart:10,
      alignItems:'center', 
      justifyContent:'center',  
      backgroundColor:'#F7AF93',     
      width:25,
      height:21, 
      marginTop:2,
      borderRadius:21, 
     },
     todaySecondRow:{
       flexDirection:"row",
       marginTop:20,
       marginLeft:100,
       marginBottom:30,
       
     },
     todaySecondRowNew:{

      flexDirection:'column'
     },

     todaySecondRowNewText:{

      flexDirection:'row',
     
     },
     todaySecondRowImg1:{
       marginStart:-70,
     },
     todaySecondRowImg2:{
      marginStart:50,
    },
    todaySecondRowNewText1:{
      marginLeft:40,
      color:'#217756'
    },
    todaySecondRowNewText2:{
      marginLeft:20,
      color:'#217756',
    },
    todaySecondRowNewText3:{
      marginLeft:40,
      color:'#217756',
    },

    DeliveryItemWrapper:{

       //  backgroundColor:colors.secondaryT50,
       display:'flex',
       // marginRight:20,
       borderRadius:20,
       width:174,
       padding:10,
       height:115,
       marginStart:20,
       marginTop:40,
     
      
       // alignItems:"center",
       // justifyContent:"center",
       shadowColor:"black",
       shadowOffset:{
           width:1,
           height:1,
       },
       shadowOpacity:0.05,
       shadowRadius:20,
       elevation:2,

    },
    DeliveryItemWrapperTitle1:{
      color:'#217756',
       fontSize:18,
       fontWeight:'bold',
      
       marginLeft:25,



    },
    DeliveryItemWrapperTitle2:{
      color:'#217756',
       fontSize:18,
       fontWeight:'bold',
      
       marginLeft:30,



    },
    DeliveryItemWrapperIcon1:{
      marginTop:2,
      marginLeft:45,

    },
    DeliveryItemWrapperIcon2:{

      marginTop:2,
      marginLeft:47,
    },
    DeliveryItemWrappersunTitle1:{
      fontSize:12,
      fontWeight:'bold',
      marginLeft:8,


    },
    DeliveryItemWrappersunTitle2:{
      fontSize:12,
      color:'#C4C4C4',
      marginLeft:20,

    },
    headerList: {
      backgroundColor: '#F0F0F0',
      padding: 20,
      borderRadius:20,
      borderColor:"#000",
      margin:10,

    },
    headerText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      color:'#000000',
      fontWeight:'bold',

    },
    historyTText: {
     
      fontSize: 16,
      fontWeight: '500',
      color:'#000000',
      fontWeight:'bold',
      marginLeft:10,
      marginTop:5,

    },
    content: {
      padding: 10,
      marginLeft:5,
      marginRight:5,
      marginTop:2,
      paddingTop:10,
      backgroundColor:'#F0F0F0',
      borderRadius:15,
      
      
      // borderBottomLeftRadius:20,
      // borderBottomRightRadius:20,
      flexDirection:'row',
    },
  


    
   
   
  });
  //#80B953, #2C9984


// import * as React from 'react';
// import {FlatList,StatusBar,View, Text, StyleSheet,SafeAreaView,Image, ScrollView} from "react-native";







// export default Home = ()=>{

//     const renderCategoryItem=({ item })=>{
//         return(
//             // <View style={styles.categoriesListWrapper}>
//             <View style={[styles.categoryItemWrapper, {
//                 backgroundColor:item.selected ? colors.secondaryT50 : colors.background,
//                 marginLeft: item.id==1 ? 20 : 0,
//             },
//             ]}>
//                <Image source={item.image} style={styles.categoryItemImage}/>
//                <Text style={styles.categoryItemTitle}>{item.title}</Text>
//                <View style={styles.categorySelectWrapper}>
//                    {/* <Feather
//                    name="shevron-right"
//                    size={8}
//                    style={styles.categorySelectIcon}
//                    /> */}
//                </View>
//             </View>
//         );
//     };

//     return(
//         <View style={styles.container}>
            
//             <StatusBar backgroundColor={colors.primary}/>
//             <SafeAreaView>
//                 <View style={styles.headerWrapper}>
//                     <Image source={require("../assets/images/profileimg_girl.jpg")} style={styles.profileImage}/>
//                     <Feather name="menu" size={24} color={colors.textDark}></Feather>
//                 </View>
                
//             </SafeAreaView>
//             {/* titles */}
//             <View style={styles.titleView}>
//                 <Text style={styles.titlesTitle}>Organic Fertilizer</Text>
//             </View>

//             {/* <ScrollView contentInsetAdjustmentBehavior="automatic" showsVerticalScrollIndicator={false}
//             key={Math.random}
//             > */}
//             {/* Search */}
//             <View style={styles.searchWrapper}>
//                 <Feather name="search" size={16} color={colors.textDark}/>
//                 <View style={styles.search}>
//                     <Text style={styles.searchText}>Search...</Text>
//                 </View>
//             </View>

//             {/* Categories */}
//             <View style={styles.categoriesWrapper}>
//                 <Text style={styles.categoriesTitle}>Categories</Text>
//                 <View style={styles.categoriesListWrapper}>
//                 <FlatList
//                 data={categoriesData}
//                 renderItem={renderCategoryItem}
//                 keyExtractor={item => item.id}
//                 horizontal={true}
//                 /> 
                
//                 </View> 
//             </View>

//             {/* items list */}
//             <View style={styles.itemsWrapper}>
//                 <Text style={styles.itemsTitle}>Shop Items</Text>
//                 {itemsData.map((item)=>(
//                      <View 
//                      key={item.id}
//                      style={[styles.itemsCardwrapper,
//                      {
//                          marginTop:item.id==1 ? 10 : 20,
//                      }
//                      ]}>
//                          <View style={styles.itemCardWrapOuter}>
//                             <View>
//                                 <View style={styles.itemWrapperMain}>
//                                     <Text style={styles.itemTitleMain}>{item.title}</Text>  
//                                 </View>
//                                 <View style={styles.itemDescriptionWrapper}>
//                                     <Text style={styles.itemDescription}>{item.description}</Text>
//                                     <Text style={styles.itemUnitWeight}>{item.UnitWeight}</Text>
//                                 </View>
//                                 <View style={styles.itemADDbutton}>
//                                     <Text>ADD<Feather name="plus" size={15} color='#000'/>
//                                     </Text>
//                                 </View>
//                             </View>
//                             <View styles={styles.itemcardRight}>
//                                 <Image source={item.image} styles={styles.itemcardimage}/>
//                             </View>
//                          </View>
                         
//                  </View>
//                 )   
//                 )}
//             </View>
//             {/* </ScrollView> */}
//         </View>
        
//     );
// }



// const styles=StyleSheet.create({
//     container:{
//         flex:1,
//     },
//     headerWrapper:{
//         flexDirection:"row",
//         justifyContent:"space-between",
//         paddingHorizontal:20,
//         paddingTop:15,
//         alignItems:"center",
//         backgroundColor:colors.secondary,
//     },
//     profileImage:{
//         width:40,
//         height:40,
//         borderRadius:40,
        
//     },
//     profileImage:{
//         width:40,
//         height:40,
//         borderRadius:40,
        
//     },
//     titlesTitle:{
//         // fontFamily:"Roboto-bold",
//         fontSize:32,
//         color:colors.textDark,
//         paddingLeft:10,
//     },
//     titleView:{
//         backgroundColor:colors.secondary,
//         padding:10,
//         paddingBottom:10,
//         borderBottomLeftRadius:40,
//         borderBottomRightRadius:40,
//     },
//     searchWrapper:{
//         paddingTop:20,
//         paddingBottom:10,
//         flexDirection:"row",
//         alignItems:"center",  
//         borderBottomColor:colors.textlight,
//         borderBottomWidth:2,
//         marginHorizontal:20,
//     },
//     search:{
//         marginLeft:20,
//     },
//     searchText:{
//         fontSize:15,
//         color:colors.textlight,
//     },
//     categoriesWrapper:{
//        marginTop:30,

//     },
//     categoriesTitle:{
//         fontWeight:"bold",
//         fontSize:20,
//         paddingHorizontal:20,
//     },

//     categoriesListWrapper:{
//         paddingTop:15,
//         paddingBottom:20,
//         // paddingLeft:20,
//     },

//     categoryItemWrapper:{
//        backgroundColor:colors.secondaryT50,
//        display:'flex',
//        marginRight:20,
//        borderRadius:20,
//        width:130,
//        padding:10,
//        alignItems:"center",
//        justifyContent:"center",
//        shadowColor:"black",
//        shadowOffset:{
//            width:1,
//            height:2,
//        },
//        shadowOpacity:0.05,
//        shadowRadius:10,
//        elevation:2,

//     },

//     categoryItemImage:{
//         marginTop:25,
//         alignSelf:"center",
//         marginHorizontal:27,
//     },

//     categoryItemTitle:{
//         display:"flex",
//         textAlign:"center",
//         fontSize:16,
//         fontWeight:"600",
//         marginTop:10,
//         textTransform:'uppercase',
//     },

//     categorySelectWrapper:{
//         height:30,
//         alignSelf:"center",
//         justifyContent:"center",
        
//     },

//     categoryItemimage:{

//     },


//     itemsWrapper:{
//        paddingHorizontal:20,
//     },

//     itemsTitle:{
//         fontSize:20,
//         fontWeight:"bold",  
//     },

//     itemsCardwrapper:{
//         backgroundColor:colors.background,
//         borderRadius:15,
//         paddingTop:20,
//         paddingLeft:20,
//         paddingBottom:20,
//         flexDirection:"row",
//         shadowColor:"black",
//         shadowOffset:{
//             width:1,
//             height:2,
//         },
//         shadowOpacity:0.05,
//         shadowRadius:10,
//         elevation:2,

//     },

//     itemWrapperMain:{
//         flexDirection:"row",
//         alignItems:"center",

//     },

//     itemTitleMain:{
//         fontSize:20 ,
//         color: colors.textlight,
//         fontWeight:'700',
//     },
//     itemDescription:{

//     },

//     itemDescriptionWrapper:{
//        marginTop:10,

//     },

//     itemDescription:{
//         fontSize:14,
//         color:colors.textDark,
//     },

//     itemUnitWeight:{
//         fontSize:12,
//         color:colors.textlight,
//         marginTop:5,
//     },
//     itemADDbutton:{
//         backgroundColor:colors.primary,
//         width:150,
//         alignItems:"center",
//         justifyContent:"center",
//         padding:10,
//         borderRadius:15,
//     },

//     itemCardWrapOuter:{
//         flexDirection:"row",
    
//     },

//     itemcardRight:{
//         marginTop:20,
//     },
//     itemcardimage:{
//         width:210,
//         height:125,
//         resizeMode:"contain",

//     },

// })