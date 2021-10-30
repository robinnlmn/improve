import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';

export default function FitnessSettingsScreen() {
    const colorScheme = useColorScheme()

    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
    },
});
