import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  View,
  Pressable,
  FlatList,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import React from 'react';
import HomeHeader from '../../Components/Headers/HomeHeader';
import HomeImage2 from '../../Components/Images/HomeImage2';
import AddOrdersBtn from '../../Components/Buttons/AddOrdersBtn';
import SummeryDetails from '../../Components/Summery/SummeryDetails';

const OrderPage = ({navigation}) => {
  function onPressFunction(screen) {
    navigation.navigate(screen);
  }

  const ImagesData = [
    {
      imagetext: 'RED CABBAGE SLAW',
      imagetext1: '(Side)',
      image: require('../../Assets/Images/salid.png'),
    },
    {
      imagetext: 'Lettuce',
      image: require('../../Assets/Images/salid1.png'),
    },
    {
      image: require('../../Assets/Images/bever.png'),
    },
    {
      image: require('../../Assets/Images/bever1.png'),
    },
    {
      imagetext: 'CRISTIANOS FAMOUS',
      imagetext1: 'CHEESE SAUCE',
      image: require('../../Assets/Images/side1.png'),
    },
    {
      imagetext: 'HOT SAUCE',
      image: require('../../Assets/Images/side.png'),
    },
  ];

  return (
    <View style={styles.maincontainer}>
      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/Images/background.png')}>
        <HomeHeader
          rightonPress={() => navigation.navigate('Summery')}
          imagesource2={require('../../Assets/Icons/detailes.png')}
          onPress={() => navigation.goBack()}
          imagesource={require('../../Assets/Icons/witheback.png')}
        />

        <FlatList
          data={ImagesData}
          keyExtractor={(ImagesData, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <View>
              <Pressable
                style={{
                  height: responsiveHeight(29),
                  width: responsiveWidth(100),
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#FF95A6',
                  marginBottom: '1%',
                  marginTop: '0.5%',
                }}>
                <Image
                  style={{
                    height: responsiveHeight(26),
                    width: responsiveWidth(70),
                  }}
                  source={require('../../Assets/Images/Combos1.png')}
                />
              </Pressable>
              <View style={styles.bottomcontainer}>
                <Text style={styles.fish1style}>WELA POKE</Text>
                <Text style={styles.doller1style}>$ 8.50</Text>
                <Text>A crispy chcken petty tendrized burger stuffed</Text>
                <Text> in bread crums, fries, and a drink.</Text>
                <Text style={styles.fish1style}>Choose Your Sides</Text>
              </View>
            </View>
          }
          renderItem={({item, index}) => (
            <View style={styles.imagecontainer} key={index}>
              <HomeImage2
                text={item.imagetext}
                text2={item.imagetext1}
                fontSize={
                  index == 0
                    ? responsiveFontSize(1)
                    : index == 1
                    ? responsiveFontSize(1.7)
                    : index == 4
                    ? responsiveFontSize(1)
                    : responsiveFontSize(1.5)
                }
                fontSize2={responsiveFontSize(1)}
                fontWeight={index == 0 ? '400' : '700'}
                fontWeight2={'400'}
                marginTop={'3%'}
                width={responsiveWidth(35)}
                height={responsiveHeight(15)}
                backgroundColor={index % 2 == 1 ? '#FF95A6' : '#25B7B7'}
                imagesource={item.image}
              />
            </View>
          )}
          ListFooterComponent={
            <View>
              <View style={{...styles.linestyle, marginTop: '5%'}} />

              <Text style={styles.summarystyle}>SUMMARY</Text>

              <View style={styles.linestyle} />

              <SummeryDetails
                clasictext={'CLASIC BURGER'}
                selectedtext={'1/1 Selected'}
                ranchtext={'Ranch Source'}
                cocacolatext={'CocaCola'}
                totaltext={'TOTAL'}
                dolertext={'$ 8.50'}
                dolertext1={'$ 8.50'}
                dolertext2={'$ +.075'}
                dolertext3={'$ 3.25'}
                dolertext5={'$ 12.50'}
              />

              <View style={styles.line2style} />
            </View>
          }
        />
        <View style={{position: 'absolute', zIndex: 1, bottom: '0%'}}>
          <AddOrdersBtn />
        </View>
      </ImageBackground>
    </View>
  );
};

export default OrderPage;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  backstyle: {
    flex: 1,
  },
  textstyle: {
    fontSize: responsiveFontSize(2.5),
    fontFamily: 'Antique-Bold-Font',
    color: 'black',
    alignSelf: 'center',
    marginTop: '3%',
  },
  bottomcontainer: {
    flexDirection: 'column',
    marginHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fish1style: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Antique-Bold-Font',
    color: 'black',
    marginTop: '3%',
  },
  doller1style: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Antique-Bold-Font',
    color: '#25B7B7',
    marginTop: '0%',
  },
  imagecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
    marginLeft: '2%',
    // marginBottom: '5%',
  },
  linestyle: {
    opacity: 0.1,
    borderBottomWidth: 1,
    backgroundColor: '#000',
    marginHorizontal: '5%',
    marginBottom: '3%',
  },
  line2style: {
    opacity: 0.1,
    borderBottomWidth: 1,
    backgroundColor: '#000',
    marginHorizontal: '5%',
    marginBottom: '19%',
  },
  summarystyle: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Antique-Bold-Font',
    color: 'black',
    alignSelf: 'center',
    marginBottom: '3%',
  },
});
