import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Text, View } from "../components/Themed";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { RootTabScreenProps } from "../types";

export default function SkillsScreen({
  navigation,
}: RootTabScreenProps<"Skills">) {
  const [useColor, setUseColor] = useState("");
  const [eatColor, setEatColor] = useState("");

  const readDataEat = async () => {
    try {
      const value = await AsyncStorage.getItem("@eat_done");
      if (value !== null) {
        setEatColor(value);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const readUseData = async () => {
    try {
      const value = await AsyncStorage.getItem("@use_done");
      if (value !== null) {
        setUseColor(value);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setInterval(() => {
      readDataEat();
      readUseData();
    }, 200);
  }, []);

  return (
    <ScrollView>
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
