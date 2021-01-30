import React from "react";
import { View, Button, Alert } from "react-native";

export default function Buttons() {
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

  const createAlert1 = () =>
    Alert.alert(
      "Alert",
      "Good Bye!!!",
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
      <Button
        backgroundColor="red"
        title={"Say Hello !"}
        onPress={createAlert}
      />
      <Button
        backgroundColor="red"
        title={"Say Good Bye"}
        onPress={createAlert1}
      />
    </View>
  );
}
