import React, * as react from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class BookModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.book,
    };
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.cont}
        onPress={() => {
          this.props.navigation.navigate("Select_chapters", {
            book: this.props.bookName,
          });
        }}
      >
        <View style={{ margin: 10, marginVertical: 5 }}>
          <View style={{ paddingHorizontal: 5 }}>
            <Image source={this.props.source} style={styles.img} />
          </View>
          <Text style={styles.txt}>{this.props.bookName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 0.4,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

    justifyContent: "center",
  },
  txt: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: -5,
    marginBottom: 2,
  },
  img: {
    width: RFValue(110),
    height: RFValue(180),
    resizeMode: "contain",
    borderColor: "black",
  },
});
