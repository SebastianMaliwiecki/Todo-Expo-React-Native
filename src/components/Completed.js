import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import Header from './Header'

export default function Completed() {
    return (
        <View style={styles.container}>
            <Header title={"Completed"} headerColor={'green'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})