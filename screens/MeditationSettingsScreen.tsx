import * as React from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MeditationSettingsScreen() {
    const colorScheme = useColorScheme()

    const createTwoButtonAlert = () =>
        Alert.alert('Delete Visualization', 'Delete Visualization Section? This cannot be undone!', [
            {
                text: 'Cancel',
                onPress: () => { },
                style: 'cancel',
            },
            {
                text: 'DELETE',
                onPress: () => AsyncStorage.setItem('@vis', ''),
                style: 'destructive',
            },
        ]);


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.div} onPress={() => { createTwoButtonAlert() }}>
                <Text style={styles.text}>RESET</Text>
            </TouchableOpacity>
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
        color: '#fd4e4e',
        fontSize: 18
    },
});
