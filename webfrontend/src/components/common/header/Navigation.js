import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Navigation.css";
//import {MenuItems} from "./MenuItems"
//import { render } from "@testing-library/react";
//import { render } from "@testing-library/react";

function Navigation() {
  function showloginWindow() {
    document.getElementById("loginWindow").style.display = "block";
  }

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setpassword] = useState("");

  const login = () => {
    axios
      .post("http://localhost:4000/user/login", {
        phoneNumber: phoneNumber,
        password: password,
      })
      .then((response) => {
        // console.log(response.data.token);
        // console.log(response.data.message);
        // console.log(response);
        // console.log(response.data[0].userCategory);
        let userCategory = response.data[0].userCategory;
        let phoneNumber = response.data[0].phoneNumber;
        localStorage.setItem("userCategory", userCategory);
        localStorage.setItem("phoneNumber", phoneNumber);

        if (userCategory === "admin") {
          window.location.href = "/";
        } else if (userCategory === "deliveryAgent") {
          window.location.href = "/"; //where delivery agent directs after login
        } else if (userCategory === "staff") {
          window.location.href = "/users";
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

  // Get the modal of login pop up window
  var modal = document.getElementById("loginWindow");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // class Navigation extends Component {
  /*state={ clicked :false}
  handleClick = () =>{
    this.setState({clicked :!this.state.clicked})
  }
  render(){
  return (
    
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Shashreeka</h1>
      <div className="menu-icon" onClick={this.handleClick}>
        <i className={this.state.Clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

      </div>
      
      <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item,index)=>{
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
              {item.title}
              </a>
            </li>
        )
        
        
        })}

         
      </ul>
        
    </nav>*/

  // render() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Sashreeka
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mr-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <i class="fas fa-home"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fertilizer">
                Organic Fertilizer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/store">
                Shop Now
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link">
                {/* <Link className="nav-link" to="/signin"> */}
                <div className="nav-sign-in">
                  <div
                    className="signin"
                    onClick={showloginWindow}
                    // onclick="document.getElementById('id01').style.display='block'"
                  >
                    Sign in
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div id="loginWindow" className="modal">
        <div className="modal-content animate">
          <div className="loginContainer">
            <label for="uname">
              <b>Username</b>
            </label>
            {/* <i className="fas fa-mobile-alt"></i> */}
            <input
              type="text"
              name="phoneNumber"
              placeholder="phoneNumber"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="text"
              name="password"
              placeholder="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <button className="signIn" onClick={login}>
              Sign In
            </button>
            <Link className="signUp" to="/regFarmer">
              Sign Up
            </Link>
            {/* <a href="/deliveryAgent">
              <button className="signUp">Sign Up</button>
            </a> */}
            {/* </br> */}
            <Link className="psw" to="#">
              Forgot password?
            </Link>
            {/* <span className="psw">
              <a href="#"></a>
            </span> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
// }

export default Navigation;
