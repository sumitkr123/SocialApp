import React from 'react';

import {ScreenWrapper} from '@/components/ui/ScreenWrapper';
import {Text} from 'react-native';

type ExploreProps = {};

export const Explore = (props: ExploreProps): React.ReactNode => {
  return (
    <ScreenWrapper>
      <Text className="text-black dark:text-white">Explore</Text>
    </ScreenWrapper>
  );
};
