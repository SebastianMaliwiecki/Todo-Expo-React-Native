import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import Header from './Header';
import Form from './Form';

import { Feather, Entypo, AntDesign  } from '@expo/vector-icons'
//import { TouchableOpacity} from 'react-native-gesture-handler'


export default function DashBoard({navigation}) {
    // To-do list as an list
    const [inputText, setInputText] = useState("")
    const [toDoList, setToDoList] = useState([])
    const [chosenDate, setChosenDate] = useState(new Date());

    //console.log(toDoList);
  
    return (
      <SafeAreaView style={styles.container}>
        
          <StatusBar style="light" />

          <Form
            toDoList={toDoList}
            setToDoList={setToDoList}
            inputText={inputText}
            setInputText={setInputText}
          />

          <View style={styles.fitlerWrapper}>
            {/* All Tasks */}
            <View style={styles.allTasks}>
              <TouchableOpacity
                onPress={() => navigation.navigate("All tasks", {Tasks:toDoList})}
                style={styles.optionWrap}
              >
                <Text style={styles.taskHeader}>
                  All tasks
                </Text>
                <View style={styles.icon}>
                  <Feather name="list" size={25} color='white' />
                </View>
                <Text style={styles.number}>
                  {toDoList.length}
                </Text>
              </TouchableOpacity>
            </View>
  
            <View style={styles.completedTasks}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Completed", {Tasks:toDoList})}
                style={styles.optionWrap}
              >
                <Text style={styles.taskHeader}>
                  Completed
                </Text>
                <View style={styles.icon2}>
                  <Entypo name="check" size={25} color="white" />
                </View>
                <Text style={styles.number}>
                  {toDoList.length}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.notCompletedTasks}>
              <TouchableOpacity
                onPress={() => navigation.navigate("All tasks", {Tasks:toDoList})}
                style={styles.optionWrap}
              >
                <Text style={styles.taskHeader}>
                  Not ompleted
                </Text>
                <View style={styles.icon3}>
                  <AntDesign name="exclamation" size={25} color="black" />
                </View>
                <Text style={styles.number}>
                  {toDoList.length}
                </Text>
              </TouchableOpacity>
            </View>
    
            
            <View style={styles.deletedTasks}>
              <View style={styles.optionWrap}>
                <Text style={styles.taskHeader}>
                  Deleted 
                </Text>
              </View>
            </View>
          </View>
        
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1,
    },
    optionWrap: {
      height: 90,
      backgroundColor: 'rgb(29,29,29)',
      width: 175,
      marginBottom: 10,
      borderRadius: 15,
      position: 'absolute',
    },
    allTasks: {
      left: 7,
      top: 30,
    },
    completedTasks: {
      left: 192,
      top: 30,
    },
    notCompletedTasks: {
      left: 7,
      top: 130,
    },
    deletedTasks: {
      left: 192,
      top: -165,
    },
    taskHeader: {
      left: 15,
      bottom: 15,
      color: 'rgb(170,170,170)',
      fontSize: 17,
      fontWeight: "500",
      position: 'absolute',
    },
    number: {
      position: 'absolute',
      right: 10,
      top: 10,
      color: 'rgb(250,250,250)',
      padding: 5,
      borderRadius: 25,
      fontSize: 30,
      fontWeight: "600",
    },
    icon: {
      position: 'absolute',
      top: 10,
      left: 10,
      borderRadius: 25,
      backgroundColor: '#03a9f4',
      padding: 3,
    },
    icon2: {
      position: 'absolute',
      top: 10,
      left: 10,
      borderRadius: 25,
      backgroundColor: 'green',
      padding: 3,
    },
    icon3: {
      position: 'absolute',
      top: 10,
      left: 10,
      borderRadius: 25,
      backgroundColor: 'rgb(255, 191, 0)',
      padding: 3,
    },
    fitlerWrapper: {
      height: 'auto',
      backgroundColor: 'red'
    }
  });
