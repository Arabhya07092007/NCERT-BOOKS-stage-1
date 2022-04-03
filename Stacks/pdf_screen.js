import * as React from "react";
import { View, StyleSheet, WebView, Text } from "react-native";
import { Constants } from "expo";

import PDFReader from "rn-pdf-reader-js";

export default class PDF_Screen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Chapter Name</Text>
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
