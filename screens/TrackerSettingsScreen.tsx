import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

export default function TrackerSettingsScreen() {
    const colorScheme = useColorScheme()

    const [day1icon, setDay1icon] = React.useState("pen")
    const [day2icon, setDay2icon] = React.useState("book")
    const [day3icon, setDay3icon] = React.useState("pray")
    const [day4icon, setDay4icon] = React.useState("play")
    const [day5icon, setDay5icon] = React.useState("leaf")

    const saveIcon = (day: string, value: string) => {
        AsyncStorage.setItem(`@icon_${day}`, value)
        console.log(`SUCCESS`)
        getDays()
    }

    const getDays = async () => {
        var icon1 = await AsyncStorage.getItem('@icon_1');
        var icon2 = await AsyncStorage.getItem('@icon_2');
        var icon3 = await AsyncStorage.getItem('@icon_3');
        var icon4 = await AsyncStorage.getItem('@icon_4');
        var icon5 = await AsyncStorage.getItem('@icon_5');

        if (icon1 !== null) {
            setDay1icon(icon1)
        }
        if (icon2 !== null) {
            setDay2icon(icon2)
        }
        if (icon3 !== null) {
            setDay3icon(icon3)
        }
        if (icon4 !== null) {
            setDay4icon(icon4)
        }
        if (icon5 !== null) {
            setDay5icon(icon5)
        }
    }

    React.useEffect(() => {
        getDays()
    }, [])

    return (
        <View style={styles.container}>
            <View style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}>
                <View style={styles.icons}>
                    <FontAwesome5 name="lock" size={28} color={day1icon === "lock" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 10 }} onPress={() => { saveIcon("1", "lock") }} />
                    <FontAwesome5 name="pen" size={28} color={day1icon === "pen" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("1", "pen") }} />
                    <FontAwesome5 name="book" size={28} color={day1icon === "book" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("1", "book") }} />
                    <FontAwesome5 name="calendar-alt" size={28} color={day1icon === "calendar-alt" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("1", "calendar-alt") }} />
                    <FontAwesome5 name="leaf" size={28} color={day1icon === "leaf" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("1", "leaf") }} />
                    <FontAwesome5 name="running" size={28} color={day1icon === "running" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("1", "running") }} />
                    <FontAwesome5 name="pray" size={28} color={day1icon === "pray" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("1", "pray") }} />
                    <FontAwesome5 name="comment" size={28} color={day1icon === "comment" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("1", "comment") }} />
                    <FontAwesome5 name="glass-whiskey" size={28} color={day1icon === "glass-whiskey" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("1", "glass-whiskey") }} />
                    <FontAwesome5 name="play" size={28} color={day1icon === "play" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("1", "play") }} />
                </View>
            </View>
            <View style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}>
                <View style={styles.icons}>
                    <FontAwesome5 name="lock" size={28} color={day2icon === "lock" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 10 }} onPress={() => { saveIcon("2", "lock") }} />
                    <FontAwesome5 name="pen" size={28} color={day2icon === "pen" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("2", "pen") }} />
                    <FontAwesome5 name="book" size={28} color={day2icon === "book" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("2", "book") }} />
                    <FontAwesome5 name="calendar-alt" size={28} color={day2icon === "calendar-alt" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("2", "calendar-alt") }} />
                    <FontAwesome5 name="leaf" size={28} color={day2icon === "leaf" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("2", "leaf") }} />
                    <FontAwesome5 name="running" size={28} color={day2icon === "running" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("2", "running") }} />
                    <FontAwesome5 name="pray" size={28} color={day2icon === "pray" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("2", "pray") }} />
                    <FontAwesome5 name="comment" size={28} color={day2icon === "comment" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("2", "comment") }} />
                    <FontAwesome5 name="glass-whiskey" size={28} color={day2icon === "glass-whiskey" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("2", "glass-whiskey") }} />
                    <FontAwesome5 name="play" size={28} color={day2icon === "play" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("2", "play") }} />
                </View>
            </View>
            <View style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}>
                <View style={styles.icons}>
                    <FontAwesome5 name="lock" size={28} color={day3icon === "lock" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 10 }} onPress={() => { saveIcon("3", "lock") }} />
                    <FontAwesome5 name="pen" size={28} color={day3icon === "pen" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("3", "pen") }} />
                    <FontAwesome5 name="book" size={28} color={day3icon === "book" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("3", "book") }} />
                    <FontAwesome5 name="calendar-alt" size={28} color={day3icon === "calendar-alt" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("3", "calendar-alt") }} />
                    <FontAwesome5 name="leaf" size={28} color={day3icon === "leaf" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("3", "leaf") }} />
                    <FontAwesome5 name="running" size={28} color={day3icon === "running" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("3", "running") }} />
                    <FontAwesome5 name="pray" size={28} color={day3icon === "pray" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("3", "pray") }} />
                    <FontAwesome5 name="comment" size={28} color={day3icon === "comment" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("3", "comment") }} />
                    <FontAwesome5 name="glass-whiskey" size={28} color={day3icon === "glass-whiskey" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("3", "glass-whiskey") }} />
                    <FontAwesome5 name="play" size={28} color={day3icon === "play" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("3", "play") }} />
                </View>
            </View>
            <View style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}>
                <View style={styles.icons}>
                    <FontAwesome5 name="lock" size={28} color={day4icon === "lock" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 10 }} onPress={() => { saveIcon("4", "lock") }} />
                    <FontAwesome5 name="pen" size={28} color={day4icon === "pen" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("4", "pen") }} />
                    <FontAwesome5 name="book" size={28} color={day4icon === "book" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("4", "book") }} />
                    <FontAwesome5 name="calendar-alt" size={28} color={day4icon === "calendar-alt" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("4", "calendar-alt") }} />
                    <FontAwesome5 name="leaf" size={28} color={day4icon === "leaf" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("4", "leaf") }} />
                    <FontAwesome5 name="running" size={28} color={day4icon === "running" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("4", "running") }} />
                    <FontAwesome5 name="pray" size={28} color={day4icon === "pray" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("4", "pray") }} />
                    <FontAwesome5 name="comment" size={28} color={day4icon === "comment" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("4", "comment") }} />
                    <FontAwesome5 name="glass-whiskey" size={28} color={day4icon === "glass-whiskey" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("4", "glass-whiskey") }} />
                    <FontAwesome5 name="play" size={28} color={day4icon === "play" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("4", "play") }} />
                </View>
            </View>
            <View style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}>
                <View style={styles.icons}>
                    <FontAwesome5 name="lock" size={28} color={day5icon === "lock" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 10 }} onPress={() => { saveIcon("5", "lock") }} />
                    <FontAwesome5 name="pen" size={28} color={day5icon === "pen" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("5", "pen") }} />
                    <FontAwesome5 name="book" size={28} color={day5icon === "book" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("5", "book") }} />
                    <FontAwesome5 name="calendar-alt" size={28} color={day5icon === "calendar-alt" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("5", "calendar-alt") }} />
                    <FontAwesome5 name="leaf" size={28} color={day5icon === "leaf" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("5", "leaf") }} />
                    <FontAwesome5 name="running" size={28} color={day5icon === "running" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("5", "running") }} />
                    <FontAwesome5 name="pray" size={28} color={day5icon === "pray" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("5", "pray") }} />
                    <FontAwesome5 name="comment" size={28} color={day5icon === "comment" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("5", "comment") }} />
                    <FontAwesome5 name="glass-whiskey" size={28} color={day5icon === "glass-whiskey" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("5", "glass-whiskey") }} />
                    <FontAwesome5 name="play" size={28} color={day5icon === "play" ? Colors[colorScheme].success : Colors[colorScheme].text} style={{ marginLeft: 12 }} onPress={() => { saveIcon("5", "play") }} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
    },
    div: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 1,
        width: '100%',
        height: 50,
        backgroundColor: '#222'
    },
    text: {
        marginLeft: 15,
        fontWeight: 'bold',
    },
    icons: {
        marginLeft: 3,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent'
    }
});
