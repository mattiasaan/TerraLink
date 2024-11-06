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
    //{ id: 13, coordinate: { latitude: 46.498601, longitude: 11.309258 }, title: "Ospedale", image: require("./images-2/ospedale.png")}
  ];

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        {showMarkers && markers.map(marker => (
          <Marker key={marker.id} coordinate={marker.coordinate} title={marker.title} image={require('./images-2/dae-simbolo.png')} style={styles.marker} />
        ))}
      </MapView>
      <TouchableOpacity style={styles.button} onPress={() => setShowMarkers(!showMarkers)}>
        <Text style={styles.buttonText}>
          {showMarkers ? 'Nascondi posizione defibrillatori' : 'Mostra posizione defibrillatori'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.nota}>
        Nota: la posizione dei defibrillatori potrebbe non essere precisa o non accessibile
      </Text>
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

  marker: {
    width: 10,
    height: 10,
    resizeMode: 'contain'
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

  nota: {
    fontSize: 8,
  },
});

  

export default MappaScreen;
