import React from 'react';

import {ScreenWrapper} from '@/components/ui/ScreenWrapper';
import {Text} from 'react-native';

type NotificationProps = {};

export const Notification = (props: NotificationProps): React.ReactNode => {
  return (
    <ScreenWrapper>
      <Text className="text-black dark:text-white">Notification</Text>
    </ScreenWrapper>
  );
};
