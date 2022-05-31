import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import HomeImages from '../../Components/Images/HomeImages';
import ProfileBtn from '../../Components/Buttons/ProfileBtn';
import HomeHeader from '../../Components/Headers/HomeHeader';

const Fries = ({navigation}) => {
  function onPressFunction(screen) {
    navigation.navigate(screen);
  }

  const ImagesData = [
    {
      image: require('../../Assets/Images/fries.png'),
      sceenname: 'OrderPage',
      text: 'SMALL FRIES',
      questionimage: require('../../Assets/Images/red.png'),
      doller: '$ 8.50',
      btntext: 'ORDER',
    },
    {
      image: require('../../Assets/Images/fries.png'),
      sceenname: 'OrderPage',
      text: 'CHEESE FRIES',
      questionimage: require('../../Assets/Images/green.png'),
      doller: '$ 8.50',
      btntext: 'ORDER',
    },
  ];

  return (
    <View style={styles.maincontainer}>
      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/Images/background.png')}>
        <HomeHeader
          textonPress={() => navigation.navigate('Location')}
          rightonPress={() => navigation.navigate('Summery')}
          imagesource2={require('../../Assets/Icons/detailes.png')}
          onPress={() => navigation.navigate('Kitchen')}
          imagesource={require('../../Assets/Icons/witheback.png')}
        />

        <Text style={styles.textstyle}>FRIES</Text>
        <FlatList
          data={ImagesData}
          keyExtractor={(ImagesData, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View key={index}>
              <View>
                <HomeImages
                  marginTop={index == 0 ? '0%' : '5%'}
                  fontWeight={'bold'}
                  width={responsiveWidth(60)}
                  height={responsiveHeight(25)}
                  backgroundColor={index % 2 == 0 ? '#FF95A6' : '#25B7B7'}
                  imagesource={item.image}
                />
              </View>
              <View style={styles.bottomcontainer}>
                <Text style={styles.fishstyle}>{item.text}</Text>
                <Image
                  resizeMode={'contain'}
                  style={styles.iconstyle}
                  source={item.questionimage}
                />
                <Text
                  style={{
                    ...styles.dollerstyle,
                    color: index % 2 == 0 ? '#FF95A6' : '#25B7B7',
                  }}>
                  {item.doller}
                </Text>
              </View>
              <View style={styles.Btncontainer}>
                <ProfileBtn
                  text={'ORDER'}
                  marginLeft={'5%'}
                  marginTop={'3%'}
                  width={responsiveWidth(90)}
                  height={responsiveHeight(5)}
                  backgroundColor={index % 2 == 0 ? '#FF95A6' : '#25B7B7'}
                  borderColor={index % 2 == 0 ? '#FF95A6' : '#25B7B7'}
                  borderWidth={1}
                  borderRadius={20}
                  textcolor={'white'}
                />
              </View>
            </View>
          )}
        />
      </ImageBackground>
    </View>
  );
};

export default Fries;

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
    marginBottom: '3%',
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
    width: '4%',
    height: '50%',
    marginTop: '4%',
    // marginLeft: '-39%',
  },
  dollerstyle: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Antique-Bold-Font',
    color: '#FF95A6',
    marginTop: '3%',
  },
});
