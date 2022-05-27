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

const Login = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1}}>
      <StatusBar backgroundColor={'#25B7B7'} />

      <View style={styles.maincontainer}>
        <ImageBackground
          style={styles.backstyle}
          source={require('../../Assets/Images/background.png')}>
          <Text style={styles.textstyle}>Login</Text>

          <Image
            style={styles.logstyle}
            source={require('../../Assets/Images/login.png')}
          />

          <InputFile placeholder={'Email/Phone Number'} />

          <InputFile placeholder={'Password'} />

          <Text style={styles.forgetstyle}>Forget Password?</Text>

          <Btn1 text={'Login'} onPress={() => navigation.navigate('Home')} />
        </ImageBackground>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

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
  logstyle: {
    width: responsiveWidth(80),
    height: responsiveHeight(30),
    alignSelf: 'center',
    marginTop: '0%',
    marginBottom: '9%',
  },
  forgetstyle: {
    color: '#FF0000',
    fontWeight: '400',
    marginLeft: '60%',
    marginTop: '1%',
    fontSize: responsiveFontSize(1.7),
  },
});
