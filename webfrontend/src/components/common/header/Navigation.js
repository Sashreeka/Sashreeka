import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
//import {MenuItems} from "./MenuItems"
//import { render } from "@testing-library/react";
//import { render } from "@testing-library/react";

function Navigation() {

  const phoneNumber=localStorage.getItem('phoneNumber');



  const Logout =()=>{

       
            localStorage.clear();
            window.location.href='/';

       


    }
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

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={require('../../../assets/images/Sashreeka logo nav bar.png').default} />
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
                <i class="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/fertilizer">
              <i class="fas fa-book-open"></i> Fertilizer Handbook
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/store">
              <i class="fas fa-shopping-basket"></i> Shop Now
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
              <i class="fas fa-building"></i> About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
              <i class="fas fa-headset"></i> Contact
              </Link>
            </li>
            <li>
            {
              phoneNumber!==null? (
               
                <div className="nav-sign-out" onClick={Logout}>
                  <div className="signout" >Sign Out</div>
                </div>
            
              ):
              (
                <Link className="nav-link" to="/signin">
                <div className="nav-sign-in">
                  <div className="signin">Sign in</div>
                </div>
              </Link>
              )
            }
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
{/* <li>
  <Link className="nav-link" to="/signin">
    <div className="nav-sign-in">
      <div className="signin">Sign in</div>
    </div>
  </Link>
</li>; */}
// }

export default Navigation;
