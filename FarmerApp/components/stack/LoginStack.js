import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SigninScreen from '../pages/SigninScreen';
import SplashScreen from '../pages/SplashScreen';
import ForgetPassword from '../pages/ForgetPassword';


const RootStack=createStackNavigator();
export default function LoginStack({navigation}) {
    return (
        // header none means didn't display the header bar
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
            <RootStack.Screen name="SigninScreen" component={SigninScreen}/>
            <RootStack.Screen name="ForgetPassword" component={ForgetPassword}/>
        </RootStack.Navigator>
    ); 
}
