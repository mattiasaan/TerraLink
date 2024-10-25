import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import moment from 'moment';

function èApertaOra(orarioNormale, orarioTurno, èDiTurno, statoTurno) {
  const oraAttuale = moment();

  const verificaOrario = (orario) => {
    if (!orario) return false;
    const [apertura, chiusura] = orario.split('-').map(ora => moment(ora, 'HH:mm'));
    return oraAttuale.isBetween(apertura, chiusura);
  };

  if (verificaOrario(orarioNormale)) return true;

  if (èDiTurno === 1 || statoTurno === "SERVIZIO TURNO" && verificaOrario(orarioTurno)) { //zio porco l'or 
    return true;
  }

  return false;
}


const FarmacieScreen = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = 'http://daten.buergernetz.bz.it/services/pharmacy/v1/json';

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const farmacieFiltrate = json.filter(farmacia => 
          farmacia.GEME_DESC_I === 'Bolzano' && èApertaOra(farmacia.PHAR_TIMETABLE, farmacia.TURN_TIMETABLE, farmacia.IS_TURN, farmacia.TURN_STATUS_I)
        );
        
        setData(farmacieFiltrate);
        setLoading(false);
        console.log("apposto")
      })
      .catch((errore) => {
        console.error(errore);
        setLoading(false);
      });
  }, []);

  if (loading) {
    console.log("inizio")
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.pharmacyName}>{item.PHAR_DESC_I}</Text>
      <Text style={styles.pharmacyAddress}>{item.PHAR_ADRESS_I} - {item.GEME_DESC_I}</Text>
      <Text style={styles.pharmacyPhone}>Telefono: {item.PHAR_PHONE}</Text>
      <Text style={styles.timetable}>Orario: {item.PHAR_TIMETABLE}</Text>
      <Text style={styles.turnTt}>Orario di turno: {item.TURN_TIMETABLE}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.PHAR_ID.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 16,
  },
  pharmacyName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pharmacyAddress: {
    fontSize: 16,
    color: '#666',
  },
  pharmacyPhone: {
    fontSize: 16,
    marginTop: 8,
  },
  timetable: {
    fontSize: 14,
    marginTop: 8,
    color: '#333',
  },
  turnTt: {
    fontSize: 14,
    color: '#009688',
    marginTop: 4,
  },
  turnStatus: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: 'bold',
  },
  turnNotes: {
    fontSize: 14,
    marginTop: 4,
    color: '#555',
  },
});

export default FarmacieScreen;
