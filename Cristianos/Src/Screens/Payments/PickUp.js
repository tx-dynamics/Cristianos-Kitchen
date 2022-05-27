import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  Pressable,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import HomeHeader from '../../Components/Headers/HomeHeader';
import {useNavigation} from '@react-navigation/native';
import ProfileBtn from '../../Components/Buttons/ProfileBtn';
import ColorSummeryDetail from '../../Components/Summery/ColorSummeryDetail';
import CreditCardDetail from '../../Components/Summery/CreditCardDetail';
import {RadioButton} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

const PickUp = () => {
  const navigation = useNavigation();
  const [firstRadio, setFirstRadio] = useState(false);
  const [fourRadio, setFourRadio] = useState(false);
  const [checkedin, setCheckedIn] = useState('Second');
  const [ordertime, setOrderTime] = useState(false);
  const [payment, setPayment] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [opentime, setOpenTime] = useState(false);

  return (
    <View style={styles.maincontainer}>
      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/Images/background.png')}>
        <HomeHeader
          textonPress={() => navigation.navigate('Location')}
          // imagesource2={require('../../Assets/Icons/detailes.png')}
          onPress={() => navigation.goBack()}
          imagesource={require('../../Assets/Icons/witheback.png')}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textstyle}>Order Type</Text>

          <View style={styles.Btncontainer}>
            <ProfileBtn
              text={'PICKUP'}
              onPress={() => navigation.navigate('PickUp')}
              width={responsiveWidth(40)}
              height={responsiveHeight(4.5)}
              borderRadius={20}
              backgroundColor={'#25B7B7'}
              borderColor={'#25B7B7'}
              borderWidth={1}
              textcolor={'white'}
            />
            <ProfileBtn
              text={'DELIVERY'}
              onPress={() => navigation.navigate('Dilvery')}
              marginLeft={'5%'}
              width={responsiveWidth(40)}
              height={responsiveHeight(4.5)}
              // backgroundColor={'#25B7B7'}
              borderColor={'#25B7B7'}
              borderWidth={1}
              borderRadius={20}
              textcolor={'#25B7B7'}
            />
          </View>
          <View
            style={{
              marginTop: '2%',
              flexDirection: 'row',
              marginLeft: '5%',
              // backgroundColor: 'red',
            }}>
            <View
              style={{
                marginLeft: '1%',
                transform: [{scale: 0.8}],
              }}>
              <RadioButton
                status={firstRadio == false ? 'checked' : 'unchecked'}
                onPress={() => setFirstRadio(prev => !prev)}
              />
            </View>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                color: 'black',
                alignSelf: 'center',
              }}>
              In-Store Pickup
            </Text>
          </View>

          <Text style={styles.textstyle}>Order Time</Text>

          <View style={styles.asapcontainer}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  marginLeft: '1%',
                  transform: [{scale: 0.8}],
                }}>
                <RadioButton
                  // value="Second"
                  status={checkedin == 'Second' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setCheckedIn('Second');
                    setOrderTime(false);
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  marginLeft: '0%',
                  color: 'black',
                  alignSelf: 'center',
                }}>
                ASAP
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  marginLeft: '1%',
                  transform: [{scale: 0.8}],
                }}>
                <RadioButton
                  status={checkedin === 'Third' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setOrderTime(true);
                    setCheckedIn('Third');
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  marginLeft: '0%',
                  color: 'black',
                  alignSelf: 'center',
                }}>
                Pick a Date & Time
              </Text>
            </View>

            {/* select a date and time */}

            {ordertime ? (
              <View
                style={{
                  marginBottom: '2%',
                  flexDirection: 'column',
                  marginTop: '0%',
                }}>
                {/* set modal date */}

                <Pressable
                  style={styles.selectdatecontainer}
                  onPress={() => setOpen(true)}>
                  <Text style={styles.selectdatestyle}>Select Date</Text>
                  <Image
                    style={styles.updownarrowstyle}
                    resizeMode={'contain'}
                    source={require('../../Assets/Icons/updownarrow.png')}
                  />
                </Pressable>

                <DatePicker
                  modal
                  mode="date"
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />

                {/* select a time  */}

                <Pressable
                  style={styles.selectdatecontainer}
                  onPress={() => setOpenTime(true)}>
                  <Text style={styles.selectdatestyle}>Select Time</Text>
                  <Image
                    style={styles.updownarrowstyle}
                    resizeMode={'contain'}
                    source={require('../../Assets/Icons/updownarrow.png')}
                  />
                </Pressable>

                <DatePicker
                  modal
                  mode="time"
                  open={opentime}
                  date={time}
                  onConfirm={time => {
                    setOpenTime(false);
                    setTime(time);
                  }}
                  onCancel={() => {
                    setOpenTime(false);
                  }}
                />
              </View>
            ) : null}
          </View>

          <Text style={styles.textstyle}>Payment</Text>

          <View style={styles.paymentcontainer}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  marginLeft: '1%',
                  transform: [{scale: 0.8}],
                }}>
                <RadioButton
                  status={fourRadio === true ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setPayment(prev => !prev);
                    setFourRadio(prev => !prev);
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  color: 'black',
                  alignSelf: 'center',
                }}>
                Credit / Debit Card
              </Text>
            </View>
            {payment ? (
              <View>
                <CreditCardDetail />
              </View>
            ) : null}
          </View>

          <Text style={styles.textstyle}>Coupon Code</Text>

          <View style={styles.couponcontainer}>
            <Text>Coupon Code</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <ProfileBtn
              text={'APPLY'}
              marginLeft={'5%'}
              marginTop={'3%'}
              width={responsiveWidth(35)}
              height={responsiveHeight(4.5)}
              backgroundColor={'#25B7B7'}
              borderColor={'#25B7B7'}
              borderWidth={1}
              borderRadius={20}
              textcolor={'white'}
            />
          </View>

          <ColorSummeryDetail marginTop={'3%'} />

          <ProfileBtn
            onPress={() => navigation.navigate('TotalPayment')}
            text={'SUBMIT ORDER'}
            marginLeft={'12%'}
            marginTop={'3%'}
            width={responsiveWidth(75)}
            height={responsiveHeight(4.5)}
            backgroundColor={'#25B7B7'}
            borderColor={'#25B7B7'}
            borderWidth={1}
            borderRadius={20}
            textcolor={'white'}
          />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default PickUp;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  backstyle: {
    flex: 1,
    paddingBottom: '3%',
  },
  textstyle: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Antique-Bold-Font',
    color: 'black',
    marginLeft: '5%',
    marginTop: '2%',
    marginBottom: '1.5%',
    // backgroundColor: 'red',
  },
  Btncontainer: {
    width: responsiveWidth(90),
    flexDirection: 'row',
    marginTop: '1%',
    marginHorizontal: '5%',
    justifyContent: 'space-around',
  },
  radiocontainer: {
    marginLeft: '5%',
  },
  radiostyle: {
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(40),
    height: responsiveHeight(4),
  },
  asapcontainer: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    width: responsiveWidth(90),
    marginHorizontal: '5%',
    elevation: 5,
    justifyContent: 'space-evenly',
    paddingVertical: '1%',
  },
  paymentcontainer: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    width: responsiveWidth(90),
    marginHorizontal: '5%',
    elevation: 5,
  },
  couponcontainer: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    width: responsiveWidth(90),
    paddingVertical: '2.7%',
    marginHorizontal: '5%',
    elevation: 5,
    paddingLeft: '6%',
    justifyContent: 'center',
  },
  selectdatestyle: {
    marginTop: '2%',
    fontSize: responsiveFontSize(2),
    color: 'black',
    marginLeft: '12%',
  },
  selectdatecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '5%',
  },
  selectdatestyle: {
    marginTop: '1%',
    fontSize: responsiveFontSize(2),
    color: 'black',
    marginLeft: '12%',
  },
  updownarrowstyle: {
    marginTop: '2%',
    width: responsiveWidth(5),
    height: responsiveHeight(2.3),
  },
  datemodalstyle: {
    width: responsiveWidth(90),
    height: responsiveHeight(50),
    marginHorizontal: '5%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
