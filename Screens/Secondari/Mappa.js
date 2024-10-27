import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MappaScreen = () => {
  const [region] = useState({
    latitude: 46.487, 
    longitude: 11.34, 
    latitudeDelta: 0.08,
    longitudeDelta: 0.04,
  });
  
  const [showMarkers, setShowMarkers] = useState(false);

  const markers = [
    { id: 1, coordinate: { latitude: 46.488516, longitude: 11.324721 }, title: "defibrillatore" },
    { id: 2, coordinate: { latitude: 46.48667, longitude: 11.336273 }, title: "defibrillatore" },
    { id: 3, coordinate: { latitude: 46.4865, longitude: 11.33 }, title: "defibrillatore" },
  ];

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        {showMarkers && markers.map(marker => (
          <Marker key={marker.id} coordinate={marker.coordinate} title={marker.title} />
        ))}
      </MapView>
      <TouchableOpacity style={styles.button} onPress={() => setShowMarkers(!showMarkers)}>
        <Text style={styles.buttonText}>
          {showMarkers ? 'Nascondi posizione defibrillatori' : 'Mostra posizione defibrillatori'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Colore di sfondo bianco
    alignItems: 'center',
  },
  map: {
    marginTop: "5.5%",
    width: "90%",
    height: "70%",
    borderRadius: 10, // Aggiunto bordo arrotondato alla mappa
  },

  button: {
    backgroundColor: '#EE4B2B', // Colore blu del pulsante
    padding: 15,
    borderRadius: 5,
    margin: 15,
    width: "90%",
    alignItems: 'center',
    shadowColor: '#000', // Ombra del pulsante
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2, // Ombra per Android
  },
  buttonText: {
    color: '#ffffff', // Colore del testo del pulsante
    fontWeight: 'bold',
    fontSize: 16, // Dimensione del font
  },
});

export default MappaScreen;
