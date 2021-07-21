import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
//import {MenuItems} from "./MenuItems"
//import { render } from "@testing-library/react";
//import { render } from "@testing-library/react";

function Navigation() {
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
              <Link className="nav-link" to="/signin">
                <div className="nav-sign-in">
                  <div className="signin">Sign in</div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
// }

export default Navigation;
