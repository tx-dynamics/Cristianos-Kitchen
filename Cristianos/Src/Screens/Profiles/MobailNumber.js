import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';

import ProfileHeader from '../../Components/Headers/ProfileHeader';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import ProfileBtn from '../../Components/Buttons/ProfileBtn';
import ProfileInput2 from '../../Components/Inputs/ProfileInput2';
import {useNavigation} from '@react-navigation/native';

const MobailNumber = () => {
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
          textdata={'MOBILE NUMBER'}
        />
        <View style={styles.linestyle} />
        <ProfileInput2 />
        <ProfileBtn
          onPress={() => navigation.navigate('Profile')}
          text={'UPDATE'}
          marginLeft={'33%'}
          marginTop={'120%'}
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

export default MobailNumber;

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
