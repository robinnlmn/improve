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
              <Ionicons name='calendar-sharp' size={50} color='#fd4e4e'/>
              <Text style={styles.days1}>mon</Text>
              <Text style={styles.days2}>tue</Text>
              <Text style={styles.days3}>wed</Text>
              <Text style={styles.days4}>thu</Text>
              <Text style={styles.days5}>fri</Text>
              <Text style={styles.days6}>sat</Text>
              <Text style={styles.days7}>sun</Text>
            </View>
            <View style={styles.row}>
                <Tooltip popover={<Text>journal</Text>} overlayColor='transparent' backgroundColor='#222' actionType='press'>
                  <Ionicons name='md-bookmark' size={54} color='#fd4e4e'/>
                </Tooltip>
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
            </View>
            <View style={styles.row}>
                <Tooltip popover={<Text>excercise</Text>} overlayColor='transparent' backgroundColor='#222' actionType='press'>
                  <Ionicons name='body' size={54} color='#fd4e4e'/>
                </Tooltip>
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
            </View>
            <View style={styles.row}>
                <Tooltip popover={<Text>read</Text>} overlayColor='transparent' backgroundColor='#222' actionType='press'>
                  <Ionicons name='journal' size={54} color='#fd4e4e'/>
                </Tooltip>
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
            </View>
            <View style={styles.row}>
                <Tooltip popover={<Text>learn</Text>} overlayColor='transparent' backgroundColor='#222' actionType='press'>
                  <Ionicons name='md-school' size={54} color='#fd4e4e'/>
                </Tooltip>
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
            </View>
            <View style={styles.row}>
                <Tooltip popover={<Text>meditate</Text>} overlayColor='transparent' backgroundColor='#222' actionType='press'>
                  <Ionicons name='leaf' size={54} color='#fd4e4e'/>
                </Tooltip>
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
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
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    grid: {
        display: 'flex',
        flexDirection: 'row',
        transform: [{ scale: 105/100 }]
    },
    row: {
        display: 'flex',
        flexDirection: 'column',
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
        top: '17%',
        fontWeight: '800',
    },
    days2: {
        color: '#fd4e4e',
        position: 'absolute',
        top: '29%',
        fontWeight: '800',
    },
    days3: {
        color: '#fd4e4e',
        position: 'absolute',
        top: '42%',
        fontWeight: '800',
    },
    days4: {
        color: '#fd4e4e',
        position: 'absolute',
        top: '54%',
        fontWeight: '800',
    },
    days5: {
        color: '#fd4e4e',
        position: 'absolute',
        top: '67%',
        fontWeight: '800',
    },
    days6: {
        color: '#fd4e4e',
        position: 'absolute',
        top: '79%',
        fontWeight: '800',
    },
    days7: {
        color: '#fd4e4e',
        position: 'absolute',
        top: '92%',
        fontWeight: '800',
    },
});
    