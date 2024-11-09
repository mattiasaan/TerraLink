import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import { WebView } from 'react-native-webview';

const MappaScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

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

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
      } else {
        Alert.alert('Permesso negato', 'Vai nelle impostazioni per dare l accesso alla posizione');
      }
    };
    getLocation();
  }, []);

  const generateMapHtml = () => {
    if (!currentLocation) return '';

    
    const mapHtml = `
      <html>
        <head>
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
        </head>
        <body style="margin: 0; padding: 0;">
          <div id="map" style="width: 100%; height: 100%;"></div>
          <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
          <script>
            var map = L.map('map').setView([${currentLocation.latitude}, ${currentLocation.longitude}], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
            
            var markers = ${JSON.stringify(markers)};
            markers.forEach(function(marker) {
              L.marker([marker.coordinate.latitude, marker.coordinate.longitude])
                .addTo(map)
                .bindPopup(marker.title);
            });
          </script>
        </body>
      </html>
    `;
    return mapHtml;
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {currentLocation ? (
          <WebView
            originWhitelist={['*']}
            source={{ html: generateMapHtml() }}
            style={styles.map}
          />
        ) : (
          <Text>Caricamento mappa...</Text>
        )}

        <Button
          title="Ricarica la Mappa"
          onPress={() => setCurrentLocation(null)} // Reset current location to trigger re-fetch
        />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default MappaScreen;
