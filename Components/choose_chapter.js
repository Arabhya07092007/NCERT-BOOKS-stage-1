import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Choose_chapter extends React.Component {
  render() {
    console.log(this.props.index);
    return (
      <TouchableOpacity
        style={styles.style}
        onPress={() => {
          this.props.navigation.navigate("PDF_Screen", {
            screen: "authScreen",
          });
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 15 }}>Chapter {this.props.index + 1} </Text>
          <Text style={{ fontSize: 15 }}>{this.props.data[0]}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: RFValue(50),
    justifyContent: "center",
    marginHorizontal: 35,
  },
});
