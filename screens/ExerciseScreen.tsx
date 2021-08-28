import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import { RootTabScreenProps } from '../types';

export default function ExcerciseScreen({ navigation }: RootTabScreenProps<'Exercise'>) {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.cubeContainer}>
                <Text style={styles.text}>1</Text>
                </View>
                <View style={styles.cubeContainer1}>
                <Text style={styles.text}>2</Text>
                </View>
            </View>
            <View style={styles.wrapper}>
                <View style={styles.cubeContainer}>
                <Text style={styles.text}>3</Text>
                </View>
                <View style={styles.cubeContainer1}>
                <Text style={styles.text}>4</Text>
                </View>
            </View>
            <View style={styles.wrapper}>
                <View style={styles.cubeContainer}>
                <Text style={styles.text}>5</Text>
                </View>
                <View style={styles.cubeContainer1}>
                <Text style={styles.text}>6</Text>
                </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
      },
      text: {
        fontWeight: 'bold',
        fontSize: 20
      },
      blockContainer: {
        width: '90%',
        height: 90,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 10
      },
      cubeContainer: {
        width: '45%',
        height: 170,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 10,
        marginRight: 5
      },
      cubeContainer1: {
        width: '45%',
        height: 170,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 10,
        marginLeft: 5
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'row',
      }
});
