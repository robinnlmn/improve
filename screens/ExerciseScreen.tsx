import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import { RootTabScreenProps } from '../types';

export default function ExcerciseScreen({ navigation }: RootTabScreenProps<'Exercise'>) {

  const colorScheme = useColorScheme()

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <Text style={styles.title}>coming in version 1.1</Text>
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
    fontWeight: 'bold',
    fontSize: 20
  },
  blockContainer: {
    width: '90%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10
  },
  cubeContainer: {
    width: '45%',
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
    marginRight: 5
  },
  cubeContainer1: {
    width: '45%',
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 5
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  }
});
