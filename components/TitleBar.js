import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TitleBar = () => {
  return (
    <View style={styles.titleBar}>
      <Text style={styles.title}>Ma Calculatrice</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  titleBar: {
    backgroundColor: "#5793b3",
    top: 0,
    height: 50,
    width: "100%",
    justifyContent: "center",
  },
  title: {
    top: 0,
    textAlign: "center",
    fontSize: 25,
    color: "white",
  },
});
export default TitleBar;
