import React from "react";
import Constants from "expo-constants";
import {
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";

function Screen({ children, style, withDissmeser }) {
  if (withDissmeser) {
    return (
      <TouchableWithoutFeedback
        style={{ flex: 1 }}
        onPress={() => Keyboard.dismiss()}
      >
        <SafeAreaView style={[styles.screen, style]}>
          <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
