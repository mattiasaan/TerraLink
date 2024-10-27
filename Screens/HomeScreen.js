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
import axios from "axios";
import { useFonts } from 'expo-font';

import Farmacieimage1 from './images/Farmacie-1.png'
import Farmacieimage2 from './images/Farmacie-2.png'
import BolzanoImage from './images/bolzanoresize.png'

const Home = ({ navigation }) => {

  const [fontsLoaded1] = useFonts({
    'Ndot45': require('./fonts/ndot-45-inspired-by-nothing.ttf'),
  });

  const [fontsLoaded2] = useFonts({
    'Ndot47': require('./fonts/ndot-47-inspired-by-nothing.ttf'),
  });

  const [fontsLoaded3] = useFonts({
    'Ndot5x7': require('./fonts/nothing-font-5x7.ttf'),
  });

  const [weather, setWeather] = useState(null);

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


    fetchWeather();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.weatherContainer}>
        <Text style={styles.weatherHeader}>Meteo a Bolzano</Text>
        {weather ? (
          <>
            <Text style={styles.weatherTemp}>
              {weather.main.temp.toFixed(1)} °C
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

      <View>
        <TouchableOpacity style={styles.defaultContainer} onPress={() => navigation.navigate('Mappa')} >
          <Image source={BolzanoImage} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Mappa</Text>
            <Text style={styles.description}>Visualizza la mappa dettagliata di bolzano</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.defaultContainer} onPress={() => navigation.navigate('Farmacie')} >
          <Image source={Farmacieimage1} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Farmacie di turno</Text>
            <Text style={styles.description}>Visualizza le farmacie aperte in questo momento</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ffffff"
  },
  weatherContainer: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    elevation: 4,
    marginBottom: 15,
    alignItems: "center",

  },
  weatherHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  weatherTemp: {
    fontSize: 42,
    fontFamily: "Ndot5x7",
  },
  weatherDescription: {
    fontSize: 18,
    color: "#777",
    marginBottom: 10,
  },
  weatherIcon: {
    width: 80,
    height: 80,
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

  defaultContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
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

export default Home;


//fra non fare il reload dell' app troppe volte se no prima o poi finiscono i crediti dell' api del meteo