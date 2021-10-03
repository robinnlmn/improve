import * as React from 'react';
import { Button, Keyboard, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

import useColorScheme from '../hooks/useColorScheme'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function JournalCardScreen({ navigation }: RootTabScreenProps<'JournalCreateScreen'>) {
    const colorScheme = useColorScheme()
    const [date, setDate] = React.useState("20")
    const [journal, setJournal] = React.useState("COOLER TAGH")

    async function createDay(date: string, journal: string) {
        try {
            const data = await AsyncStorage.getItem('@journal')
            const parsed = JSON.parse(data!)

            console.log(parsed[0][0][0]['date'])

            // var days = []

            // days.push(JSON.parse(data!))

            // console.log(days)

            // const jsonValue = JSON.stringify([{ date: "04.11.21", value: "CAWJFAHWGFIAGW" }])
            // await AsyncStorage.setItem('@journal', jsonValue)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.flex}>
                <Text style={styles.title}>create a new day!</Text>
                <MaterialIcons name="keyboard-hide" size={44} color="white" style={{ marginLeft: 30 }} onPress={() => { Keyboard.dismiss() }} />
            </View>

            <Text style={styles.date}>day</Text>
            <TextInput
                value={date}
                onChangeText={text => setDate(text)}
                style={[styles.dateInput, { color: Colors[colorScheme].text }]}
                placeholder="today's date"
            />
            <TextInput
                value={journal}
                onChangeText={text => setJournal(text)}
                style={[styles.dayInput, { color: Colors[colorScheme].text }]}
                multiline={true}
                numberOfLines={5}
                placeholder="write about your day..."
            />

            <View style={styles.button}>
                <Button title="CREATE" onPress={() => { createDay(date, journal); }}>
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        width: '100%'
    },
    flex1: {
        alignItems: 'center',
        marginBottom: 15,
        width: '100%'
    },
    button: {
        marginTop: 55,
    },
    data: {
        width: '90%'
    },
    dateInput: {
        width: '95%',
        height: '3%',
        borderBottomWidth: 2,
        borderBottomColor: 'lightgray',
        padding: 8
    },
    dayInput: {
        width: '95%',
        height: '50%',
        padding: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 20,
        marginTop: 20
    },
    date: {
        fontWeight: 'bold',
        fontSize: 20,
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
});
