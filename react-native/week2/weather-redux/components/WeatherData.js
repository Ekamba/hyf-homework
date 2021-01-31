import React from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const WeatherData = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  return (
    <View style={styles.container} onStartShouldSetResponder={() => true}>
      <ScrollView style={styles.containerInner}>
        <Text style={styles.title}>
          {data.name} - {data.sys.country}
        </Text>
        <View style={styles.box}>
          <Text style={styles.boxLabel}>{data.weather[0].description}</Text>
          <Image
            style={styles.image}
            source={{
              uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            }}
          />
          <View style={styles.weatherDetailsItems}>
            <Text>Feels like :</Text>
            <Text style={styles.textSecondary}>{data.main.feels_like} °</Text>
          </View>
        </View>
        <View style={styles.box}>
          <FontAwesome5 name="temperature-low" size={25} color="#ff304f" />
          <Text style={styles.boxLabel}>Temp</Text>
          <View style={styles.tempContainer}>
            <Text style={styles.boxText}>{data.main.temp}K</Text>
            <Text style={styles.boxText}>{fahrenheit}&#8457;</Text>
            <Text style={styles.boxText}>{celsius}&#8451;</Text>
          </View>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons name="water" size={30} color="#ff304f" />
          <Text style={styles.boxLabel}>Humidity</Text>
          <Text style={styles.boxText}>{data.main.humidity}%</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="speedometer"
            size={30}
            color="#ff304f"
          />
          <Text style={styles.boxLabel}>Pressure</Text>
          <Text style={styles.boxText}>{data.main.pressure}hPa</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="weather-windy"
            size={30}
            color="#ff304f"
          />
          <Text style={styles.boxLabel}>Wind Speed</Text>
          <Text style={styles.boxText}>{data.wind.speed} m/s</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInner: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#f6b93b",
  },
  box: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  boxLabel: {
    textTransform: "uppercase",
    fontSize: 12,
    letterSpacing: 1,
    marginBottom: 5,
    fontWeight: "900",
    color: "#ff304f",
  },
  boxText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    alignContent: "center",
  },
  tempContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
  },
});

export default WeatherData;
