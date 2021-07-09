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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      <Switch>
        <Route path="/about">
          <About />
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

        <Route path="/">
          <Home />
        </Route>
      </Switch>
        

      </BrowserRouter>
     
    </div>
  );
}

export default App;
