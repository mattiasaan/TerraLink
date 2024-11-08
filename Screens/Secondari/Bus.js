import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from "react-native";

import DownloadImage from './images-2/download-2-line.png';

const lineData = [
    { number: "1", start: "Funivia del Colle", end: "Piazza Gries", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_1_20240905.pdf" },
    { number: "3", start: "Casanova", end: "Via Perathoner", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_3_20241130.pdf" },
    { number: "5", start: "Firmian", end: "Via Perathoner", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_5_20241130.pdf" },
    { number: "6", start: "Funivia del Colle", end: "Via Lancia", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_6_20231210.pdf" },
    { number: "7A", start: "Passeggiata dei castagni", end: "Passeggiata dei castagni", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_7A_20231210.pdf" },
    { number: "7B", start: "Passeggiata dei castagni", end: "Passeggiata dei castagni", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_7B_20231210.pdf" },
    { number: "8", start: "Padiglione W", end: "Cardano", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_8_20231210.pdf" },
    { number: "9", start: "Funivia del Colle", end: "Stazione Ponte d'Adige", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_9_20231210.pdf" },
    { number: "10A", start: "Funivia del Renon", end: "Via Perathoner", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_10A_20231210.pdf" },
    { number: "10B", start: "Funivia del Renon", end: "Ospedale", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_10B_20231210.pdf" },
    { number: "11", start: "S. Maurizio", end: "Via Perathoner", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_11_20231210.pdf" },
    { number: "12", start: "Funivia del Colle", end: "Via Perathoner", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_12_20231210.pdf" },
    { number: "13", start: "Via Lancia", end: "Via Lancia", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_13_20231210.pdf" },
    { number: "14", start: "Via Lancia", end: "Piazza Gries", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_14_20231210.pdf" },
    { number: "15", start: "Via Lancia", end: "Via Perathoner", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_15_20231210.pdf" },
    { number: "16", start: "Oltrisarco", end: "Ospedale", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_16_20231210.pdf" },
    { number: "18", start: "Oltrisarco", end: "Via Perathoner", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_18_20231210.pdf" },
    { number: "110", start: "Stazione Ponte d'Adige", end: "S. Paolo", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/210_110_20231210.pdf" },
    { number: "111", start: "Stazione Ponte d'Adige", end: "Nalles", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_111_20231210.pdf" },
    { number: "201", start: "Bolzano", end: "Merano", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/210_201_20231210.pdf" },
    { number: "202", start: "Bolzano", end: "Appiano", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/210_202_20231210.pdf" },
    { number: "203", start: "Bolzano", end: "Caldaro", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/210_203_20231210.pdf" },
    { number: "204", start: "Bolzano", end: "Laives - S. Giacomo", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/210_204_20231210.pdf" },
    { number: "206", start: "Bolzano", end: "Nova Ponente", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/210_206_20231210.pdf" },
    { number: "209", start: "Bolzano", end: "Sarentino", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/210_209_20231210.pdf" },
    { number: "213", start: "Bolzano", end: "Rencio - Renon", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/210_213_20231210.pdf" }
];

const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
};

const BusLineItem = ({ number, start, end, url }) => (
    <TouchableOpacity style={styles.TouchArea} onPress={() => openURL(url)}>
        <View style={styles.rowContainer}>
            <Text style={styles.NumberText}>{number}</Text>
            <Text style={styles.StationText}>{start}{"\n"}{end}</Text>
            <Text style={styles.downloadText}>Download</Text>
            <Image source={DownloadImage} style={styles.DownloadImage} />
        </View>
    </TouchableOpacity>
);

const AutobusScreen = () => (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        {lineData.map(line => (
            <BusLineItem
                key={line.number}
                number={line.number}
                start={line.start}
                end={line.end}
                url={line.url}
            />
        ))}
    </ScrollView>
);

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    TouchArea: {
        backgroundColor: 'white',
        width: '97%',
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 10
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
    },
    NumberText: {
        backgroundColor: '#08607e',
        padding: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
        color: '#FFFFFF',
        marginRight: 15,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 14
    },
    StationText: {
        color: 'black',
        fontSize: 14
    },
    downloadText: {
        color: '#08607e',
        fontWeight: "bold",
        fontSize: 14,
        marginLeft: 'auto'
    },
    DownloadImage: {
        width: 18,
        height: 18,
        marginLeft: 5
    },
});

export default AutobusScreen;
