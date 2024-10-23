import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FarmacieScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Questa è la pagina per le farmacie di turno</Text>
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

export default FarmacieScreen;
