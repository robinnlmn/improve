import * as React from 'react';
import { Alert, Image, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Text, View } from '../components/Themed';
import Checkbox from '../components/Checkbox'
import { RootTabScreenProps } from '../types';
import Tooltip from 'rn-tooltip';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HabitTrackerScreen({ navigation }: RootTabScreenProps<'HabitTracker'>) {

    const [day1icon, setDay1icon] = React.useState("pen")
    const [day2icon, setDay2icon] = React.useState("book")
    const [day3icon, setDay3icon] = React.useState("pray")
    const [day4icon, setDay4icon] = React.useState("play")
    const [day5icon, setDay5icon] = React.useState("leaf")

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
            await AsyncStorage.setItem('@1_1', JSON.stringify(false))
            await AsyncStorage.setItem('@1_2', JSON.stringify(false))
            await AsyncStorage.setItem('@1_3', JSON.stringify(false))
            await AsyncStorage.setItem('@1_4', JSON.stringify(false))
            await AsyncStorage.setItem('@1_5', JSON.stringify(false))
            await AsyncStorage.setItem('@1_6', JSON.stringify(false))
            await AsyncStorage.setItem('@1_7', JSON.stringify(false))

            await AsyncStorage.setItem('@2_1', JSON.stringify(false))
            await AsyncStorage.setItem('@2_2', JSON.stringify(false))
            await AsyncStorage.setItem('@2_3', JSON.stringify(false))
            await AsyncStorage.setItem('@2_4', JSON.stringify(false))
            await AsyncStorage.setItem('@2_5', JSON.stringify(false))
            await AsyncStorage.setItem('@2_6', JSON.stringify(false))
            await AsyncStorage.setItem('@2_7', JSON.stringify(false))

            await AsyncStorage.setItem('@3_1', JSON.stringify(false))
            await AsyncStorage.setItem('@3_2', JSON.stringify(false))
            await AsyncStorage.setItem('@3_3', JSON.stringify(false))
            await AsyncStorage.setItem('@3_4', JSON.stringify(false))
            await AsyncStorage.setItem('@3_5', JSON.stringify(false))
            await AsyncStorage.setItem('@3_6', JSON.stringify(false))
            await AsyncStorage.setItem('@3_7', JSON.stringify(false))

            await AsyncStorage.setItem('@4_1', JSON.stringify(false))
            await AsyncStorage.setItem('@4_2', JSON.stringify(false))
            await AsyncStorage.setItem('@4_3', JSON.stringify(false))
            await AsyncStorage.setItem('@4_4', JSON.stringify(false))
            await AsyncStorage.setItem('@4_5', JSON.stringify(false))
            await AsyncStorage.setItem('@4_6', JSON.stringify(false))
            await AsyncStorage.setItem('@4_7', JSON.stringify(false))

            await AsyncStorage.setItem('@5_1', JSON.stringify(false))
            await AsyncStorage.setItem('@5_2', JSON.stringify(false))
            await AsyncStorage.setItem('@5_3', JSON.stringify(false))
            await AsyncStorage.setItem('@5_4', JSON.stringify(false))
            await AsyncStorage.setItem('@5_5', JSON.stringify(false))
            await AsyncStorage.setItem('@5_6', JSON.stringify(false))
            await AsyncStorage.setItem('@5_7', JSON.stringify(false))
        } catch (error) {
            return;
        }
    }

    React.useEffect(() => {
        async function getIcons() {
            try {
                var icon1 = await AsyncStorage.getItem('@icon_1');
                var icon2 = await AsyncStorage.getItem('@icon_2');
                var icon3 = await AsyncStorage.getItem('@icon_3');
                var icon4 = await AsyncStorage.getItem('@icon_4');
                var icon5 = await AsyncStorage.getItem('@icon_5');

                if (icon1 !== null) {
                    setDay1icon(icon1)
                }
                if (icon2 !== null) {
                    setDay2icon(icon2)
                }
                if (icon3 !== null) {
                    setDay3icon(icon3)
                }
                if (icon4 !== null) {
                    setDay4icon(icon4)
                }
                if (icon5 !== null) {
                    setDay5icon(icon5)
                }
            } catch (err) {

            }
        }

        getIcons();
        setInterval(() => {
            getIcons();
        }, 2000);
    }, [])

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
                    <FontAwesome5
                        name={day1icon}
                        size={26}
                        color='#fd4e4e'
                        style={styles.icon}
                    />
                    <Checkbox storeId="@1_1" adonis={false} />
                    <Checkbox storeId="@1_2" adonis={false} />
                    <Checkbox storeId="@1_3" adonis={false} />
                    <Checkbox storeId="@1_4" adonis={false} />
                    <Checkbox storeId="@1_5" adonis={false} />
                    <Checkbox storeId="@1_6" adonis={false} />
                    <Checkbox storeId="@1_7" adonis={false} />
                </View>
                <View style={styles.row}>
                    <FontAwesome5
                        name={day2icon}
                        size={26}
                        color='#fd4e4e'
                        style={styles.icon}
                    />
                    <Checkbox storeId="@2_1" adonis={false} />
                    <Checkbox storeId="@2_2" adonis={false} />
                    <Checkbox storeId="@2_3" adonis={false} />
                    <Checkbox storeId="@2_4" adonis={false} />
                    <Checkbox storeId="@2_5" adonis={false} />
                    <Checkbox storeId="@2_6" adonis={false} />
                    <Checkbox storeId="@2_7" adonis={false} />
                </View>
                <View style={styles.row}>
                    <FontAwesome5
                        name={day3icon}
                        size={26}
                        color='#fd4e4e'
                        style={styles.icon}
                    />
                    <Checkbox storeId="@3_1" adonis={false} />
                    <Checkbox storeId="@3_2" adonis={false} />
                    <Checkbox storeId="@3_3" adonis={false} />
                    <Checkbox storeId="@3_4" adonis={false} />
                    <Checkbox storeId="@3_5" adonis={false} />
                    <Checkbox storeId="@3_6" adonis={false} />
                    <Checkbox storeId="@3_7" adonis={false} />
                </View>
                <View style={styles.row}>
                    <FontAwesome5
                        name={day4icon}
                        size={26}
                        color='#fd4e4e'
                        style={styles.icon}
                    />
                    <Checkbox storeId="@4_1" adonis={false} />
                    <Checkbox storeId="@4_2" adonis={false} />
                    <Checkbox storeId="@4_3" adonis={false} />
                    <Checkbox storeId="@4_4" adonis={false} />
                    <Checkbox storeId="@4_5" adonis={false} />
                    <Checkbox storeId="@4_6" adonis={false} />
                    <Checkbox storeId="@4_7" adonis={false} />
                </View>
                <View style={styles.row}>
                    <FontAwesome5
                        name={day5icon}
                        size={26}
                        color='#fd4e4e'
                        style={styles.icon}
                    />
                    <Checkbox storeId="@5_1" adonis={false} />
                    <Checkbox storeId="@5_2" adonis={false} />
                    <Checkbox storeId="@5_3" adonis={false} />
                    <Checkbox storeId="@5_4" adonis={false} />
                    <Checkbox storeId="@5_5" adonis={false} />
                    <Checkbox storeId="@5_6" adonis={false} />
                    <Checkbox storeId="@5_7" adonis={false} />
                </View>
            </View>
            <FontAwesome5 name="redo" size={40} color="#fd4e4e" style={styles.title} onPress={createThreeButtonAlert} />
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
        position: 'relative',
        width: 32,
        height: 32
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
