import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import HomeHeader from '../../Components/Headers/HomeHeader';
import HomeImages from '../../Components/Images/HomeImages';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/Images/background.png')}>
        <HomeHeader
          textonPress={() => navigation.navigate('Location')}
          onPress={() => navigation.openDrawer()}
          rightonPress={() => navigation.navigate('Favourites')}
          imagesource2={require('../../Assets/Icons/whitelike.png')}
          imagesource={require('../../Assets/Icons/drawar.png')}
        />
        <HomeImages
          onPress={() => navigation.navigate('Kitchen')}
          text={'CRISTIANOS'}
          text2={'KITCHEN'}
          color={'white'}
          color2={'white'}
          fontFamily={'Antique-Bold-Font'}
          fontFamily2={'Antique-Bold-Font'}
          marginTop={'12%'}
          marginToptext={'5%'}
          marginTopImage={'-3%'}
          // letterSpacingtext2={0.02}
          fontSize2={responsiveFontSize(3.1)}
          fontSize={responsiveFontSize(3.2)}
          width={responsiveWidth(60)}
          height={responsiveHeight(22)}
          backgroundColor={'#25B7B7'}
          // marginBottomImage={'6%'}
          imagesource={require('../../Assets/Images/kitchen.png')}
        />
        <HomeImages
          onPress={() => navigation.navigate('Truck')}
          text={'THE FOOD TRUCK'}
          text2={'SaiHi Eats'}
          color={'white'}
          color2={'#25B7B7'}
          fontFamily={'Antique-Bold-Font'}
          fontFamily2={'Antique-Bold-Font'}
          marginTop={'12%'}
          fontSize2={responsiveFontSize(3)}
          fontSize={responsiveFontSize(3)}
          width={responsiveWidth(50)}
          height={responsiveHeight(20)}
          backgroundColor={'#FF95A6'}
          imagesource={require('../../Assets/Images/truck.png')}
        />
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  backstyle: {
    flex: 1,
  },
});
