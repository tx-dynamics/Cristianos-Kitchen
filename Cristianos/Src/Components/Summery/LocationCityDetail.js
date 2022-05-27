import {StyleSheet, Pressable, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import ProfileBtn from '../Buttons/ProfileBtn';

const LocationCityDetail = ({lasttext}) => {
  return (
    <View>
      <Text style={styles.maintextstyle}>
        Cristianos kitchen - West 5th Street
      </Text>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: '5%',
          alignItems: 'center',
          marginTop: '3%',
        }}>
        <Pressable
          style={{
            backgroundColor: '#25B7B7',
            borderColor: '#25B7B7',
            borderWidth: 1,
            width: responsiveWidth(15),
            height: responsiveHeight(4.5),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: responsiveFontSize(2),
              fontWeight: '700',
            }}>
            Open
          </Text>
        </Pressable>

        <Pressable
          style={{
            borderColor: 'black',
            borderWidth: 1,
            width: responsiveWidth(34),
            height: responsiveHeight(4.5),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            marginLeft: '3%',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: responsiveFontSize(2),
              fontWeight: '700',
            }}>
            Your Location
          </Text>
        </Pressable>
      </View>
      <View style={{marginHorizontal: '5%', marginTop: '3%'}}>
        <Text>120 West 5th Street </Text>
        <Text>Grrenville, NC 27858</Text>
        <Text>Offer Pickups , Delivery</Text>
        {lasttext ? <Text style={{color: 'red'}}>{lasttext}</Text> : null}
      </View>
      <View
        style={{
          opacity: 0.1,
          borderBottomWidth: 1,
          backgroundColor: '#000',
          marginHorizontal: '5%',
          marginTop: '5%',
        }}
      />
    </View>
  );
};

export default LocationCityDetail;

const styles = StyleSheet.create({
  maintextstyle: {
    fontSize: responsiveFontSize(1.7),
    color: 'black',
    marginTop: '3%',
    marginLeft: '5%',
    fontFamily: 'Antique-Bold-Font',
  },
});
