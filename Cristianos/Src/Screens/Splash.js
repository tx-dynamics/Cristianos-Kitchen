import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Image,
  Animated,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const Splash = () => {
  const translation = useRef(new Animated.Value(150)).current;
  useEffect(() => {
    Animated.timing(translation, {
      toValue: 50,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={'#25B7B7'} />
      <ImageBackground
        style={styles.backstyle}
        source={require('../Assets/Images/background.png')}>
        <Image
          resizeMode={'contain'}
          style={styles.imagestyle}
          source={require('../Assets/Images/splashimage.png')}
        />
        <Animated.View>
          <Image
            style={styles.animationstyle}
            source={require('../Assets/Images/Loading.gif')}
          />
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  backstyle: {
    flex: 1,
  },
  imagestyle: {
    width: responsiveWidth(75),
    height: responsiveHeight(35),
    alignSelf: 'center',
    marginLeft: '4%',
    marginTop: '35%',
    // backgroundColor: 'red',
  },
  animationstyle: {
    width: responsiveWidth(70),
    height: responsiveHeight(15),
    alignSelf: 'center',
    marginTop: '36%',
  },
});
