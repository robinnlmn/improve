import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from './Themed';
import { Audio } from 'expo-av';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootTabScreenProps } from '../types';
import { MaterialIcons } from '@expo/vector-icons';

type JournalCardProps = {
    value: any,
    navigation: any
}

export default function JournalCard({ value, navigation }: JournalCardProps) {
    const colorScheme = useColorScheme()

    return (
        <View style={[styles.container, { backgroundColor: Colors[colorScheme].uiBg }]} >
            <View style={styles.header}>
                <Text style={styles.date}>{value.date}</Text>
                <Pressable onPress={() => { navigation.navigate('JournalCardScreen', { data: { value } }) }} style={styles.button}><MaterialIcons name="keyboard-arrow-right" size={44} color="white" /></Pressable>
            </View>
            <Text style={styles.name}>{value.name}</Text>
            <Text numberOfLines={1} style={styles.value}>{value.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 10,
        borderRadius: 5,
        marginTop: 15
    },
    date: {
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 20,
        borderBottomWidth: 2
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20,
        borderBottomWidth: 2
    },
    value: {
        maxWidth: '100%',
    },
    header: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: 'transparent',
        width: '17%',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
