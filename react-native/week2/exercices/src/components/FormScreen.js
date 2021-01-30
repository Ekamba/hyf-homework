import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function FormScreen() {
  initialState = { name: "" };
  const [state, setState] = useState(initialState);

  const { name } = state;

  const handleChange = (e) => {
    setState({ ...name, [e.target.name]: e.target.value });
  };

  const handlePress = (name) => {
    alert(name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>What's your name</Text>
      <View style={styles.input}>
        <TextInput
          style={styles.textInputStyle}
          label="Name"
          onChange={handleChange}
          value={name}
        />
      </View>
      <Button title="Say Hello" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    color: "blue",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
  },
  textInputStyle: {
    textAlign: "center",
  },
});
