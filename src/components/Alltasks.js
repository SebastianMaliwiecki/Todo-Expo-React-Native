import React from 'react'
import { View, StyleSheet, FlatList, Text, TouchableOpacity  } from 'react-native'
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from './Header'
import { AntDesign } from '@expo/vector-icons';

export default function Alltasks({navigation, route}) {
    
    const {Tasks, SetList} = route.params
    console.log(Tasks);

    return (
        <View style={styles.container}>

            <Header title={"All Tasks"} headerColor={'#03a9f4'}/>

            <View style={styles.listWrapper}>
                <FlatList
                    data={Tasks}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <View style={styles.taskWrapper}>
                            <View style={styles.insideTask}>
                                <Text style={styles.task}>
                                    {item.taskText} Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis assumenda eos provident odit unde amet magni illo porro pariatur autem molestias nisi, commodi eligendi debitis sit esse doloremque voluptatem. Obcaecati?
                                </Text>
                                <Text style={styles.task}>
                                    {`Created: ${new Date().getDate()}/${new Date().getMonth()+1} | Due: `}
                                </Text>
                                <TouchableOpacity style={styles.check} onLongPress={() => {console.log("test")}}>
                                    <AntDesign name="check" size={27} color="white" />
                                </TouchableOpacity>
                            </View>    
                        </View> 
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    listWrapper: {
        flex: 1,
    },
    taskWrapper: {
        marginBottom: 30,
        marginLeft: 15,
        marginRight: 15,
        height: 'auto',
        backgroundColor:'rgb(29,29,29)',
        borderRadius: 15,
    },
    task: {
        color:'white',
        left: 10,
        right: 10,
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 20,
        top: 5,
        width: '95%'
    },
    check: {
        backgroundColor: 'green',
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 'auto',
        borderRadius: 25,
        padding: 3,
    },
    insideTask: {
        padding: 5,
    },
    taskDate: {
        left: 10,
        bottom: 7,
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 20,
        top: 5,
        color: 'rgb(170,170,170)',
    }
})