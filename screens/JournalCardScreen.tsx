import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { Alert, Button, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootTabScreenProps } from '../types';

type JournalCardScreenProps = {
    data: any
}

export default function JournalCardScreen({ navigation, route }: RootTabScreenProps<'JournalCardScreen'>) {
    const [data, setData] = React.useState([])

    const colorScheme = useColorScheme()

    const createThreeButtonAlert = () =>
        Alert.alert(
            "DELETE DAY?",
            "Are you sure you want to delete this day? This action cannot be reverted!",
            [
                {
                    text: "YES, DELETE",
                    onPress: () => deleteDay()
                },
                {
                    text: "NO, LEAVE",
                    onPress: () => { }
                },
                {
                    text: "CANCEL",
                    onPress: () => { },
                    style: "cancel"
                },
            ],
            { cancelable: true }
        );

    React.useLayoutEffect(() => {
        async function getData() {
            const data: any = await route.params

            await setData(data['data']['value'])

            navigation.setOptions({
                headerTitle: data['data']['value']['date'],
                headerRight: () => (
                    <Button title="DELETE" color="#fd4e4e" onPress={() => {
                        createThreeButtonAlert()
                    }}></Button>
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
                <Text style={[styles.name, { color: Colors[colorScheme].red }]}>{data.name}</Text>

                {/* @ts-ignore */}
                <Text style={styles.value}>{data.value}</Text>
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
        marginTop: 15
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
});
