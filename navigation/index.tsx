/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
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
import AestheticBodyScreen from '../screens/AestheticBodyScreen';

import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import MeditateScreen from '../screens/MeditateScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import SkillsScreen from '../screens/SkillsScreen';
import JournalScreen from '../screens/JournalScreen';
import HabitTrackerScreen from '../screens/HabitTrackerScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import AwkwardScreen from '../screens/AwkwardScreen';
import FamilyScreen from '../screens/FamilyScreen';
import DopamineScreen from '../screens/DopamineScreen';
import JournalCardScreen from '../screens/JournalCardScreen';
import JournalCreateScreen from '../screens/JournalCreateScreen';

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
      <Stack.Group screenOptions={{ presentation: 'card' }}>
        <Stack.Screen name="settings" component={ModalScreen} />
        <Stack.Screen name="notifications" component={NotificationScreen} />

        <Stack.Screen name="JournalCardScreen" component={JournalCardScreen} options={{ headerTitle: 'YOUR DAY' }} />
        <Stack.Screen name="JournalCreateScreen" component={JournalCreateScreen} options={{ headerTitle: 'create' }} />

        <Stack.Screen // @ts-ignore 
          name="how to eat"
          component={HowToEatScreen}
        />
        <Stack.Screen // @ts-ignore 
          name="tutorial"
          component={TutorialScreen}
        />
        <Stack.Screen // @ts-ignore 
          name="aesthetic body"
          component={AestheticBodyScreen}
        />
        <Stack.Screen // @ts-ignore 
          name="feeling awkward"
          component={AwkwardScreen}
        />
        <Stack.Screen // @ts-ignore 
          name="family"
          component={FamilyScreen}
        />
        <Stack.Screen // @ts-ignore 
          name="dopamine detox"
          component={DopamineScreen}
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
      // @ts-ignore
      initialRouteName="  "
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].red,
      }}>
      <BottomTab.Screen
        // @ts-ignore
        name=" "
        component={ExerciseScreen}
        // @ts-ignore
        options={({ navigation }: RootTabScreenProps<'Exercise'>) => ({
          headerTitle: 'fitness',
          tabBarIcon: ({ color }) => <TabBarIonicon name="body" color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('notifications')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialIcons
                name="notifications"
                size={30}
                color={Colors[colorScheme].tabIconDefault}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('settings')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialIcons
                name="settings"
                size={30}
                color={Colors[colorScheme].tabIconDefault}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
      <BottomTab.Screen
        // @ts-ignore
        name="     "
        component={JournalScreen}
        // @ts-ignore
        options={({ navigation }: RootTabScreenProps<'Journal'>) => ({
          headerTitle: 'journal',
          tabBarIcon: ({ color }) => <TabBarIonicon name="md-bookmark" color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('notifications')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialIcons
                name="notifications"
                size={30}
                color={Colors[colorScheme].tabIconDefault}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('settings')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialIcons
                name="settings"
                size={30}
                color={Colors[colorScheme].tabIconDefault}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
      <BottomTab.Screen
        // @ts-ignore
        name="  "
        component={HabitTrackerScreen}
        // @ts-ignore
        options={({ navigation }: RootTabScreenProps<'HabitTracker'>) => ({
          headerTitle: 'tracker',
          tabBarIcon: ({ color }) => <TabBarIonicon name="layers" color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('notifications')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialIcons
                name="notifications"
                size={30}
                color={Colors[colorScheme].tabIconDefault}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('settings')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialIcons
                name="settings"
                size={30}
                color={Colors[colorScheme].tabIconDefault}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
      <BottomTab.Screen
        // @ts-ignore
        name="    "
        component={SkillsScreen}
        // @ts-ignore
        options={({ navigation }: RootTabScreenProps<'Skills'>) => ({
          headerTitle: 'skills',
          tabBarIcon: ({ color }) => <TabBarIonicon name="play" color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('notifications')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialIcons
                name="notifications"
                size={30}
                color={Colors[colorScheme].tabIconDefault}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('settings')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialIcons
                name="settings"
                size={30}
                color={Colors[colorScheme].tabIconDefault}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
      <BottomTab.Screen
        // @ts-ignore
        name="   "
        component={MeditateScreen}
        // @ts-ignore
        options={({ navigation }: RootTabScreenProps<'Meditate'>) => ({
          headerTitle: 'meditation',
          tabBarIcon: ({ color }) => <TabBarIonicon name="leaf" color={color} />,
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.navigate('notifications')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialIcons
                name="notifications"
                size={30}
                color={Colors[colorScheme].tabIconDefault}
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('settings')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <MaterialIcons
                name="settings"
                size={30}
                color={Colors[colorScheme].tabIconDefault}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
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
  return <Ionicons size={26} style={{ marginBottom: -22 }} {...props} />;
}
