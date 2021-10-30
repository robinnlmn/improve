import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export default function ModalScreen() {

  const navigation = useNavigation()
  const colorScheme = useColorScheme()

  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background, height: '100%' }]}>
      <Text style={styles.title}>SCREEN SETTINGS</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}
        // @ts-ignore
        onPress={() => {
          // @ts-ignore
          navigation.navigate('fitness settings')
          console.log('PRESS')
        }}>
        <Text
          style={styles.text}
        >fitness</Text>
        <FontAwesome5 name="angle-right" size={32} color={Colors[colorScheme].text} style={{ marginRight: 15 }} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}
        // @ts-ignore
        onPress={() => {
          // @ts-ignore
          navigation.navigate('journal settings')
          console.log('PRESS')
        }}>
        <Text
          style={styles.text}
        >journal</Text>
        <FontAwesome5 name="angle-right" size={32} color={Colors[colorScheme].text} style={{ marginRight: 15 }} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}
        // @ts-ignore
        onPress={() => {
          // @ts-ignore
          navigation.navigate('tracker settings')
          console.log('PRESS')
        }}>
        <Text
          style={styles.text}
        >tracker</Text>
        <FontAwesome5 name="angle-right" size={32} color={Colors[colorScheme].text} style={{ marginRight: 15 }} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}
        // @ts-ignore
        onPress={() => {
          // @ts-ignore
          navigation.navigate('skills settings')
          console.log('PRESS')
        }}>
        <Text
          style={styles.text}
        >skills</Text>
        <FontAwesome5 name="angle-right" size={32} color={Colors[colorScheme].text} style={{ marginRight: 15 }} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}
        // @ts-ignore
        onPress={() => {
          // @ts-ignore
          navigation.navigate('meditation settings')
          console.log('PRESS')
        }}>
        <Text
          style={styles.text}
        >meditation</Text>
        <FontAwesome5 name="angle-right" size={32} color={Colors[colorScheme].text} style={{ marginRight: 15 }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 20,
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: '#222'
  },
  text: {
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 18
  },
  title: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 12
  }
});
