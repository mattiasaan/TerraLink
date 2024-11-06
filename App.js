import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import FarmacieScreen from './Screens/Secondari/Farmacie';
import MappaScreen from './Screens/Secondari/Mappa';
import AutobusScreen from './Screens/Secondari/Bus';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Farmacie" component={FarmacieScreen} />
          <Stack.Screen name="Mappa" component={MappaScreen} />
          <Stack.Screen name="Autobus" component={AutobusScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
