import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import FarmacieScreen from './Screens/Secondari/Farmacie';
import MappaScreen from './Screens/Secondari/Mappa';
import AutobusScreen from './Screens/Secondari/Bus';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Farmacie" component={FarmacieScreen} />
        <Stack.Screen name="Mappa" component={MappaScreen} />

        <Stack.Screen
          name="Autobus"
          component={AutobusScreen}
          options={{
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('./Screens/images/sudtirollll.png')}
                  style={{ width: 34, height: 34, marginRight: 8 }}
                />
                <Text>Autobus</Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
