import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from './Themed';
import { Audio } from 'expo-av';
import AsyncStorage from "@react-native-async-storage/async-storage";

type CheckboxProps = {
  storeId: string
}

export default function Checkbox({ storeId }: CheckboxProps) {
  const [sound, setSound] = React.useState()
  const [isSelected, setIsSelected] = useState(false)
  const [color, setColor] = useState('#fd4e4e') // you are not using this setColor anywhere.

  const changeSelect = () => {
    storeData(!isSelected, storeId);
    setIsSelected(value => !value) // change value based on the previous value
  }

  React.useEffect(() => {
    readData(storeId)
  }, []);

  const storeData = async (value: any, storeId: string) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(storeId, jsonValue);
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
        style={[styles.checkboxBase, { borderColor: color }, isSelected && { backgroundColor: color }]}
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
    margin: 5
  },
  icon: {
    width: 40,
    height: 40,
  },
});
