import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import AddTask from './AddTask';

import { Feather, Entypo, AntDesign } from '@expo/vector-icons'

export default function DashBoard({navigation}) {

    const [inputText, setInputText] = useState("")
    const [toDoList, setToDoList] = useState([])
    const [deletedList, setDeletedList] = useState([])
    const [completedList, setCompletedList] = useState([])
    const [notCompletedList, setNotCompletedList] = useState([])
    
    useEffect(() => {
      setCompletedList(toDoList.filter((todo) => todo.complete === true));
      setNotCompletedList(toDoList.filter((todo) => todo.complete === false));
    }, [toDoList])
  
    return (
      <SafeAreaView style={styles.container}>
        
          <StatusBar style="light" />

          <View style={styles.fitlerWrapper}>
            {/* All Tasks */}

            <View style={styles.firstRow}>
              <View style={styles.optionWrap}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("All tasks", {Tasks:toDoList})}
                  style={{height: '100%'}}
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

              <View style={styles.optionWrap}>
              <TouchableOpacity
                  onPress={() => navigation.navigate("Completed", {Tasks:completedList})} 
                  style={{height: '100%'}}
                >
                  <View style={{zIndex:1}}>
                    <Text style={styles.taskHeader}>
                      Completed
                    </Text>
                    <View style={styles.icon2}>
                      <Entypo name="check" size={25} color="white" />
                    </View>
                    <Text style={styles.number}>
                      {completedList.length}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View  style={styles.firstRow}>
              <View style={styles.optionWrap}>
              <TouchableOpacity
                onPress={() => navigation.navigate("All tasks", {Tasks:toDoList})}
              >
                <Text style={styles.taskHeader}>
                  Not completed
                </Text>
                <View style={styles.icon3}>
                  <AntDesign name="exclamation" size={25} color="black" />
                </View>
                <Text style={styles.number}>
                  {notCompletedList.length}
                </Text>
              </TouchableOpacity>
            </View>
    
            
            <View style={styles.optionWrap}>
              <View style={styles.optionWrap}>
                <Text style={styles.taskHeader}>
                  Deleted 
                </Text>
              </View>
            </View>
              </View>
          </View>

          <AddTask
            toDoList={toDoList}
            setToDoList={setToDoList}
            inputText={inputText}
            setInputText={setInputText}
            navigation={navigation}
          />

      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    firstRow: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
    },
    container: {
      backgroundColor: 'black',
      flex: 1,
    },
    optionWrap: {
      height: 90,
      backgroundColor: 'rgb(29,29,29)',
      width: '47%',
      marginBottom: 10,
      borderRadius: 15,
    },
    taskHeader: {
      left: 15,
      top: 55,
      color: 'rgb(170,170,170)',
      fontSize: 17,
      fontWeight: "500",
      position: 'absolute',
    },
    number: {
      position: 'absolute',
      right: 10,
      top: 5,
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
      justifyContent: 'center',
      marginTop: 30,
    }
  });
