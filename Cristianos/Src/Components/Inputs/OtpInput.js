import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const OtpInput = ({placeholder}) => {
  return (
    <View style={styles.sectionStyle}>
      <TextInput
        style={{
          width: responsiveWidth(10),
          height: responsiveHeight(6),
          fontWeight: 'bold',
          fontSize: responsiveFontSize(2.5),
          alignSelf: 'center',
          justifyContent: 'center',
          marginLeft: '3%',
        }}
        placeholder={placeholder}
        selectTextOnFocus={false}
        keyboardType="numeric"
        maxLength={1}
      />
    </View>
  );
};

export default OtpInput;

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBEBEB',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    height: responsiveHeight(6),
    width: responsiveWidth(12),
    borderRadius: 10,
    marginTop: '5%',
    marginHorizontal: '5%',
    paddingLeft: '5%',
  },
});
