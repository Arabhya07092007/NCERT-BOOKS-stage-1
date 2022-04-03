import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Choose_chapter from "../Components/choose_chapter";

export default class Select_chapters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        maths: [
          [
            "Real Numbers",
            "http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf",
          ],
          ["polynomials", "link"],
          ["Linear Equation", "link"],
          ["Triangles", "link"],
        ],
      },
    };
  }

  renderItem = ({ item: data, index }) => {
    return (
      <Choose_chapter
        data={data}
        index={index}
        navigation={this.props.navigation}
      />
    );
  };

  keyExtractor = (item, index) => index.toString();
  render() {
    return (
      <View style={styles.cont}>
        <Text style={styles.heading}>
          {/*this.navigation.getParam("subject") */} Maths class 10th{" "}
      
        </Text>

        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.data.maths}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    marginTop: 40,
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
