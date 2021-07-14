import 'react-native-gesture-handler';
import * as React from 'react';
import {Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Home from "./components/Home";
// import Main from "./components/Main";
import Main from "./components/ItemPage";
import ItemPage from './components/ItemPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ItemPage" component={ItemPage} 
        options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}