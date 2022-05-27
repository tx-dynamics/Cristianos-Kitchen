import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const ColorSummeryDetail = ({marginTop}) => {
  return (
    <View style={{...styles.maincontainer, marginTop: marginTop}}>
      <View style={styles.selectcontainer}>
        <Text style={styles.classic2style}>SubTotal</Text>
        <Text style={styles.classic2style}>$ 8.50</Text>
      </View>

      <View style={styles.detailcontainer}>
        <Text style={styles.classic2style}>Estimated Tax</Text>
        <Text style={styles.classic2style}>$ 1.13</Text>
      </View>

      <View style={styles.cocacolacontainer}>
        <Text style={styles.classic2style}>Servic Fee</Text>
        <Text style={styles.classic2style}>$ 1.40</Text>
      </View>

      <View style={styles.totalccontainer}>
        <Text style={styles.classicstyle}>Total</Text>
        <Text style={styles.classicstyle}>$ 16.52</Text>
      </View>
    </View>
  );
};

export default ColorSummeryDetail;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#EBEBEB',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 10,
    width: responsiveWidth(90),
    height: responsiveHeight(18),
    marginHorizontal: '5%',
  },
  classicstyle: {
    color: 'black',
    fontFamily: 'Antique-Bold-Font',
    fontSize: responsiveFontSize(1.7),
  },
  detailcontainer: {
    width: responsiveWidth(78),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '2%',
  },
  selectcontainer: {
    width: responsiveWidth(78),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '4%',
  },
  cocacolacontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    width: responsiveWidth(78),
    marginTop: '2%',
  },
  classic2style: {
    color: 'black',
    fontSize: responsiveFontSize(2),
  },
  totalccontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '2%',
    marginBottom: '5%',
  },
});
