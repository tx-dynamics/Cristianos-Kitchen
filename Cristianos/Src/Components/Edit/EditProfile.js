import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const EditProfile = ({
  text1,
  text2,
  onPress,
  marginLefttext2,
  marginLefttext1,
}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.textcontainer}>
        <Text style={{...styles.text1styl, marginLeft: marginLefttext1}}>
          {text1}
        </Text>
        <Text style={{...styles.text2styl, marginLeft: marginLefttext2}}>
          {text2}
        </Text>
      </View>
      <Pressable style={styles.pressable} onPress={onPress}>
        <Image
          style={styles.editstyle}
          source={require('../../Assets/Icons/edit.png')}
        />
      </Pressable>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  maincontainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(10),
    marginHorizontal: '5%',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'white',
    elevation: 10,
    // backgroundColor: 'yellow',
  },
  textcontainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  text1styl: {
    alignSelf: 'flex-start',
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
    marginTop: '3%',
  },
  text2styl: {
    color: 'black',
    fontSize: responsiveFontSize(2.3),
    fontWeight: '500',
    marginBottom: '6%',
    alignSelf: 'flex-start',
  },
  editstyle: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
    // backgroundColor: 'red',
  },
  pressable: {
    width: responsiveWidth(9),
    height: responsiveHeight(8),
    marginTop: '2%',
    // backgroundColor: 'red',
  },
});
