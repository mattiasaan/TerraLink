import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";

import DownloadImage from './images-2/download-2-line.png'

const AutobusScreen = () => {
    return(
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>1</Text>
                    <Text style={styles.TouchAreaText}>Funivia del Colle </Text>
                    <Text style={styles.downloadText}>Download</Text>
                    <Image source={DownloadImage} style={styles.DownloadImage} />
                </View>
                <Text style={styles.DestinationText}>Piazza Gries </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchArea}>
                <View style={styles.rowContainer}>
                    <Text style={styles.NumberText}>3</Text>
                    <Text style={styles.TouchAreaText}>Linea 3</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    TouchArea: {
        backgroundColor: 'white',
        width: '95%',
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'left'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
    },
    NumberText: {
        backgroundColor: '#08607e',
        padding: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
        color: '#FFFFFF',
        marginRight: 20,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 14,
    },

    TouchAreaText: {
        color: 'black',
        fontSize: 16,
    },

    downloadText: {
        color: '#08607e',
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 150,

    },

    DownloadImage: {
        width: 18,
        height:18,
        marginLeft:5,

    },

    DestinationText: {
        marginLeft: 83,
        fontSize: 16,
    }

})

export default AutobusScreen;
