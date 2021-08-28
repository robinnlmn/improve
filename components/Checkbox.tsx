import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from './Themed';
import { Audio } from 'expo-av';

export default function Checkbox() {
  const [isSelected, setIsSelected] = useState(false)
  const [sound, setSound] = React.useState()

  function changeSelect() {
    if(isSelected) {
      // nothing
    }
    else { 
      playSound()
    }
    setIsSelected(!isSelected)
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
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View>
        <Pressable 
            onPress={changeSelect} 
            style={[styles.checkboxBase, isSelected && styles.checkboxChecked]}
        >
            {isSelected && <Ionicons name="md-checkmark-sharp" size={60} color="white" style={styles.icon} />} 
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    checkboxBase: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        // borderColor: '#fd4e4e',
        borderColor: '#222',
        backgroundColor: 'transparent'
    },
    checkboxChecked: {
        backgroundColor: '#fd4e4e',
    },
    icon: {
      width: 60,
      height: 60,
    },
});
