import * as React from 'react';
import { Animated, Button, Linking, Platform, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import { RootTabScreenProps } from '../types';
import { Audio } from 'expo-av';

type CountDownTypes = {
  remainingTime: any,
  animatedColor: any
}

export default function MeditateScreen({ navigation }: RootTabScreenProps<'Meditate'>) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [sound, setSound] = React.useState()
  const [time, setTime] = React.useState(10)

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
    <View style={styles.container}>
      {/* <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={time}
        strokeLinecap='round'
        colors={[
          ['#fd4e4e', 1],
        ]}
        onComplete={() => {
          [true, 200]
          playSound()
        }}
      >
        {({ remainingTime, animatedColor }: CountDownTypes) => (
          <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
            {remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
      <Button title="Start / Stop" onPress={() => setIsPlaying(prev => !prev)} /> */}
      <Text style={styles.title}>coming in version 1.1</Text>
      <Button title="Open Medito" onPress={() => {
        if (Platform.OS === 'ios') {
          Linking.openURL('https://apps.apple.com/us/app/medito-meditation-wellness/id1500780518')
        }
      }}></Button>
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
