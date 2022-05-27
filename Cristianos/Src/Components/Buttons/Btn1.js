import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Btn1 = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.backstyle}>
      <Text style={styles.textstyle}>{text}</Text>
    </Pressable>
  );
};

export default Btn1;

const styles = StyleSheet.create({
  backstyle: {
    width: responsiveWidth(78),
    height: responsiveHeight(6),
    backgroundColor: '#25B7B7',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '10%',
    borderRadius: 15,
    marginTop: '5%',
  },
  textstyle: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: 'white',
  },
});
