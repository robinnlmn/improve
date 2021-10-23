import * as React from 'react';
import { Alert, Image, StyleSheet } from 'react-native';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import Checkbox from '../components/Checkbox'
import { RootTabScreenProps } from '../types';
import Tooltip from 'rn-tooltip';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HabitTrackerScreen({ navigation }: RootTabScreenProps<'HabitTracker'>) {

    const createThreeButtonAlert = () =>
        Alert.alert(
            "RESET WEEK?",
            "Are you sure you want to start a new week? All your current data will be deleted",
            [
                {
                    text: "RESET",
                    onPress: () => deleteTracker(),
                    style: "destructive"
                },
                {
                    text: "CANCEL",
                    onPress: () => { },
                    style: "cancel"
                },
            ],
            { cancelable: true }
        );

    async function deleteTracker() {
        try {
            await AsyncStorage.setItem('@exercise_1', JSON.stringify(false))
            await AsyncStorage.setItem('@exercise_2', JSON.stringify(false))
            await AsyncStorage.setItem('@exercise_3', JSON.stringify(false))
            await AsyncStorage.setItem('@exercise_4', JSON.stringify(false))
            await AsyncStorage.setItem('@exercise_5', JSON.stringify(false))
            await AsyncStorage.setItem('@exercise_6', JSON.stringify(false))
            await AsyncStorage.setItem('@exercise_7', JSON.stringify(false))

            await AsyncStorage.setItem('@journal_1', JSON.stringify(false))
            await AsyncStorage.setItem('@journal_2', JSON.stringify(false))
            await AsyncStorage.setItem('@journal_3', JSON.stringify(false))
            await AsyncStorage.setItem('@journal_4', JSON.stringify(false))
            await AsyncStorage.setItem('@journal_5', JSON.stringify(false))
            await AsyncStorage.setItem('@journal_6', JSON.stringify(false))
            await AsyncStorage.setItem('@journal_7', JSON.stringify(false))

            await AsyncStorage.setItem('@read_1', JSON.stringify(false))
            await AsyncStorage.setItem('@read_2', JSON.stringify(false))
            await AsyncStorage.setItem('@read_3', JSON.stringify(false))
            await AsyncStorage.setItem('@read_4', JSON.stringify(false))
            await AsyncStorage.setItem('@read_5', JSON.stringify(false))
            await AsyncStorage.setItem('@read_6', JSON.stringify(false))
            await AsyncStorage.setItem('@read_7', JSON.stringify(false))

            await AsyncStorage.setItem('@learn_1', JSON.stringify(false))
            await AsyncStorage.setItem('@learn_2', JSON.stringify(false))
            await AsyncStorage.setItem('@learn_3', JSON.stringify(false))
            await AsyncStorage.setItem('@learn_4', JSON.stringify(false))
            await AsyncStorage.setItem('@learn_5', JSON.stringify(false))
            await AsyncStorage.setItem('@learn_6', JSON.stringify(false))
            await AsyncStorage.setItem('@learn_7', JSON.stringify(false))

            await AsyncStorage.setItem('@meditate_1', JSON.stringify(false))
            await AsyncStorage.setItem('@meditate_2', JSON.stringify(false))
            await AsyncStorage.setItem('@meditate_3', JSON.stringify(false))
            await AsyncStorage.setItem('@meditate_4', JSON.stringify(false))
            await AsyncStorage.setItem('@meditate_5', JSON.stringify(false))
            await AsyncStorage.setItem('@meditate_6', JSON.stringify(false))
            await AsyncStorage.setItem('@meditate_7', JSON.stringify(false))

            await AsyncStorage.setItem('@adonis_1', JSON.stringify(false))
            await AsyncStorage.setItem('@adonis_2', JSON.stringify(false))
            await AsyncStorage.setItem('@adonis_3', JSON.stringify(false))
            await AsyncStorage.setItem('@adonis_4', JSON.stringify(false))
            await AsyncStorage.setItem('@adonis_5', JSON.stringify(false))
            await AsyncStorage.setItem('@adonis_6', JSON.stringify(false))
            await AsyncStorage.setItem('@adonis_7', JSON.stringify(false))
        } catch (error) {
            return;
        }
    }


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
                        style={styles.icon}
                        // @ts-ignore 
                        onPress={() => navigation.navigate('Exercise')}
                    />
                    <Checkbox storeId="@exercise_1" adonis={false} />
                    <Checkbox storeId="@exercise_2" adonis={false} />
                    <Checkbox storeId="@exercise_3" adonis={false} />
                    <Checkbox storeId="@exercise_4" adonis={false} />
                    <Checkbox storeId="@exercise_5" adonis={false} />
                    <Checkbox storeId="@exercise_6" adonis={false} />
                    <Checkbox storeId="@exercise_7" adonis={false} />
                </View>
                <View style={styles.row}>
                    <Ionicons
                        name='md-bookmark'
                        size={36}
                        color='#fd4e4e'
                        style={styles.icon}
                        // @ts-ignore 
                        onPress={() => navigation.navigate('Journal')}
                    />
                    <Checkbox storeId="@journal_1" adonis={false} />
                    <Checkbox storeId="@journal_2" adonis={false} />
                    <Checkbox storeId="@journal_3" adonis={false} />
                    <Checkbox storeId="@journal_4" adonis={false} />
                    <Checkbox storeId="@journal_5" adonis={false} />
                    <Checkbox storeId="@journal_6" adonis={false} />
                    <Checkbox storeId="@journal_7" adonis={false} />
                </View>
                <View style={styles.row}>
                    <Ionicons
                        name='journal'
                        size={36}
                        color='#fd4e4e'
                        style={styles.icon}
                    />
                    <Checkbox storeId="@read_1" adonis={false} />
                    <Checkbox storeId="@read_2" adonis={false} />
                    <Checkbox storeId="@read_3" adonis={false} />
                    <Checkbox storeId="@read_4" adonis={false} />
                    <Checkbox storeId="@read_5" adonis={false} />
                    <Checkbox storeId="@read_6" adonis={false} />
                    <Checkbox storeId="@read_7" adonis={false} />
                </View>
                <View style={styles.row}>
                    <Ionicons
                        name='play'
                        size={36}
                        color='#fd4e4e'
                        style={styles.icon}
                        // @ts-ignore 
                        onPress={() => navigation.navigate('Skills')}
                    />
                    <Checkbox storeId="@learn_1" adonis={false} />
                    <Checkbox storeId="@learn_2" adonis={false} />
                    <Checkbox storeId="@learn_3" adonis={false} />
                    <Checkbox storeId="@learn_4" adonis={false} />
                    <Checkbox storeId="@learn_5" adonis={false} />
                    <Checkbox storeId="@learn_6" adonis={false} />
                    <Checkbox storeId="@learn_7" adonis={false} />
                </View>
                <View style={styles.row}>
                    <Ionicons
                        name='leaf'
                        size={36}
                        color='#fd4e4e'
                        style={styles.icon}
                        // @ts-ignore 
                        onPress={() => navigation.navigate('Meditate')}
                    />
                    <Checkbox storeId="@meditate_1" adonis={false} />
                    <Checkbox storeId="@meditate_2" adonis={false} />
                    <Checkbox storeId="@meditate_3" adonis={false} />
                    <Checkbox storeId="@meditate_4" adonis={false} />
                    <Checkbox storeId="@meditate_5" adonis={false} />
                    <Checkbox storeId="@meditate_6" adonis={false} />
                    <Checkbox storeId="@meditate_7" adonis={false} />
                </View>
                <View style={styles.row}>
                    <Image source={{ uri: "https://cdn.discordapp.com/emojis/812393705742139432.png?size=32" }} style={styles.adonis} />
                    <Checkbox storeId="@adonis_1" adonis={true} day="1" />
                    <Checkbox storeId="@adonis_2" adonis={true} day="2" />
                    <Checkbox storeId="@adonis_3" adonis={true} day="3" />
                    <Checkbox storeId="@adonis_4" adonis={true} day="4" />
                    <Checkbox storeId="@adonis_5" adonis={true} day="5" />
                    <Checkbox storeId="@adonis_6" adonis={true} day="6" />
                    <Checkbox storeId="@adonis_7" adonis={true} day="7" />
                </View>
            </View>
            <MaterialIcons name="autorenew" size={44} color="#fd4e4e" style={styles.title} onPress={createThreeButtonAlert} />
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
        fontWeight: '900',
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
        transform: [{ scale: 95 / 100 }],
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
    icon: {
        left: '5%'
    },
    days1: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '12%',
        fontWeight: '900',
    },
    days2: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '26%',
        fontWeight: '900',
    },
    days3: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '38%',
        fontWeight: '900',
    },
    days4: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '51.5%',
        fontWeight: '900',
    },
    days5: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '65.5%',
        fontWeight: '900',
    },
    days6: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '77.5%',
        fontWeight: '900',
    },
    days7: {
        color: '#fd4e4e',
        position: 'absolute',
        bottom: '4%',
        left: '90%',
        fontWeight: '900',
    },
    adonis: {
        width: 36,
        height: 36,
    }
});
