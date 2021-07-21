import React from "react"
import { View,Text,StyleSheet,TouchableOpacity } from "react-native"

export default function PlusMinusButton(){
    // count=0;
    // REORDER_CONSTRAINT=14;
    // const plus=()=>{
    //     if (count>=0 && count<=REORDER_CONSTRAINT){count++}
    //     return(count)
    // }
    // const minus=()=>{

    // }
    return(
        <View style={styling.buttonwrapper}>
            <TouchableOpacity >
                <View style={styling.plusMinus_Signs_wrapper_L}>
                <Text style={styling.plusMinus_Signs}>+</Text>
                </View>
            </TouchableOpacity>
            <View style={styling.mid_number_wrapper}>
            <Text style={styling.mid_number}>1</Text>
            </View>
            <TouchableOpacity >
                <View style={styling.plusMinus_Signs_wrapper_R}>
                <Text style={styling.plusMinus_Signs}>-</Text>
                </View>
            </TouchableOpacity>   
        </View>
    )
}


const styling=StyleSheet.create({
    buttonwrapper:{
        backgroundColor:"green",
        width:120,
        height:40,
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:14,
        borderRadius:20,
    },
    plusMinus_Signs:{
        fontSize:30,
        color:"white",
    },
    mid_number:{
        fontSize:30,
        color:"black",
        alignItems:"center",
    },

    plusMinus_Signs_wrapper_L:{

    },
    plusMinus_Signs_wrapper_R:{

    },
    mid_number_wrapper:{
        backgroundColor:"#adadad",
        paddingHorizontal:15,
    },

})