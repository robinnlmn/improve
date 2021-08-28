/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import ModalScreen from '../screens/ModalScreen';
import NotificationScreen from '../screens/NotificationScreen';
import HowToEatScreen from '../screens/HowToEatScreen';
import TutorialScreen from '../screens/TutorialScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import MeditateScreen from '../screens/MeditateScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import SkillsScreen from '../screens/SkillsScreen';
import JournalScreen from '../screens/JournalScreen';
import HabitTrackerScreen from '../screens/HabitTrackerScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="settings" component={ModalScreen} />
        <Stack.Screen name="notifications" component={NotificationScreen} />
        
        <Stack.Screen // @ts-ignore 
          name="how to eat" 
          component={HowToEatScreen} 
        />
        <Stack.Screen // @ts-ignore 
          name="tutorial" 
          component={TutorialScreen} 
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HabitTracker"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      {/*<BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      */}
      <BottomTab.Screen
        // @ts-ignore
        name="     "
        component={JournalScreen}
        options={{
          headerTitle: 'journal',
          tabBarIcon: ({ color }) => <TabBarIonicon name="bookmark" color={color} />,
        }}
      />
      <BottomTab.Screen
        // @ts-ignore
        name=" "
        component={ExerciseScreen}
        options={{
          headerTitle: 'fitness',
          tabBarIcon: ({ color }) => <TabBarIonicon name="body" color={color} />,
        }}
      />
      <BottomTab.Screen
        // @ts-ignore
        name="  "
        component={HabitTrackerScreen}
        // @ts-ignore
        options={({ navigation }: RootTabScreenProps<'HabitTracker'>) => ({
          headerTitle: 'tracker',
          tabBarIcon: ({ color }) => <TabBarIonicon name="layers" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('settings')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Ionicons
                name="settings-sharp"
                size={30}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('notifications')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <Ionicons
                name="notifications-sharp"
                size={30}
                color={Colors[colorScheme].text}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        // @ts-ignore
        name="    "
        component={SkillsScreen}
        options={{
          headerTitle: 'skills',
          tabBarIcon: ({ color }) => <TabBarIonicon name="play" color={color} />,
        }}
      />
      <BottomTab.Screen
        // @ts-ignore
        name="   "
        component={MeditateScreen}
        options={{
          headerTitle: 'meditation',
          tabBarIcon: ({ color }) => <TabBarIonicon name="leaf" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
 function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

function TabBarIonicon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={26} style={{ marginBottom: -13 }} {...props} />;
}
