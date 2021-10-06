/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  settings: undefined;
  notifications: undefined;
  how_to_eat: undefined;
  JournalCreateScreen: undefined;
  JournalCardScreen: undefined;
  JournalCard: undefined;
  Journal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Exercise: undefined;
  HabitTracker: undefined;
  Skills: undefined;
  Meditate: undefined;
  Journal: undefined;
  howToEat: undefined;
  tutorial: undefined;
  aestheticBody: undefined;
  awkward: undefined;
  family: undefined;
  dopamine: undefined;
  JournalCard: undefined;
  JournalCardScreen: undefined;
  JournalCreateScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
