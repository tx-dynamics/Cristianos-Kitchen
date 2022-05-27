import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Favourites from '../Screens/Favourite/Favourites';
import Orders from '../Screens/Order/Orders';
import ProfileNavigator from '../Navigations/ProfileNavigator';
import Vouchers from '../Screens/Voucher/Vouchers';
import HelpCenter from '../Screens/HelpCenter';
import Settings from '../Screens/Settings';
import TermAndConditions from '../Screens/TermAndConditions';
import Logout from '../Screens/LoginSignUpScreens/Logout';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import CustomDrawerNavigator from './CustomDrawerNavigator';
import PaymentNavigator from './PaymentNavigator';
import AuthNavigator from './AuthNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerNavigator {...props} />}
        initialRouteName="HomeNavigator"
        screenOptions={{swipeEnabled: false, headerShown: false}}>
        <Drawer.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{
            drawerLabel: 'Home',
          }}
        />
        <Drawer.Screen name="Favourites" component={Favourites} />
        <Drawer.Screen name="Orders" component={Orders} />
        <Drawer.Screen name="ProfileNavigator" component={ProfileNavigator} />
        {/* <Drawer.Screen name="PaymentNavigator" component={PaymentNavigator} /> */}
        {/* <Drawer.Screen name="HelpCenter" component={HelpCenter} /> */}
        {/* <Drawer.Screen name="Settings" component={Settings} /> */}
        {/* <Drawer.Screen name="TermAndConditions" component={TermAndConditions} /> */}
        {/* <Drawer.Screen name="Logout" component={Logout} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
