import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from './Themed';
import { Audio } from 'expo-av';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

type CheckboxProps = {
  storeId: string,
  adonis: boolean,
  day?: string
}

export default function Checkbox({ storeId, adonis, day }: CheckboxProps) {
  const [sound, setSound] = React.useState()
  const [isSelected, setIsSelected] = useState(false)
  const [color] = useState('#fd4e4e')

  const colorScheme = useColorScheme()

  const changeSelect = () => {
    if (!isSelected) {
      playSound()
    }
    storeData(!isSelected, storeId);
    setIsSelected(value => !value)
  }

  React.useEffect(() => {
    setInterval(() => readData(storeId), 100)
  }, []);

  const storeData = async (value: any, storeId: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(storeId, jsonValue);
      if (adonis) {
        await AsyncStorage.setItem(`@exercise_${day}`, JSON.stringify(value))
        await AsyncStorage.setItem(`@journal_${day}`, JSON.stringify(value))
        await AsyncStorage.setItem(`@read_${day}`, JSON.stringify(value))
        await AsyncStorage.setItem(`@learn_${day}`, JSON.stringify(value))
        await AsyncStorage.setItem(`@meditate_${day}`, JSON.stringify(value))
      }
    } catch (e) { }
  };

  const readData = async (storeId: string) => {
    try {
      const value = await AsyncStorage.getItem(storeId)
      if (value != null) {
        setIsSelected(JSON.parse(value)); // set the isSelected to the value from storage
      }
    } catch (e) { }
  }


  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/sounds/done.mp3')
    );
    // @ts-ignore
    setSound(sound);

    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        // @ts-ignore
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <View>
      <Pressable
        onPress={changeSelect}
        style={[styles.checkboxBase, { borderColor: color, shadowColor: Colors[colorScheme].shadow }, isSelected && { backgroundColor: color }]}
      >
        {isSelected && <Ionicons name="md-checkmark-sharp" size={40} color="white" style={styles.icon} />}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    // borderColor: '#fd4e4e',
    backgroundColor: 'transparent',
    borderRadius: 10,
    margin: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.33,
    shadowRadius: 2,
  },
  icon: {
    width: 40,
    height: 40,
  },
});
