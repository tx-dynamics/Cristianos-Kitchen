import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const HomeHeader = ({
  imagesource,
  marginBottomright,
  marginBottomleft,
  rightonPress,
  onPress,
  imagesource2,
  textonPress,
}) => {
  return (
    <View style={styles.maincontainer}>
      <Pressable style={{marginLeft: '5%'}} onPress={onPress}>
        <Image
          resizeMode={'contain'}
          style={{...styles.drawerstyle, marginBottom: marginBottomleft}}
          source={imagesource}
        />
      </Pressable>

      <View style={styles.textcontainer}>
        <Text style={styles.text1style}>PICKING UP FROM</Text>

        <Pressable onPress={textonPress}>
          <Text style={styles.text2style}>8700, Houston, Texas</Text>
        </Pressable>
      </View>

      <Pressable onPress={rightonPress}>
        <Image
          resizeMode={'contain'}
          style={{...styles.likestyle, marginBottom: marginBottomright}}
          source={imagesource2}
        />
      </Pressable>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#25B7B7',
    height: responsiveHeight(9),
    alignItems: 'center',
  },
  drawerstyle: {
    width: responsiveWidth(5),
    height: responsiveHeight(2.5),
    marginLeft: '5%',
  },
  textcontainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text1style: {
    color: 'white',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
  },
  text2style: {
    color: 'white',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
  },
  likestyle: {
    width: responsiveWidth(5),
    height: responsiveHeight(2.5),
    marginRight: '5%',
  },
});
