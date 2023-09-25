import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© Lilian Magalhaes & Anayika Pauyo</Text>
      <Text style={styles.footerText}>Images by ©Freepik</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  footer: {
    height: 40,
    backgroundColor: "#5793b3",
    width: "100%"
  },
  footerText: {
    color: "white",
    paddingTop: 5,
    fontSize: 10,
    textAlign: "center",
  },
});

export default Footer;
