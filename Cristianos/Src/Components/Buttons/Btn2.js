import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Btn2 = ({
  text,
  imagesource,
  marginLeft,
  backgroundColor,
  height,
  width,
  color,
  textmarginLeft,
  borderColor,
  borderWidth,
}) => {
  return (
    <Pressable
      style={{
        ...styles.backstyle,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        borderWidth: borderWidth,
      }}>
      <Image
        style={{
          ...styles.iconstyle,
          marginLeft: marginLeft,
          width: width,
          height: height,
        }}
        source={imagesource}
      />
      <Text
        style={{...styles.textstyle, marginLeft: textmarginLeft, color: color}}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Btn2;

const styles = StyleSheet.create({
  backstyle: {
    flexDirection: 'row',
    width: responsiveWidth(78),
    height: responsiveHeight(6),
    alignItems: 'center',
    marginHorizontal: '10%',
    borderRadius: 15,
    marginTop: '5%',
  },
  textstyle: {
    fontSize: responsiveFontSize(1.9),
    fontWeight: '500',
  },
  iconstyle: {},
});
