import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Feed</Text>
      <View style={styles.container__figures}>
        <View style={styles.main}>
          <View style={styles.figures}>
            <Text>1</Text>
          </View>
          <View style={styles.figures}>
            <Text>2</Text>
          </View>
          <View style={styles.figures}>
            <Text>3</Text>
          </View>
          <View style={styles.figures}>
            <Text>4</Text>
          </View>
          <View style={styles.figures}>
            <Text>5</Text>
          </View>
          <View style={styles.figures}>
            <Text>6</Text>
          </View>
          <View style={styles.figures}>
            <Text>7</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 20,
  },
  container__figures: {
    width: 350,
    height: 500,
    backgroundColor: "cyan",
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
  },
  figures: {
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: 30,
    color: "#585858",
    fontFamily: "Times New Roman",
    width: 310,
    height: 50,
    textShadowColor: "black",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    borderColor: "black",
    borderWidth: 2,
  },
});

export default App;
