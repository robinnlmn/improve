import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import JournalCard from '../components/JournalCard';
import { View, Text } from '../components/Themed';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import { RootTabScreenProps } from '../types';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function JournalScreen({ navigation }: RootTabScreenProps<'Journal'>) {
  const [journal, setJournal] = React.useState([
    {
      id: 1,
      date: "01/01/22",
      name: "tutorial",
      value: "press the + icon on the top to create a new day"
    }
  ])
  const [example, setExample] = React.useState([
    {
      id: 1,
      date: "01/01/22",
      name: "tutorial",
      value: "press the PEN icon on the top to create a new day"
    }
  ])

  const colorScheme = useColorScheme()

  React.useEffect(() => {
    async function getData() {
      try {
        const data = await AsyncStorage.getItem('@journal')
        if (data !== null && data !== undefined) {
          var days = []
          days.push(journal !== null)
          days.push()

          setJournal(JSON.parse(data))
        }
      } catch (error) {

      }
    }

    setInterval(() => { getData() }, 200)
  }, [])

  return (
    <ScrollView style={{ backgroundColor: Colors[colorScheme].background }}>
      <View style={styles.container}>
        {/* <TouchableOpacity style={styles.button} onPress={() => {
          if (Platform.OS === 'ios') {
            Linking.openURL('mobilenotes://')
          }
          else {
            Linking.openURL('https://mobilenotes')
          }
        }}>
          <Text style={styles.title}>OPEN NOTES</Text>
        </TouchableOpacity> */}

        <FontAwesome5 name="pen" size={40} color="#fd4e4e" style={{ marginTop: 25, marginBottom: 15 }} onPress={() => { navigation.navigate('JournalCreateScreen') }} />

        {
          journal?.map((journal, index) => (
            journal === null ? (
              <View></View>
            ) : (
              <JournalCard key={index} value={journal} navigation={navigation} index={index} />
            )
          ))
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
