import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function JournalCardScreen({ navigation, route }: RootTabScreenProps<'JournalCreateScreen'>) {
    return (
        <View style={styles.container}>
            <Text>TEST</Text>
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
