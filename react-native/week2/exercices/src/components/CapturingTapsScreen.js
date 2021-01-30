import React from "react";
import { View, Button, Alert } from "react-native";

export default function CapturingTaps() {
  const createAlert = () =>
    Alert.alert(
      "Alert",
      "Hello !!!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("Hello!") },
      ],
      { cancelable: false }
    );
  return (
    <View>
      <Button title={"Button 1"} onPress={createAlert} />
    </View>
  );
}
