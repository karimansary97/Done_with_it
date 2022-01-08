import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

import ListingEditScreen from "./screens/ListingEditScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedNavigator from "./navigation/FeedNavigator";
import AuthContext from "./auth/context";
import authStorage from "./auth/storage";

export default function App() {
  const [user, setUser] = useState();
  const [ready, setReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };
  useEffect(() => {
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
