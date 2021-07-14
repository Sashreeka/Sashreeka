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



  const DetailsScreen = ({navigation})=>{
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to details screen...again"
          onPress={()=>navigation.push("Details")}
        />
  
      <Button
          title="Go to Home"
          onPress={()=>navigation.navigate("Home")}
        />
  
    <Button
          title="Go back"
          onPress={()=>navigation.goBack()}
        />
      </View>
    );
  }
  export default DetailsScreen;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
   
  });