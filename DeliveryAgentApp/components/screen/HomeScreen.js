import React from 'react';
import { StyleSheet, 
    Text, 
    View, 
    FlatList,
    Image,
    TouchableOpacity,
    Alert,
    Modal,
    Button 
  } from 'react-native';
  

const HomeScreen = ({navigation})=>{
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Home Screen</Text>
        <Button title="go to details Screen"
          onPress={()=>
            navigation.navigate("Details")
          }
        />
             

      </View>
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
  
   
  });