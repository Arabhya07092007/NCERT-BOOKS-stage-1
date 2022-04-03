import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import BookModal from "../Components/BookModal";

export default class Choose_book extends React.Component {
  render() {
    return (
      <View style={styles.cont}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <BookModal
            bookName="Maths NCERT"
            source={require("../assests/book3.jpg")}
            navigation={this.props.navigation}
            
          />
          <BookModal
            bookName="Maths Exempler"
            navigation={this.props.navigation}
       
            source={require("../assests/book2.jpg")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 10,
  },
});
