import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DisplaysBox = ({ equationValue, resultValue }) => {
  return (
    <View style={styles.displaysContainer}>
      <View style={styles.calculateContainer}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.displayCalculate}>{equationValue}</Text>
      </View>
      <View style={styles.displayResultContainer}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.displayResult}>{resultValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  displaysContainer: {
    flex: 3,
    marginBottom: 15,
  },
  calculateContainer: {
    justifyContent: "center",
    flex: 5,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 15,
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#1E343F",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6.84,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  displayCalculate: {
    color: "gray",
    textAlign: "right",
    fontSize: 25,
  },
  displayResultContainer: {
    flex: 8,
    justifyContent: "center",
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#1E343F",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6.84,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  displayResult: {
    color: "#5793b3",
    textAlign: "right",
    fontSize: 45,
  },
});

export default DisplaysBox;
