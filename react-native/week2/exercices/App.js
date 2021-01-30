import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/components/HomeScreen";
import CapturingTapsScreen from "./src/components/CapturingTapsScreen";
import ButtonsScreen from "./src/components/ButtonsScreen";
import StylingScreen from "./src/components/StylingScreen";
import FormScreen from "./src/components/FormScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return (
                <Ionicons
                  name={focused ? "ios-home" : "ios-home-outline"}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Settings") {
              return (
                <Ionicons
                  name={focused ? "ios-list-box" : "ios-list"}
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="capturingTaps" component={CapturingTapsScreen} />
        <Tab.Screen name="buttons" component={ButtonsScreen} />
        <Tab.Screen name="styling" component={StylingScreen} />
        <Tab.Screen name="form" component={FormScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
