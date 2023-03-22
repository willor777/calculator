
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Dimensions } from "react-native";



/*
 * Ideas...
 * 
 * Put a scrollview at the bottom showing all of the users calculation history
 * */

export default function App() {



    // User's text State
    let [userText, setUserText] = useState("1 + 1")

    // Calculation Result
    let [resultText, setResultText] = useState("ANS")

    // ButtonOnPress
    let answerButtonOnPress = () => {
        setUserText(userText + " ANSWER HAS NOT BEEN IMPLEMENTED")
    }

    return (

        // Root 
        < View style={ styles.root } >

            {buildTextEdit(userText, setUserText)}

            {initButtonColumns(userText, setUserText)}

            {initAnswerButton(answerButtonOnPress)}
        </View >

    )


}


function buildTextEdit(curTxt, onTextChange) {
    return (
        <View style={ styles.userTextEdit }>
            <TextInput
                style={ styles.userTextEdit }
                value={curTxt}
                onChangeText={(val) => onTextChange(val)}
            />
        </View>
        )
}


/** Creates a column filled with 4 buttons, 
 * */
function buildColumnOfButtons(a, b, c, d, curText, textSetter) {
    return (
        <View style={styles.buttonsColumn}>
            <Button
                title={ a }
                onPress={ () => textSetter(curText + " " + a) }
            />
            <Button
                title={ b }
                onPress={() => textSetter(curText + " " + b)}
            />
            <Button
                title={ c }
                onPress={() => textSetter(curText + " " + c)}
            />
            <Button
                title={ d }
                onPress={() => textSetter(curText + " " + d)}
            />


        </View>
        )
}


function initButtonColumns(userText, setUserText) {
    let cols = [

        buildColumnOfButtons("7", "4", "1", ".", userText, setUserText),
        buildColumnOfButtons("8", "5", "2", "0", userText, setUserText),
        buildColumnOfButtons("9", "6", "3", "CL", userText, setUserText),
        buildColumnOfButtons("+", "-", "/", "*", userText, setUserText),
    ]

    return (
        <View style={styles.columnContainer}>

            { cols }
            
        </View>
        )

}

function initAnswerButton(onPress) {
    return (
        <View>
            <Button
                style={styles.answerButton}
                title="ANSWER"
                onPress={onPress}
            />
        </View>
        )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 16,
        backgroundColor: "#D46C6C",
    },

    userTextEdit: {
        width: 200,
        height: 50,
        backgroundColor: "#fffff1",
    },

    // Row of columns containing buttons
    columnContainer: {
        flex: 1, 
        flexDirection: "row",
        backgroundColor: "#ffffff",
        },

    // Button Column
    buttonsColumn: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#ffffff",

    },

    // Get Answer Button
    answerButton: {
        flex: 1,
        height: 30,
        width: 100,
        alignContent: "top"
    },


}) 