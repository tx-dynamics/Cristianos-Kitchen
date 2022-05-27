import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const SummeryDetails = ({
  cocacolatext,
  clasictext,
  selectedtext,
  ranchtext,
  friestext,
  totaltext,
  dolertext,
  dolertext1,
  dolertext2,
  dolertext3,
  dolertext4,
  dolertext5,
}) => {
  return (
    <View>
      <View style={styles.classiccontainer}>
        <Text style={styles.classicstyle}>{clasictext}</Text>
        <Text style={styles.classicstyle}>{dolertext}</Text>
      </View>

      <View style={styles.selectcontainer}>
        <Text style={styles.classic2style}>{selectedtext}</Text>
        <Text style={styles.classic2style}>{dolertext1}</Text>
      </View>

      <View style={styles.detailcontainer}>
        <Text style={styles.classic2style}>{ranchtext}</Text>
        <Text style={styles.classic2style}>{dolertext2}</Text>
      </View>

      <View style={styles.cocacolacontainer}>
        <Text style={styles.classic2style}>{cocacolatext}</Text>
        <Text style={styles.classic2style}>{dolertext3} </Text>
      </View>

      <View style={styles.cocacolacontainer}>
        <Text style={styles.classic2style}>{friestext}</Text>
        <Text style={styles.classic2style}>{dolertext4} </Text>
      </View>

      {totaltext ? (
        <View style={styles.totalccontainer}>
          <Text style={styles.classicstyle}>{totaltext}</Text>
          <Text style={styles.classicstyle}>{dolertext5}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default SummeryDetails;

const styles = StyleSheet.create({
  classiccontainer: {
    width: responsiveWidth(87),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginBottom: '2%',
  },
  classicstyle: {
    color: 'black',
    fontFamily: 'Antique-Bold-Font',
    fontSize: responsiveFontSize(1.7),
  },
  detailcontainer: {
    width: responsiveWidth(89),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  selectcontainer: {
    width: responsiveWidth(86.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
  },
  cocacolacontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    width: responsiveWidth(88),
  },
  classic2style: {
    color: 'black',
    fontSize: responsiveFontSize(2),
  },
  totalccontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginTop: '0%',
    marginBottom: '5%',
  },
});
