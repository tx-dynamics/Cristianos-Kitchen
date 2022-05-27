import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import EditProfile from '../../Components/Edit/EditProfile';
import ProfileHeader from '../../Components/Headers/ProfileHeader';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
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
          textdata={'PROFILE'}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.linestyle} />
        <EditProfile
          onPress={() => navigation.navigate('Name')}
          text1={'Name'}
          marginLefttext1={'12%'}
          marginLefttext2={'12%'}
          text2={'Riyana Jhons'}
        />
        <EditProfile
          onPress={() => navigation.navigate('Email')}
          text1={'Email'}
          marginLefttext1={'8.5%'}
          marginLefttext2={'8.5%'}
          text2={'Jhons619@gmail.com'}
        />
        <EditProfile
          onPress={() => navigation.navigate('Password')}
          text1={'Password'}
          marginLefttext1={'15.5%'}
          marginLefttext2={'15.5%'}
          text2={'*********'}
        />
        <EditProfile
          onPress={() => navigation.navigate('MobailNumber')}
          text1={'Mobile Number'}
          marginLefttext1={'11.5%'}
          marginLefttext2={'11.5%'}
          text2={'+92 32 5548564'}
        />
      </ImageBackground>
    </View>
  );
};

export default Profile;

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
  },
});
