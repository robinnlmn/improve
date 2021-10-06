import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.danger}>DANGER ZONE</Text>
      <View style={styles.wrapper}>
        <Button title="RESET" onPress={() => { AsyncStorage.clear() }} />
        <Text style={styles.text}>You will need to refresh the app.</Text>
        <Text style={styles.text}>ATTENTION! This deletes all of your saved data like the skills you checked off, your journal, your current Habit Tracker</Text>
      </View>

      <Text style={styles.dev}>DEVELOPER ZONE</Text>
      <View style={styles.wrapper}>
        <Button title="READ" onPress={async () => {
          const days = await AsyncStorage.getItem("@journal")
          console.log(JSON.parse(days!))
        }} />
        <Text style={styles.text}>This will be deleted on release.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    width: '75%'
  },
  danger: {
    color: 'red',
    fontWeight: '900',
    fontSize: 22,
    marginTop: 35
  },
  dev: {
    color: 'lime',
    fontWeight: '900',
    fontSize: 22,
    marginTop: 35
  },
  wrapper: {
    borderWidth: 6,
    borderColor: '#222',
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 15
  },
});
