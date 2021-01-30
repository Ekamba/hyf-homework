import React from "react";
import { Text, View, StyleSheet } from "react-native";

const StylingScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.square1}>square 1</Text>
      </View>
      <View>
        <Text style={styles.square2}>square 2</Text>
      </View>
      <View>
        <Text style={styles.square3}>square 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  square1: {
    width: 110,
    height: 100,
    backgroundColor: "cyan",
    alignSelf: "center",
    textAlign: "center",
  },
  square2: {
    width: 110,
    height: 100,
    backgroundColor: "green",
    textAlign: "center",
  },
  square3: {
    width: 110,
    height: 100,
    backgroundColor: "red",
    textAlign: "center",
  },
});

export default StylingScreen;
