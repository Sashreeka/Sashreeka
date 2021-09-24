import React, { createRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Button,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  Dimensions,
  ImageBackground,
} from "react-native";

import * as Animatable from "react-native-animatable";
import Modal from "react-native-modal";

import MapView from "react-native-maps";

import axios from "axios";
import {
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

import Collapsible from "react-native-collapsible";
import DetailsScreen from "./DetailsScreen";

//import Animatable from 'react-native-animatable';

//import { ModalScreen } from './ModalScreen';
import { TouchableRipple, Switch } from "react-native-paper";

import { Entypo } from "@expo/vector-icons";
import OrderHistory from "./OrderHistory";
import UpcomingDelivery from "./UpcomingDelivery";
import TodayDeliveryButton from "./Home/TodayDeliveryButton";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({navigation}) => {
  let newNumber;

  const [len,setLen]=useState([])
  const [todayData,setTodayData]=useState([])
 
  const [phoneNumber,setPhoneNumber]=useState('');

 
  useEffect(()=>{

   

    getStorageItem();
   
    // AsyncStorage.getItem("phoneNumber").then((res)=>{setPhoneNumber(res)});
    // console.log('hi')

    // console.log(phoneNumber)
    // console.log('end')
    
    //console.log(phoneNumber1);
    const deliveryAgentPhoneNumber="+94768610084";
    axios.get("http://192.168.1.11:4000/deliveryAgent/newOrders/"+deliveryAgentPhoneNumber).then((response)=>{
     // console.log(response.data);
      setLen(response.data);
    })

    axios.get("http://192.168.1.11:4000/deliveryAgent/today/"+deliveryAgentPhoneNumber).then((response)=>{

      setTodayData(response.data);
   //  console.log("today",response.data);
      


    })
    console.log('new',newNumber)


  },[])



  const getStorageItem = async ()=>{
    
    setPhoneNumber(await AsyncStorage.getItem("phoneNumber"));
    
  }



  const data = [
    {
      id: "1",
      name: "ishan",
      age: 23,
      image:
        "https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png",
    },
    {
      id: "2",
      name: "ishan",
      age: 23,
      image:
        "https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png",
    },
    {
      id: "3",
      name: "ishan",
      age: 23,
      image:
        "https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png",
    },
    {
      id: "4",
      name: "ishan",
      age: 23,
      image:
        "https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png",
    },
    {
      id: "5",
      name: "ishan",
      age: 23,
      image:
        "https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png",
    },
    {
      id: "6",
      name: "ishan",
      age: 23,
      image:
        "https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png",
    },
    {
      id: "7",
      name: "ishan",
      age: 23,
      image:
        "https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png",
    },
    {
      id: "8",
      name: "ishan",
      age: 23,
      image:
        "https://writestylesonline.com/wp-content/uploads/2021/02/Michele-Round-Circle-2020.png",
    },
  ];

  const [collapsed, setCollapsed] = useState(true);
  const [details, setDetails] = useState([]);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
    //  this.setState({ collapsed: !this.state.collapsed });
    console.log(collapsed);
  };

  const { headerList, headerText, content } = styles;
  return (
    <ScrollView>
      <StatusBar backgroundColor="#89b963" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons
            name="menu"
            size={25}
            color="#217756"
            style={{ marginLeft: 5, marginTop: 5 }}
            onPress={() => navigation.openDrawer()}
          />

          {/* <TouchableRipple>
               <View style={{flexDirection:'row',marginStart:190,marginTop:10,}}>
                   <Text style={{color:'#217756',fontWeight:'bold',fontSize:16}}>Available</Text>
                       <View style={{

                         marginStart:6,
                         marginTop:-2,
                       }} pointerEvents="none">
                             <Switch/>
                        </View>
                </View>
            </TouchableRipple> */}
          
           {
             len.length===0?(<View
           style={{marginLeft:270,}}
           >
         
              <Ionicons 
              name="notifications" 
              size={30} 
              color="black" />
              {/* <View
                style={{
                  backgroundColor:'red',
                  borderRadius:20,
                  width:20,
                  height:20,
                  marginTop:-13,
                  marginLeft:10,
                  alignItems:'center'
                }}
                >
                 <TouchableOpacity
                 onPress={()=>{
                   navigation.navigate('DeliveryAccept')
                 }}
                 >
                 <Text>{len.length}</Text>
                 </TouchableOpacity>
                </View> */}
          
           </View>):(<View
           style={{marginLeft:270,}}
           >
         
              <Ionicons 
              name="notifications" 
              size={30} 
              color="black" />
              <View
                style={{
                  backgroundColor:'red',
                  borderRadius:20,
                  width:20,
                  height:20,
                  marginTop:-13,
                  marginLeft:10,
                  alignItems:'center'
                }}
                >
                 <TouchableOpacity
                 onPress={()=>{
                   navigation.navigate('DeliveryAccept')
                 }}
                 >
                 <Text>{len.length}</Text>
                 </TouchableOpacity>
                </View>
          
           </View>)
           } 
          
          <Image
            style={styles.profileImage}
            source={require("../../assets/ishan.png")}
          />
        </View>

        <ScrollView
          horizontal={true}
          style={{
            marginTop: 50,
          }}
        >
          <View
          //  style={[styles.categoryItemWrapper,{
          //     backgroundColor:  '#f9f9fb',
          //     marginStart:15,

          //  }
          // ]}
          >
            <ImageBackground
              source={require("../../assets/a.png")}
              resizeMode="cover"
              style={[
                styles.categoryItemWrapper,
                {
                  marginLeft: 5,
                },
              ]}
            />
            {/* <Text style={styles.text}>Inside</Text>
            </ImageBackground> */}
            {/* <Image source={require('../../assets/d.png')} style={styles.categoryItemImage}/> */}
          </View>
          <View
          // style={[styles.categoryItemWrapper, {
          //     backgroundColor:  '#f9f9fb',

          // },
          // ]}
          >
            {/* <Image source={require('../../assets/logo.png')} style={styles.categoryItemImage}/> */}
            <ImageBackground
              source={require("../../assets/c.png")}
              resizeMode="cover"
              style={styles.categoryItemWrapper}
            />
          </View>

          <View
          //  style={[styles.categoryItemWrapper, {
          //     backgroundColor:  '#f9f9fb',

          // },
          // ]}
          >
            {/* <Image source={require('../../assets/logo.png')} style={styles.categoryItemImage}/> */}
            <ImageBackground
              source={require("../../assets/b.png")}
              resizeMode="cover"
              style={styles.categoryItemWrapper}
            />
          </View>

          <View

          //   style={[styles.categoryItemWrapper, {
          //       backgroundColor:  '#f9f9fb',
          //  //     marginLeft: item.id==1 ? 20 : 0,
          //   },
          //   ]}
          >
            {/* <Image source={require('../../assets/logo.png')} style={styles.categoryItemImage}/> */}
            <ImageBackground
              source={require("../../assets/d.png")}
              resizeMode="cover"
              style={styles.categoryItemWrapper}
            />
          </View>
        </ScrollView>


          
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("DetailsScreen");
          }}
        >
          <View
            style={[
              styles.todayWrapper,
              {
                backgroundColor: "#fff",
                marginTop: -30,
                // justifyContent:'center',
                alignItems: "center",
                marginLeft: 18,
              },
            ]}
          >
            <View style={styles.todayFirstRow}>
              <Text style={styles.todayFirstRowTitle}>Today</Text>
              <Text style={styles.todayFirstRowDel}>Deliveries</Text>
              <View style={styles.todayFirstRowIcon}>
                <Text>{todayData.length}</Text>
              </View>
            </View>

            <View style={styles.todaySecondRow}>
              {/* <Image source={require('../../assets/logo.png')} style={styles.categoryItemImage}/> */}

              <Animatable.Image
                animation="fadeIn"
                source={require("../../assets/vector.png")}
                style={styles.todaySecondRowImg1}
              />

              <View style={styles.todaySecondRowNew}>
                <Animatable.Image
                  animation="bounce"
                  source={require("../../assets/line.png")}
                  style={styles.todaySecondRowImg2}
                />
                <View style={styles.todaySecondRowNewText}>
                  <Text style={styles.todaySecondRowNewText1}>Colombo</Text>
                  <Text style={styles.todaySecondRowNewText2}></Text>
                  <Text style={styles.todaySecondRowNewText3}>Gampaha</Text>
                  {/* {todayData[todayData.length-1].district} */}
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



{/* today delivery page */}

        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("DetailsScreen");
          }}
        >
          <View
            style={[
              styles.todayWrapper,
              {
                backgroundColor: "#fff",
                marginTop: -30,
                // justifyContent:'center',
                alignItems: "center",
                marginLeft: 18,
              },
            ]}
          >
            <View style={styles.todayFirstRow}>
              <Text style={styles.todayFirstRowTitle}>Today</Text>
              <Text style={styles.todayFirstRowDel}>Deliveries</Text>
              <View style={styles.todayFirstRowIcon}>
                <Text>3</Text>
              </View>
            </View>

            <View style={styles.todaySecondRow}>
             

              <Animatable.Image
                animation="fadeIn"
                source={require("../../assets/vector.png")}
                style={styles.todaySecondRowImg1}
              />

              <View style={styles.todaySecondRowNew}>
                <Animatable.Image
                  animation="bounce"
                  source={require("../../assets/line.png")}
                  style={styles.todaySecondRowImg2}
                />
                <View style={styles.todaySecondRowNewText}>
                  <Text style={styles.todaySecondRowNewText1}>Colombo</Text>
                  <Text style={styles.todaySecondRowNewText2}>Galle</Text>
                  <Text style={styles.todaySecondRowNewText3}>Matara</Text>
                </View>
              </View>

         
            </View>
          </View>
        </TouchableOpacity> */}
{/* today delivery page */}












        <ScrollView horizontal={true}>
          <UpcomingDelivery/>
          <OrderHistory/>
        </ScrollView>

      














        {/* 

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
            </Modal> */}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: deviceHeight,

    backgroundColor: "#B7F785",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 130,
    marginTop: 10,
    width: 210,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  headerList: {
    backgroundColor: "#F0F0F0",
    padding: 20,
    borderRadius: 20,
    borderColor: "#000",
    margin: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
    fontWeight: "bold",
  },
  historyTText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 5,
  },
  content: {
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 2,
    paddingTop: 10,
    backgroundColor: "#F0F0F0",
    borderRadius: 15,

    // borderBottomLeftRadius:20,
    // borderBottomRightRadius:20,
    flexDirection: "row",
  },

  header: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    marginStart: 5,
    borderRadius: 40,
  },
  flatItem: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    // borderBottomEndRadius:20,
    // borderBottomLeftRadius:20,
    // borderTopRightRadius:20,
    // borderTopLeftRadius:20,

    backgroundColor: "#f9f9fb",
    alignItems: "center",
  },
  txtSize: {
    fontSize: 20,
  },
  categoryItemWrapper: {
    //  backgroundColor:colors.secondaryT50,
    display: "flex",
    marginRight: 10,
    borderRadius: 20,
    height: 150,
    width: 250,
    // padding:10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },

  categoryItemImage: {
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 27,
    width: 100,
    height: 100,
  },

  categoryItemTitle: {
    //  display:"flex",
    //  textAlign:"center",
    textAlign: "center",

    fontSize: 16,
    fontWeight: "600",
    marginBottom: -90,
    //  textTransform:'uppercase',
  },

  todayWrapper: {
    //  backgroundColor:colors.secondaryT50,
    display: "flex",
    // marginRight:20,
    borderRadius: 20,
    width: 370,
    padding: 10,
    height: 110,
    marginStart: 20,

    // alignItems:"center",
    // justifyContent:"center",
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 2,
  },

  todayFirstRow: {
    flexDirection: "row",
    marginTop: 7,
  },
  todayFirstRowTitle: {
    color: "#217756",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: -10,
  },
  todayFirstRowDel: {
    color: "#217756",
    fontSize: 16,
    marginStart: 180,
  },
  todayFirstRowIcon: {
    marginStart: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7AF93",
    width: 25,
    height: 21,
    marginTop: 2,
    borderRadius: 21,
  },
  todaySecondRow: {
    flexDirection: "row",
    marginTop: 20,
  },
  todaySecondRowNew: {
    flexDirection: "column",
  },

  todaySecondRowNewText: {
    flexDirection: "row",
  },
  todaySecondRowImg1: {
    marginStart: -70,
  },
  todaySecondRowImg2: {
    marginStart: 50,
  },
  todaySecondRowNewText1: {
    marginLeft: 40,
    color: "#217756",
  },
  todaySecondRowNewText2: {
    marginLeft: 20,
    color: "#217756",
  },
  todaySecondRowNewText3: {
    marginLeft: 40,
    color: "#217756",
  },

});

// <FlatList
//               data={orderList}

//               renderItem={({item})=>{
//                 const seperate=item.item.split(', ');
//                      console.log(seperate)
//                 return <View style={styles.flatItem} key={item.telephone}>
//                     <View>

//                     <Image
//                     style={{width:100, height:100}}
//                       source={require('../../assets/ishan.png')}
//                     />
//                     <Text>{item.city}-{item.customer_name}</Text>
//                     <Text>{item.address}</Text>
//                     <Text>{item.telephone}</Text>
//                     {/* <Text>{item.item}</Text> */}
//                     {
//                       seperate.map((product,index) =>
//                     {
//                       return   <Text key={index}>{product}</Text>
//                     }
//                     )
//                     }

//                     </View>
//                     <View>
//                     <Text>{item.name} {item.age}</Text>
//                     </View>

//                 </View>
//               }}
//             />
