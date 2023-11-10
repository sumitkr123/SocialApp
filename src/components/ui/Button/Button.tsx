import React from 'react';

import {cn} from '@/lib/utils';
import {ButtonProps} from '@/types/common';
import {ActivityIndicator, Pressable, Text, View} from 'react-native';

export const Button = (props: ButtonProps): React.ReactNode => {
  const {
    title,
    disabled,
    textProps,
    customWidget,
    isLoading,
    className,
    variant,
    btnClassName,
    rippleColor,
    ...rest
  } = props;
  return (
    <View
      className={cn(
        `flex flex-1 rounded-xl justify-center overflow-hidden`,
        className,
      )}>
      <Pressable
        {...rest}
        disabled={disabled}
        android_ripple={{
          color: rippleColor || 'rgba(129,140,248,0.4)',
          borderless: true,
        }}
        className={cn(
          `flex flex-1 items-center rounded-xl overflow-hidden justify-center ${
            variant === 'outlined'
              ? 'border-indigo-600 border-[1.5px]'
              : disabled
              ? 'bg-indigo-400'
              : 'bg-indigo-600'
          }`,
          btnClassName,
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
                color={variant === 'outlined' ? '#5738c2' : 'white'}
              />
            )}
          </View>
        )}
      </Pressable>
    </View>
  );
};
