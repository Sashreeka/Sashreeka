import React from 'react';
class LogIn extends React.components{
    render(){
        return(
            <div>
                <form onSubmit>
                    <label>Username/Email</label>
                    <input type='email' name='email'  required/>
                    <label>Password</label>
                    <input type='password' name='password'  required/>
                    <Button>LOGIN</Button>
                </form>
            </div>
        )
    }
}

