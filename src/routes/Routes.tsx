import React from 'react';

import {RootAuthStackParamList, RootStackParamList} from '@/types/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthStackRouteList, NativeStackRouteList} from './routing';

const AuthStack = createNativeStackNavigator<RootAuthStackParamList>();

const NativeStack = createNativeStackNavigator<RootStackParamList>();

export const Auth = (): React.JSX.Element => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        orientation: 'portrait',
        headerShown: false,
      }}>
      {AuthStackRouteList.map((item, index) => {
        return (
          <AuthStack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </AuthStack.Navigator>
  );
};

export const Routes = (): React.JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NativeStack.Navigator
          screenOptions={{
            orientation: 'portrait',
            headerShown: false,
          }}>
          {NativeStackRouteList.map((item, index) => {
            return (
              <NativeStack.Screen
                key={item.name}
                name={item.name}
                component={item.component}
              />
            );
          })}
        </NativeStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
