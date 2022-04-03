import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'react-native-elements';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default class CustomSidebarMenu extends Component {
  render() {
    let props = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View style={{ padding: 10, backgroundColor: '#8481D0', paddingLeft:15 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.imgCont}>
              <Image
                source={require('../assests/img4.jpg')}
                style={styles.sideMenuProfileIcon}
              />
            </View>
            
          </View>
          <Text style={styles.name}>Arabhya</Text>
          <Text style={styles.class}>Class 10th ENG</Text>
        </View>

        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: RFValue(100),
    height: RFValue(100),
    borderRadius: 100,
    // resizeMode: 'contain',
  },
  imgCont: {
    borderRadius: 100,
    borderWidth: 3,
    marginTop: RFValue(60),
    // color:"white"
    // alignSelf: 'flex-start',
    borderColor: 'white',
  },
  name: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: RFValue(20),
    
  },
  class: {
    color: 'white',
    fontSize: RFValue(15),
    fontWeight:"600"
  },
});
