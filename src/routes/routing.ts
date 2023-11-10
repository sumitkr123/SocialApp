import React from 'react';

import {Login} from '@/screens/auth/login';
import {Register} from '@/screens/auth/register';
import {RootAuthStackParamList, RootStackParamList} from '@/types/navigation';
import {Auth} from './Routes';

export const NativeStackRouteList: Array<{
  name: keyof RootStackParamList;
  component: (...event: any) => React.ReactNode;
}> = [
  {
    name: 'Auth',
    component: Auth,
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
