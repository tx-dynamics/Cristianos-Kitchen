import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import React from 'react';
import HomeHeader from '../../Components/Headers/HomeHeader';
import HomeImages from '../../Components/Images/HomeImages';
import ProfileBtn from '../../Components/Buttons/ProfileBtn';
import {useNavigation} from '@react-navigation/native';

const Dynamtiebombs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.maincontainer}>
      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/Images/background.png')}>
        <HomeHeader
          textonPress={() => navigation.navigate('Location')}
          rightonPress={() => navigation.navigate('Summery')}
          imagesource2={require('../../Assets/Icons/detailes.png')}
          onPress={() => navigation.navigate('Truck')}
          imagesource={require('../../Assets/Icons/witheback.png')}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textstyle}>DYNAMTIE BOMBS</Text>
          <HomeImages
            // onPress={() => navigation.navigate('Combos')}
            marginTop={'3%'}
            fontWeight={'bold'}
            marginTopImage={'-3%'}
            width={responsiveWidth(65)}
            height={responsiveHeight(30)}
            backgroundColor={'#FF95A6'}
            imagesource={require('../../Assets/Images/dynamite.png')}
          />
          <View style={styles.bottomcontainer}>
            <Text style={styles.fishstyle}>DYNAMTIE BOMBS (TUNA)</Text>
            <Image
              style={styles.iconstyle}
              source={require('../../Assets/Images/red.png')}
            />
            <Text style={styles.dollerstyle}>$ 8.50</Text>
          </View>
          <View style={styles.Btncontainer}>
            <ProfileBtn
              text={'MODIFY'}
              marginTop={'3%'}
              width={responsiveWidth(37.5)}
              height={responsiveHeight(5)}
              borderRadius={20}
              borderColor={'#FF95A6'}
              borderWidth={1}
              textcolor={'#FF95A6'}
            />
            <ProfileBtn
              onPress={() => navigation.navigate('Summery2')}
              text={'ORDER'}
              marginLeft={'5%'}
              marginTop={'3%'}
              width={responsiveWidth(37.5)}
              height={responsiveHeight(5)}
              backgroundColor={'#FF95A6'}
              borderColor={'#FF95A6'}
              borderWidth={1}
              borderRadius={20}
              textcolor={'white'}
            />
          </View>
          <HomeImages
            // onPress={() => navigation.navigate('Combos')}
            marginTop={'5%'}
            fontWeight={'bold'}
            marginTopImage={'-3%'}
            width={responsiveWidth(65)}
            height={responsiveHeight(30)}
            backgroundColor={'#25B7B7'}
            imagesource={require('../../Assets/Images/dynamite.png')}
          />
          <View style={styles.bottomcontainer}>
            <Text style={styles.fish1style}>DYNAMTIE BOMBS (TUNA)</Text>
            <Image
              style={styles.icon1style}
              source={require('../../Assets/Images/green.png')}
            />
            <Text style={styles.doller1style}>$ 8.50</Text>
          </View>
          <View style={styles.Btncontainer}>
            <ProfileBtn
              text={'MODIFY'}
              marginTop={'3%'}
              width={responsiveWidth(37.5)}
              height={responsiveHeight(5)}
              borderRadius={20}
              borderColor={'#25B7B7'}
              borderWidth={1}
              textcolor={'#25B7B7'}
            />
            <ProfileBtn
              onPress={() => navigation.navigate('Summery2')}
              text={'ORDER'}
              marginLeft={'5%'}
              marginTop={'3%'}
              width={responsiveWidth(37.5)}
              height={responsiveHeight(5)}
              backgroundColor={'#25B7B7'}
              borderColor={'#25B7B7'}
              borderWidth={1}
              borderRadius={20}
              textcolor={'white'}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Dynamtiebombs;

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
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'Antique-Bold-Font',
    color: 'black',
    alignSelf: 'center',
    marginTop: '3%',
  },
  bottomcontainer: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    justifyContent: 'space-between',
  },
  fishstyle: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Antique-Bold-Font',
    color: 'black',
    marginTop: '3%',
  },
  iconstyle: {
    width: '4.2%',
    height: '50%',
    marginTop: '4%',
    marginLeft: '-9%',
  },
  dollerstyle: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Antique-Bold-Font',
    color: '#FF95A6',
    marginTop: '3%',
  },
  Btncontainer: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fish1style: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Antique-Bold-Font',
    color: 'black',
    marginTop: '3%',
  },
  icon1style: {
    width: '4.1%',
    height: '50%',
    marginTop: '4%',
    marginLeft: '-9%',
  },
  doller1style: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Antique-Bold-Font',
    color: '#25B7B7',
    marginTop: '3%',
  },
});
