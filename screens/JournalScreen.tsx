import * as React from 'react';
import { StyleSheet, TouchableOpacity, Linking, Platform } from 'react-native';
import { View, Text } from '../components/Themed';

import { RootTabScreenProps } from '../types';

export default function JournalScreen({ navigation }: RootTabScreenProps<'Journal'>) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {
        if (Platform.OS === 'ios') {
          Linking.openURL('mobilenotes://')
        }
        else {
          Linking.openURL('https://mobilenotes')
        }
      }}>
        <Text style={styles.title}>OPEN NOTES</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fd4e4e",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.33,
    shadowRadius: 4.65,
  }
});
