import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const AutobusScreen = () => {
    return(
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <TouchableOpacity style={styles.TouchArea}>
                <Text style={styles.TouchAreaText}>Linea 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <Text style={styles.TouchAreaText}>Linea 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <Text style={styles.TouchAreaText}>Linea 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <Text style={styles.TouchAreaText}>Linea 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <Text style={styles.TouchAreaText}>Linea 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <Text style={styles.TouchAreaText}>Linea 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <Text style={styles.TouchAreaText}>Linea 3</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    TouchArea: {
        backgroundColor: 'white',
        width: '80%',
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    TouchAreaText: {
        color: 'black',
        fontSize: 16,
    }
})

export default AutobusScreen;
