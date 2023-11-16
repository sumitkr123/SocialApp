import React from 'react';

import {CustomBottomTabBar} from '@/components/ui/BottomTabBar';
import {
  RootAuthStackParamList,
  RootBottomTabParamList,
  RootStackParamList,
} from '@/types/navigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  AuthStackRouteList,
  NativeBottomRouteList,
  NativeStackRouteList,
} from './routing';

const AuthStack = createNativeStackNavigator<RootAuthStackParamList>();

const BottomTab = createBottomTabNavigator<RootBottomTabParamList>();

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

export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'rgba(250,250,250,0.8)',
        tabBarInactiveTintColor: 'rgba(0,0,0,1)',
      }}>
      {NativeBottomRouteList.map((item, index) => {
        return (
          <BottomTab.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </BottomTab.Navigator>
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
