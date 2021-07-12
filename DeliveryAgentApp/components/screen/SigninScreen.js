import React,{useState,useContext} from 'react';
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
    TextInput,
    StatusBar
  } from 'react-native';

  import * as Animatable from 'react-native-animatable';

  import { LinearGradient } from 'expo-linear-gradient';
  
  import { MaterialIcons } from '@expo/vector-icons';
  import { FontAwesome } from '@expo/vector-icons';
  import { Feather } from '@expo/vector-icons';

  import { AuthContext } from '../context/context';
  //import { AuthContext } from '../context';
export default function SigninScreen({navigation}) {

  const [data,setData]=useState({
    telephone:'',
    password:'',
    check_textInputChange: false,
    secureTextEntry: true
  });

  const {signIn}=useContext(AuthContext);

  const textInputChange= (val)=>{
    if(val.length!==0)
    {
      setData({
        ...data,
        telephone:val,
        check_textInputChange:true
      });
    }else{
      setData({
        ...data,
        telephone:val,
        check_textInputChange:false
      });


    }


  }

  const handlePasswordChange =(val) =>{
    setData({
      ...data,
      password:val
    });
  }


  const updateSecureTextEntry =(val) =>{
    setData({
      ...data,
      secureTextEntry:!data.secureTextEntry
    });
  }

  // const loginHandle = (username, password)=>{
  //   signIn(username,password);
  // }

    return (
        <View style={styles.container}>
          <StatusBar backgroundColor="#009387" barStyle="light-content"/>
          <View style={styles.header}>
              <Text style={styles.text_header}>Welcome!</Text>
          </View>
          <Animatable.View style={styles.footer}
          animation="fadeInUpBig"
          >
              <Text style={styles.text_footer}>Telephone</Text>
              <View style={styles.action}>
                <FontAwesome
                  name="mobile"
                  color="#05375a"
                  size={25}
                />
                <TextInput
                  placeholder="0768610084"
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={(val)=>textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                animation='bounceIn'>
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                />
                </Animatable.View>
                :null}
              </View>


              <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
              <View style={styles.action}>
                <FontAwesome
                  name="lock"
                  color="#05375a"
                  size={20}
                />
                <TextInput
                  placeholder="*******"
                  style={styles.textInput}
                  autoCapitalize="none"
                  secureTextEntry={data.secureTextEntry ?true: false}
                  onChangeText={(val)=>handlePasswordChange(val)}
                />

                <TouchableOpacity
                onPress={updateSecureTextEntry}>
                {data.secureTextEntry ?
                  <Feather
                    name="eye-off"
                    color="grey"
                    size={20}
                  />
                  :

                  <Feather
                    name="eye"
                    color="grey"
                    size={20}
                  />
                }
                </TouchableOpacity>

                
               
              </View>

             
              <Text style={styles.forget} onPress={()=>navigation.navigate('ForgetPassword')}>Forget Password</Text>
              

              


              <View style={styles.button}>
                 <TouchableOpacity
                 style={styles.signIn}
                //  onPress={()=>{loginHandle(data.username,data.password)}}
                 onPress={()=>{signIn(data.telephone,data.password)}}
                 >
                    <LinearGradient
                     colors={['#08d4c4','#01ab9d']}
                    // colors={['#217756','#FFFFFF']}
                    style={styles.signIn}
                    >
                    <Text
                    style={[styles.textSign,{
                      color:'#fff'
                    }]}
                    >Sign In</Text>


                    </LinearGradient>
                  </TouchableOpacity>   

                    

                </View>
          </Animatable.View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#B7F785'
   backgroundColor: '#009387',
  // backgroundColor:'#05375a'
    
  },
  header:{
    flex:1,
    justifyContent:'flex-end',
   paddingHorizontal:20,
   paddingBottom:50,
  },
  footer:{
    flex:3,
    backgroundColor:'#fff',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:30,
    paddingHorizontal:20,

  },
  // logo:{
  //   width:height_logo,
  //   height:height_logo,

  // },
  text_header:{
    color:'#fff',
    fontSize:30,
    fontWeight:'bold',
  },
  text_footer:{
    color:"#05375a",
    fontSize:18,
  },
  action:{
    flexDirection:'row',
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2',
    paddingBottom:5,
  },
  textInput:{
    flex:1,
    paddingLeft:10,
    color:'#05375a',
    marginLeft:10,
  },
  button:{
    alignItems:'center',
    marginTop:50,
  },
  signIn:{
    width:'100%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  textSign:{
    fontSize:20,
    fontWeight:'bold',
  },
  forget:{
      fontSize:16,
  }


 
});
