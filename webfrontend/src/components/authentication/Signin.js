import React from "react";

// CSS file
import "./Signin.css";

function Signin() {
  return (
    // CAn returen only a one single element
    // <React.Fragment>
    <div>
      <h1>This is Login page</h1>
      <div className="formBox">
        <form className="loginForm">
          <label>Username</label>
          <input type="email" name="email" required />
          <br />
          <label>Password</label>
          <input type="password" name="password" required />
          {/* <Button>LOGIN</Button> */}
        </form>
      </div>
    </div>
    // </React.Fragment>
  );
}

export default Signin;
