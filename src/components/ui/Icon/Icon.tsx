import React from 'react';

import {CustomIconProps} from '@/types/common';

import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Icon = (props: CustomIconProps): React.ReactNode => {
  const {family, name, size, color, ...rest} = props;

  let icon: React.ReactNode = <></>;

  switch (family) {
    case 'AntDesign':
      icon = <AntDesignIcons name={name} size={size} color={color} {...rest} />;
      break;

    case 'Entypo':
      icon = <EntypoIcons name={name} size={size} color={color} {...rest} />;
      break;

    case 'Feather':
      icon = <FeatherIcons name={name} size={size} color={color} {...rest} />;
      break;

    case 'Ionicons':
      icon = <Ionicons name={name} size={size} color={color} {...rest} />;
      break;

    case 'MaterialCommunity':
      icon = (
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color}
          {...rest}
        />
      );
      break;

    default:
      break;
  }

  return icon;
};
