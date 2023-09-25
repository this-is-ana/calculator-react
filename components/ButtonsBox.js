import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button.js";
import DoubleButton from "./DoubleButton.js";
import OperatorButton from "./OperatorButton.js";
import ClearButton from "./ClearButton.js";

const ButtonsBox = ({ handleButtonPress }) => {
  const renderButton = (value, imageSource, style = {}) => {
    return (
      <Button
        value={value}
        onPress={handleButtonPress}
        imageSource={imageSource}
      />
    );
  };
  return (
    <View style={styles.buttonsBox}>
      <View style={styles.buttonRow}>
        <ClearButton
          value="AC"
          onPress={handleButtonPress}
          imageSource={require("./images/button_ac.png")}
        />
        <OperatorButton
          value="π"
          onPress={handleButtonPress}
          imageSource={require("./images/button_pi.png")}
        />
        <OperatorButton
          value="%"
          onPress={handleButtonPress}
          imageSource={require("./images/button_percentage.png")}
        />
        <ClearButton
          value="C"
          onPress={handleButtonPress}
          imageSource={require("./images/button_c.png")}
        />
      </View>
      <View style={styles.buttonRow}>
        <OperatorButton
          value="√"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_squareroot.png")}
        />
        <OperatorButton
          value="("
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_openbracket.png")}
        />
        <OperatorButton
          value=")"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_closebracket.png")}
        />
        <OperatorButton
          value="÷"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_divide.png")}
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
          value="7"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_7.png")}
        />
        <Button
          value="8"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_8.png")}
        />
        <Button
          value="9"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_9.png")}
        />
        <OperatorButton
          value="×"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_multiply.png")}
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
          value="4"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_4.png")}
        />
        <Button
          value="5"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_5.png")}
        />
        <Button
          value="6"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_6.png")}
        />
        <OperatorButton
          value="−"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_minus.png")}
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
          value="1"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_1.png")}
        />
        <Button
          value="2"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_2.png")}
        />
        <Button
          value="3"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_3.png")}
        />
        <OperatorButton
          value="+"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_plus.png")}
        />
      </View>
      <View style={styles.buttonRow}>
        <Button
          value="0"
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_0.png")}
        />
        <Button
          value="."
          onPress={handleButtonPress}
          imageSource={require("./images/button_dot.png")}
        />
        <DoubleButton
          value="="
          onPress={handleButtonPress}
          imageSource={require("./images/type2/button_equals.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsBox: {
    flex: 7,
    resizeMode: "contain",
    padding: 8,
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 12,
  },
});

export default ButtonsBox;
