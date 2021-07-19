import React from "react";
import {StyleSheet, Button, TextInput, View, Text} from "react-native";
import {Formik} from 'formik';
import * as yup from 'yup';

const ReviewSchema=yup.object({
    firstName: yup.string()
                    .required()
                    .min(2),
    lastName: yup.string()
                    .required()
                    .min(2),
    contactNumber:yup.string()
                    .required()
                    .test("is-num-0-9", "contactNumber must be a number",(val)=>{
                        return parseInt(val)<6 && parseInt(val)>0})
});


export default function CheckoutForm({checkoutDetails}){
    return(
        <View style={styles.container}>
            <Formik 
            initialValues={
                {firstName:'Shamali', 
                lastName:'Pathirana', 
                contactNumber:"0777926565",
                deliveryAddress:"76/8, kotte,petta" 
                }}
            validationSchema={ReviewSchema}
            onSubmit={(values)=>{
                checkoutDetails(values);
            }}    
            >
                {(props)=>(
                    <View>
                        <TextInput style={styles.input} placeholder='firstName' name='firstName' 
                        onChangeText={props.handleChange('firstName')}
                        value={props.values.firstName}/>
                        <Text style={styles.errorUnderField}>{props.errors.firstName}</Text>

                        <TextInput style={styles.input} placeholder='lastName' name='lastName' 
                        onChangeText={props.handleChange('lastName')}
                        value={props.values.lastName}/>

                        <TextInput style={styles.input} placeholder='contact'  name='contact'
                        onChangeText={props.handleChange('contactNumber')}
                        value={props.values.contactNumber}
                        keyboardType='numeric'/>

                        <TextInput multiline style={styles.input} placeholder='delivery' name='delivery' 
                        onChangeText={props.handleChange('deliveryAddress')}
                        value={props.values.deliveryAddress}/>

                        <Button title="submit" color="maroon" onPress={props.handleSubmit}/>

                    </View>
                )}

            </Formik>
        </View>
    )
}

const styles=StyleSheet.create({

    input:{
        borderBottomColor:"green",
        backgroundColor:"blue",
    }
})