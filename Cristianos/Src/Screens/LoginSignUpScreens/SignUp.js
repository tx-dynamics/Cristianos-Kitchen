import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import InputFile from '../../Components/Inputs/Inputfile';
import Btn1 from '../../Components/Buttons/Btn1';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
      <StatusBar backgroundColor={'#25B7B7'} />

      <View style={styles.maincontainer}>
        <ImageBackground
          style={styles.backstyle}
          source={require('../../Assets/Images/background.png')}>
          <Text style={styles.textstyle}>Sign Up</Text>
          <View style={styles.imagecontainer}>
            <Image
              style={styles.imagestyle}
              source={require('../../Assets/Images/signup.png')}
            />
            <Image
              style={styles.image2style}
              source={require('../../Assets/Images/signup2.png')}
            />
          </View>

          <InputFile placeholder={'Email/Phone Number'} />

          <InputFile placeholder={'Password'} />

          <InputFile placeholder={'Confirm Password'} />

          <Btn1 text={'Sign Up'} onPress={() => navigation.navigate('Otp')} />
        </ImageBackground>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  backstyle: {
    flex: 1,
  },
  textstyle: {
    color: 'black',
    fontFamily: 'Antique-Bold-Font',
    fontSize: responsiveFontSize(2.5),
    marginTop: '9%',
    marginLeft: '6%',
  },
  imagestyle: {
    width: responsiveWidth(65),
    height: responsiveHeight(20),
    marginTop: '25%',
    marginLeft: '0%',
    zIndex: 100,
  },
  image2style: {
    width: responsiveWidth(80),
    height: responsiveHeight(28),
    marginTop: '4%',
    marginLeft: '-45%',
  },
  imagecontainer: {
    flexDirection: 'row',
    marginBottom: '12%',
  },
});
