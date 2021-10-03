import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

type JournalCardScreenProps = {
    data: any
}

export default function JournalCardScreen({ navigation, route }: RootTabScreenProps<'JournalCardScreen'>) {
    const [data, setData] = React.useState([])

    React.useLayoutEffect(() => {
        const data: any = route.params

        setData(data['data']['value'])
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.data}>
                {/* @ts-ignore */}
                <Text style={styles.date}>{data.date}</Text>

                {/* @ts-ignore */}
                <Text style={styles.name}>{data.name}</Text>

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
        marginTop: 25,
    },
    data: {
        width: '90%'
    },
    date: {
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 20,
        borderBottomWidth: 2
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
