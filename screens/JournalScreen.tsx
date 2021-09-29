import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import JournalCard from '../components/JournalCard';
import { View, Text } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';

import { RootTabScreenProps } from '../types';

export default function JournalScreen({ navigation }: RootTabScreenProps<'Journal'>) {
  const [journal, setJournal] = React.useState([
    {
      date: "29.09.21",
      value: "Today was a nice day this is also a Placeholder Today was a nice day this is also a Placeholder Today was a nice day this is also a Placeholder ",
      name: "HARD"
    },
    {
      date: "28.09.21",
      value: "Today was a nice day this is also a Placeholder Today was a nice day this is also a Placeholder Today was a nice day this is also a Placeholder"
    },
    {
      date: "27.09.21",
      value: "Today was a nice day this is also a Placeholder Today was a nice day this is also a Placeholder Today was a nice day this is also a Placeholder"
    },
  ])

  return (
    <ScrollView>
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

        <AntDesign name="pluscircle" size={44} color="#fd4e4e" style={{ marginTop: 40, marginBottom: 40 }} onPress={() => { navigation.navigate('JournalCreateScreen') }} />

        {
          journal.map((journal) => {
            return (
              <JournalCard key={journal.date} value={journal} navigation={navigation} />
            )
          })
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
