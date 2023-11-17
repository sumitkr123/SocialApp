import React from 'react';

import {ScreenWrapper} from '@/components/ui/ScreenWrapper';
import {Text} from 'react-native';

type CreateProps = {};

export const Create = (props: CreateProps): React.ReactNode => {
  return (
    <ScreenWrapper>
      <Text className="text-black dark:text-white">Create</Text>
    </ScreenWrapper>
  );
};
