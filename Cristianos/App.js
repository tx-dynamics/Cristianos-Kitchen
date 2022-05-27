import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Splash from './Src/Screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './Src/Navigations/RootNavigator';
import DrawerNavigator from './Src/Navigations/DrawerNavigator';
import HomeNavigator from './Src/Navigations/HomeNavigator';
import PaymentNavigator from './Src/Navigations/PaymentNavigator';
import CustomDrawerNavigator from './Src/Navigations/CustomDrawerNavigator';

const App = () => {
  const [user, setUser] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setUser(false);
    }, 3000);
  }, []);
  return user ? <Splash /> : <DrawerNavigator />;
};

export default App;

const styles = StyleSheet.create({});

// loading ? (
//   <Splash />
// ) : (
//   <NavigationContainer>
//     <RootNavigator />
//     {/* {!user?<AuthNavigation/>: <ProfileNavigator/>} */}
//   </NavigationContainer>
// );
