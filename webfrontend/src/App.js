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
import Topbar from "./components/company/Admin/components/topbar/Topbar";
import Sidebar from "./components/company/Admin/components/sidebar/Sidebar";
//import UserList from "./components/company/Admin/pages/userList/UserList";
import User from "./components/company/Admin/pages/user/User";
import NewUser from "./components/company/Admin/pages/newPage/NewUser";
import ProductList from "./components/company/Admin/pages/productList/ProductList";
import Product from "./components/company/Admin/pages/product/Product";
import NewProduct from "./components/company/Admin/pages/newProduct/NewProduct";

function App() {

  let userCategory=localStorage.getItem('userCategory');
  



  return (
    <div className="App">
    <BrowserRouter>

    {
      userCategory === 'admin'? <div>
      <Topbar/>

     
     
        <Switch>
        <Route exact path="/">
          <Admin/>

        </Route>

        <Route path='/users'>
          <UserList/>
        </Route>
        <Route path='/user/:userId'>
          <User/>
        </Route>
        <Route path='/newUser'>
          <NewUser/>
        </Route>

        <Route path='/products'>
          <ProductList/>
        </Route>
        <Route path="/product/:productsId">
              <Product/>

        </Route>
        <Route path="/newproduct">
              <NewProduct/>

            </Route>


        </Switch>
       
      </div>:
      <div>
     
      
        <Navigation />
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        {/* <Route path="/admin">
          <Admin/>

        </Route> */}

        {/* <Route path="/admin/user">
          <UserList/>

        </Route> */}
        
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
      
      </div>
    }
    </BrowserRouter>
      
    </div>
  );
}

export default App;
