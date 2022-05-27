import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const ProfileInput = ({placeholder}) => {
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

export default ProfileInput;

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    borderRadius: 15,
    marginTop: '3%',
    marginHorizontal: '5%',
    paddingLeft: '5%',
    elevation: 10,
    // shadowOpacity: null,
    // shadowColor: null,
    // shadowOffset: null,
  },
});
