import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import axios from "axios";

import Farmacieimage1 from './Screens/images/Farmacie-1.png'
import Farmacieimage2 from './Screens/images/Farmacie-2.png'

const App = () => {
  const [region, setRegion] = useState({
    latitude: 46.4983, // bz
    longitude: 11.3526, // bz
    latitudeDelta: 0.0922, //bho ma senza nn funziona
    longitudeDelta: 0.0421, //bho ma senza nn funziona
  });

  const [weather, setWeather] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = "3a5ad1809fcd5fe67afe4eb8d0f9ef82"; // api (non la mettere in posti strani plz)
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Bolzano,IT&appid=${apiKey}&units=metric&lang=it`
        );

        console.log("Dati meteo ricevuti:", response.data); // Log
        if (response.status === 200) {
          setWeather(response.data);
        }
      } catch (error) {
        console.error("Errore durante il recupero dei dati meteo:", error);
        setWeather(null);
      }
    };

    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Permesso di geolocalizzazione",
            message: "L'app ha bisogno di accedere alla tua posizione.",
            buttonNeutral: "Non ora",
            buttonNegative: "Annulla",
            buttonPositive: "OK",
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        } else {
          console.log("Permesso di geolocalizzazione negato");
        }
      } catch (err) {
        console.warn(err);
      }
    };

    const getCurrentLocation = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setRegion({
            ...region,
            latitude,
            longitude,
          });
        },
        (error) => {
          console.error(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    fetchWeather();
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.weatherContainer}>
        <Text style={styles.weatherHeader}>Meteo a Bolzano</Text>
        {weather ? (
          <>
            <Text style={styles.weatherTemp}>
              {weather.main.temp.toFixed(1)} °C
            </Text>
            <Text style={styles.weatherDescription}>
              {weather.weather[0].description}
            </Text>
            <Image
              style={styles.weatherIcon}
              source={{
                uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
              }}
            />
            <View style={styles.weatherDetails}>
              <Text style={styles.weatherDetail}>
                Umidità: {weather.main.humidity}%
              </Text>
              <Text style={styles.weatherDetail}>
                Vento: {weather.wind.speed} m/s
              </Text>
            </View>
          </>
        ) : (
          <Text style={styles.weatherText}>Caricamento dati meteo...</Text>
        )}
      </View>

      <View style={styles.mapContainer}>
        <MapView style={styles.map} region={region}>
          {userLocation && (
            <Marker coordinate={userLocation} title="La tua posizione" />
          )}
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title="Bolzano"
          />
        </MapView>
      </View>

      <View>
        <TouchableOpacity style={styles.defaultContainer} /* onPress={() => navigation.navigate('Farmacie')} */ >
          <Image source={Farmacieimage1} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Farmacie di turno</Text>
            <Text style={styles.description}>Visualizza le farmacie aperte in questo momento</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f7f7f7",
  },
  weatherContainer: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    elevation: 4,
    marginBottom: 10,
    alignItems: "center",
  },
  weatherHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  weatherTemp: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ff6b6b",
  },
  weatherDescription: {
    fontSize: 18,
    color: "#777",
    marginBottom: 10,
  },
  weatherIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  weatherDetails: {
    marginTop: 10,
    alignItems: "flex-start", // Allinea a sinistra
  },
  weatherDetail: {
    fontSize: 16,
    color: "#333",
  },
  mapContainer: {
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 4,
  },
  map: {
    width: "100%",
    height: "100%",
  },

  defaultContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4, //per android se no non  va 
  },

  textContainer: {
    padding: 15,
  },


  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    color: '#666',
  },

  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
});

export default App;


//non fare il reload dell' app troppe volte se no prima o poi finiscono i crediti dell' api del meteo