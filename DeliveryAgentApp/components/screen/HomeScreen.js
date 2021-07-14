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
    ScrollView
  } from 'react-native';
  

const HomeScreen = ({navigation})=>{

  const data=[
    {
      'id':'1',
      'name':'ishan',
      'age':23
    },
    {
      'id':'2',
      'name':'ishan',
      'age':23
    },
    {
      'id':'3',
      'name':'ishan',
      'age':23
    },
    {
      'id':'4',
      'name':'ishan',
      'age':23
    },
    {
      'id':'5',
      'name':'ishan',
      'age':23
    },
    {
      'id':'6',
      'name':'ishan',
      'age':23
    },
    {
      'id':'7',
      'name':'ishan',
      'age':23
    },
    {
      'id':'8',
      'name':'ishan',
      'age':23
    },
   

  ]
  const [openModal,setOpenModal]=useState(false);
  const [openModal1,setOpenModal1]=useState(false);
    return(
      <ScrollView>
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text style={{marginVertical:60}}>Home Screen</Text>
        <Text style={{marginVertical:60}}>Home Screen</Text>
        <Text style={{marginVertical:60}}>Home Screen</Text>
        <Text style={{marginVertical:60}}>Home Screen</Text>
        <Text style={{marginVertical:60}}>Home Screen</Text>
       

        
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

           <Modal visible={openModal}>
              <View>
              <Text>Hello ishan</Text>

              <FlatList
                data={data}
                
                renderItem={({item})=>{
                  return <View style={styles.flatItem} key={item.id}>
                  <Text>{item.name} {item.age}</Text>

                  </View>
                }}
              />
              <Button title="back"
                onPress={()=>setOpenModal(false)}
              />
              </View>
            </Modal>


            <Modal visible={openModal1}>
              <View>
              <Text>Hello secons</Text>

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


    }
  
   
  });