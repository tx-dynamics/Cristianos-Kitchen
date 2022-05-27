import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Splash from '../Screens/Splash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateAccount from '../Screens/LoginSignUpScreens/CreateAccount';
import Login from '../Screens/LoginSignUpScreens/Login';
import SignUp from '../Screens/LoginSignUpScreens/SignUp';
import Otp from '../Screens/LoginSignUpScreens/Otp';
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CreateAccount"
      screenOptions={{headerShown: false, animation: 'fade'}}>
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Otp" component={Otp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
