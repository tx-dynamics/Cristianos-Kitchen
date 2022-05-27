import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const HomeImage2 = ({
  width,
  height,
  imagesource,
  onPress,
  marginTop,
  marginTopImage,
  marginBottom,
  backgroundColor,
  text,
  text2,
  fontSize,
  fontWeight,
  fontSize2,
  fontWeight2,
  marginToptext2,
  marginLefttext2,
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
      <Image
        style={{
          ...styles.imagestyle,
          marginTop: marginTopImage,
          width: width,
          height: height,
        }}
        resizeMode={'contain'}
        source={imagesource}
      />
      {text ? (
        <View style={styles.textcontainer}>
          <Text
            style={{
              ...styles.textstyle,
              fontSize: fontSize,
              fontWeight: fontWeight,
            }}>
            {text}
          </Text>
          <Text
            style={{
              ...styles.text2style,
              fontSize: fontSize2,
              fontWeight: fontWeight2,
              marginTop: marginToptext2,
              marginLeft: marginLefttext2,
            }}>
            {text2}
          </Text>
        </View>
      ) : null}
    </Pressable>
  );
};

export default HomeImage2;

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: 'column',
    height: responsiveHeight(21),
    width: responsiveWidth(42.3),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5%',
  },
  imagestyle: {},
  textcontainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: responsiveWidth(30),
    height: responsiveHeight(3),
    marginLeft: '-45%',
    marginTop: '0%',
  },
  textstyle: {
    color: 'white',
  },
  text2style: {
    color: 'white',
  },
});
