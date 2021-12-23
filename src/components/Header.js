import React from 'react'
import {Text, View, StyleSheet} from 'react-native';

export default function Header({title, headerColor}) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>
                <Text style={{color:headerColor}}>
                    {title}
                </Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: 'auto',
        height: 'auto',
        justifyContent: 'center',
        backgroundColor:  'black',
    },
    headerText: {
        fontSize: 30,
        padding: 10,
        fontWeight: "500",
        marginLeft: 20,
    },  
});