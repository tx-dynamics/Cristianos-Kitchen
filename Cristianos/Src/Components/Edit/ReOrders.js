import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import ProfileBtn from '../Buttons/ProfileBtn';
const ReOrders = ({date, btntext}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.imagestyle}
          source={require('../../Assets/Images/reorderburgur.png')}
        />
        <View style={styles.textcontainer}>
          <Text style={styles.text1styl}>Fish Burger</Text>
          <Text style={styles.text2styl}>Description</Text>
        </View>
        <View style={{justifyContent: 'flex-start'}}>
          <Text style={styles.dollerstyle}>$ 8.50</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: '5%',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.datestyle}>{date}</Text>
        <Pressable style={styles.pressablestyle}>
          <Text style={styles.btntextstyle}>{btntext}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ReOrders;

const styles = StyleSheet.create({
  maincontainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(15),
    marginHorizontal: '5%',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: '3%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'white',
    elevation: 10,
    shadowOpacity: 3,
    shadowColor: null,
    shadowOffset: null,
  },
  imagecontainer: {
    flexDirection: 'row',
    width: responsiveWidth(90),
    height: responsiveHeight(9),
  },
  imagestyle: {
    width: responsiveWidth(16),
    height: responsiveHeight(5.3),
    marginLeft: '3%',
    marginTop: '3%',
  },
  textcontainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: responsiveWidth(30),
    height: responsiveHeight(5.3),
    marginTop: '2.3%',
  },
  text1styl: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    marginLeft: '7%',
  },
  text2styl: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
    marginLeft: '7%',
  },
  dollerstyle: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: '700',
    marginLeft: '45%',
    marginTop: '5%',
  },
  datestyle: {
    marginBottom: '9%',
    color: 'black',
    fontSize: responsiveFontSize(1.5),
    opacity: 0.5,
    fontWeight: '400',
  },
  pressablestyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5%',
    width: responsiveWidth(25),
    height: responsiveHeight(4),
    borderColor: '#25B7B7',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#25B7B7',
  },
  btntextstyle: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: 'white',
  },
});
