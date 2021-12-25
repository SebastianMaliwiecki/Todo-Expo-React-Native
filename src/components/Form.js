import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, DatePickerIOS } from 'react-native'
import { v4 as uuidv4 } from 'uuid';

const Form = ({route}) => {

    const {toDoList, setToDoList, inputText, setInputText} = route.params
    const [chosenDate, setChosenDate] = useState(new Date());

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
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setInputText}
                placeholder="Type new task..."
                placeholderTextColor="rgb(170,170,170)" 
                keyboardAppearance='dark'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(45,45,45)',
    },
    input: {
        backgroundColor: 'rgb(29,29,29)',
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

export default Form
