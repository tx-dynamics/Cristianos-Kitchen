import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  ImageBackground,
  Image,
  Pressable,
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

const Favourites = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={'#25B7B7'} />
      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/Images/background.png')}>
        <ProfileHeader
          textdata={'Favourites'}
          // marginLeftimage={'6%'}
          marginTopimage={'39%'}
          widthimage={responsiveWidth(3.5)}
          heightimage={responsiveHeight(1.8)}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.linestyle} />
        <View style={styles.Btncontainer}>
          {/* <ProfileBtn
            text={'Cristianos Kitchen'}
            width={responsiveWidth(41)}
            height={responsiveHeight(4.5)}
            backgroundColor={'#25B7B7'}
            borderRadius={20}
            textcolor={'white'}
          /> */}
          <Pressable
            style={{
              backgroundColor: '#25B7B7',
              borderColor: '#25B7B7',
              borderWidth: 1,
              width: responsiveWidth(41),
              height: responsiveHeight(4.5),
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: responsiveFontSize(2),
                fontWeight: '700',
              }}>
              Cristianos Kitchen
            </Text>
          </Pressable>
          {/* <ProfileBtn
            text={'Saihi Eats'}
            marginLeft={'5%'}
            width={responsiveWidth(25)}
            height={responsiveHeight(4.5)}
            borderColor={'#25B7B7'}
            borderWidth={1}
            borderRadius={20}
            textcolor={'#1A8797'}
          /> */}
          <Pressable
            style={{
              borderColor: '#25B7B7',
              borderWidth: 1,
              width: responsiveWidth(25),
              height: responsiveHeight(4.5),
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '5%',
            }}>
            <Text
              style={{
                color: '#25B7B7',
                fontSize: responsiveFontSize(2),
                fontWeight: '700',
              }}>
              Saihi Eats
            </Text>
          </Pressable>
        </View>
        <ReOrders btntext={'Order'} />
        <ReOrders btntext={'Order'} />
      </ImageBackground>
    </View>
  );
};

export default Favourites;

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
  Btncontainer: {
    flexDirection: 'row',
    marginHorizontal: '5%',
  },
  paststyle: {
    color: 'black',
    fontWeight: '800',
    fontSize: responsiveFontSize(2),
    marginLeft: '5%',
  },
});
