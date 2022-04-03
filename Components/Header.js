import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'react-native-elements';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={{ marginHorizontal: 17 }}>
          <Icon
            name="menu"
            type="feather"
            size={RFValue(35)}
            color="white"
            onPress={this.props.onPress}
          />
        </View>
        <Text style={styles.headertxt}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8481D0',
    flexDirection: 'row',
    height: RFValue(60),
    alignItems: 'center',
  },
  headertxt: {
    color: 'white',
    fontWeight: '700',
    fontSize: RFValue(20),
  },
});
