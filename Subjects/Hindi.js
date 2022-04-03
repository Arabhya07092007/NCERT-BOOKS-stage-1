import React, { Component } from "react";
import { View, StyleSheet, WebView } from "react-native";
import { Constants } from "expo";

import PDFReader from "rn-pdf-reader-js";

export default class Hindi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PDFReader
          source={{
            uri: "http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#ecf0f1",
  },
});
