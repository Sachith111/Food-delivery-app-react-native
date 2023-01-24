import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import {Button} from 'react-native-elements';

export const SignInWelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          DISCOVER RESTUARENT
        </Text>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          IN YOUR AREA
        </Text>
      </View>

      <View style={{flex: 10, justifyContent: 'center'}}>
        <Swiper autoplay style={styles.wrapper} showsButtons={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://static01.nyt.com/images/2022/10/11/dining/kc-manicotti-copy/kc-manicotti-mediumSquareAt3X.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>

      <View style={{flex: 5, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title={'SIGN IN'}
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress= {() =>{
              navigation.navigate('SignInScreen')
            }}
          />
        </View>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create your account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },
  createButtonTitle: {
    color: colors.grey2,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
