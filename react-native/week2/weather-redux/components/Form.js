import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Form = ({ search, onSetSearch, onSubmit }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Country or city name to get the weather
      </Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Type here to search..."
          value={search}
          onChangeText={(val) => onSetSearch(val)}
        />
        <Button title="Search" onPress={onSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff200",
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 4,
    backgroundColor: "#fff",
    color: "#363636",
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 10,
  },
});

export default Form;
