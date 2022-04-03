import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'react-native-elements';

import Header from '../Components/Header';

export default class Solutions extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="#a09ded"
            barStyle="dark-content"
            // showHideTransition={statusBarTransition}
          />
          <Header
            title="NCERT Solutions"
            onPress={() => this.props.navigation.openDrawer()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
