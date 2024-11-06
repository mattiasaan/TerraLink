import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const AutobusScreen = () => {
    return(
        <ScrollView >
            <TouchableOpacity style={styles.TouchArea}>
                <Text>Linea 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <Text>Linea 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <Text>Linea 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <Text>Linea 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <Text>Linea 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <Text>Linea 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <Text>Linea 3</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        padding: 10
    },
    TouchArea:{
        backgroundColor: 'white',
        width: '80%',
        height: '30%',
        borderRadius: 10,
    },
    TouchAreaText:{
        color: 'black'
    }
})

export default AutobusScreen;