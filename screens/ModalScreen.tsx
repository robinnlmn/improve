import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Button title="RESET" onPress={() => { AsyncStorage.clear() }} />
      <Button title="READ" onPress={async () => {
        const days = await AsyncStorage.getItem("@journal")
        console.log(JSON.parse(days!))
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
