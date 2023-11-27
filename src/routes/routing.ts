import React from 'react';

import {Login} from '@/screens/auth/login';
import {Register} from '@/screens/auth/register';
import {Explore} from '@/screens/core/explore';
import {Home} from '@/screens/core/home';
import {Notification} from '@/screens/core/notification';
import {Profile} from '@/screens/core/profile';
import {Create} from '@/screens/other/create';
import {StoryScreen} from '@/screens/other/homeStack';
import {
  RootAuthStackParamList,
  RootBottomTabParamList,
  RootStackParamList,
} from '@/types/navigation';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Auth, BottomTabNavigator} from './Routes';

export const NativeStackRouteList: Array<{
  name: keyof RootStackParamList;
  component: (...event: any) => React.ReactNode;
  options?:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<RootStackParamList, keyof RootStackParamList>;
        navigation: any;
      }) => NativeStackNavigationOptions);
}> = [
  {
    name: 'Auth',
    component: Auth,
  },
  {
    name: 'BottomNavBar',
    component: BottomTabNavigator,
  },
  {
    name: 'CreatePost',
    component: Create,
    options: {
      presentation: 'modal',
      animation: 'slide_from_bottom',
    },
  },
  {
    name: 'StoryScreen',
    component: StoryScreen,
  },
];

export const NativeBottomRouteList: Array<{
  name: keyof RootBottomTabParamList;
  component: (...event: any) => React.ReactNode;
  options?:
    | BottomTabNavigationOptions
    | ((props: {
        route: RouteProp<RootBottomTabParamList, keyof RootBottomTabParamList>;
        navigation: any;
      }) => BottomTabNavigationOptions);
}> = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Explore',
    component: Explore,
  },
  {
    name: 'Notification',
    component: Notification,
  },
  {
    name: 'Profile',
    component: Profile,
  },
];

export const AuthStackRouteList: Array<{
  name: keyof RootAuthStackParamList;
  component: (...event: any) => React.ReactNode;
  options?:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<RootAuthStackParamList, keyof RootAuthStackParamList>;
        navigation: any;
      }) => NativeStackNavigationOptions);
}> = [
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Register',
    component: Register,
  },
];
