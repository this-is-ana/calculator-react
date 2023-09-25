import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DisplaysBox from "./DisplaysBox";
import ButtonsBox from "./ButtonsBox";

let userInput = "";
let bufferInput = "";
let endCompute = false;

const Calculator = () => {
    const [equationValue, setEquationValue] = useState("");
    const [resultValue, setResultValue] = useState("");

    const handleButtonPress = (buttonValue) => {
        switch (buttonValue) {
            case 'AC':
                clearDisplay();
                break;
            case 'C':
                clearOne();
                break;
            case '=':
                handleCalculate();
                break;
            case '√':
                showSquareRoot();
                break;
            default:
                showUserInput(buttonValue);
        };
    };

    const verifyInput = (newInput) => {
        let isValid = true;
        let previousChar = userInput.substring(userInput.length - 1);

        switch (newInput) {
            case "×": case "+": case "−": case "÷": case "%":
                if (userInput == "" || !previousChar.match("-?\\d+(\\.\\d+)?") && previousChar != ")" && previousChar != 'π' && previousChar != '%') {
                    isValid = false;
                }
                break;
            case ".":
                if(!previousChar.match("-?\\d+(\\.\\d+)?")) {
                    isValid = false;
                }
                break;
        }
        return isValid;
    }

    const showUserInput = (newInput) => {
        if (verifyInput(newInput)) {
            if (endCompute) {
                endCompute = false;
                bufferInput = "";

                switch (newInput) {
                    case "×": case "+": case "−": case "÷":
                        userInput = resultValue + newInput;
                        break;
                    case ".":
                        userInput = resultValue + newInput;
                        setResultValue(userInput);
                        break;
                    default:
                        bufferInput += newInput;
                        userInput = newInput;
                        setResultValue(userInput);
                }
            } else {
                userInput += newInput;

                if (newInput.match("-?\\d+(\\.\\d+)?") || newInput == '.' || newInput == '%' || newInput == 'π') {
                    bufferInput += newInput;
                    setResultValue(bufferInput);
                } else {
                    bufferInput = "";
                }
            }
            setEquationValue(userInput);
        }
    }

    const showSquareRoot = () => {
        let previousChar = userInput.substring(userInput.length - 1);

        if (!previousChar.match("-?\\d+(\\.\\d+)?") && previousChar != ")") {
            return;
        }

        if (endCompute) {
            userInput = `√(${resultValue})`;
        } else {
            if(bufferInput == "") {
                let position = userInput.lastIndexOf('(');

                userInput = userInput.substring(0, position) + '√' + userInput.substring(position);
            } else {
                let position = userInput.search(bufferInput);
                
                bufferInput = `√(${bufferInput})`;
                userInput = userInput.substring(0, position) + bufferInput;
            }
        }

        setEquationValue(userInput);
        setResultValue(userInput);
    };

    const handleCalculate = () => {
        if(userInput == "") {
            return;
        }
        
        setEquationValue(userInput + "=");

        try {
            let mathString = userInput.replace(`×`, `*`).replace(`\\+`, `+`).replace(`−`, `-`)
                .replace(`÷`, `\/`).replace(`π`, Math.PI).replace(`%`, `\/100`);

            if (mathString.search('√') != -1) {
                let position = mathString.search('√');
                let tempString = mathString.substring(position);
                let endPosition = tempString.search(`\\)`);
                let replaceString = mathString.substring(position, position + endPosition + 1).replace(`√`, ``) + '**0.5';

                mathString = mathString.substring(0, position) + replaceString + mathString.substring(position + endPosition + 1);
            }

            const result = eval(mathString);

            if(result == 'Infinity') {
                setResultValue("Can't divide by 0");
                userInput = "";
                bufferInput = "";
            } else {
                setResultValue(+parseFloat(result).toFixed(8).toString());
            }

            endCompute = true;
        } catch (error) {
            setResultValue("Error");
        }
    };

    const clearOne = () => {
        if (endCompute == false && equationValue.length > 0) {
            setEquationValue(equationValue.substring(0, equationValue.length - 1));
            setResultValue(resultValue.substring(0, resultValue.length - 1));
            userInput = userInput.substring(0, userInput.length - 1);
        } else {
            clearDisplay();
        }
    };

    const clearDisplay = () => {
        setEquationValue("");
        setResultValue("");
        userInput = "";
        bufferInput = "";
    };

    return (
        <View style={styles.content}>
            <DisplaysBox style={styles.displaysBox} equationValue={equationValue} resultValue={resultValue} />
            <ButtonsBox
                style={styles.buttonssBox}
                handleButtonPress={handleButtonPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        maxWidth: 700,
        width: "100%"
    },
});

export default Calculator;