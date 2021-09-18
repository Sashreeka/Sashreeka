import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../pages/DrawerContent";

import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ItemDetailsScreen from "../screens/ItemDetailsScreen";
import OnlinePaymentScreen from "../screens/OnlinePaymentScreen";
import OrderDetailsScreen from "../screens/OrderDetailsScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import PaymentMethodsScreen from "../screens/PaymentMethodsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SupportScreen from "../screens/SupportScreen";
import ViewFertilizerCategory from "../screens/ViewFertilizerCategory";

const Drawer = createDrawerNavigator();

export default function DrowerStack({ navigation }) {
  return (
    // header none means didn't display the header bar
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="CartScreen" component={CartScreen} />
      <Drawer.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Drawer.Screen name="ItemDetailsScreen" component={ItemDetailsScreen} />
      <Drawer.Screen
        name="OnlinePaymentScreen"
        component={OnlinePaymentScreen}
      />
      <Drawer.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
      <Drawer.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
      <Drawer.Screen
        name="PaymentMethodsScreen"
        component={PaymentMethodsScreen}
      />
      <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      <Drawer.Screen name="SupportScreen" component={SupportScreen} />
      <Drawer.Screen
        name="ViewFertilizerCategory"
        component={ViewFertilizerCategory}
      />
      
    </Drawer.Navigator>
  );
}
