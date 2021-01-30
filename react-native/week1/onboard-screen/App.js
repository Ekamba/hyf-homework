import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  let imgUrl = {
    uri:
      "https://www.ideematic.com/wp-content/uploads/2018/05/react-native-developpement-mobile.png",
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.top__right}>Skip</Text>
        <FontAwesome
          style={styles.top__left}
          name="chevron-left"
          size={24}
          color="black"
        />
      </View>
      <View style={styles.image}>
        <Image source={imgUrl} style={{ height: 300, width: 300 }} />
      </View>
      <View style={styles.button}>
        <Button title="Click here" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 40,
  },
  top: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  // top__right: {
  //   alignItems: "flex-end",
  // },
  // top__left: {
  //   alignItems: "flex-start",
  // },

  image: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
});
