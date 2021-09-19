import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Text, View } from "../components/Themed";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { RootTabScreenProps } from "../types";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

export default function SkillsScreen({
  navigation,
}: RootTabScreenProps<"Skills">) {
  const [useColor, setUseColor] = useState("#fd4e4e");
  const [eatColor, setEatColor] = useState("#fd4e4e");
  const [bodyColor, setBodyColor] = useState("#fd4e4e")
  const [feelColor, setFeelColor] = useState("#fd4e4e")
  const [familyColor, setFamilyColor] = useState("#fd4e4e")
  const [dopamineColor, setDopamineColor] = useState("#fd4e4e")

  const colorScheme = useColorScheme()

  const readDataEat = async () => {
    try {
      const value = await AsyncStorage.getItem("@eat_done");
      if (value !== null) {
        if (value === '#d4d4d4' || value === '#222222') {
          setEatColor(Colors[colorScheme].uiBg);
        }
        else {
          setEatColor(value)
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const readUseData = async () => {
    try {
      const value = await AsyncStorage.getItem("@use_done");
      if (value !== null) {
        if (value === '#d4d4d4' || value === '#222222') {
          setUseColor(Colors[colorScheme].uiBg);
        }
        else {
          setUseColor(value)
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const readBodyData = async () => {
    try {
      const value = await AsyncStorage.getItem("@body_done");
      if (value !== null) {
        if (value === '#d4d4d4' || value === '#222222') {
          setBodyColor(Colors[colorScheme].uiBg);
        }
        else {
          setBodyColor(value)
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const readFeelData = async () => {
    try {
      const value = await AsyncStorage.getItem("@feel_done");
      if (value !== null) {
        if (value === '#d4d4d4' || value === '#222222') {
          setFeelColor(Colors[colorScheme].uiBg);
        }
        else {
          setFeelColor(value)
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const readFamilyData = async () => {
    try {
      const value = await AsyncStorage.getItem("@family_done");
      if (value !== null) {
        if (value === '#d4d4d4' || value === '#222222') {
          setFamilyColor(Colors[colorScheme].uiBg);
        }
        else {
          setFamilyColor(value)
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const readDopamineData = async () => {
    try {
      const value = await AsyncStorage.getItem("@dopamine_done");
      if (value !== null) {
        if (value === '#d4d4d4' || value === '#222222') {
          setDopamineColor(Colors[colorScheme].uiBg);
        }
        else {
          setDopamineColor(value)
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const getData = async () => {
      await readDataEat();
      await readUseData();
      await readBodyData();
      await readFeelData();
      await readFamilyData();
      await readDopamineData();
    }

    setInterval(() => getData(), 200)
  }, []);

  return (
    <ScrollView style={{ backgroundColor: Colors[colorScheme].background }}>
      <View style={styles.container}>
        {/* USE THIS APP */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: useColor }]}
          onPress={() => {
            // @ts-ignore
            navigation.navigate("tutorial");
          }}
        >
          <Text style={styles.text}>how to use this app</Text>
        </TouchableOpacity>

        {/* EAT */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: eatColor }]}
          onPress={() => {
            // @ts-ignore
            navigation.navigate("how to eat");
          }}
        >
          <Text style={styles.text}>how to eat</Text>
        </TouchableOpacity>

        {/* EAT */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: bodyColor }]}
          onPress={() => {
            // @ts-ignore
            navigation.navigate("aesthetic body");
          }}
        >
          <Text style={styles.text}>aesthetic body</Text>
        </TouchableOpacity>

        {/* FEEL */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: feelColor }]}
          onPress={() => {
            // @ts-ignore
            navigation.navigate("feeling awkward");
          }}
        >
          <Text style={styles.text}>feeling awkward</Text>
        </TouchableOpacity>

        {/* FAMILY */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: familyColor }]}
          onPress={() => {
            // @ts-ignore
            navigation.navigate("family");
          }}
        >
          <Text style={styles.text}>family</Text>
        </TouchableOpacity>

        {/* DOPAMINE DETOX */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: dopamineColor }]}
          onPress={() => {
            // @ts-ignore
            navigation.navigate("dopamine detox");
          }}
        >
          <Text style={styles.text}>dopamine detox</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#222",
    width: "100%",
    height: 100,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.33,
    shadowRadius: 4.65,
  },
  buttonDone: {
    backgroundColor: "#0ADB0A",
    width: "100%",
    height: 100,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonRedo: {
    backgroundColor: "#f0e800",
    width: "100%",
    height: 100,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
});
