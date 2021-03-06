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

type ExerciseCardProps = {
    value: any,
    navigation: any,
    index: any,
}

export default function ExerciseCard({ value, index, navigation }: ExerciseCardProps) {
    const colorScheme = useColorScheme()


    return (
        <Pressable onPress={() => { navigation.navigate('JournalCardScreen', { data: { value, index } }) }} style={[styles.container, { backgroundColor: Colors[colorScheme].uiBg }]}>
            <Text numberOfLines={2} style={styles.value}>{value.text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 0,
        marginBottom: 5
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
