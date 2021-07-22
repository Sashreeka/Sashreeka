import React from 'react';
import { StyleSheet, 
    Text, 
    View, 
    FlatList,
    Image,
    TouchableOpacity,
    Alert,
    Modal,
    Button, 
    Dimensions,
    
  } from 'react-native';

  import * as Animatable from 'react-native-animatable';

  import { LinearGradient } from 'expo-linear-gradient';
  
  import { MaterialIcons } from '@expo/vector-icons';
import { Directions } from 'react-native-gesture-handler';
export default function SplashScreen({navigation}) {
    return (
        <View style={styles.container}>
           <View style={styles.header}>
           <Animatable.Image
           animation="bounceIn"
           duration={2000}
             source={require('../../assets/images/logo.png')}
             style={styles.logo}
             resizeMode="stretch"
           />

           </View>

           <Animatable.View style={styles.footer}
           animation="fadeInUpBig">
            <Text style={styles.title}>Join with Sashreeka</Text>
            <Text style={styles.title2}>සශ්‍රීක හා එක්වන්න</Text>
            {/* <Text style={styles.title}>Stay connected with Shashreeka</Text> */}
            <Text style={styles.textbeauty}>Choose your Language</Text>


            {/*********************************************************/}
            <View style={styles.button}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate('SigninScreen_sinhala')}
            >
              <LinearGradient
              colors={['#08d4c4,#01ab9d']}
              style={styles.signIn}>
                <Text style={styles.textSign}>සිංහල</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate('SigninScreen')}
            >
              <LinearGradient
              colors={['#08d4c4,#01ab9d']}
              style={styles.signIn}>
                <Text style={styles.textSign}>English</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate('SigninScreen')}
            >
              <LinearGradient
              colors={['#08d4c4,#01ab9d']}
              style={styles.signIn}>
                <Text style={styles.textSign}>தமிழ்</Text>
                

              </LinearGradient>
            </TouchableOpacity>
            </View>
            {/*********************************************************/}

           </Animatable.View>
            
        </View>
    )
}

const {height}=Dimensions.get('screen');
const height_logo=height* 0.28;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ABE87C',
      
    },
    header:{
      flex:2,
      justifyContent:'center',
      alignItems:'center',
    },
    footer:{
      flex:1,
      backgroundColor:'#fff',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      paddingVertical:50,
      paddingHorizontal:30,

    },
    logo:{
      width:height_logo,
      height:height_logo,

    },
    title:{
      color:'#05375a',
      fontSize:30,
      fontWeight:'bold',
    },
    title2:{
      color:'#05375a',
      fontSize:25,
      fontWeight:'bold',
    },
    text:{
      color:"grey",
      marginTop:5,
    },
    textbeauty:{
      marginTop:30,
      color:"grey",
      // backgroundColor:"red",
    },
    button:{
      display:"flex",
      flexDirection:"row",
      justifyContent:'space-between',
      marginTop:10,
      // backgroundColor:"yellow",
    },
    signIn:{
      width:100,
      height:40,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:50,
      flexDirection:'row',
    },
    textSign:{
      color:'white',
      fontWeight:'bold',
    }
  
   
  });
  