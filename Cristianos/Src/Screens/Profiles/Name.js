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
import {useNavigation} from '@react-navigation/native';
const Name = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={'#25B7B7'} />

      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/Images/background.png')}>
        <ProfileHeader
          marginTopimage={'39%'}
          widthimage={responsiveWidth(3.5)}
          heightimage={responsiveHeight(1.8)}
          onPress={() => navigation.navigate('Profile')}
          textdata={'NAME'}
        />
        <View style={styles.linestyle} />
        <ProfileInput placeholder={'First Name'} />
        <ProfileInput placeholder={'Last Name'} />
        <ProfileBtn
          onPress={() => navigation.navigate('Profile')}
          text={'UPDATE'}
          marginLeft={'33%'}
          marginTop={'105%'}
          width={responsiveWidth(35)}
          height={responsiveHeight(6)}
          backgroundColor={'#25B7B7'}
          borderRadius={15}
          textcolor={'white'}
        />
      </ImageBackground>
    </View>
  );
};

export default Name;

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
    marginBottom: '5%',
  },
});
