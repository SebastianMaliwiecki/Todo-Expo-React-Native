import React from 'react'
import { View, StyleSheet, TouchableOpacity, TextInput, Keyboard, Alert } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { v4 as uuidv4 } from 'uuid';

const AddTask = ({toDoList, setToDoList, inputText, setInputText}) => {

    const saveTaskToList = () => {
        console.log(inputText);
        if(inputText==="") {
            Alert.alert(
                "Unable to add new task!",
                "Make sure to not leave the input field emtpy",
                [
                    { text: "Ok" }
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
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={setInputText}
                    placeholder="Type new task..."
                    placeholderTextColor="rgb(170,170,170)" 
                    keyboardAppearance='dark'
                    value={inputText}
                />
            </View>
            <TouchableOpacity 
                onPress={() => {
                    saveTaskToList()
                    Keyboard.dismiss();
                }}
                >
                <View style={styles.addTask}>
                    <Entypo name="add-to-list" size={24} color='rgb(170,170,170)' />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addTask: {
        color: 'rgb(170,170,170)',
        fontSize: 15,
        backgroundColor: 'rgb(29,29,29)',
        padding: 20,
        borderRadius: 50,
        fontWeight: '600',
        marginTop: 15,
    },
    inputWrapper: {
        width: '100%'
    },  
    input: {
        backgroundColor: 'rgb(29,29,29)',
        width: 300,
        borderWidth: 1,
        padding: 15,
        borderRadius: 15,
        color: 'white',
        fontSize: 15,
        width: 'auto',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
    },
})

export default AddTask
