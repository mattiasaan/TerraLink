import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Linking } from "react-native";

import DownloadImage from './images-2/download-2-line.png';
import DownloadImage2 from './images-2/download-2-line-2.png';


const lineData = [
    { number: "1", start: "Funivia del Colle ", end: "Piazza Gries ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_1_20240905.pdf" },
    { number: "3", start: "Casanova ", end: "Via Perathoner ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_3_20241130.pdf" },
    { number: "5", start: "Firmian ", end: "Via Perathoner ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_5_20241130.pdf" },
    { number: "6", start: "Funivia del Colle ", end: "Via Lancia ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_6_20231210.pdf" },
    { number: "7A", start: "Passeggiata castagni" , end: "Passeggiata castagni ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_7A_20231210.pdf" },
    { number: "7B", start: "Passeggiata castagni ", end: "Passeggiata castagni ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_7B_20231210.pdf" },
    { number: "8", start: "Padiglione W ", end: "Cardano ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_8_20231210.pdf" },
    { number: "9", start: "Funivia del Colle ", end: "Stazione Ponte d'Adige ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_9_20231210.pdf" },
    { number: "10A", start: "Funivia del Renon ", end: "Via Perathoner ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_10A_20231210.pdf" },
    { number: "10B", start: "Funivia del Renon ", end: "Ospedale ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_10B_20231210.pdf" },
    { number: "12", start: "Funivia del Colle ", end: "Via Perathoner ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_12_20231210.pdf" },
    { number: "14", start: "Via Lancia ", end: "Piazza Gries ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_14_20231210.pdf" },
    { number: "15", start: "Via Lancia ", end: "Via Perathoner ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_15_20231210.pdf" },
    { number: "N1", start: "Stazione di Bolzano ", end: "Piazza Gries ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_1_20240905.pdf" },
    { number: "N35", start: "Stazione Casanova ", end: "Stazione di Bolzano ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/BZ_N35_20231210.pdf" },
    { number: "110", start: "Bolzano Autostazione ", end: "Bronzolo Raif ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/110_20231210.pdf" },
    { number: "111", start: "Bolzano Autostazione ", end: "Zona Industriale Lives ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/111_20231210.pdf" },
    { number: "183", start: "Bolzano Autostazione ", end: "Cornedo ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/183_20231210.pdf" },
    { number: "201", start: "Bolzano Autostazione ", end: "Stazione di Merano ", url: "https://www.suedtirolmobil.info/fileadmin/pdf/2024/201_20231210.pdf" },
    
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
        <TouchableOpacity style={styles.TouchAreaGeneral} onPress={() => openURL("https://moovitapp.com/index/public-transit-maps/?map=Italy_Trento_Bolzano_e_Belluno_Bolzano_and_Merano_urban_network.pdf")}>
                <View style={styles.rowContainer}>
                    <Text style={styles.GeneralText}>Mappa generale dei Bus </Text>
                    <Text style={styles.downloadTextGeneral}>Download</Text>
                    <Image source={DownloadImage2} style={styles.DownloadImage} />
                </View>
            </TouchableOpacity>
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

    TouchAreaGeneral:{
        backgroundColor: '#08607e',
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
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        color: '#FFFFFF',
        marginRight: 10,
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 12
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

    downloadTextGeneral: {
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 14,
        marginLeft: 'auto'
    },

    DownloadImage: {
        width: 18,
        height: 18,
        marginLeft: 5
    },

    GeneralText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: "bold"
    },

    general: {
        backgroundColor: '#08607e',
    }
});

export default AutobusScreen;
