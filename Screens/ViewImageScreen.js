import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import colors from "../config/colors";
const ViewImageScreen = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.Login}></View>
      <View style={styles.Register}></View>
      <ImageBackground
        resizeMode="contain"
        style={styles.ImageBackground}
        source={require("../assets/Images/chair.jpg")}
      ></ImageBackground>
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "black",
  },
  ImageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  Login: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  Register: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
});
