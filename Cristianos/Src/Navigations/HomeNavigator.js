import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/HomeScreens/Home';
import Kitchen from '../Screens/HomeScreens/Kitchen';
import Truck from '../Screens/HomeScreens/Truck';
import Combos from '../Screens/HomeScreens/Combos';
import Tacos from '../Screens/HomeScreens/Tacos';
import Burgers from '../Screens/HomeScreens/Burgers';
import Beverages from '../Screens/HomeScreens/Beverages';
import Fries from '../Screens/HomeScreens/Fries';
import Sides from '../Screens/HomeScreens/Sides';
import Spacialties from '../Screens/HomeScreens/Spacialties';
import Quseadillas from '../Screens/HomeScreens/Quseadillas';
import Pokebowls from '../Screens/HomeScreens/Pokebowls';
import Dynamtiebombs from '../Screens/HomeScreens/Dynamtiebombs';
import Pokeperlb from '../Screens/HomeScreens/Pokeperlb';
import OrderPage from '../Screens/Order/OrderPage';
import Favourites from '../Screens/Favourite/Favourites';
import Summery from '../Screens/Payments/Summery';
import Dilvery from '../Screens/Payments/Dilvery';
import PickUp from '../Screens/Payments/PickUp';
import Summery2 from '../Screens/Payments/Summery2';
import CheckOut2 from '../Screens/Payments/CheckOut2';
import TotalPayment from '../Screens/Payments/TotalPayment';
import Login from '../Screens/LoginSignUpScreens/Login';
import CreateAccount from '../Screens/LoginSignUpScreens/CreateAccount';
import SignUp from '../Screens/LoginSignUpScreens/SignUp';
import Otp from '../Screens/LoginSignUpScreens/Otp';
import Location from '../Screens/Payments/Location';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CreateAccount"
      screenOptions={{headerShown: false, animation: 'fade'}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Kitchen" component={Kitchen} />
      <Stack.Screen name="Truck" component={Truck} />
      <Stack.Screen name="Combos" component={Combos} />
      <Stack.Screen name="Tacos" component={Tacos} />
      <Stack.Screen name="Burgers" component={Burgers} />
      <Stack.Screen name="Quseadillas" component={Quseadillas} />
      <Stack.Screen name="Spacialties" component={Spacialties} />
      <Stack.Screen name="Fries" component={Fries} />
      <Stack.Screen name="Sides" component={Sides} />
      <Stack.Screen name="Beverages" component={Beverages} />
      <Stack.Screen name="Pokebowls" component={Pokebowls} />
      <Stack.Screen name="Dynamtiebombs" component={Dynamtiebombs} />
      <Stack.Screen name="Pokeperlb" component={Pokeperlb} />
      <Stack.Screen name="OrderPage" component={OrderPage} />
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="Summery" component={Summery} />
      <Stack.Screen name="Dilvery" component={Dilvery} />
      <Stack.Screen name="PickUp" component={PickUp} />
      <Stack.Screen name="Summery2" component={Summery2} />
      <Stack.Screen name="CheckOut2" component={CheckOut2} />
      <Stack.Screen name="TotalPayment" component={TotalPayment} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
