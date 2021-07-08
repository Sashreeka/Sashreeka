import React from "react";
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
      <Navigation/>
      <Home />
      <About />
      <Contact />
      <Store />
      <Handbook />
      <Signup />
    </div>
  );
}

export default App;
