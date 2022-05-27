import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import React from 'react';
import HomeImages from '../../Components/Images/HomeImages';
import HomeHeader from '../../Components/Headers/HomeHeader';
import {useNavigation} from '@react-navigation/native';

const Kitchen = ({navigation}) => {
  function onPressFunction(screen) {
    navigation.navigate(screen);
  }
  const ImagesData = [
    {
      name: 'Combos',
      name2: 'COMBOS',
      image: require('../../Assets/Images/Combos.png'),
    },
    {
      name: 'Tacos',
      name2: 'TACOS',
      image: require('../../Assets/Images/Tacos.png'),
    },
    {
      name: 'Burgers',
      name2: 'BURGERS',
      image: require('../../Assets/Images/copyburgr2.png'),
      width: responsiveWidth(50),
      height: responsiveHeight(25),
    },
    {
      name: 'Quseadillas',
      name2: 'QUESADILLAS',
      image: require('../../Assets/Images/quesadillas.png'),
    },
    {
      name: 'Spacialties',
      name2: 'SPECIALITIES',
      image: require('../../Assets/Images/Combos8.png'),
    },
    {
      name: 'Fries',
      name2: 'FRIES',
      image: require('../../Assets/Images/fries.png'),
    },
    {
      name: 'Sides',
      name2: 'SIDES',
      image: require('../../Assets/Images/sides1.png'),
    },
    {
      name: 'Beverages',
      name2: 'BEVERAGES',
      image: require('../../Assets/Images/beverages1.png'),
    },
  ];
  // const onPress = ({name}) => {
  //   console.log(name);
  // };
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
          renderItem={({item, index}) => (
            <View key={index}>
              <Text style={styles.textstyle}>{item.name2}</Text>
              <HomeImages
                text={item.name2}
                fontSize={responsiveFontSize(5)}
                marginToptext={'5%'}
                color={'white'}
                fontFamily={'Antique-Bold-Font'}
                marginTopImage={'-8%'}
                marginTop={'3%'}
                imagesource={item.image}
                width={responsiveWidth(60)}
                height={responsiveHeight(27)}
                backgroundColor={index % 2 == 0 ? '#FF95A6' : '#25B7B7'}
                onPress={() => onPressFunction(item.name)}
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    </View>
  );
};

export default Kitchen;

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
  text1style: {
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
    color: 'white',
    // fontFamily: 'Antique Olive',
    marginLeft: '5%',
    marginTop: '3%',
    alignSelf: 'center',
  },
  imagestyle: {
    height: responsiveHeight(25),
    width: responsiveWidth(50),
  },
  viewcontainer: {
    backgroundColor: '#FF95A6',
    height: responsiveHeight(32),
    width: responsiveWidth(90),
    alignItems: 'center',
    marginTop: '3%',
    marginHorizontal: '5%',
  },
});

{
  /* <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.textstyle}>Combos</Text>
          <HomeImages
            onPress={() => navigation.navigate('Combos')}
            text={'Combos'}
            color={'white'}
            marginTop={'3%'}
            fontSize={responsiveFontSize(8)}
            fontWeight={'bold'}
            marginTopImage={'-9%'}
            width={responsiveWidth(60)}
            height={responsiveHeight(22)}
            backgroundColor={'#FF95A6'}
            imagesource={require('../../Assets/Images/Combos.png')}
          />

          <Text style={styles.textstyle}>Tacos</Text>
          <HomeImages
            onPress={() => navigation.navigate('Tacos')}
            text={'Tacos'}
            color={'white'}
            marginTop={'3%'}
            fontSize={responsiveFontSize(8)}
            fontWeight={'bold'}
            marginTopImage={'-9%'}
            width={responsiveWidth(60)}
            height={responsiveHeight(22)}
            backgroundColor={'#25B7B7'}
            imagesource={require('../../Assets/Images/Tacos.png')}
          />

          <Text style={styles.textstyle}>Burgers</Text>
          <HomeImages
            onPress={() => navigation.navigate('Burgers')}
            text={'Burgers'}
            color={'white'}
            marginTop={'3%'}
            fontSize={responsiveFontSize(8)}
            fontWeight={'bold'}
            marginTopImage={'-18%'}
            width={responsiveWidth(70)}
            height={responsiveHeight(28)}
            backgroundColor={'#FF95A6'}
            imagesource={require('../../Assets/Images/burgr1.png')}
          />

          <Text style={styles.textstyle}>QUESADILLAS</Text>
          <HomeImages
            onPress={() => navigation.navigate('Quseadillas')}
            text={'quesaDILLAS'}
            color={'white'}
            marginTop={'3%'}
            fontSize={responsiveFontSize(5)}
            fontWeight={'bold'}
            marginTopImage={'-5%'}
            width={responsiveWidth(60)}
            height={responsiveHeight(22)}
            backgroundColor={'#25B7B7'}
            imagesource={require('../../Assets/Images/quesadillas.png')}
          />

          <Text style={styles.textstyle}>SPACIALTIES</Text>
          <HomeImages
            onPress={() => navigation.navigate('Spacialties')}
            text={'SPACIALTIES'}
            color={'white'}
            marginTop={'3%'}
            fontSize={responsiveFontSize(5)}
            fontWeight={'bold'}
            marginTopImage={'-5%'}
            width={responsiveWidth(60)}
            height={responsiveHeight(22)}
            backgroundColor={'#FF95A6'}
            imagesource={require('../../Assets/Images/Combos2.png')}
          />

          <Text style={styles.textstyle}>FRIES</Text>
          <HomeImages
            onPress={() => navigation.navigate('Fries')}
            text={'FRIES'}
            color={'white'}
            marginTop={'3%'}
            fontSize={responsiveFontSize(5)}
            fontWeight={'bold'}
            marginTopImage={'-5%'}
            width={responsiveWidth(60)}
            height={responsiveHeight(22)}
            backgroundColor={'#25B7B7'}
            imagesource={require('../../Assets/Images/Combos5.png')}
          />

          <Text style={styles.textstyle}>SIDES</Text>
          <HomeImages
            onPress={() => navigation.navigate('Sides')}
            text={'SIDES'}
            color={'white'}
            marginTop={'3%'}
            fontSize={responsiveFontSize(5)}
            fontWeight={'bold'}
            marginTopImage={'-6%'}
            width={responsiveWidth(60)}
            height={responsiveHeight(22)}
            backgroundColor={'#FF95A6'}
            imagesource={require('../../Assets/Images/side.png')}
          />

          <Text style={styles.textstyle}>BEVERAGES</Text>
          <HomeImages
            onPress={() => navigation.navigate('Beverages')}
            text={'BEVERAGES'}
            color={'white'}
            marginTop={'3%'}
            fontSize={responsiveFontSize(5)}
            fontWeight={'bold'}
            marginTopImage={'-7%'}
            width={responsiveWidth(50)}
            height={responsiveHeight(25)}
            backgroundColor={'#25B7B7'}
            marginBottom={'5%'}
            imagesource={require('../../Assets/Images/bever.png')}
          />
        </ScrollView> */
}
