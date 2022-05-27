import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import Btn1 from '../../Components/Buttons/Btn1';
import Btn2 from '../../Components/Buttons/Btn2';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={'#25B7B7'} />
      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/Images/background.png')}>
        <Image
          style={styles.letstyle}
          resizeMode={'contain'}
          source={require('../../Assets/Images/let.png')}
        />
        <View style={styles.viewcontainer}>
          <Image
            style={styles.burgr1style}
            source={require('../../Assets/Images/burgr1.png')}
          />
          <Image
            style={styles.burgrstyle}
            source={require('../../Assets/Images/burgr.png')}
          />
        </View>

        <Btn1 text={'Login'} onPress={() => navigation.navigate('Login')} />
        <Btn1 text={'Sign Up'} onPress={() => navigation.navigate('SignUp')} />
        <Btn2
          text={'Continue With Google'}
          imagesource={require('../../Assets/Icons/google.png')}
          // backgroundColor={'#25B7B7'}
          borderColor={'#25B7B7'}
          width={responsiveWidth(6)}
          height={responsiveHeight(3)}
          marginLeft={'5%'}
          color={'black'}
          borderWidth={1}
          textmarginLeft={'9%'}
        />
        <Btn2
          text={'Continue With Facebook'}
          imagesource={require('../../Assets/Icons/facebook.png')}
          backgroundColor={'#395185'}
          borderColor={'#395185'}
          width={responsiveWidth(3)}
          height={responsiveHeight(2.9)}
          marginLeft={'6%'}
          color={'white'}
          textmarginLeft={'10%'}
        />
      </ImageBackground>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  backstyle: {
    flex: 1,
  },
  letstyle: {
    width: responsiveWidth(50),
    height: responsiveHeight(4),
    alignSelf: 'center',
    marginTop: '12%',
  },
  viewcontainer: {
    flexDirection: 'row',
    marginBottom: '3%',
  },
  burgr1style: {
    width: responsiveWidth(70),
    height: responsiveHeight(23),
    alignSelf: 'center',
    marginTop: '-3%',
  },
  burgrstyle: {
    width: responsiveWidth(65),
    height: responsiveHeight(25),
    alignSelf: 'center',
    marginLeft: '-37%',
    marginTop: '15%',
  },
});
