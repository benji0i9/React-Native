import { StatusBar } from "expo-status-bar";
// This will handle our Tab Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// Import our custom components
import Profile from "./Tabs/Profile";
import Colleges from "./Tabs/Colleges";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { StyleSheet, Text, View } from "react-native";

// Create an instance of Bottom Tab navigator
const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name='Colleges'
          component={Colleges}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='warehouse'
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='account-circle'
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
