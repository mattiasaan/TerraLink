import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Location from 'expo-location';

const MappaScreen = () => {
  const [region, setRegion] = useState({
    latitude: 46.487,
    longitude: 11.34,
    latitudeDelta: 0.08,
    longitudeDelta: 0.04,
  });

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
        Alert.alert('Permission denied');
      }
    };
    getLocation();
  }, []);

  const regionState = currentLocation
    ? {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.08,
        longitudeDelta: 0.04,
      }
    : region;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <MapView style={styles.map} region={regionState}>
          {markers.map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.coordinate}
              title={marker.title}
              image={require('./images-2/dae-simbolo.png')}
              style={styles.marker}
            />
          ))}
        </MapView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
  },
  marker: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default MappaScreen;
