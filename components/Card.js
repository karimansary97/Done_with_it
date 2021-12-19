import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.Image} source={image} />
      <View style={styles.deatilsCont}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
  },
  Image: {
    width: "100%",
    height: 200,
  },
  deatilsCont: {
    padding: 20,
  },
  title: {
    marginBottom: 5,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
