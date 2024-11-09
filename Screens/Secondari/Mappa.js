import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { BottomSheet, Button } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import { WebView } from 'react-native-webview';

const MappaScreen = () => {
  const [showMarkers, setShowMarkers] = useState(false);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);

  const markers = [
    { id: 1, lat: 46.488516, lng: 11.324721, title: "Piazza Don Bosco" },
    { id: 2, lat: 46.48667, lng: 11.336273, title: "Twenty" },
    { id: 3, lat: 46.474451, lng: 11.310942, title: "Lungo Isarco Destro" },
    { id: 4, lat: 46.503847, lng: 11.334241, title: "Piazza Gries" },
    { id: 5, lat: 46.5000573, lng: 11.3497157, title: "Via Museo" },
    { id: 6, lat: 46.4977039, lng: 11.3511689, title: "Piazza domenicani" },
    { id: 7, lat: 46.4982548, lng: 11.3543719, title: "Piazza Walter" },
    { id: 8, lat: 46.49708, lng: 11.3577588, title: "Parco della Stazione" },
    { id: 9, lat: 46.5011041, lng: 11.3569173, title: "Via Bottai" },
    { id: 10, lat: 46.4996132, lng: 11.3569185, title: "Piazza municipio" },
    { id: 11, lat: 46.4976197, lng: 11.3601663, title: "Via Renon" },
    { id: 12, lat: 46.4931729, lng: 11.3609979, title: "cineplex" },
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

  const toggleMarkers = () => {
    setShowMarkers(prev => !prev);
  };

  const getMarkerButtonTitle = () => {
    return showMarkers ? 'Nascondi Defibrillatori' : 'Mostra Defibrillatori';
  };

  const mapHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
        <style>
          #map { height: 100vh; width: 100vw; }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <script>
          var map = L.map('map').setView([${currentLocation?.latitude || 46.487}, ${currentLocation?.longitude || 11.34}], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
          }).addTo(map);

          // Aggiungi marker
          var markersData = ${JSON.stringify(markers)};
          if (${showMarkers}) {
            markersData.forEach(marker => {
              L.marker([marker.lat, marker.lng]).addTo(map)
                .bindPopup(marker.title);
            });
          }
        </script>
      </body>
    </html>
  `;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {currentLocation ? (
          <WebView
            originWhitelist={['*']}
            source={{ html: mapHtml }}
            style={styles.map}
          />
        ) : (
          <Text>Caricamento mappa...</Text>
        )}

        <BottomSheet modalProps={{}} isVisible={isBottomSheetVisible}>
          <View style={styles.bottomSheetContent}>
            <Button
              title={getMarkerButtonTitle()}
              onPress={toggleMarkers}
              buttonStyle={styles.bottomSheetButton}
            />
            <Button
              title="Chiudi"
              onPress={() => setIsBottomSheetVisible(false)}
              buttonStyle={styles.bottomSheetButton}
            />
          </View>
        </BottomSheet>

        <Button
          title="Altre opzioni"
          onPress={() => setIsBottomSheetVisible(true)}
          buttonStyle={styles.openBottomSheetButton}
          titleStyle={styles.titleStyle}
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
  bottomSheetContent: {
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  openBottomSheetButton: {
    backgroundColor: '#0066CC',
    marginBottom: 2,
    paddingVertical: 15,
    paddingHorizontal: 0,
    borderRadius: 15,
    width: '100%',
    alignSelf: 'center',
  },
  titleStyle: {
    textAlign: 'center',
    width: '100%',
    color: '#fff',
  },
  bottomSheetButton: {
    backgroundColor: '#0066CC',
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
});

export default MappaScreen;


/*
 __  __       _   _   _                       
 |  \/  | __ _| |_| |_(_) __ _ ___  __ _ _ __  
 | |\/| |/ _` | __| __| |/ _` / __|/ _` | '_ \ 
 | |  | | (_| | |_| |_| | (_| \__ \ (_| | | | |
 |_|  |_|\__,_|\__|\__|_|\__,_|___/\__,_|_| |_|

 */