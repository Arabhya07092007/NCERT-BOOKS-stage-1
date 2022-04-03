import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";

import { RFValue } from "react-native-responsive-fontsize";

export default class Modal extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.cont}
        
        onPress={() =>
          this.props.navProp.navigate("Topnav", {
            screen: this.props.component,
            params: { user: "jane" },
          })
        }
      >
        <Avatar
          size={50}
          rounded
          title={this.props.title.slice(0, 2)}
          containerStyle={{ backgroundColor: "#3d4db7" }}
        />
        <Text style={{ textAlign: "center" }}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: RFValue(140),
    height: RFValue(115),
    justifyContent: "center",
  },
});
