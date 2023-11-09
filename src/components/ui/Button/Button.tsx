import React from 'react';

import {cn} from '@/lib/utils';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
  TextProps,
  View,
} from 'react-native';

type ButtonProps = {
  title?: string;
  disabled?: boolean;
  textProps?: TextProps;
  customWidget?: React.ReactNode;
  isLoading?: boolean;
  variant?: 'outlined' | 'filled';
} & PressableProps;

export const Button = (props: ButtonProps): React.ReactNode => {
  const {
    title,
    disabled,
    textProps,
    customWidget,
    isLoading,
    className,
    variant,
    ...rest
  } = props;
  return (
    <Pressable
      {...rest}
      disabled={disabled}
      className={cn(
        `flex flex-1 items-center justify-center rounded-xl ${
          variant === 'outlined'
            ? 'border-indigo-600 border-[1.5px]'
            : disabled
            ? 'bg-indigo-400'
            : 'bg-indigo-600'
        }`,
        className,
      )}>
      {customWidget ? (
        customWidget
      ) : (
        <View className="flex flex-row flex-1 gap-2 items-center justify-center">
          <Text
            {...textProps}
            className={cn(
              `font-redhatmedium ${
                variant === 'outlined' ? 'text-indigo-600' : 'text-white'
              }`,
              textProps?.className,
            )}>
            {title}
          </Text>
          {isLoading && (
            <ActivityIndicator
              size={25}
              color={variant === 'outlined' ? '#6749d1' : 'white'}
            />
          )}
        </View>
      )}
    </Pressable>
  );
};
