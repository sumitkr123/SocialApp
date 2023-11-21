import React from 'react';

import {
  AntDisignIconsType,
  EntypoIconsType,
  FeatherIconsType,
  IoniIconsType,
  MaterialCommunityIconsType,
} from '@/types/common';
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import {Animated, Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {EdgeInsets} from 'react-native-safe-area-context';
import {Icon} from '../Icon';

export const CustomBottomTabBar = React.memo(
  ({
    state,
    descriptors,
    navigation,
  }: {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    insets: EdgeInsets;
  }): React.JSX.Element => {
    const [focusedTab, setFocusedTab] = React.useState(0);
    const mappable = [0, 1, 2, 3, 4];

    const topMargins = mappable.map((item, index) => {
      return React.useState(
        index === focusedTab
          ? new Animated.Value(-25)
          : new Animated.Value(-10),
      )[0];
    });

    React.useEffect(() => {
      topMargins.forEach((s, index) => {
        let value = focusedTab === index ? -25 : -10;
        Animated.timing(s, {
          toValue: value,
          duration: 200,
          useNativeDriver: false,
        }).start();
      });
    }, [focusedTab]);

    return (
      <View className="absolute flex flex-row justify-around w-full bottom-0 h-[75px] bg-slate-300 rounded-t-[40px]">
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Animated.View
              key={index}
              onTouchEnd={() => {
                setFocusedTab(index);
                onPress();
              }}
              style={{
                marginTop: topMargins[index],
              }}
              className={`flex justify-center items-center py-2 ${
                isFocused
                  ? `z-0 rounded-full border-black border-[1.5px] w-16 h-16 bg-indigo-600`
                  : ''
              }`}>
              <NavigationIcon
                route={label}
                isFocused={isFocused}
                options={options}
              />
            </Animated.View>
          );
        })}
      </View>
    );
  },
);

const NavigationIcon = React.memo(
  ({
    route,
    isFocused,
    options,
  }: {
    route: string;
    isFocused: boolean;
    options: BottomTabNavigationOptions;
  }): React.JSX.Element => {
    let icon: {
      family:
        | 'AntDesign'
        | 'Entypo'
        | 'Feather'
        | 'Ionicons'
        | 'MaterialCommunity';
      name:
        | keyof AntDisignIconsType
        | keyof EntypoIconsType
        | keyof FeatherIconsType
        | keyof MaterialCommunityIconsType
        | keyof IoniIconsType;
    } = {
      family: 'AntDesign',
      name: 'symbol',
    };
    let label = '';
    switch (route) {
      case 'Home':
        label = 'Home';
        icon.family = 'Ionicons';
        icon.name = 'home';
        break;

      case 'Explore':
        label = 'Explore';
        icon.family = 'Feather';
        icon.name = 'search';
        break;

      case 'CreatePost':
        label = 'Create Post';
        icon.family = 'MaterialCommunity';
        icon.name = 'plus-thick';
        break;

      case 'Notification':
        label = 'Notification';
        icon.family = 'Ionicons';
        icon.name = 'chatbox';
        break;

      case 'Profile':
        label = 'Profile';
        icon.family = 'MaterialCommunity';
        icon.name = 'account-circle';
        break;
    }

    let fieldBlock = (
      <View
        className={`items-center justify-center rounded-full p-2 ${
          isFocused ? `bg-indigo-600 border-[1.5px] border-white` : ''
        }`}>
        <Icon
          family={icon.family as any}
          name={icon.name as any}
          color={
            isFocused
              ? options.tabBarActiveTintColor
              : options.tabBarInactiveTintColor
          }
          size={wp(6.5)}
        />
        {options.tabBarShowLabel === true && (
          <Text
            className="font-redhatmedium"
            style={{
              fontSize: wp(3.8),
              color: isFocused
                ? options.tabBarActiveTintColor
                : options.tabBarInactiveTintColor,
            }}>
            {label?.split(' ')?.at(0)}
          </Text>
        )}
      </View>
    );

    return fieldBlock;
  },
);
