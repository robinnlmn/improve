import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import Checkbox from '../components/Checkbox'
import { RootTabScreenProps } from '../types';
import Tooltip from 'rn-tooltip';

export default function HabitTrackerScreen({ navigation }: RootTabScreenProps<'HabitTracker'>) {
    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                <View style={styles.row}>
                    <Text style={styles.days1}>mon</Text>
                    <Text style={styles.days2}>tue</Text>
                    <Text style={styles.days3}>wed</Text>
                    <Text style={styles.days4}>thu</Text>
                    <Text style={styles.days5}>fri</Text>
                    <Text style={styles.days6}>sat</Text>
                    <Text style={styles.days7}>sun</Text>
                </View>
                <View style={styles.row}>
                    <Ionicons
                        name='body'
                        size={36}
                        color='#fd4e4e'
                        // @ts-ignore 
                        onPress={() => navigation.navigate(' ')}
                    />
                    <Checkbox storeId="@exercise_1" />
                    <Checkbox storeId="@exercise_2" />
                    <Checkbox storeId="@exercise_3" />
                    <Checkbox storeId="@exercise_4" />
                    <Checkbox storeId="@exercise_5" />
                    <Checkbox storeId="@exercise_6" />
                    <Checkbox storeId="@exercise_7" />
                </View>
                <View style={styles.row}>
                    <Ionicons
                        name='md-bookmark'
                        size={36}
                        color='#fd4e4e'
                        // @ts-ignore 
                        onPress={() => navigation.navigate('     ')}
                    />
                    <Checkbox storeId="@journal_1" />
                    <Checkbox storeId="@journal_2" />
                    <Checkbox storeId="@journal_3" />
                    <Checkbox storeId="@journal_4" />
                    <Checkbox storeId="@journal_5" />
                    <Checkbox storeId="@journal_6" />
                    <Checkbox storeId="@journal_7" />
                </View>
                <View style={styles.row}>
                    <Tooltip popover={<Text>read</Text>} overlayColor='transparent' backgroundColor='#222' actionType='press' withPointer={true}>
                        <Ionicons name='journal' size={36} color='#fd4e4e' />
                    </Tooltip>
                    <Checkbox storeId="@read_1" />
                    <Checkbox storeId="@read_2" />
                    <Checkbox storeId="@read_3" />
                    <Checkbox storeId="@read_4" />
                    <Checkbox storeId="@read_5" />
                    <Checkbox storeId="@read_6" />
                    <Checkbox storeId="@read_7" />
                </View>
                <View style={styles.row}>
                    <Ionicons
                        name='play'
                        size={36}
                        color='#fd4e4e'
                        // @ts-ignore 
                        onPress={() => navigation.navigate('    ')}
                    />
                    <Checkbox storeId="@learn_1" />
                    <Checkbox storeId="@learn_2" />
                    <Checkbox storeId="@learn_3" />
                    <Checkbox storeId="@learn_4" />
                    <Checkbox storeId="@learn_5" />
                    <Checkbox storeId="@learn_6" />
                    <Checkbox storeId="@learn_7" />
                </View>
                <View style={styles.row}>
                    <Ionicons
                        name='leaf'
                        size={36}
                        color='#fd4e4e'
                        // @ts-ignore 
                        onPress={() => navigation.navigate('   ')}
                    />
                    <Checkbox storeId="@meditate_1" />
                    <Checkbox storeId="@meditate_2" />
                    <Checkbox storeId="@meditate_3" />
                    <Checkbox storeId="@meditate_4" />
                    <Checkbox storeId="@meditate_5" />
                    <Checkbox storeId="@meditate_6" />
                    <Checkbox storeId="@meditate_7" />
                </View>
            </View>
            <Text style={styles.title}>HABIT©</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: '10%'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
        padding: 15,
        marginRight: 0,
    },
    textRing: {
        backgroundColor: '#222',
        borderRadius: 10,
    },
    days1: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '12%',
        fontWeight: '800',
    },
    days2: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '25.5%',
        fontWeight: '800',
    },
    days3: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '38%',
        fontWeight: '800',
    },
    days4: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '51.5%',
        fontWeight: '800',
    },
    days5: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '65%',
        fontWeight: '800',
    },
    days6: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '78%',
        fontWeight: '800',
    },
    days7: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '90.5%',
        fontWeight: '800',
    },
});
