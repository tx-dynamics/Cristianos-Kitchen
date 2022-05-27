import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import HomeHeader from '../../Components/Headers/HomeHeader';
import SummeryDetails from '../../Components/Summery/SummeryDetails';
import ProfileBtn from '../../Components/Buttons/ProfileBtn';
import ColorSummeryDetail from '../../Components/Summery/ColorSummeryDetail';
import {useNavigation} from '@react-navigation/native';
const Summery2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.maincontainer}>
      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/Images/background.png')}>
        <HomeHeader
          textonPress={() => navigation.navigate('Location')}
          imagesource2={require('../../Assets/Icons/detailes.png')}
          onPress={() => navigation.goBack()}
          imagesource={require('../../Assets/Icons/witheback.png')}
        />

        <View style={styles.summerycontainer}>
          <Text style={styles.summerytextstyle}>Order Summary</Text>
        </View>

        <SummeryDetails
          clasictext={'Cristiano Special Meal X 1'}
          selectedtext={'1/1 Selected'}
          ranchtext={'Sandwhich'}
          cocacolatext={'Fries'}
          friestext={'Sprite Canned'}
          dolertext={'$ 8.50'}
        />

        <View style={styles.Btncontainer}>
          <ProfileBtn
            text={'Remove'}
            width={responsiveWidth(27)}
            height={responsiveHeight(4.5)}
            borderRadius={20}
            backgroundColor={'#25B7B7'}
            borderColor={'#25B7B7'}
            borderWidth={1}
            textcolor={'white'}
          />
          <ProfileBtn
            text={'Edit'}
            marginLeft={'5%'}
            width={responsiveWidth(20)}
            height={responsiveHeight(4.5)}
            backgroundColor={'#25B7B7'}
            borderColor={'#25B7B7'}
            borderWidth={1}
            borderRadius={20}
            textcolor={'white'}
          />
        </View>

        <View style={styles.linestyle} />

        <ColorSummeryDetail marginTop={'45%'} />

        <ProfileBtn
          onPress={() => navigation.navigate('CheckOut2')}
          text={'CHECKOUT'}
          marginLeft={'5%'}
          marginTop={'5%'}
          width={responsiveWidth(90)}
          height={responsiveHeight(5.5)}
          backgroundColor={'#25B7B7'}
          borderColor={'#25B7B7'}
          borderWidth={1}
          borderRadius={35}
          textcolor={'white'}
        />
        <Pressable onPress={() => navigation.navigate('Truck')}>
          <Text style={styles.continuestyle}>Continue Ordering</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Summery2;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  backstyle: {
    flex: 1,
  },
  summerycontainer: {
    height: responsiveHeight(5.3),
    width: responsiveWidth(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderWidth: 1,
    borderColor: '#F8F8F8',
    elevation: 10,
    marginBottom: '5%',
  },
  summerytextstyle: {
    color: 'black',
    fontSize: responsiveFontSize(1.7),
    fontFamily: 'Antique-Bold-Font',
  },
  Btncontainer: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginTop: '3%',
    marginBottom: '5%',
  },
  linestyle: {
    opacity: 0.1,
    borderBottomWidth: 1,
    backgroundColor: '#000',
    marginHorizontal: '5%',
    marginBottom: '3%',
  },
  continuestyle: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Antique-Bold-Font',
    color: 'black',
    alignSelf: 'center',
    marginTop: '3%',
  },
});
