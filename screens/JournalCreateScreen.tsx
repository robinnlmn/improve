import * as React from 'react';
import { Button, Keyboard, StyleSheet, TextInput } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

import useColorScheme from '../hooks/useColorScheme'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from '../storage/AsyncStore';

export default function JournalCardScreen({ navigation }: RootTabScreenProps<'JournalCreateScreen'>) {
    const colorScheme = useColorScheme()
    const [date, setDate] = React.useState("")
    const [journal, setJournal] = React.useState("")
    const [name, setName] = React.useState("")
    const [close, setClose] = React.useState(false)

    async function createDay(date: string, journal: string, name: string) {
        try {
            const response = await Storage.getData('@journal');

            var tempData: any = [];

            if (response) {
                tempData.push({ date: date, value: journal, name: name });
            }
            else {
                tempData.push({ date: date, value: journal, name: name });
            }

            if (response) tempData.push(...response);


            await Storage.setData('@journal', tempData);

            navigation.goBack()

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <View style={styles.container}>
            {
                close ? (
                    <View style={styles.close}>
                        <FontAwesome5 name="check" size={44} color={Colors[colorScheme].red} style={{ marginLeft: 30 }} onPress={() => {
                            Keyboard.dismiss()
                            createDay(date, journal, name)
                            setClose(false)
                        }} />
                    </View>
                ) : (
                    <View>

                    </View>
                )
            }

            <TextInput
                value={name}
                onChangeText={text => setName(text)}
                style={[styles.nameInput, { color: Colors[colorScheme].red }]}
                placeholder="today's name"
                onFocus={() => setClose(true)}
            />
            <TextInput
                value={date}
                onChangeText={text => setDate(text)}
                style={[styles.dateInput, { color: Colors[colorScheme].text }]}
                placeholder="today's date"
                onFocus={() => setClose(true)}
            />
            <TextInput
                value={journal}
                onChangeText={text => setJournal(text)}
                style={[styles.dayInput, { color: Colors[colorScheme].text }]}
                onFocus={() => setClose(true)}
                placeholder="write about your day..."
                multiline={true}
            />
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
    nameInput: {
        width: '95%',
        height: '6%',
        paddingLeft: 8,
        marginTop: 0,
        fontWeight: 'bold',
        fontSize: 20,
        borderRadius: 5,
    },
    dateInput: {
        width: '95%',
        height: '6%',
        paddingLeft: 8,
        marginTop: -15,
        fontWeight: 'bold',
        fontSize: 20,
        borderRadius: 5,
    },
    dayInput: {
        width: '95%',
        height: '85%',
        padding: 8,
        borderWidth: 2,
        borderColor: '#222',
        marginTop: 0,
        borderRadius: 5
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
    close: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: '2%',
        right: '5%',
        zIndex: 5
    }
});
