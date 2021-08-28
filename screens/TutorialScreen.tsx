import {
  Ionicons,
  Fontisto,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Linking,
  Platform,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Colors from "../constants/Colors";
import { Text, View } from "../components/Themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Audio } from "expo-av";

import { RootTabScreenProps } from "../types";

export default function TurorialScreen({
  navigation,
}: RootTabScreenProps<"tutorial">) {
  const [sound, setSound] = useState();

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem("@use_done", value);
    } catch (e) {
      console.error(e);
    }

    navigation.goBack();
  };

  async function doneSound() {
    const { sound } = await Audio.Sound.createAsync(
      require(`../assets/sounds/done.mp3`)
    );
    // @ts-ignore
    setSound(sound);

    await sound.playAsync();
  }

  async function redoSound() {
    const { sound } = await Audio.Sound.createAsync(
      require(`../assets/sounds/redo.mp3`)
    );
    // @ts-ignore
    setSound(sound);

    await sound.playAsync();
  }

  async function closeSound() {
    const { sound } = await Audio.Sound.createAsync(
      require(`../assets/sounds/close.mp3`)
    );
    // @ts-ignore
    setSound(sound);

    await sound.playAsync();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Linking.openURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }}
      >
        <Ionicons name="logo-youtube" size={42} color="#fd4e4e" />
      </TouchableOpacity>
      <Text style={styles.title}>
        People of today always eat while watching content. In this video we
        gonna learn how to eat the right way.
      </Text>
      <View style={styles.buttons}>
        <View></View>
        <TouchableOpacity
          onPress={() => {
            doneSound();
            storeData("#0ADB0A");
          }}
        >
          <MaterialIcons name="done" size={52} color="#0ADB0A" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            redoSound();
            storeData("#f0e800");
          }}
        >
          <MaterialIcons name="repeat" size={52} color="#FFED00" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            closeSound();
            storeData("#222");
          }}
        >
          <MaterialIcons name="close" size={52} color="#fd4e4e" />
        </TouchableOpacity>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: "2%",
    maxWidth: "85%",
    bottom: "34%",
  },
  button: {
    bottom: "34%",
    width: "90%",
    height: "20%",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
    marginTop: "10%",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    top: "40%",
  },
});
