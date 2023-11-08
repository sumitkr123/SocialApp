import React from 'react';

import {MaterialCommunityIconsType} from '@/lib/utils';
import {ColorValue} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type CustomIconProps = {
  name: keyof MaterialCommunityIconsType;
  size?: number;
  color?: number | ColorValue;
} & IconProps;

export const Icon = (props: CustomIconProps): React.ReactNode => {
  const {name, size, color, ...rest} = props;

  return (
    <MaterialCommunityIcons name={name} size={size} color={color} {...rest} />
  );
};
