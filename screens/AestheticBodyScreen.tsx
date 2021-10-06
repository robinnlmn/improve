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

import useColorScheme from "../hooks/useColorScheme";

import { RootTabScreenProps } from "../types";

export default function AestheticBodyScreen({
    navigation,
}: RootTabScreenProps<"aestheticBody">) {
    const [sound, setSound] = useState();

    const colorScheme = useColorScheme()

    const storeData = async (value: string) => {
        try {
            await AsyncStorage.setItem("@body_done", value);
        } catch (e) {
            console.error(e);
        }
    };

    async function doneSound() {
        const { sound } = await Audio.Sound.createAsync(
            require(`../assets/sounds/done.mp3`)
        );
        // @ts-ignore
        setSound(sound);

        await sound.playAsync();

        navigation.goBack();
    }

    async function redoSound() {
        const { sound } = await Audio.Sound.createAsync(
            require(`../assets/sounds/redo.mp3`)
        );
        // @ts-ignore
        setSound(sound);

        await sound.playAsync();

        navigation.goBack();
    }

    async function closeSound() {
        const { sound } = await Audio.Sound.createAsync(
            require(`../assets/sounds/close.mp3`)
        );
        // @ts-ignore
        setSound(sound);

        await sound.playAsync();

        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    Linking.openURL("https://www.youtube.com/watch?v=Fv29vf29YIw");
                }}
            >
                <Ionicons name="logo-youtube" size={42} color="#fd4e4e" />
            </TouchableOpacity>
            <View style={styles.wrap}>
                <Text style={styles.title}>
                    Not much to say this time. Watch this and follow the steps given, if you want to build an aesthetic body!                                                                                                              - Video by Hamza Ahmed
                </Text>
                <Text style={styles.credit}>
                    HABIT©
                </Text>
            </View>
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
                        storeData('#fd4e4e');
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
        fontSize: 20,
        fontWeight: "bold",
        padding: 15,
        position: "absolute",
    },
    credit: {
        fontSize: 25,
        fontWeight: "bold",
        position: "absolute",
        bottom: '5%',
        right: '31%',
        padding: 15,
    },
    wrap: {
        borderWidth: 4,
        top: "25%",
        position: "absolute",
        borderRadius: 15,
        height: '58%',
        width: "90%",
        borderColor: "#222",
    },
    button: {
        top: '-3%',
        position: "absolute",
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
        alignItems: "center",
        width: "90%",
        height: "8%",
        position: "absolute",
        borderRadius: 10,
        bottom: '7%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.33,
        shadowRadius: 4.65,
    },
});
