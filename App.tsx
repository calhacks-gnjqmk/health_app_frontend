import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {
  Button,
  MD3LightTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import Dashboard from "./src/screens/Dashboard";
import Login from "./src/screens/Login";
import Navigation from "./src/screens/Navigation";
import Register from "./src/screens/RegisterScreen";
import { RootStackParamList } from "./src/screenTypes";

const Stack = createNativeStackNavigator<RootStackParamList>();

const routes = [
    { title: 'Dashboard', route: 'Dashboard' }
]

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={index}
          >
            <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomTabs = createBottomTabNavigator();

// If you are getting type errors, you need to edit src/screenTypes.ts
export default function App() {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <NavigationContainer>
        <BottomTabs.Navigator tabBar={(props) => <TabBar {...props} />}>
          <BottomTabs.Screen name="Dashboard" component={Dashboard} />
        </BottomTabs.Navigator>
        {/*
        <Stack.Navigator initialRouteName="Navigation">
          <Stack.Screen
            name="Navigation"
            component={Navigation}
            options={{ title: "Navigation" }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: "Register" }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ title: "Dashboard" }}
          />
        </Stack.Navigator>
        */}
      </NavigationContainer>
    </PaperProvider>
  );
}
