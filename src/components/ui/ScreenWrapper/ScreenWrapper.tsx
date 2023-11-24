import React from 'react';

import {cn} from '@/lib/utils';

import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

type ScreenWrapperProps = {
  children: React.ReactNode;
} & SafeAreaViewProps;

export const ScreenWrapper = React.memo(
  ({children, className, ...rest}: ScreenWrapperProps): React.JSX.Element => {
    return (
      <SafeAreaView
        className={cn('flex flex-col flex-1 bg-white dark:bg-black', className)}
        {...rest}>
        {children}
      </SafeAreaView>
    );
  },
);
