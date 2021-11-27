import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import { Button, Keyboard, Linking, Platform, StyleSheet, TextInput } from 'react-native';
import ExerciseCard from '../components/ExerciseCard';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import { RootTabScreenProps } from '../types';

export default function VisualizationScreen({ navigation }: RootTabScreenProps<'Visualization'>) {
    const colorScheme = useColorScheme()
    const [goals, setGoals] = React.useState("")

    const save = async () => {
        try {
            await AsyncStorage.setItem('@vis', goals)
            console.log("saved")
        } catch (error) {
            console.error(error)
        }
    }

    React.useEffect(() => {
        async function loadGoals() {
            const goalsGet = await AsyncStorage.getItem('@vis')
            console.log(goalsGet)
            setGoals(goalsGet!)
        }

        loadGoals()
    }, [])

    return (
        <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
            <View style={styles.close}>
                <FontAwesome5 name="check" size={44} color={Colors[colorScheme].red} style={{ marginLeft: 30 }} onPress={() => {
                    Keyboard.dismiss()
                    save()
                }} />
            </View>

            <TextInput
                value={goals}
                onChangeText={text => setGoals(text)}
                style={[styles.dayInput, { color: Colors[colorScheme].text }]}
                onScroll={() => Keyboard.dismiss()}
                multiline={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    close: {
        position: 'absolute',
        backgroundColor: 'transparent',
        top: '1%',
        right: '5%',
        zIndex: 5
    }
});
