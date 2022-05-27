import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const ProfileBtn = ({
  text,
  textcolor,
  width,
  backgroundColor,
  height,
  borderRadius,
  marginLeft,
  onPress,
  marginTop,
  borderColor,
  borderWidth,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.backstyle,
        marginLeft: marginLeft,
        marginTop: marginTop,
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderWidth: borderWidth,
        borderColor: borderColor,
      }}>
      <Text style={{...styles.textstyle, color: textcolor}}>{text}</Text>
    </Pressable>
  );
};

export default ProfileBtn;

const styles = StyleSheet.create({
  backstyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Antique-Bold-Font',
  },
});
