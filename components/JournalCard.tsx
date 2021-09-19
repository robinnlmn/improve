import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Pressable, TextInput } from 'react-native';
import { Text, View } from './Themed';
import { Audio } from 'expo-av';
import AsyncStorage from "@react-native-async-storage/async-storage";

type JournalCardProps = {
    storeId: string
}

export default function Checkbox({ storeId }: JournalCardProps) {
    const [text, setText] = useState('')

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={text} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '90%',
        height: 10,
        borderRadius: 5,
        borderColor: '#222'
    },
});
