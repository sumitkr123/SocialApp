import React from 'react';

import {CustomIconProps} from '@/types/common';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Icon = (props: CustomIconProps): React.ReactNode => {
  const {name, size, color, ...rest} = props;

  return (
    <MaterialCommunityIcons name={name} size={size} color={color} {...rest} />
  );
};
