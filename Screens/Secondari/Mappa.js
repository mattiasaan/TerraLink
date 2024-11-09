import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { BottomSheet, Button } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import { Asset } from 'expo-asset';  // Import expo-asset to handle images

const MappaScreen = () => {
  const [region, setRegion] = useState({
    latitude: 46.487,
    longitude: 11.34,
    latitudeDelta: 0.08,
    longitudeDelta: 0.04,
  });

  const [showMarkers, setShowMarkers] = useState(false);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);
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

  // Update the regionState based on the availability of currentLocation
  const regionState = currentLocation
    ? {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.08,
        longitudeDelta: 0.04,
      }
    : region; // Fallback to the default region

  const toggleMarkers = () => {
    setShowMarkers(prev => !prev);
  };

  const getMarkerButtonTitle = () => {
    return showMarkers ? 'Nascondi defibrillatori' : 'Mostra defibrillatori';
  };

  // Using expo-asset to load the image URI
  const image = Asset.fromModule(require('./images-2/dae-simbolo.png')).uri;

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* Conditionally render the MapView only after currentLocation is available */}
        {currentLocation ? (
          <MapView
            style={styles.map}
            initialRegion={regionState} // Using initialRegion instead of region to prevent unnecessary state updates
          >
            {showMarkers && markers.map(marker => (
              <Marker
                key={marker.id}
                coordinate={marker.coordinate}
                title={marker.title}
                image={{ uri: image }}  // Using URI from expo-asset
                style={styles.marker}
              />
            ))}
          </MapView>
        ) : (
          <Text>Loading map...</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },
  marker: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  openBottomSheetButton: {
    backgroundColor: '#0066CC',
    marginBottom: 30,
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
  bottomSheetContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default MappaScreen;
