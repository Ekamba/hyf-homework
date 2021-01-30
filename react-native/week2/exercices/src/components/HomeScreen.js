import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.square}>Hello, World!</Text>
      </View>
      <View>
        <Button
          title="CapturingTaps"
          onPress={() => navigation.navigate("capturingTaps")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: "cyan",
    justifyContent: "center",
  },
  square: {
    textAlign: "center",
  },
});

export default HomeScreen;
