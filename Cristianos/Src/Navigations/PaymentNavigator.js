import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Summery from '../Screens/Payments/Summery';
import Location from '../Screens/Payments/Location';
import Dilvery from '../Screens/Payments/Dilvery';
import TotalPayment from '../Screens/Payments/TotalPayment';
import PickUp from '../Screens/Payments/PickUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const PaymentNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Summery"
      screenOptions={{headerShown: false, animation: 'fade'}}>
      <Stack.Screen name="Summery" component={Summery} />
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="PickUp" component={PickUp} />
      <Stack.Screen name="Dilvery" component={Dilvery} />
      <Stack.Screen name="TotalPayment" component={TotalPayment} />
    </Stack.Navigator>
  );
};

export default PaymentNavigator;

const styles = StyleSheet.create({});
