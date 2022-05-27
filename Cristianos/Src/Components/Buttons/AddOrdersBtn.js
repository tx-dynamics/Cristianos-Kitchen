import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const AddOrdersBtn = ({route}) => {
  const navigation = useNavigation();
  const [counter, setCounter] = useState(1);

  return (
    <View style={styles.maincontainer}>
      <View style={styles.viewcontainer}>
        <Pressable
          onPress={() => {
            if (counter > 1) setCounter(counter - 1);
          }}>
          <Text style={styles.textstyle}>-</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.textstyle}>{counter}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setCounter(counter + 1);
          }}>
          <Text style={styles.textstyle}>+</Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate('Summery')}>
        <Text style={styles.addstyle}>Add to Order</Text>
      </Pressable>
    </View>
  );
};

export default AddOrdersBtn;

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    height: responsiveHeight(5.5),
    marginHorizontal: '5%',
    backgroundColor: '#25B7B7',
    alignItems: 'center',
    borderRadius: 40,
    marginBottom: '5%',
  },
  viewcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(25),
    height: responsiveHeight(5),
    marginHorizontal: '5%',
    alignItems: 'center',
    marginLeft: '9%',
  },
  textstyle: {
    color: 'white',
    fontSize: responsiveFontSize(2.2),
    fontFamily: 'Antique-Bold-Font',
    marginLeft: '6%',
  },
  addstyle: {
    color: 'white',
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'Antique-Bold-Font',
    marginRight: '6%',
  },
});
