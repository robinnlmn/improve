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
    navigation: any,
    index: any,
}

export default function JournalCard({ value, index, navigation }: JournalCardProps) {
    const colorScheme = useColorScheme()


    return (
        <Pressable onPress={() => { navigation.navigate('JournalCardScreen', { data: { value, index } }) }} style={[styles.container, { backgroundColor: Colors[colorScheme].uiBg }]}>
            <View style={styles.header}>
                <Text numberOfLines={1} style={styles.date}>{value.date}</Text>
            </View>
            <Text numberOfLines={1} style={[styles.name, { color: Colors[colorScheme].red }]}>{value.name}</Text>
            <Text numberOfLines={2} style={styles.value}>{value.value}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        borderRadius: 5,
        padding: 10,
        marginTop: 7.5,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.28,
        shadowRadius: 4.65,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: -4,
        marginBottom: -1
    },
    date: {
        fontWeight: 'bold',
        fontSize: 18,
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
