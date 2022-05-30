import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const CustomText = ({
  widthcontainer,
  heightcontainer,
  marginTopcontainer,
  widthimage,
  heightimage,
  imagesource,
  text,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.textcontainer,
        width: widthcontainer,
        height: heightcontainer,
        marginTop: marginTopcontainer,
      }}>
      <Image
        resizeMode={'contain'}
        style={{...styles.imagestyle, width: widthimage, height: heightimage}}
        source={imagesource}
      />
      <Text style={styles.textstyle}>{text}</Text>
    </Pressable>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  textcontainer: {
    flexDirection: 'row',
    marginLeft: '6%',
    alignItems: 'center',
    justifyContent: 'space-between',
    //backgroundColor: 'red',
  },
  textstyle: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: '600',
    color: 'black',
  },
  imagestyle: {
    // backgroundColor: 'red',
  },
});
