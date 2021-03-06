import React from "react"
import { View, StyleSheet } from "react-native"

import colors from "../colors"
import textStyles from "../textStyles"

export default class FixedParentFillAndFitChildren extends React.Component {
  render() {
    return (
      <View style={[ styles.view, {} ]}>
        <View style={[ styles.view1, {} ]}>
          <View style={[ styles.view4, {} ]}>

          </View>
          <View style={[ styles.view5, {} ]}>

          </View>
        </View>
        <View style={[ styles.view2, {} ]}>

        </View>
        <View style={[ styles.view3, {} ]}>

        </View>
      </View>
    );
  }
};

let styles = StyleSheet.create({
  view: {
    alignSelf: "stretch",
    height: 600,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24
  },
  view1: {
    alignSelf: "stretch",
    backgroundColor: colors.red50,
    flexDirection: "row",
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 24
  },
  view4: { backgroundColor: colors.red200, height: 100, width: 60 },
  view5: {
    backgroundColor: colors.deeporange200,
    height: 60,
    marginLeft: 12,
    width: 60
  },
  view2: { alignSelf: "stretch", backgroundColor: colors.indigo100, flex: 1 },
  view3: { alignSelf: "stretch", backgroundColor: colors.teal100, flex: 1 }
});