import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Colors from "./assets/colors/Colors";
// import './App.css';
/* import Navigation from "./components/common/header/Navigation"; */
import Home from "./components/static/Home";
import About from "./components/static/About";
import Contact from "./components/static/Contact";

import Store from "./components/store/Store";
import SearchStore from "./components/store/SearchStore";
import StoreCart from "./components/store/StoreCart";
import StoreCheckout from "./components/store/StoreCheckout";
import FerView from "./components/store/FerView";
import { CartProvider } from "react-use-cart";

import Handbook from "./components/handbook/Handbook";
import Signup from "./components/authentication/Signup";
import Signin from "./components/authentication/Signin";
import RegAgent from "./components/authentication/DeliveryAgentRegister";
import RegFarmer from "./components/authentication/FarmerRegister";
/* import Footer from "./components/common/footer/footer"; */
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
import Sales from "./components/company/Admin/pages/sales/Sales";
import Staff from "./components/company/Admin/pages/staff/Staff";
import Delivery from "./components/company/Admin/pages/deliveries/Delivery";
import DeliveryAgent from "./components/company/Admin/pages/deliveryAgents/DeliveryAgent";
import StaffCheck from "./components/company/Admin/pages/staff/staffCheck/StaffCheck";
import RolesPrivilages from "./components/company/Admin/pages/roles_&_privilages/Roles_and_privilages";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { green, grey } from "@material-ui/core/colors";
import Orders from "./components/company/Admin/pages/orders/Orders";
import Notification from "./components/company/Admin/pages/notification/Notification";
import Announcements from "./components/company/Admin/pages/announcements/Announcements";
import Complains from "./components/company/Admin/pages/complainsAndContactUs/Complains";
import ProductsAndCategories from "./components/company/Admin/pages/productList/ProductsAndCategories";

// Dashboard of Staff and Delivery Agent
import DeliveryAgentD from "./components/company/DeliveryAgent";
import StaffD from "./components/company/Staff";

// forgot password
import Forgotpwd from "./components/authentication/Forgotpwd";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[800],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  let userCategory = localStorage.getItem("userCategory");

  return (
    <div className="App">
      <BrowserRouter>
        {userCategory === "admin" ? (
          <div>
            <ThemeProvider theme={theme}>
              <Topbar />

              <Switch>
                <Route exact path="/">
                  <Admin />
                </Route>

                <Route path="/users">
                  <UserList />
                </Route>
                <Route path="/user/:userId">
                  <User />
                </Route>
                <Route path="/newUser">
                  <NewUser />
                </Route>

                <Route path="/productCategory">
                  <ProductsAndCategories />
                </Route>
                <Route path="/product/:fertilizerId" component={Product} />

                <Route path="/newproduct">
                  <NewProduct />
                </Route>
                <Route path="/sales">
                  <Sales />
                </Route>
                <Route path="/staff">
                  <Staff />
                </Route>

                <Route path="/staffCheck/:userId" component={StaffCheck}>
                  {/* <StaffCheck/> */}
                </Route>
                <Route path="/delivery">
                  <Delivery />
                </Route>
                <Route path="/deliveryagent">
                  <DeliveryAgent />
                </Route>

                <Route path="/rolesPrivilages">
                  <RolesPrivilages />
                </Route>
                <Route path="/notification">
                  <Notification />
                </Route>
                <Route path="/announcements">
                  <Announcements />
                </Route>
                <Route path="/complains">
                  <Complains />
                </Route>
                <Route path="/orders">
                  <Orders />
                </Route>
              </Switch>
            </ThemeProvider>
          </div>
        ) : (
          <div>
            {/* <Navigation /> */}
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

              <Route path="/deliveryAgentD">
                <DeliveryAgentD />
              </Route>

              <Route path="/staffD">
                <StaffD />
              </Route>

              <Route path="/forgotpwd">
                <Forgotpwd />
              </Route>

              <Route path="/contact">
                <Contact />
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

              <Route path="/regAgent">
                <RegAgent />
              </Route>

              <Route path="/regFarmer">
                <RegFarmer />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>

              <CartProvider>
                <Route path="/store">
                  <Store />
                </Route>

                <Route path="/searchstore">
                  <SearchStore />
                </Route>

                <Route path="/viewproduct">
                  <FerView />
                </Route>

                <Route path="/storecart">
                  <StoreCart />
                </Route>

                <Route path="/storecheckout">
                  <StoreCheckout />
                </Route>
              </CartProvider>
            </Switch>

            {/* <Footer /> */}
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
