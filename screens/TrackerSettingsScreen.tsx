import AsyncStorage from '@react-native-async-storage/async-storage';
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

    return (
        <View style={styles.container}>
            <View style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}>
                <View style={styles.icons}>
                    <FontAwesome5 name="lock" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 10 }} />
                    <FontAwesome5 name="pen" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="book" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="calendar-alt" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="leaf" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="running" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="pray" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="comment" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="glass-whiskey" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="play" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                </View>
            </View>
            <View style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}>
                <View style={styles.icons}>
                    <FontAwesome5 name="lock" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 10 }} />
                    <FontAwesome5 name="pen" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="book" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="calendar-alt" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="leaf" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="running" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="pray" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="comment" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="glass-whiskey" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="play" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                </View>
            </View>
            <View style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}>
                <View style={styles.icons}>
                    <FontAwesome5 name="lock" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 10 }} />
                    <FontAwesome5 name="pen" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="book" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="calendar-alt" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="leaf" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="running" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="pray" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="comment" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="glass-whiskey" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="play" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                </View>
            </View>
            <View style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}>
                <View style={styles.icons}>
                    <FontAwesome5 name="lock" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 10 }} />
                    <FontAwesome5 name="pen" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="book" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="calendar-alt" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="leaf" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="running" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="pray" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="comment" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="glass-whiskey" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="play" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                </View>
            </View>
            <View style={[styles.div, { backgroundColor: Colors[colorScheme].uiBg }]}>
                <View style={styles.icons}>
                    <FontAwesome5 name="lock" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 10 }} />
                    <FontAwesome5 name="pen" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="book" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="calendar-alt" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="leaf" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="running" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="pray" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="comment" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="glass-whiskey" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
                    <FontAwesome5 name="play" size={28} color={Colors[colorScheme].text} style={{ marginLeft: 12 }} />
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
