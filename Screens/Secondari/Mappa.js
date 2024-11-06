import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import BottomSheet from '@gorhom/bottom-sheet';

const MappaScreen = () => {
  const bottomSheetRef = useRef(null);

  const [region] = useState({
    latitude: 46.487, 
    longitude: 11.34, 
    latitudeDelta: 0.08,
    longitudeDelta: 0.04,
  });
  
  const [showMarkers, setShowMarkers] = useState(false);

  const markers = [
    { id: 1, coordinate: { latitude: 46.488516, longitude: 11.324721 }, title: "Piazza Don Bosco" },
    { id: 2, coordinate: { latitude: 46.48667, longitude: 11.336273 }, title: "Twenty" },
    { id: 3, coordinate: { latitude: 46.474451, longitude: 11.310942 }, title: "Lungo Isarco Destro" },
    { id: 4, coordinate: { latitude: 46.503847, longitude: 11.334241 }, title: "Piazza Gries" },
    { id: 5, coordinate: { latitude: 46.5000573, longitude: 11.3497157 }, title: "Via Museo" },
    { id: 6, coordinate: { latitude: 46.4977039, longitude: 11.3511689 }, title: "Piazza domenicani" },
    { id: 7, coordinate: { latitude: 46.4982548, longitude: 11.3543719 }, title: "Piazza Walter" },
    { id: 8, coordinate: { latitude: 46.49708, longitude: 11.3577588 }, title: "Parco della Stazione" },
    { id: 9, coordinate: { latitude: 46.5011041, longitude: 11.3569173 }, title: "Via Bottai" },
    { id: 10, coordinate: { latitude: 46.4996132, longitude: 11.3569185 }, title: "Piazza municipio" },
    { id: 11, coordinate: { latitude: 46.4976197, longitude: 11.3601663 }, title: "Via Renon" },
    { id: 12, coordinate: { latitude: 46.4931729, longitude: 11.3609979 }, title: "cineplex" },
  ];

  return (
    <View style={styles.container}>
      {/* Mappa che occupa tutto lo schermo */}
      <MapView style={styles.map} region={region}>
        {showMarkers && markers.map(marker => (
          <Marker 
            key={marker.id} 
            coordinate={marker.coordinate} 
            title={marker.title} 
            image={require('./images-2/dae-simbolo.png')} 
            style={styles.marker}
          />
        ))}
      </MapView>
      
      {/* Bottone per mostrare/nascondere i marker */}
      <TouchableOpacity style={styles.button} onPress={() => setShowMarkers(!showMarkers)}>
        <Text style={styles.buttonText}>
          {showMarkers ? 'Nascondi posizione defibrillatori' : 'Mostra posizione defibrillatori'}
        </Text>
      </TouchableOpacity>

      {/* BottomSheet che può essere tirato su per visualizzare ulteriori informazioni */}
      <BottomSheet
        ref={bottomSheetRef}
        index={0}  // Inizia con il foglio visibile al 10% dell'altezza dello schermo
        snapPoints={['10%', '50%', '90%']}  // Usa snap point validi
        enablePanDownToClose={true}  // Permette all'utente di chiudere il BottomSheet
      >
        <View style={styles.contentContainer}>
          {/* Aggiungi una barra per tirare su il bottom sheet */}
          <View style={styles.handle}></View>
          
          <Text style={styles.title}>More Information</Text>
          <Text style={styles.description}>Here you can add more details about the location.</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Colore di sfondo bianco
  },
  map: {
    width: '100%', // La mappa occupa tutto lo schermo
    height: '100%', // La mappa occupa tutto lo schermo
  },
  marker: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  button: {
    position: 'absolute',
    bottom: 120, // Distanza dal fondo
    left: '5%',
    backgroundColor: '#EE4B2B',
    padding: 15,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  contentContainer: {
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
  handle: {
    width: 60,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#EEE',
    alignSelf: 'center',
    marginVertical: 10,
  },
});

export default MappaScreen;
