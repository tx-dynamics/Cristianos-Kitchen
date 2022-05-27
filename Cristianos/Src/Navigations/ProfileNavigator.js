import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../Screens/Profiles/Profile';
import Name from '../Screens/Profiles/Name';
import Email from '../Screens/Profiles/Email';
import MobailNumber from '../Screens/Profiles/MobailNumber';
import Password from '../Screens/Profiles/Password';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false, animation: 'fade'}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="MobailNumber" component={MobailNumber} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
