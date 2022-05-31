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
import ProfileBtn from '../../Components/Buttons/ProfileBtn';
import HomeImages from '../../Components/Images/HomeImages';
import HomeHeader from '../../Components/Headers/HomeHeader';

const Sides = ({navigation}) => {
  function onPressFunction(screen) {
    navigation.navigate(screen);
  }

  const ImagesData = [
    {
      image: require('../../Assets/Images/side1.png'),
      sceenname: 'OrderPage',
      imagetext: 'CRISTIANOS FAMOUS',
      imagetext2: 'CHEESE SAUCE',
      text: 'CRISTIANOS FAMOUS',
      text2: 'CHEESE SAUSE',
      questionimage: require('../../Assets/Images/red.png'),
      doller: '$ 8.50',
      btntext: 'ORDER',
    },
    {
      image: require('../../Assets/Images/side2.png'),
      sceenname: 'OrderPage',
      imagetext: 'HOT SAUCE',
      text: 'FAMOUS SIDES',
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

        <Text style={styles.textstyle}>SIDES</Text>

        <FlatList
          data={ImagesData}
          keyExtractor={(ImagesData, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View key={index}>
              <View>
                <HomeImages
                  marginTop={index == 0 ? '0%' : '5%'}
                  marginTopImage={'-4%'}
                  fontWeight={'bold'}
                  width={responsiveWidth(60)}
                  height={responsiveHeight(25)}
                  backgroundColor={index % 2 == 0 ? '#FF95A6' : '#25B7B7'}
                  imagesource={item.image}
                  marginLefttext3={index % 2 == 0 ? '3%' : '5%'}
                  text3={item.imagetext}
                  text4={item.imagetext2}
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
        {/* <HomeImages
            marginTop={'3%'}
            fontFamily={'Antique-Bold-Font'}
            marginTopImage={'-5%'}
            width={responsiveWidth(55)}
            height={responsiveHeight(25)}
            backgroundColor={'#FF95A6'}
            imagesource={require('../../Assets/Images/side1.png')}
            marginLefttext3={'3%'}
            text3={'CRISTIANOS FAMOUS'}
            text4={'CHEESE SAUCE'}
          />
          <View style={styles.bottomcontainer}>
            <Text style={styles.fishstyle}>CRISTIANOS FAMOUS</Text>
            <Image
              style={styles.iconstyle}
              source={require('../../Assets/Images/red.png')}
            />
            <Text style={styles.dollerstyle}>$ 8.50</Text>
          </View>
          <Text style={styles.fish12style}>CHEESE SAUSE</Text>
          <View style={styles.Btncontainer}>
            <ProfileBtn
              text={'ORDER'}
              marginLeft={'5%'}
              marginTop={'3%'}
              width={responsiveWidth(90)}
              height={responsiveHeight(5)}
              backgroundColor={'#FF95A6'}
              borderColor={'#FF95A6'}
              borderWidth={1}
              borderRadius={20}
              textcolor={'white'}
            />
          </View>
          <HomeImages
            marginTop={'3%'}
            fontWeight={'bold'}
            marginTopImage={'-3%'}
            width={responsiveWidth(50)}
            height={responsiveHeight(25)}
            backgroundColor={'#25B7B7'}
            imagesource={require('../../Assets/Images/side2.png')}
            text3={'HOT SAUCE'}
            marginLefttext3={'5%'}
          />
          <View style={styles.bottomcontainer}>
            <Text style={styles.fishstyle}>FAMOUS SIDES</Text>
            <Image
              style={styles.icon1style}
              source={require('../../Assets/Images/green.png')}
            />
            <Text style={styles.doller2style}>$ 8.50</Text>
          </View>
          <View style={styles.Btncontainer}>
            <ProfileBtn
              text={'ORDER'}
              marginLeft={'5%'}
              marginTop={'3%'}
              width={responsiveWidth(90)}
              height={responsiveHeight(5)}
              backgroundColor={'#25B7B7'}
              borderColor={'#25B7B7'}
              borderWidth={1}
              borderRadius={20}
              textcolor={'white'}
            />
          </View>
        </ScrollView> */}
      </ImageBackground>
    </View>
  );
};

export default Sides;

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
  fish12style: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Antique-Bold-Font',
    color: 'black',
    marginLeft: '5%',
  },
  iconstyle: {
    width: '4%',
    height: '50%',
    marginTop: '4%',
    // marginLeft: '-24%',
  },
  dollerstyle: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Antique-Bold-Font',
    color: '#FF95A6',
    marginTop: '3%',
  },
});
