import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import colors from "../config/colors";

const WelcomeScreen = () => {
  return (
    <View style={styles.cont}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require("../assets/Images/background.jpg")}
      >
        <Text style={styles.Text}>Sell What you Don't Need</Text>
        <Image
          style={styles.Image}
          source={require("../assets/Images/logo-red.png")}
        />
        <View style={styles.Login}></View>
        <View style={styles.Register}></View>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  Image: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  Login: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  Register: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
  Text: {
    position: "absolute",
    top: 185,
  },
});
