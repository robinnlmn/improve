import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import { RootTabScreenProps } from '../types';

export default function MeditateScreen({ navigation }: RootTabScreenProps<'Meditate'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>coming in version 1.1</Text>
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
