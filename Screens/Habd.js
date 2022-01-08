import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Screen from "../components/Screen";

import * as ImagePicker from "expo-image-picker";
import { FormPicker } from "../components/forms";

function Habd(props) {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) {
      alert("you need to enable permission to access the library.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <Screen>
      <FormPicker />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default Habd;
