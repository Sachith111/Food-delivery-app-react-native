import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {colors} from '../global/styles';
import {HomeHeader} from './HomeHeader';

export const HomeScreen = () => {
  const [delivery, setDelivery] = useState(true);
  return (
    <View style={styles.container}>
      <HomeHeader />
      {/* <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator = {true}  > */}
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => {
              setDelivery(true);
            }}>
            <View
              style={{
                ...styles.deliveryButton,
                backgroundColor: delivery ? colors.buttons : colors.grey5,
              }}>
              <Text style={styles.deliveryTxt}>Delivery</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setDelivery(false);
            }}>
            <View
              style={{
                ...styles.deliveryButton,
                backgroundColor: delivery ? colors.grey5 : colors.buttons,
              }}>
              <Text style={styles.deliveryTxt}>Pick Up</Text>
            </View>
          </TouchableOpacity>
        </View>
        

      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator = {true}  >
        <View>
          <View style = {{flexDirection:'row'}}>
            <Icon type='material-community' name='map-marker' color = {colors.grey1} size={26} />
            <Text style={{marginLeft: 5}}>22 Bessies street</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
  deliveryTxt: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
