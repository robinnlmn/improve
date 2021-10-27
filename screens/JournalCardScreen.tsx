import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { Alert, Button, Pressable, StyleSheet, TouchableOpacity, TextInput, Keyboard } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootTabScreenProps } from '../types';

type JournalCardScreenProps = {
    data: any
}

export default function JournalCardScreen({ navigation, route }: RootTabScreenProps<'JournalCardScreen'>) {
    const daydata = route.params!['data']['value']

    const colorScheme = useColorScheme()

    const createThreeButtonAlert = () =>
        Alert.alert(
            "DELETE DAY?",
            "",
            [
                {
                    text: "CANCEL",
                    onPress: () => { },
                },
                {
                    text: "DELETE",
                    onPress: () => deleteDay(),
                    style: "destructive"
                },
            ],
            { cancelable: true }
        );

    React.useLayoutEffect(() => {
        async function getData() {
            const data: any = await route.params

            navigation.setOptions({
                headerTitle: data['data']['value']['date'],
                headerRight: () => (
                    <View style={styles.header}>
                        <Pressable
                            onPress={() => createThreeButtonAlert()}>
                            <MaterialIcons
                                name="delete"
                                size={28}
                                color='#fd4e4e'
                                style={{ marginRight: 0 }}
                            />
                        </Pressable>
                    </View>
                )
            })

        }

        getData()

    }, [])

    React.useEffect(() => {

    }, [])

    const deleteDay = async () => {
        try {
            const data: any = await route.params

            const alldays = await AsyncStorage.getItem('@journal')
            const parsedDays = await JSON.parse(alldays!)

            await parsedDays.splice(data['data']['index'], 1)

            await AsyncStorage.setItem('@journal', JSON.stringify(parsedDays))
            navigation.goBack()
            console.log(parsedDays)
        } catch (error) {

        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.data}>
                {/* @ts-ignore */}
                <Text style={[styles.name, { color: Colors[colorScheme].red }]}>{daydata.name}</Text>

                {/* @ts-ignore */}
                <Text style={styles.value}>{daydata.value}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%'
    },
    data: {
        width: '90%',
        marginTop: 10
    },
    name: {
        fontWeight: '900',
        fontSize: 26,
        marginBottom: 5,
        borderBottomWidth: 2,
    },
    value: {
        maxWidth: '100%',
    },
    button: {
        color: '#fd4e4e'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    nameInput: {
        width: '95%',
        height: '7.5%',
        borderWidth: 4,
        borderColor: '#222',
        marginTop: 10,
        borderRadius: 5
    },
    dayInput: {
        width: '95%',
        height: '85%',
        borderWidth: 4,
        borderColor: '#222',
        marginTop: 10,
        borderRadius: 5
    }
});
