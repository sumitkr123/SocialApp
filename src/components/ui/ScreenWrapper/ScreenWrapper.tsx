import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

type ScreenWrapperProps = {
  children: React.ReactNode;
};

export const ScreenWrapper = React.memo(
  ({children}: ScreenWrapperProps): React.JSX.Element => {
    return (
      <SafeAreaView className="flex flex-col flex-1 bg-white dark:bg-black">
        {children}
      </SafeAreaView>
    );
  },
);
