import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import FarmacieScreen from './Screens/Secondari/Farmacie';
import AutobusScreen from './Screens/Secondari/Bus';
import MappaScreen from './Screens/Secondari/Mappa'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Farmacie" component={FarmacieScreen} />
        <Stack.Screen name="Mappa" component={MappaScreen} />
        <Stack.Screen name="Autobus" component={AutobusScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
