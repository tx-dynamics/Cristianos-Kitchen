import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const ProfileInput2 = ({placeholder}) => {
  return (
    <View style={styles.sectionStyle}>
      <Image
        resizeMode={'contain'}
        style={styles.imagestyle}
        source={require('../../Assets/Images/flag.png')}
      />
      <Image
        resizeMode={'contain'}
        style={styles.downstyle}
        source={require('../../Assets/Icons/downarrow.png')}
      />
      <TextInput
        style={{width: responsiveWidth(70)}}
        placeholder={'32 5548564'}
        selectTextOnFocus={false}
      />
    </View>
  );
};

export default ProfileInput2;

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
    paddingLeft: '4%',
    elevation: 10,
    // shadowOpacity: null,
    // shadowColor: null,
    // shadowOffset: null,
  },
  imagestyle: {
    height: responsiveHeight(4),
    width: responsiveWidth(8),
  },
  downstyle: {
    height: responsiveHeight(1.3),
    width: responsiveWidth(7),
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: '3%',
  },
});
