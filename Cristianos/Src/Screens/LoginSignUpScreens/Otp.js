import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React from 'react';
import OtpInput from '../../Components/Inputs/OtpInput';
import Btn1 from '../../Components/Buttons/Btn1';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const Otp = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
      <StatusBar backgroundColor={'#25B7B7'} />

      <View style={styles.maincontainer}>
        <ImageBackground
          style={styles.backstyle}
          source={require('../../Assets/Images/background.png')}>
          <Text style={styles.textstyle}>OTP</Text>
          <Image
            resizeMode={'contain'}
            style={styles.otpstyle}
            source={require('../../Assets/Images/otp.png')}
          />
          <View style={styles.textcontainer}>
            <Text style={styles.otptextstyle}>
              Enter OTP sent to{' '}
              <Text style={styles.nmbrstyle}>92341125435</Text>
            </Text>
          </View>
          <View style={styles.otpinputcontainer}>
            <OtpInput />
            <OtpInput />
            <OtpInput />
            <OtpInput />
          </View>

          <Btn1 text={'Submit'} onPress={() => navigation.navigate('Login')} />

          <View style={styles.text2container}>
            <Text style={styles.otptextstyle}>
              Didn’t received OTP? <Text style={styles.nmbrstyle}>Resend</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  backstyle: {
    flex: 1,
  },
  textstyle: {
    fontFamily: 'Antique-Bold-Font',
    color: 'black',
    fontSize: responsiveFontSize(2.5),
    marginTop: '9%',
    marginLeft: '6%',
  },
  otpstyle: {
    width: responsiveWidth(58),
    height: responsiveHeight(28),
    alignSelf: 'center',
    marginTop: '9%',
    marginBottom: '21%',
  },
  textcontainer: {
    flexDirection: 'row',
    marginLeft: '22.5%',
  },
  otptextstyle: {
    color: '#7A7A7A',
    fontWeight: '600',
    marginTop: '3%',
    // marginLeft: '22%',
    fontSize: responsiveFontSize(1.7),
  },
  nmbrstyle: {
    color: '#25B7B7',
    fontWeight: '600',
    marginTop: '3%',
    fontSize: responsiveFontSize(1.7),
  },
  otpinputcontainer: {
    flexDirection: 'row',
    paddingLeft: '10%',
    marginBottom: '3%',
    width: responsiveWidth(80),
    justifyContent: 'space-between',
  },
  text2container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
