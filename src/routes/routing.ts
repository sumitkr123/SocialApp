import React from 'react';

import {Login} from '@/screens/auth/login';
import {Register} from '@/screens/auth/register';
import {Create} from '@/screens/core/create';
import {Explore} from '@/screens/core/explore';
import {Home} from '@/screens/core/home';
import {Notification} from '@/screens/core/notification';
import {Profile} from '@/screens/core/profile';
import {
  RootAuthStackParamList,
  RootBottomTabParamList,
  RootStackParamList,
} from '@/types/navigation';
import {Auth, BottomTabNavigator} from './Routes';

export const NativeStackRouteList: Array<{
  name: keyof RootStackParamList;
  component: (...event: any) => React.ReactNode;
}> = [
  {
    name: 'Auth',
    component: Auth,
  },
  {
    name: 'BottomNavBar',
    component: BottomTabNavigator,
  },
];

export const NativeBottomRouteList: Array<{
  name: keyof RootBottomTabParamList;
  component: (...event: any) => React.ReactNode;
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
    name: 'CreatePost',
    component: Create,
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
