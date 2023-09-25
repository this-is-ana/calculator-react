import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const DoubleButton = ({ value, onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Image source={imageSource} style={styles.buttonImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 2.13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E1EBEE",
    borderRadius: 4,
    marginHorizontal: 6,
    paddingVertical: 5,
    shadowColor: "#1E343F",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonImage: {
    height: "100%",
    maxWidth: 90,
    width: "100%",
    resizeMode: "contain",
  },
});

export default DoubleButton;
