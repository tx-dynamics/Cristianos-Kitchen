import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const ProfileHeader = ({
  textdata,
  marginTopimage,
  onPress,
  widthimage,
  heightimage,
  marginLeftimage,
}) => {
  return (
    <View style={styles.maincontainer}>
      <Pressable style={styles.pressable} onPress={onPress}>
        <Image
          style={{
            ...styles.imagestyle,
            marginTop: marginTopimage,
            width: widthimage,
            height: heightimage,
            marginLeft: marginLeftimage,
          }}
          source={require('../../Assets/Icons/back.png')}
        />
      </Pressable>
      <Text style={styles.textstyle}>{textdata}</Text>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: 'row',
  },
  imagestyle: {
    width: responsiveWidth(5),
    height: responsiveHeight(2.5),
    // paddingLeft: '6%',
  },
  pressable: {
    marginLeft: '7%',
    marginTop: '5%',
  },
  textstyle: {
    color: 'black',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginLeft: '7%',
    marginTop: '3%',
  },
});
