import React from 'react';

import {ScreenWrapper} from '@/components/ui/ScreenWrapper';
import {CreateProps} from '@/types/navigation';
import {Text} from 'react-native';

export const Create = (props: CreateProps): React.ReactNode => {
  const {route, navigation} = props;

  return (
    <ScreenWrapper>
      <Text className="text-black dark:text-white">Create</Text>
    </ScreenWrapper>
  );
};
