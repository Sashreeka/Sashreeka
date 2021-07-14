import React,{createRef, useState} from 'react';
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
   
  } from 'react-native';

  import * as Animatable from 'react-native-animatable';
  import Modal from 'react-native-modal';

  import MapView from 'react-native-maps';

  //import { ModalScreen } from './ModalScreen';
  

  const deviceHeight=Dimensions.get('window').height

const HomeScreen = ({navigation})=>{

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
        <Text style={{marginVertical:60}}>Home Screen</Text>
        <Text style={{marginVertical:60}}>Home Screen</Text>
        <Text style={{marginVertical:60}}>Home Screen</Text>
        <Text style={{marginVertical:60}}>Home Screen</Text>
        <Text style={{marginVertical:60}}>Home Screen</Text>
       
{/* 
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={onShowPopup}>
            <Text style={styles.txtSize}>Show popup</Text>
          </TouchableWithoutFeedback>

          <ModalScreen


            ref={(target)=> popupRef = target}
            onTouchOutside={onClosePopup}
            title="Hello ishan"

            data={data}
         />




         
        </SafeAreaView>
         */}

         
        <Button title="go to details Screen"
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
        />

           <Modal visible={openModal} 
          //  customBackdrop={<View style={{flex: 1}} />}
           onBackdropPress={() => setOpenModal(false)}
           
           >
              <Animatable.View animation="bounce" style={{flex:1,maxHeight:deviceHeight* 0.7, marginTop:180, justifyContent:"flex-end",borderTopLeftRadius:10,}}>
              <Text>Hello ishan</Text>

              <FlatList
                data={data}
                
                renderItem={({item})=>{
                  return <View style={styles.flatItem} key={item.id}>
                      <View>

                      <Image
                      style={{width:100, height:100}}
                        source={require('../../assets/ishan.png')}
                      />

                      </View>
                      <View>
                      <Text>{item.name} {item.age}</Text>
                      </View>

                  </View>
                }}
              />
              <Button title="back"
                onPress={()=>setOpenModal(false)}
              />
              </Animatable.View>
            </Modal>


            <Modal visible={openModal1}>
              <View style={{maxHeight:deviceHeight* 0.4}}>
              <Text>Hello secons</Text>


              <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
              

              <FlatList
                data={data}
                
                renderItem={({item})=>{
                  return <View style={styles.flatItem} key={item.id}>
                  <Text>{item.name} {item.age}</Text>

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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    
    },
    flatItem:{
      width:'90%',
      height:50,
      borderRadius:20,
      borderBottomEndRadius:20,
      borderBottomLeftRadius:20,
      borderTopRightRadius:20,
      borderTopLeftRadius:20,
      margin:10,
      backgroundColor:'red',
      alignItems:'center'


    },
    txtSize:{
      fontSize:20,
    }
  
   
  });