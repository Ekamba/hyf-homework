import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { getWeather } from "../redux/actions/weatherActions";
import Form from "./Form";
import Weather from "./Weather";

const App = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.weather);

  const searchSubmitHandler = () => {
    if (search === "") {
      return Alert.alert("Validation", "City name is required!", [
        { text: "OK" },
      ]);
    }

    setLoading(true);
    dispatch(
      getWeather(
        search,
        () => setLoading(false),
        () => setLoading(false)
      )
    );
    setSearch("");
    Keyboard.dismiss();
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Form
            search={search}
            onSetSearch={setSearch}
            onSubmit={searchSubmitHandler}
          />
          <Weather loading={loading} data={data} error={error} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
