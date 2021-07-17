import React,{useState} from 'react';
import axios from 'axios';


function Signin() {

    const [phoneNumber ,setPhoneNumber]=useState('');
    const [password,setpassword]=useState('');


    const loginView =() =>{
        axios.post('http://localhost:4000/user/login',{
          phoneNumber: phoneNumber ,
          password: password
        }).then(
          (response)=>{
    
            // console.log(response.data.token);
            // console.log(response.data.message);

            console.log(response.data[0].userCategory)
            let userCategory=response.data[0].userCategory
            let phoneNumber=response.data[0].phoneNumber
            localStorage.setItem('userCategory',userCategory)
            localStorage.setItem('phoneNumber',phoneNumber)

            if(userCategory ==='farmer')
            {
                window.location.href='/admin'
            }else if(userCategory ==='deliveryAgent')
            {
                window.location.href='/'
            }
            else if(userCategory ==='admin')
            {
                window.location.href='/'
            }
           // console.log(response.data.userCategory)
    
            // localStorage.setItem('login',JSON.stringify({
            //   login:true,
            //   token: response.data.token
            // }))
         
           
          }
        ).catch(error=>{
          console.log(error);
        })
      }

    // const submit = () =>{




    //     if(telephone === '1' && password ==='1'){

    //         window.location.href='/'
    //     }
    //     else  if(telephone === '2' && password ==='2'){

    //         window.location.href='/admin'
    //     }



    // }
    return(
        <div>
            <h1>This is Login page</h1>
            <p>Shashreeka recognized that the growing demand for organic crop farming required an increased focus on providing an all-natural solution to boost soil nutrition. Rather than make unproven claims about our fertilizer, we focus on education, testing, and proper use to document results. This process may be slower, but it ensures that we support the growth of sustainable agriculture around the world.</p>

            <h1>Login form</h1>
            <input type="text" name="phoneNumber" placeholder="phoneNumber" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
            <input type="text" name="password" placeholder="password" onChange={(e)=>{setpassword(e.target.value)}} />

            <button onClick={loginView}>Login</button>
        </div>
    )
}

export default Signin;