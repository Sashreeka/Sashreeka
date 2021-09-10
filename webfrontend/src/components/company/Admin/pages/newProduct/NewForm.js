import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, TextField } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import Input from './reusable/Input';
import {UseForm,Form} from './UseForm';


const initialValues={
   
    name: '',
    description: '',
    offer:0,
    unitPrice:0,
    unitWeight:1,
    stock:0,
    reOrderLevel:0,
    measurementUnit: '',
    image:'',
    caption:''

}
export default function NewForm() {
    
  
   const{
       values,
       setValues,
       handleInputChange
   }= UseForm(initialValues);




    useEffect(()=>{


    },[])
    return (
        <div>
      
          <Form>
               <Grid container> 
              
                    <Grid item xs={6}>
                        <label>Add image</label>
                        <input
                            name="image"
                            type="file"
                        />
                        <Input
                           
                            label="Full Name"
                            name="fullName"
                            value={values.name}
                            onChange={handleInputChange}
                            type="number"
                           
                        />
                        <Input
                            name="email"
                            label="Email"
                            value={values.email}
                            onChange={handleInputChange}
                            type="text"
                        />

                        <TextField
                                id="standard-number"
                                label="Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                />
                     

                    </Grid>
                    {/* <Grid item xs={6}>
                        <FormControl >
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup row
                            name="gender"
                            value={values.gender}
                            onChange={handleInputChange}
                            >
                                <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                                <FormControlLabel value="other" control={<Radio/>} label="Other "/>
                            </RadioGroup>
                            
                        </FormControl>

                    </Grid> */}
                  </Grid>  
            </Form>

       
            
        </div>
    )
}
