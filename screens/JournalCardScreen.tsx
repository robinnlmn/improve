import * as React from 'react';
import { StyleSheet } from 'react-native';

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

    React.useLayoutEffect(() => {
        async function getData() {
            const data: any = await route.params

            await setData(data['data']['value'])

            navigation.setOptions({
                headerTitle: data['data']['value']['date']
            })

        }

        getData()

    }, [])

    React.useEffect(() => {

    }, [])

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
