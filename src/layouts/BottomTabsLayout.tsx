import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/Dashboard";
import Exercises from "../screens/Exercises";

const BottomTabs = createBottomTabNavigator();

const BottomTabLayout: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="Dashboard" component={Dashboard} />
        <BottomTabs.Screen name="Exercises" component={Exercises} />
      </BottomTabs.Navigator>
    </SafeAreaView>
  );
};

export default BottomTabLayout;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "column",
  },
});
