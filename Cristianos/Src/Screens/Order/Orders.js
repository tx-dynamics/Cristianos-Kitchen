import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import ProfileBtn from '../../Components/Buttons/ProfileBtn';
import ProfileInput from '../../Components/Inputs/ProfileInput';
import ProfileHeader from '../../Components/Headers/ProfileHeader';
import ReOrders from '../../Components/Edit/ReOrders';
import {useNavigation} from '@react-navigation/native';

const Orders = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={'#25B7B7'} />

      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/Images/background.png')}>
        <ProfileHeader
          textdata={'Orders'}
          marginTopimage={'39%'}
          widthimage={responsiveWidth(3.5)}
          heightimage={responsiveHeight(1.8)}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.linestyle} />
        <Text style={styles.paststyle}>Past Orders</Text>
        <ReOrders date={'03 Mar, 22 1:13pm'} btntext={'Re-Order'} />
        <ReOrders date={'03 Mar, 22  2:13pm'} btntext={'Re-Order'} />
      </ImageBackground>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  backstyle: {
    flex: 1,
  },
  linestyle: {
    opacity: 0.1,
    borderBottomWidth: 1,
    backgroundColor: '#000',
    marginHorizontal: '5%',
    marginTop: '0.7%',
    marginBottom: '3%',
  },
  paststyle: {
    color: 'black',
    fontWeight: '800',
    fontSize: responsiveFontSize(1.9),
    marginLeft: '5%',
  },
});
