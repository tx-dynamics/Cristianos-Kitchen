import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const HomeImages = ({
  fontSize2,
  fontFamily2,
  color2,
  width,
  height,
  fontSize,
  fontFamily,
  backgroundColor,
  imagesource,
  color,
  text,
  text2,
  text3,
  text4,
  onPress,
  marginTop,
  marginTopImage,
  marginBottom,
  marginToptext,
  marginBottomtext,
  marginBottomtext2,
  marginBottomImage,
  marginToptext2,
  letterSpacingtext,
  letterSpacingtext2,
  marginLefttext3,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.maincontainer,
        marginTop: marginTop,
        marginBottom: marginBottom,
        backgroundColor: backgroundColor,
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            ...styles.textstyle,
            fontSize: fontSize,
            fontFamily: fontFamily,
            color: color,
            marginTop: marginToptext,
            marginBottom: marginBottomtext,
            letterSpacing: letterSpacingtext,
          }}>
          {text}
        </Text>
        {text2 ? (
          <Text
            style={{
              ...styles.text2style,
              fontSize: fontSize2,
              fontFamily: fontFamily2,
              color: color2,
              marginTop: marginToptext2,
              marginBottom: marginBottomtext2,
              letterSpacing: letterSpacingtext2,
            }}>
            {text2}
          </Text>
        ) : null}
      </View>

      <Image
        style={{
          ...styles.imagestyle,
          marginTop: marginTopImage,
          marginBottom: marginBottomImage,
          width: width,
          height: height,
        }}
        resizeMode={'contain'}
        source={imagesource}
      />
      {text3 ? (
        <View>
          <Text style={{...styles.text3style, marginLeft: marginLefttext3}}>
            {text3}
          </Text>
          <Text style={styles.text4style}>{text4}</Text>
        </View>
      ) : null}
    </Pressable>
  );
};

export default HomeImages;

const styles = StyleSheet.create({
  maincontainer: {
    height: responsiveHeight(30),
    width: responsiveWidth(90),
    marginHorizontal: '5%',
  },
  imagestyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  textstyle: {
    alignSelf: 'center',
  },
  text2style: {
    alignSelf: 'center',
  },
  text3style: {
    color: 'white',
    fontSize: responsiveFontSize(1.1),
    fontFamily: 'Antique-Bold-Font',
  },
  text4style: {
    color: 'white',
    fontSize: responsiveFontSize(1.1),
    fontFamily: 'Antique-Bold-Font',
    marginLeft: '6%',
  },
});
