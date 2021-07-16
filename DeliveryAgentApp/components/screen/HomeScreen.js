import React,{createRef, useState, useEffect} from 'react';
import { StyleSheet, 
    Text, 
    View, 
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Alert,
    
    Button ,
    ScrollView,
    StatusBar,
    TouchableWithoutFeedback,
    Dimensions,
    ImageBackground
    
   
  } from 'react-native';

  import * as Animatable from 'react-native-animatable';
  import Modal from 'react-native-modal';

  import MapView from 'react-native-maps';

  import axios from 'axios';
  import { Ionicons,Feather,FontAwesome,FontAwesome5 } from '@expo/vector-icons';
  import Slider from '@react-native-community/slider';

  import DetailsScreen from './DetailsScreen';

  //import Animatable from 'react-native-animatable';

  //import { ModalScreen } from './ModalScreen';
  import {  
   
    TouchableRipple,
    Switch 
  } from 'react-native-paper';



  const deviceHeight=Dimensions.get('window').height

const HomeScreen = ({navigation})=>{

  const [orderList,setOrderList]=useState([]);

  useEffect(()=>{
    axios.get('http://192.168.1.12:3001/api/order').then((response)=>{
      if(response)
      {
       console.log(response.data);
       setOrderList(response.data)
      }else{
        console.log('error');
      }
     })
  },[])

  const data=[
    {
      'id':'1',
      'name':'ishan',
      'age':23,
      'image':'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png',
    },
    {
      'id':'2',
      'name':'ishan',
      'age':23,
      'image':'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png',
    },
    {
      'id':'3',
      'name':'ishan',
      'age':23,
      'image':'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png',
    },
    {
      'id':'4',
      'name':'ishan',
      'age':23,
      'image':'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png'
    },
    {
      'id':'5',
      'name':'ishan',
      'age':23,
      'image':'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png'
    },
    {
      'id':'6',
      'name':'ishan',
      'age':23,
      'image':'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png'
    },
    {
      'id':'7',
      'name':'ishan',
      'age':23,
      'image':'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png'
    },
    {
      'id':'8',
      'name':'ishan',
      'age':23,
      'image':'https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png'
    },
   

  ]




  // let popupRef=createRef()

  // const onShowPopup =()=>{
  //   popupRef.show()
  // }

  // const onClosePopup = ()=>{
  //   popupRef.close()
  // }



  const [openModal,setOpenModal]=useState(false);
  const [openModal1,setOpenModal1]=useState(false);
    return(
      <ScrollView>
      <View style={styles.container}>

      <View style={styles.header}>

          <Ionicons name="menu" size={25} color='#217756'  style={{marginLeft:5,marginTop:5}}
              onPress={()=>navigation.openDrawer()} />

          <TouchableRipple>
               <View style={{flexDirection:'row',marginStart:190,marginTop:10,}}>
                   <Text style={{color:'#217756',fontWeight:'bold',fontSize:16}}>Available</Text>
                       <View style={{

                         marginStart:6,
                         marginTop:-2,
                       }} pointerEvents="none">
                             <Switch/>
                        </View>
                </View>
            </TouchableRipple>
          <Image
          style={styles.profileImage}
            source={require('../../assets/ishan.png')}
           
          />

    </View>
     


     <ScrollView horizontal={true}
     style={{
      marginTop:50,
     }}
     >
       <View style={[styles.categoryItemWrapper,{
          backgroundColor:  '#f9f9fb',
          marginStart:15,
         

       }
            ]}>
             <ImageBackground source={require('../../assets/d.png')} resizeMode="cover" style={styles.image}/>
                  {/* <Text style={styles.text}>Inside</Text>
            </ImageBackground> */}
               {/* <Image source={require('../../assets/d.png')} style={styles.categoryItemImage}/> */}
               <Text style={styles.categoryItemTitle}>title</Text>


            </View>
            <View style={[styles.categoryItemWrapper, {
                backgroundColor:  '#f9f9fb',
         
            },
            ]}>
               {/* <Image source={require('../../assets/logo.png')} style={styles.categoryItemImage}/> */}
               <Text style={styles.categoryItemTitle}>title</Text>
               

            </View>

            <View style={[styles.categoryItemWrapper, {
                backgroundColor:  '#f9f9fb',
          
            },
            ]}>
               {/* <Image source={require('../../assets/logo.png')} style={styles.categoryItemImage}/> */}
               <Text style={styles.categoryItemTitle}>title</Text>
              

            </View>

            <View style={[styles.categoryItemWrapper, {
                backgroundColor:  '#f9f9fb',
           //     marginLeft: item.id==1 ? 20 : 0,
            },
            ]}>
               {/* <Image source={require('../../assets/logo.png')} style={styles.categoryItemImage}/> */}
               <Text style={styles.categoryItemTitle}>title</Text>
            

            </View>


       </ScrollView>

       <TouchableOpacity
       onPress={()=>{
         navigation.navigate('DetailsScreen');
       }}
       >

       <View style={[styles.todayWrapper, {
                backgroundColor:  '#fff',
                marginTop:-30,
               // justifyContent:'center',
                alignItems:'center',
                marginLeft:18
          
            },
            ]}>



            <View style={styles.todayFirstRow}>
              <Text style={styles.todayFirstRowTitle} >Today</Text>
              <Text style={styles.todayFirstRowDel}>Deliveries</Text>
              <View
              style={styles.todayFirstRowIcon}
             >
              <Text>9</Text>

              </View>
             

               
            

            </View>

            <View style={styles.todaySecondRow}>
                 {/* <Image source={require('../../assets/logo.png')} style={styles.categoryItemImage}/> */}


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

         
               {/* <Slider
                style={{width: "90%", height: 20}}
                minimumValue={1}
                maximumValue={100}
                minimumTrackTintColor="#217756"
                maximumTrackTintColor="#000000"
              />
               <Text style={styles.categoryItemTitle}>title</Text> */}

            </View>

              
              
              

            </View>




       </TouchableOpacity>
                  
       


            <ScrollView horizontal={true}>
                <TouchableOpacity  onPress={()=>
          //  navigation.navigate("ModalScreen")
          setOpenModal(true)
          }>
                    <View style={[styles.DeliveryItemWrapper, {
                              backgroundColor:  '#f9f9fb',
                        //     marginLeft: item.id==1 ? 20 : 0,
                          },
                          ]}>
                            {/* <Image source={require('../../assets/logo.png')} style={styles.categoryItemImage}/> */}
                            <Text style={styles.DeliveryItemWrapperTitle1}>UPCOMING</Text>
                            <FontAwesome5 name="box-open" size={44} color="#217756" 
                               style={styles.DeliveryItemWrapperIcon1}
                            />
                            <Text style={styles.DeliveryItemWrappersunTitle1}>Quick Delivery- 23 July</Text>

                    </View>
                    </TouchableOpacity>   

                  <TouchableOpacity
                          onPress={()=>
                  //  navigation.navigate("ModalScreen")
                  setOpenModal1(true)
                  }
                  >            

                    <View style={[styles.DeliveryItemWrapper, {
                            backgroundColor: '#f9f9fb',
                      
                        },
                        ]}>
                          
                          <Text style={styles.DeliveryItemWrapperTitle2}>HISTORY</Text>
                          <FontAwesome name="history" size={44} color="#217756" 
                            style={styles.DeliveryItemWrapperIcon2}
                          />
                          <Text style={styles.DeliveryItemWrappersunTitle2}>Previous Deliveries</Text>

                    </View>

                    </TouchableOpacity>               
              </ScrollView>

         
        {/* <Button title="go to details Screen"
          onPress={()=>
          //  navigation.navigate("ModalScreen")
          setOpenModal(true)
          }
        />
        <Button title="go to 2nd screen Screen"
          onPress={()=>
          //  navigation.navigate("ModalScreen")
          setOpenModal1(true)
          }
        /> */}





           <Modal visible={openModal} 
          //  customBackdrop={<View style={{flex: 1}} />}
           onBackdropPress={() => setOpenModal(false)}
           
           >
              {/* <Animatable.View animation="fadeInDownBig" style={{flex:1,maxHeight:deviceHeight* 0.6, marginTop:180, justifyContent:"flex-end",borderTopLeftRadius:10,}}> */}
              <Animatable.View animation="fadeInUpBig" style={{flex:1,maxHeight:deviceHeight* 0.6, marginTop:220, marginBottom:-28, justifyContent:"flex-end",borderTopLeftRadius:10,}}>

              <FlatList
                data={orderList}
                
                renderItem={({item})=>{
                  const seperate=item.item.split(', ');
                       console.log(seperate)
                  return <View style={styles.flatItem} key={item.telephone}>
                      <View>

                      <Image
                      style={{width:100, height:100}}
                        source={require('../../assets/ishan.png')}
                      />
                      <Text>{item.city}-{item.customer_name}</Text>
                      <Text>{item.address}</Text>
                      <Text>{item.telephone}</Text>
                      {/* <Text>{item.item}</Text> */}
                      {
                        seperate.map((product,index) =>
                      {
                        return   <Text key={index}>{product}</Text>
                      }
                      )
                      }
                    
                      
                    

                      </View>
                      <View>
                      <Text>{item.name} {item.age}</Text>
                      </View>

                  </View>
                }}
              />
              {/* <Button title="back"
                onPress={()=>setOpenModal(false)}
              /> */}
              </Animatable.View>
            </Modal>


            <Modal visible={openModal1}>
              <View style={{maxHeight:deviceHeight* 0.4}}>
              <Text>Hello secons</Text>


              

              <FlatList
                data={data}
                
                renderItem={({item})=>{
                  return <View style={styles.flatItem} key={item.id}>
                 <TouchableOpacity onPress={()=>alert(item.id)}>
                 <Text>{item.name} {item.age}</Text>
                 </TouchableOpacity>

                  </View>
                }}
              />
              <Button title="back"
                onPress={()=>setOpenModal1(false)}
              />
              </View>
            </Modal>
             

      </View>
      </ScrollView>
    );
  }

export default HomeScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:deviceHeight,
     
     
     
      backgroundColor:  '#B7F785',
    
    
    },
    image: {
      flex: 1,
      justifyContent: "center",
      height:130,
      marginTop:10,
      width:140
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    },
    header:{

      flexDirection:'row',
      paddingHorizontal:10,
      justifyContent:'space-between',
      alignItems:'center',
      paddingTop:10,

    },
    profileImage:{

      width:40,
      height:40,
      marginStart:5,
      borderRadius:40,
    },
    flatItem:{
      width:'100%',
      height:200,
      borderRadius:20,
      // borderBottomEndRadius:20,
      // borderBottomLeftRadius:20,
      // borderTopRightRadius:20,
      // borderTopLeftRadius:20,
      
      backgroundColor:'#f9f9fb',  
      alignItems:'center',
    


    },
    txtSize:{
      fontSize:20,
    },
    categoryItemWrapper:{
      //  backgroundColor:colors.secondaryT50,
        display:'flex',
        marginRight:10,
        borderRadius:20,
        height:150,
        width:150,
        // padding:10,
        alignItems:"center",
        justifyContent:"center",
        shadowColor:"black",
        shadowOffset:{
            width:1,
            height:2,
        },
        shadowOpacity:0.05,
        shadowRadius:20,
        elevation:2,
  
     },
  
     categoryItemImage:{
         marginTop:25,
         alignSelf:"center",
         marginHorizontal:27,
         width:100,
         height:100,
     },
  
     categoryItemTitle:{
        //  display:"flex",
        //  textAlign:"center",
        textAlign:'center',
       
         fontSize:16,
         fontWeight:"600",
         marginBottom:-90,
        //  textTransform:'uppercase',
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
       marginTop:7,

      

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

    }


  
   
  });