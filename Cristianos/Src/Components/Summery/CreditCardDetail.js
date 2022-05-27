import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {RadioButton} from 'react-native-paper';

const CreditCardDetail = () => {
  const [fourRadio, setFourRadio] = useState(false);

  return (
    <View>
      <Text style={styles.textstyle}>Name*</Text>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.inputstyle} placeholder="Enter Full Name" />
      </View>
      <Text style={styles.textstyle}>Card Number*</Text>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.inputstyle}
          placeholder="_ _ _ _ - _ _ _ _ - _ _ _ _ - _ _ _ _"
        />
      </View>

      <Text style={styles.textstyle}>Exp. Date*</Text>
      <View style={styles.inputcontainer}>
        <TextInput style={styles.inputstyle} placeholder="Exp. Date" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: responsiveWidth(65),
          marginLeft: '2%',
          marginTop: '1%',
        }}>
        <Text style={styles.textstyle}>CVV Code*</Text>
        <Text style={styles.textstyle}>Zip Code*</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: responsiveWidth(86),
        }}>
        <View style={styles.inputcontainer2}>
          <TextInput style={styles.input2style} placeholder="_ _ _" />
        </View>
        <View style={styles.inputcontainer2}>
          <TextInput style={styles.input2style} placeholder="_ _ _ _ _" />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingBottom: '1%',
        }}>
        <View
          style={{
            marginLeft: '7%',
            transform: [{scale: 0.8}],
          }}>
          <RadioButton
            status={fourRadio === true ? 'checked' : 'unchecked'}
            onPress={() => {
              // setPayment(true);
              setFourRadio(prev => !prev);
            }}
          />
        </View>
        <Text
          style={{
            fontSize: responsiveFontSize(1.9),
            color: 'black',
            alignSelf: 'center',
          }}>
          Save Card For Later
        </Text>
      </View>
    </View>
  );
};

export default CreditCardDetail;

const styles = StyleSheet.create({
  textstyle: {
    fontSize: responsiveFontSize(2),
    fontWeight: '400',
    color: 'black',
    marginTop: '2%',
    marginLeft: '4%',
  },

  inputstyle: {
    justifyContent: 'center',
    width: responsiveWidth(82),
    height: responsiveHeight(10),
    // paddingLeft: '7%',
    color: 'black',
  },
  inputcontainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#25B7B7',
    marginHorizontal: '4%',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(82),
    height: responsiveHeight(5),
    paddingLeft: '7%',
    marginTop: '2%',
  },
  inputcontainer2: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#25B7B7',
    marginLeft: '4%',
    borderRadius: 40,
    justifyContent: 'center',
    width: responsiveWidth(39.5),
    height: responsiveHeight(5),
    paddingLeft: '6%',
    marginTop: '2%',
    marginBottom: '2%',
  },
  input2style: {
    justifyContent: 'center',
    width: responsiveWidth(39.5),
    height: responsiveHeight(10),
    // paddingLeft: '7%',
    color: 'black',
  },
});
