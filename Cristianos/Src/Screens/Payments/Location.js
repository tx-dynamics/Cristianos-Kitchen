import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  StatusBar,
  Modal,
  TextInput,
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
import LocationCityDetail from '../../Components/Summery/LocationCityDetail';

const Location = () => {
  const [checked, setChecked] = useState(false);
  const [instore, setInStore] = useState(false);
  const [asap, setAsap] = useState(false);
  const navigation = useNavigation();
  const [ordertime, setOrderTime] = useState(false);
  const [payment, setPayment] = useState(false);

  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={'#25B7B7'} />
      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/Images/background.png')}>
        <HomeHeader
          marginBottomleft={'12%'}
          marginBottomright={'15%'}
          onPress={() => navigation.goBack()}
          rightonPress={() => navigation.navigate('Favourites')}
          imagesource2={require('../../Assets/Icons/whitelike.png')}
          // onPress={() => navigation.navigate('Summery')}
          imagesource={require('../../Assets/Icons/witheback.png')}
        />

        {/* Location */}

        <View style={styles.locationcontainer}>
          <View style={styles.locationinputcontainer}>
            <Image
              style={styles.locationstyle}
              source={require('../../Assets/Icons/locations.png')}
            />
            <TextInput
              style={styles.inputstyle}
              placeholder="Search by City or Zip"
            />
          </View>
        </View>

        {/* search */}

        <View style={styles.searchinputcontainer}>
          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.searchinputstyle}
              placeholder="SEARCH"
              placeholderTextColor={'white'}
            />
            <Image
              resizeMode={'contain'}
              style={styles.searchenginestyle}
              source={require('../../Assets/Icons/search.png')}
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <LocationCityDetail />
          <LocationCityDetail lasttext={'Pickup not available at the momemt'} />
          <LocationCityDetail />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Location;

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
    fontSize: responsiveFontSize(2.3),
    fontFamily: 'Antique-Bold-Font',
    color: 'black',
    marginLeft: '5%',
    marginTop: '3%',
    marginBottom: '1.5%',
  },
  locationcontainer: {
    width: responsiveWidth(100),
    height: responsiveHeight(6),
    backgroundColor: '#25B7B7',
  },
  locationinputcontainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(5),
    marginHorizontal: '5%',
    backgroundColor: '#F4F4F4',
    flexDirection: 'row',
    borderRadius: 10,
  },
  locationstyle: {
    width: responsiveWidth(4),
    height: responsiveHeight(2),
    alignSelf: 'center',
    marginLeft: '5%',
  },

  searchinputcontainer: {
    width: responsiveWidth(100),
    height: responsiveHeight(8),
    backgroundColor: '#25B7B7',
    paddingBottom: '2%',
  },
  inputcontainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(5),
    marginHorizontal: '5%',
    backgroundColor: '#25B7B7',
    flexDirection: 'row',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1,
    marginTop: '2%',
  },
  searchenginestyle: {
    width: responsiveWidth(4),
    height: responsiveHeight(2),
    alignSelf: 'center',
    marginLeft: '5%',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  inputstyle: {
    alignItems: 'center',
    width: responsiveWidth(79),
    height: responsiveHeight(5.2),
    marginLeft: '2%',
    color: 'black',
    fontSize: responsiveFontSize(1.8),
  },
  searchinputstyle: {
    alignItems: 'center',
    height: responsiveHeight(5.5),
    marginLeft: '2%',
    color: 'white',
    fontSize: responsiveFontSize(2),
    marginTop: '1.5%',
    // backgroundColor: 'red',
  },
});
