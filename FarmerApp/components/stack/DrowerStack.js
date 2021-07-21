import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../pages/DrawerContent';

import Home from "../Home";
// import Main from "./components/Main";
import ItemPage from '../ItemPage';
import OrderHistory from '../OrderHistory';
import OrderHistoryInside from '../OrderHistoryInside';
// import CheckoutPage from './components/CheckoutPage';


const Drawer=createDrawerNavigator();
export default function DrowerStack({navigation}) {
    return (
        // header none means didn't display the header bar
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>} >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="ItemPage" component={ItemPage} />
            <Drawer.Screen name="OrderHistory" component={OrderHistory} />
            <Drawer.Screen name="OrderHistoryInside" component={OrderHistoryInside}/>
            {/* <Drawer.Screen name="CheckoutPage" component={CheckoutPage}/> */}
            
        </Drawer.Navigator>
    ); 
}
