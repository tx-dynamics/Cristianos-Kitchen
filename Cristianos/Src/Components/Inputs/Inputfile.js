import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const InputFile = ({placeholder}) => {
  return (
    <View style={styles.sectionStyle}>
      <TextInput
        style={{width: responsiveWidth(70)}}
        placeholder={placeholder}
        selectTextOnFocus={false}
      />
    </View>
  );
};

export default InputFile;

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    height: responsiveHeight(6),
    width: responsiveWidth(80),
    borderRadius: 15,
    marginTop: '3%',
    marginHorizontal: '9%',
    paddingLeft: '5%',
  },
});
