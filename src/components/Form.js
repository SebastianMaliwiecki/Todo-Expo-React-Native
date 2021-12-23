import { NavigationHelpersContext } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Keyboard, Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

function Form({toDoList, setToDoList, inputText, setInputText, navigation}) {

    const saveTaskToList = () => {
        console.log(inputText);
        if(inputText==="") {
            Alert.alert(
                "Unable to add new task!",
                "Make sure to not leave the input field emtpy",
                [
                    { text: "Ok", onPress: () => console.log("OK Pressed") }
                ]
            );
            return
        }
        
        setToDoList([
            ...toDoList,
            {
                id: uuidv4(),
                taskText: inputText,
                complete: false,
                date: new Date().toString()
            }
        ]);
        setInputText("");
    }

    return (
        <View style={styles.inputTaskWrapper}>
            <TextInput
                style={styles.input}
                onChangeText={setInputText}
                placeholder="Type new task..."
                placeholderTextColor="rgb(170,170,170)" 
                value={inputText}
                keyboardAppearance='dark'
            />
            <TouchableOpacity onPress={() => {
                Keyboard.dismiss()
                saveTaskToList()
            }}
            >
                <View style="inputTaskWrapper">
                    <Text style={styles.addTask}>
                        +
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgb(29,29,29)',
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        width: 320,
        color: 'white',
        fontSize: 15,
        left: 7,
    },
    inputTaskWrapper: {
        marginTop: 15,
        height: 'auto',
    },
    addTask: {
        color: 'white',
        fontSize: 60,
        marginLeft: 10,
        justifyContent: 'center',
        top: -5,
    },
    inputTaskWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Form;