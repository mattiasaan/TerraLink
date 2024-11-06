import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const AutobusScreen = () => {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.TouchArea}>
                <TouchableOpacity>
                    <Text>Linea 3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.TouchArea}>
                <TouchableOpacity>
                    <Text>Linea 3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.TouchArea}>
                <TouchableOpacity>
                    <Text>Linea 3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.TouchArea}>
                <TouchableOpacity>
                    <Text>Linea 3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.TouchArea}>
                <TouchableOpacity>
                    <Text>Linea 3</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#ffffff"
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