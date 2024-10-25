import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MappaScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Questa è la pagina per la mappa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MappaScreen;
