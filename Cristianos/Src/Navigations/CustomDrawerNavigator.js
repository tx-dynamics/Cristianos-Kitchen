import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../Components/CustomNavigator/CustomText';

const CustomDrawerNavigator = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.maincontainer}>
      <View style={styles.headerstye}>
        <View style={styles.rcontainer}>
          <Text style={styles.rstyle}>R</Text>
        </View>
        <Text style={styles.riyanastyle}>Riyana Jhons</Text>
      </View>

      <CustomText
        onPress={() => navigation.navigate('Favourites')}
        widthcontainer={responsiveWidth(32)}
        marginTopcontainer={'12%'}
        text={'Favourites'}
        widthimage={'20.5%'}
        heightimage={'90%'}
        imagesource={require('../Assets/Icons/colorlike.png')}
      />

      <CustomText
        onPress={() => navigation.navigate('Orders')}
        widthcontainer={responsiveWidth(24)}
        marginTopcontainer={'12%'}
        text={'Orders'}
        widthimage={'20%'}
        heightimage={'92%'}
        imagesource={require('../Assets/Icons/orders.png')}
      />

      <CustomText
        onPress={() => navigation.navigate('ProfileNavigator')}
        widthcontainer={responsiveWidth(24)}
        marginTopcontainer={'12%'}
        text={'Profile'}
        widthimage={'26%'}
        heightimage={'92.5%'}
        imagesource={require('../Assets/Icons/profile.png')}
      />

      <CustomText
        // onPress={() => navigation.navigate('PaymentNavigator')}
        widthcontainer={responsiveWidth(31)}
        marginTopcontainer={'12%'}
        text={'Vouchers'}
        widthimage={'21%'}
        heightimage={'97%'}
        imagesource={require('../Assets/Icons/Voucher.png')}
      />

      <CustomText
        // onPress={() => navigation.navigate('HelpCenter')}
        widthcontainer={responsiveWidth(37)}
        marginTopcontainer={'12%'}
        text={'Help Center'}
        widthimage={'16.2%'}
        heightimage={'90%'}
        imagesource={require('../Assets/Icons/helpline.png')}
      />

      <View style={styles.linestyle}></View>

      <Pressable
      // onPress={() => navigation.navigate('Settings')}
      >
        <Text
          style={{
            color: 'black',
            marginLeft: '6%',
            marginTop: '3%',
            // fontFamily: 'Poppins-Light',
          }}>
          Settings
        </Text>
      </Pressable>

      <Pressable
      // onPress={() => navigation.navigate('TermAndConditions')}
      >
        <Text
          style={{
            color: 'black',
            marginLeft: '6%',
            marginTop: '6%',
            // fontFamily: 'Poppins-Light',
          }}>
          Term & Conditions/ Privacy
        </Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('CreateAccount')}>
        <Text
          style={{
            color: 'black',
            marginLeft: '6%',
            marginTop: '6%',
            // fontFamily: 'Poppins-Light',
          }}>
          Logout
        </Text>
      </Pressable>
    </View>
  );
};

export default CustomDrawerNavigator;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  headerstye: {
    backgroundColor: '#25B7B7',
    width: '100%',
    height: responsiveHeight(22.5),
    flexDirection: 'column',
  },
  rcontainer: {
    backgroundColor: 'white',
    width: responsiveWidth(12),
    height: responsiveHeight(6),
    borderRadius: 70,
    marginTop: '9%',
    marginLeft: '6%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rstyle: {
    fontSize: responsiveFontSize(2.7),
    fontFamily: 'Poppins-Bold',
    color: '#25B7B7',
  },
  riyanastyle: {
    fontSize: responsiveFontSize(2.3),
    color: 'white',
    fontFamily: 'Poppins-Light',
    marginTop: '21%',
    marginLeft: '6%',
  },
  linestyle: {
    width: '100%',
    height: responsiveHeight(0.05),
    backgroundColor: 'gray',
    marginTop: '  9%',
    marginBottom: '5%',
  },
});
