import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Colors from "./assets/colors/Colors";
// import './App.css';
import Navigation from "./components/common/header/Navigation";
import Home from "./components/static/Home";
import About from "./components/static/About";
import Contact from "./components/static/Contact";
import Store from "./components/store/Store";
import Handbook from "./components/handbook/Handbook";
import Signup from "./components/authentication/Signup";
import Signin from "./components/authentication/Signin";
import Footer from "./components/common/footer/footer";
import Admin from "./components/company/Admin/Admin";
import UserList from "./components/company/Admin/pages/userList/UserList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/admin">
          <Admin/>

        </Route>

        <Route path="/admin/user">
          <UserList/>

        </Route>
        
        <Route path="/contact">
          <Contact />
        </Route>
        
        <Route path="/store">
          <Store />
        </Route>

        <Route path="/fertilizer">
          <Handbook />
        </Route>
        
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
        
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
