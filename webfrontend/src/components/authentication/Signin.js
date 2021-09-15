// import React from "react";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//header and footer components
import Navigation from "../../components/common/header/Navigation";
import Footer from "../../components/common/footer/footer";


// CSS file
import "./Signin.css";

function Signin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://localhost:4000/user/login", {
        phoneNumber: phoneNumber,
        password: password,
      })
      .then((response) => {

    

        // add user info to local storage
        let userCategory = response.data[0].userCategory;
        let phoneNumber = response.data[0].phoneNumber;
        localStorage.setItem("userCategory", userCategory);
        localStorage.setItem("phoneNumber", phoneNumber);

        if (userCategory === "admin") {
          window.location.href = "/";
        } else if (userCategory === "deliveryAgent") {
          window.location.href = "/deliveryAgentD";
        } else if (userCategory === "staff") {
          window.location.href = "/staffD";
        } else if (userCategory === "farmer") {
          window.location.href = "/store";
        }
        // console.log(response.data.userCategory)

        // localStorage.setItem('login',JSON.stringify({
        //   login:true,
        //   token: response.data.token
        // }))
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    <Navigation />
    <div className="login_body">
      <h1>Welcome To Sashreeka</h1>
      <div className="login_box">
        <div className="animate">
          <div className="container_login animate">
            <label for="uname">
              <b>Username</b>
            </label>
            {/* <i className="fas fa-mobile-alt"></i> */}
            <input
              className="loginInput"
              type="text"
              name="phoneNumber"
              placeholder="Phone number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <label for="password">
              <b>Password</b>
            </label>
            <input
              className="loginInput"
              type="password"
              name="password"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="button_center">
              <button className="modalButton" onClick={login}>
                Sign In
              </button>
            </div>
            <div className="login_right">
              <Link className="forgotpwd" to="/forgotpwd">
                Forgot password?
              </Link>
            </div>
            <br />
            <div className="login_left">
              <Link className="login_acc" to="/regFarmer">
                Don't have an account?
              </Link>
            </div>
            {/* <div className="login_left">
              <Link className="login_acc" to="/signup">
                Sign Up
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Signin;

{
  /* <Link className="modalButton" to="/regFarmer">
            Sign Up
          </Link>
          <Link className="forgotpwd" to="/forgotpwd">
            Forgot password?
          </Link> */
}

// userCategory === null ? (
//   <button onClick={() => addItem(props.item)}>
//     Add<i className="fas fa-cart-arrow-down"></i>
//   </button>
// ) : (
//   <button
//     onClick={() => {
//       window.location.href = "/signin";
//     }}
//   >
//     Add<i className="fas fa-cart-arrow-down"></i>
//   </button>
// );
