import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import CustomTab from '../../Navigations/CustomTab';
import ProfileBtn from '../../Components/Buttons/ProfileBtn';
import {useNavigation} from '@react-navigation/native';

const TotalPayment = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>
      <ImageBackground
        style={styles.backstyle}
        source={require('../../Assets/Images/background.png')}>
        <Image
          resizeMode={'cover'}
          style={styles.imagestyle}
          source={require('../../Assets/Images/treet.png')}
        />
        <CustomTab />

        <View style={{alignItems: 'center', paddingTop: '5%'}}>
          <Text style={styles.textstyle}>
            Your food is being prepared, you will be
          </Text>
          <Text style={styles.textstyle}>notified once it gets ready</Text>
        </View>

        <View style={styles.imagemaincontainer}>
          <View style={styles.imagecontainer}>
            <Image
              resizeMode={'center'}
              style={styles.image1style}
              source={require('../../Assets/Images/burger1.png')}
            />
            <Text style={styles.clasicstyle}>THAT CLASIC</Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.clasic2style}>THAT CLASIC</Text>
            <Text style={styles.sixdollerstyle}>+ $ 6.50</Text>
          </View>
        </View>

        <View style={styles.text2container}>
          <Text style={styles.subtotalstyle}>Subtotal</Text>
          <Text style={styles.sixstyle}>+ $ 6.50</Text>
        </View>

        <View style={{...styles.text2container, marginTop: '3%'}}>
          <Text style={styles.discountstyle}>Discount</Text>
          <Text style={styles.six2style}>- $ 1.50</Text>
        </View>

        <View style={styles.linestyle} />

        <View style={{...styles.text2container, marginTop: '3%'}}>
          <Text style={styles.subtotalstyle}>Total</Text>
          <Text style={styles.subtotalstyle}>+ $ 4.00</Text>
        </View>

        <View style={{...styles.linestyle, marginTop: '3%'}} />

        <View style={styles.summertcontainer}>
          <Text style={styles.summertstyle}>Summary</Text>
          <Image
            style={styles.arrowstyle}
            source={require('../../Assets/Icons/downarrowcolor.png')}
          />
        </View>

        <View style={{alignItems: 'center'}}>
          <ProfileBtn
            onPress={() => navigation.navigate('Kitchen', {screen: 'Kitchen'})}
            text={'Continue Shopping'}
            backgroundColor={'#25B7B7'}
            borderRadius={20}
            textcolor={'white'}
            marginTop={'24%'}
            borderWidth={1}
            borderColor={'#25B7B7'}
            width={responsiveWidth(45)}
            height={responsiveHeight(4.5)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default TotalPayment;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  backstyle: {
    flex: 1,
  },
  imagestyle: {
    width: responsiveWidth(90),
    height: responsiveHeight(28),
    alignSelf: 'center',
  },
  textstyle: {
    fontSize: responsiveFontSize(2.07),
  },
  imagemaincontainer: {
    flexDirection: 'row',
    marginTop: '9%',
  },
  imagecontainer: {
    width: responsiveWidth(12),
    height: responsiveHeight(6),
    justifyContent: 'center',
    backgroundColor: '#FF95A6',
    marginLeft: '5%',
    flexDirection: 'column',
  },
  image1style: {
    width: responsiveWidth(12),
    height: responsiveHeight(5),
    alignSelf: 'center',
  },
  clasicstyle: {
    color: 'white',
    marginLeft: '5%',
    fontSize: responsiveFontSize(0.3),
  },
  textcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(74),
  },
  clasic2style: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    marginLeft: '2%',
    fontWeight: 'bold',
  },
  sixdollerstyle: {
    color: 'black',
    fontSize: responsiveFontSize(1.5),
    marginTop: '7%',
  },
  text2container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(85.5),
    marginHorizontal: '5%',
    marginTop: '9%',
  },
  sixstyle: {
    color: 'black',
    fontSize: responsiveFontSize(1.7),
  },
  six2style: {
    color: 'black',
    fontSize: responsiveFontSize(1.5),
  },
  subtotalstyle: {
    color: 'black',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  discountstyle: {
    color: 'black',
    fontSize: responsiveFontSize(2),
  },
  linestyle: {
    opacity: 0.1,
    borderBottomWidth: 1,
    backgroundColor: '#000',
    marginHorizontal: '5%',
    marginTop: '3%',
  },
  summertcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(85.5),
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  summertstyle: {
    color: '#25B7B7',
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
  },
  arrowstyle: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
  },
});
