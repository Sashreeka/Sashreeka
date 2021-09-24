import React,{useEffect,useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Alert,
    Image

}from 'react-native';
import * as Animatable from "react-native-animatable";
import Modal from "react-native-modal";
import {FontAwesome5,AntDesign,Entypo} from "@expo/vector-icons";
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

//import PayHere from '@payhere/payhere-mobilesdk-reactnative';
//


export default function DeliveryAccept({navigation}) {



//   PayHere.startPayment(
//     paymentObject,          // The payment parameters as a Javascript Object
//     // onCompletedHandler,     // Function called with the PayHere Payment ID (String), for succesful payments
//     // onErrorHandler,         // Function called with the Error (String), if an error occured
//     // onDismissedHandler      // Function called if the payment popup closed before payments are processed
// );

//   const paymentObject = {
//     "sandbox": true,                 // true if using Sandbox Merchant ID
//     "merchant_id": "1217715",        // Replace your Merchant ID
//     "merchant_secret": "4ZCqV4VMIUj4jpLh4zkBwC4uQpCFtJ7aM4qBqbITxNnn",        // See step 4e
//     "notify_url": "https://sandbox.payhere.lk/pay/checkout",
//     "order_id": "ItemNo12345",
//     "items": "Hello from React Native!",
//     "amount": "50.00",
//     "currency": "LKR",
//     "first_name": "Saman",
//     "last_name": "Perera",
//     "email": "samanp@gmail.com",
//     "phone": "0771234567",
//     "address": "No.1, Galle Road",
//     "city": "Colombo",
//     "country": "Sri Lanka",
//     "delivery_address": "No. 46, Galle road, Kalutara South",
//     "delivery_city": "Kalutara",
//     "delivery_country": "Sri Lanka",
//     "custom_1": "",
//     "custom_2": ""
// };

// PayHere.startPayment(
//     paymentObject, 
//     (paymentId) => {
//         console.log("Payment Completed", paymentId);
//     },
//     (errorData) => {
//         Alert.alert("PayHere Error", errorData);
//     },
//     () => {
//         console.log("Payment Dismissed");
//     }
// );


  const [dataGroup,setDataGroup]=useState([]);
  const [data,setData]=useState([]);

  useEffect(()=>{

    const deliveryAgentPhoneNumber="+94768610084";
    axios.get("http://192.168.1.11:4000/deliveryAgent/newOrders/"+deliveryAgentPhoneNumber).then((response)=>{
     // console.log(response.data);
      setData(response.data);
    })
    axios.get("http://192.168.1.11:4000/deliveryAgent/newOrdersGroupBy/"+deliveryAgentPhoneNumber).then((response)=>{
      console.log(response.data);
      setDataGroup(response.data);
    })

    //newOrdersGroupBy
  },[])

  const confirmOrder =(deliveryId)=>{
    
    // Alert.alert(
    //   //title
    //   'Cancel Order',
    //   //body
    //   'Are you sure',
    //   [
    //     {text:'Yes',
    //    onPress:()=>{
    //     axios.put("http://192.168.1.11:4000/deliveryAgent/confirmDeliverByDAgent/"+orderId).then((response)=>{

    //       console.log("updated"+response);
    //       if(response)
    //       {
    //         setData((prevData)=>{
    //           return prevData.filter(todo=>todo.orderId!=orderId);
    //         });
            
    //       }
    //     })

    //    }
    //   },
    //   {
    //     text:'no'
    //   }
    //   ]
    // )





    const deliveryAgentPhoneNumber="+94768610084"
    
    axios.put('http://192.168.1.11:4000/deliveryAgent/newOrderConfirm',{
      deliveryId:deliveryId,
      deliveryAgentPhoneNumber:deliveryAgentPhoneNumber

    }).then((response)=>{

    

      // setData((prevData)=>{
      //   return prevData.filter(todo=>todo.orderId!=orderId);
      // });

      setDataGroup(dataGroup.filter((item) => item.deliveryId !== deliveryId));


    })
  }

  const cancelOrder =(deliveryId)=>{


    
      //alert(orderId);
      Alert.alert(
        //title
        'Cancel Order',
        //body
        'Are you sure Cancel this delivery?',
        [
          {text:'Yes',
         onPress:()=>{
          axios.put('http://192.168.1.11:4000/deliveryAgent/newOrderCancel',{
            deliveryId:deliveryId,
            deliveryAgentPhoneNumber:deliveryAgentPhoneNumber
      
          }).then((response)=>{
      
            // setData((prevData)=>{
            //   return prevData.filter(todo=>todo.orderId!=orderId);
            // });
      
            setDataGroup(dataGroup.filter((item) => item.deliveryId !== deliveryId));
      
      
          })

         }
        },
        {
          text:'no'
        }
        ]
      )
    


    const deliveryAgentPhoneNumber="+94768610084"
    
    // axios.put('http://192.168.1.11:4000/deliveryAgent/newOrderCancel',{
    //   deliveryId:deliveryId,
    //   deliveryAgentPhoneNumber:deliveryAgentPhoneNumber

    // }).then((response)=>{

    //   // setData((prevData)=>{
    //   //   return prevData.filter(todo=>todo.orderId!=orderId);
    //   // });

    //   setDataGroup(dataGroup.filter((item) => item.deliveryId !== deliveryId));


    // })
  }


  //cancelOrder


   const paymentMethod =()=>{

    fetch("https://sandbox.payhere.lk/pay/checkout",{
      method:'POST',
      body:paymentObject
    })

    axios.post('https://sandbox.payhere.lk/pay/checkout').then((response)=>{
      console.log(response);
    })




   }

    return (
        // <Animatable.View
        //  animation="fadeIn">
        // <TouchableOpacity
        // onPress={()=>{
        //     navigation.navigate('Home')
        // }}
        // ><Text>back</Text></TouchableOpacity>
            
        // </Animatable.View>
        <View style={styles.container}>

{/* <form method="post" action="https://sandbox.payhere.lk/pay/checkout">   
    <input type="hidden" name="merchant_id" value="121XXXX">    
    <input type="hidden" name="return_url" value="http://sample.com/return">
    <input type="hidden" name="cancel_url" value="http://sample.com/cancel">
    <input type="hidden" name="notify_url" value="http://sample.com/notify">  
    <br><br>Item Details<br>
    <input type="text" name="order_id" value="ItemNo12345">
    <input type="text" name="items" value="Door bell wireless"><br>
    <input type="text" name="currency" value="LKR">
    <input type="text" name="amount" value="1000">  
    <br><br>Customer Details<br>
    <input type="text" name="first_name" value="Saman">
    <input type="text" name="last_name" value="Perera"><br>
    <input type="text" name="email" value="samanp@gmail.com">
    <input type="text" name="phone" value="0771234567"><br>
    <input type="text" name="address" value="No.1, Galle Road">
    <input type="text" name="city" value="Colombo">
    <input type="hidden" name="country" value="Sri Lanka"><br><br> 
    <input type="submit" value="Buy Now">   
</form>  */}


       

{/* {
                         fertilizer.filter((ffertilizer)=>(ffertilizer.orderId===item.orderId)).map((fertilizerItem)=>(

                          <View style={styles.order} key={fertilizerItem.date}>
                              <Text style={{color:'#000000',fontSize:13,marginLeft:5,marginTop:0,width:100}}>{fertilizerItem.fertilizerName}</Text>
                              <Text style={{color:'#000000',fontSize:13,marginLeft:5,marginTop:0,width:100}}>{fertilizerItem.quantity}</Text>

                        </View>
                         ))
                       } */}

                  {/* <TouchableOpacity onPress={()=>{paymentMethod()}}>
                    <Text>PayHere</Text>
                  </TouchableOpacity>      */}


        
           <View style={{
               borderRadius:10,
               backgroundColor:'#fff',
               margin:20,
               padding:10
           }}>
           <Text style={{
               fontSize:22,
               fontWeight:"bold",
               textAlign:"center",
               marginTop:0,
           }}>New Order Confirmation</Text>
           </View>
           {/* <View > */}


           <ScrollView> 
           {
          dataGroup.map((item)=>(

          
            <Animatable.View
                  animation="fadeInUpBig"
              //    key={item.orderId}
              key={Math.random()}
              
              style={styles.body}
                 

                  >
                  <View style={styles.content} >

                  <View>

                  <Entypo name="calendar" size={65} color="#217756" style={{marginLeft:-10}} />
                  <Text style={{
                    marginLeft:12,
                    marginTop:-40,
                    fontSize:14,
                    fontWeight:'bold',

                  }}>{item.shortMonth}</Text>
                  <Text style={{
                    marginLeft:15,
                  marginTop:-6,
                    fontSize:13,
                  }}>{item.dateD}</Text>

                  </View>


                  <View style={{flexDirection:'column'}}>
                  {/* <Text style={{color:'#000',fontSize:16,marginLeft:10,marginTop:3,textDecorationColor:'#000'}}>ishan</Text> */}
                  
                  


                  




                  
              {
                data.filter((order)=>(order.deliveryId===item.deliveryId)).map((orders)=>(

                  <View style={{flexDirection:'row'}}
                  key={orders.orderId}
                 
                  >
                    <Text style={{color:'#000',fontSize:12,marginLeft:5,marginTop:0}}>Delivery Destination:</Text>
                    <Text style={{color:'#000',fontSize:12,marginLeft:5,marginTop:0,}}>{orders.houseNumber} {orders.streetName} {orders.city}</Text>
                    

                  </View>
                  
               

             
                ))

                
              }

             

              <View style={{flexDirection:'row'}}
                  
                 
                  >
                    <Text style={{color:'#000',fontSize:13,marginLeft:5,marginTop:0}}>Total Load:</Text>
                    <Text style={{color:'#000',fontSize:13,marginLeft:5,marginTop:0,}}>{item.totalLoad}</Text>
                    

                  </View>

              <View style={{flexDirection:'row'}}
                  
                 
                  >
                    <Text style={{color:'#000',fontSize:13,marginLeft:5,marginTop:0}}>Delivery Payment:</Text>
                    <Text style={{color:'#000',fontSize:13,marginLeft:5,marginTop:0,}}>{item.deliveryFee}</Text>
                    

                  </View>

                  
                 
               


                  <View style={{flexDirection:"row"}}>       

                  <LinearGradient
                  colors={['#80B953','#2C9984']}
                  // colors={['#217756','#FFFFFF']}
                  style={styles.confirmbtn}
                  >
                  <TouchableOpacity
                    onPress={()=>{confirmOrder(item.deliveryId)}}
                  >

                    <Text
                    style={{color:'#fff'}}>Accept</Text>
                    </TouchableOpacity>



                  </LinearGradient>

                  <LinearGradient
                  colors={['#a40606','#d98324']}
                  // colors={['#217756','#FFFFFF']}
                  style={styles.cancelbtn}
                  >
                  <TouchableOpacity
                    onPress={()=>{cancelOrder(item.deliveryId)}}
                  >

                    <Text
                    style={{color:'#fff'}}>Decline</Text>
                    </TouchableOpacity>



                  </LinearGradient>

                  </View>    

                  

                  
                  </View>

                    
                  </View>





                

                    </Animatable.View>










        
          ))
        //  
        } 
        </ScrollView>

         


           {/* </View> */}
          
            

        </View>
    )
}

const styles=StyleSheet.create({



    container:{
        flex:1,
        backgroundColor:'#F0F0F0',


    },
    body:{
        backgroundColor:'#fff',
        borderRadius:20,
        margin:5,


     
        // borderTopLeftRadius:20,
        // borderTopRightRadius:20,
      //  backgroundColor:'#fff',


    },
    content: {
        padding: 10,
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        
        paddingTop:10,
        backgroundColor:'#fff',
      
        borderRadius:20,
        
        
        // borderBottomLeftRadius:20,
        // borderBottomRightRadius:20,
        flexDirection:'row',
      },
      order:{
        flexDirection:'row',
        borderRadius:10,
        // backgroundColor:'#fff',
        marginLeft:30,
        marginRight:50,
        marginBottom:5,
  
  
  
      },
      confirmbtn:{

      //  backgroundColor:'red',
        borderRadius:20,
        width:100,
        padding:5,
        alignItems:'center',
        marginLeft:45,
        marginTop:7,
        marginBottom:10,
  
  
      },
      cancelbtn:{

        //  backgroundColor:'red',
          borderRadius:20,
          width:100,
          padding:5,
          alignItems:'center',
          marginLeft:15,
          marginTop:7,
          marginBottom:10,
    
    
        },
    
    
   


});
