import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import ProfileBtn from '../Components/Buttons/ProfileBtn';

const CustomTab = () => {
  return (
    <View style={styles.maincontainer}>
      <ProfileBtn
        width={responsiveWidth(10)}
        height={responsiveHeight(0.6)}
        backgroundColor={'#25B7B7'}
        borderColor={'#25B7B7'}
        borderWidth={1}
        borderRadius={35}
      />
      <ProfileBtn
        width={responsiveWidth(10)}
        height={responsiveHeight(0.6)}
        backgroundColor={'#25B7B7'}
        borderColor={'#25B7B7'}
        borderWidth={1}
        borderRadius={35}
      />
      <ProfileBtn
        width={responsiveWidth(10)}
        height={responsiveHeight(0.6)}
        backgroundColor={'grey'}
        borderColor={'grey'}
        borderWidth={1}
        borderRadius={35}
      />
      <ProfileBtn
        width={responsiveWidth(10)}
        height={responsiveHeight(0.6)}
        backgroundColor={'grey'}
        borderColor={'grey'}
        borderWidth={1}
        borderRadius={35}
      />
    </View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  maincontainer: {
    width: responsiveWidth(70),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: responsiveHeight(1),
    marginLeft: 60,
    // backgroundColor: 'red',
  },
});
