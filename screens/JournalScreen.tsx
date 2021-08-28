import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { Ionicons, Fontisto, MaterialIcons, FontAwesome } from '@expo/vector-icons';

import { RootTabScreenProps } from '../types';

export default function JournalScreen({ navigation }: RootTabScreenProps<'Journal'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>coming in version 0.1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
