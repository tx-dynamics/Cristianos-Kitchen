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
import HomeHeader from '../../Components/Headers/HomeHeader';

const Truck = ({navigation}) => {
  function onPressFunction(screen) {
    navigation.navigate(screen);
  }

  const ImagesData = [
    {
      headingname: 'POKE BOWLS',
      sceenname: 'Pokebowls',
      text: 'POKE',
      text2: 'BOWLS',
      image: require('../../Assets/Images/pokebowls.png'),
    },
    {
      headingname: 'DYNAMITE BOMBS',
      sceenname: 'Dynamtiebombs',
      text: 'DYNAMITE',
      text2: 'BOMBS',
      image: require('../../Assets/Images/dynamitebombs1.png'),
    },
    {
      headingname: 'POKE PER LB.',
      sceenname: 'Pokeperlb',
      text: 'POKE',
      text2: 'PER LB',
      image: require('../../Assets/Images/pokeperlb.png'),
    },
  ];

  return (
    <View style={styles.maincontainer}>
      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/Images/background.png')}>
        <HomeHeader
          textonPress={() => navigation.navigate('Location')}
          rightonPress={() => navigation.navigate('Favourites')}
          imagesource2={require('../../Assets/Icons/whitelike.png')}
          onPress={() => navigation.navigate('Home')}
          imagesource={require('../../Assets/Icons/witheback.png')}
        />

        <FlatList
          data={ImagesData}
          keyExtractor={(ImagesData, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <View>
              <Text style={styles.textstyle}>{item.headingname}</Text>
              <View key={index}>
                <HomeImages
                  onPress={() => onPressFunction(item.sceenname)}
                  text={item.text}
                  text2={item.text2}
                  color={'white'}
                  marginTop={'3%'}
                  marginBottomtext={'-3%'}
                  color2={'white'}
                  fontFamily2={'Antique-Bold-Font'}
                  fontSize2={
                    index == 0
                      ? responsiveFontSize(2.5)
                      : index == 1
                      ? responsiveFontSize(4)
                      : responsiveFontSize(1.7)
                  }
                  fontSize={
                    index == 0
                      ? responsiveFontSize(6.2)
                      : index == 1
                      ? responsiveFontSize(4)
                      : responsiveFontSize(5.3)
                  }
                  fontFamily={'Antique-Bold-Font'}
                  marginTopImage={index == 0 ? '0%' : index == 1 ? '-5%' : '0%'}
                  width={responsiveWidth(60)}
                  height={
                    index == 0
                      ? responsiveHeight(20)
                      : index == 1
                      ? responsiveHeight(25)
                      : responsiveHeight(25)
                  }
                  backgroundColor={index % 2 == 0 ? '#25B7B7' : '#FF95A6'}
                  imagesource={item.image}
                />
              </View>
            </View>
          )}
        />

        {/* <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textstyle}>POKE BOWLS</Text>
          <HomeImages
            onPress={() => navigation.navigate('Pokebowls')}
            text={'POKE'}
            text2={'BOWLS'}
            color={'white'}
            marginTop={'3%'}
            marginBottomtext={'-3%'}
            color2={'white'}
            fontFamily2={'Antique-Bold-Font'}
            fontSize2={responsiveFontSize(2.5)}
            fontSize={responsiveFontSize(6.2)}
            fontFamily={'Antique-Bold-Font'}
            marginTopImage={'0%'}
            width={responsiveWidth(60)}
            height={responsiveHeight(20)}
            backgroundColor={'#25B7B7'}
            imagesource={require('../../Assets/Images/pokebowls.png')}
          />

          <Text style={styles.textstyle}>DYNAMITE BOMBS</Text>
          <HomeImages
            onPress={() => navigation.navigate('Dynamtiebombs')}
            text={'DYNAMITE'}
            text2={'BOMBS'}
            color={'white'}
            marginToptext={'3%'}
            marginBottomtext={'-2%'}
            marginTop={'3%'}
            color2={'white'}
            fontFamily={'Antique-Bold-Font'}
            fontSize2={responsiveFontSize(4)}
            fontSize={responsiveFontSize(4)}
            fontFamily2={'Antique-Bold-Font'}
            marginTopImage={'-9%'}
            width={responsiveWidth(60)}
            height={responsiveHeight(25)}
            backgroundColor={'#FF95A6'}
            imagesource={require('../../Assets/Images/dynamitebombs1.png')}
          />

          <Text style={styles.textstyle}>POKE PER LB.</Text>
          <HomeImages
            onPress={() => navigation.navigate('Pokeperlb')}
            text={'POKE'}
            text2={'PER LB'}
            color={'white'}
            marginBottomtext={'-2%'}
            marginToptext={'4%'}
            marginTop={'3%'}
            color2={'white'}
            fontFamily={'Antique-Bold-Font'}
            fontSize2={responsiveFontSize(1.7)}
            fontSize={responsiveFontSize(5.3)}
            fontFamily2={'Antique-Bold-Font'}
            marginTopImage={'-5%'}
            marginBottom={'5%'}
            width={responsiveWidth(60)}
            height={responsiveHeight(25)}
            backgroundColor={'#25B7B7'}
            imagesource={require('../../Assets/Images/pokeperlb.png')}
          />
        </ScrollView> */}
      </ImageBackground>
    </View>
  );
};

export default Truck;

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
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Antique-Bold-Font',
    color: 'black',
    marginLeft: '5%',
    marginTop: '3%',
  },
});
