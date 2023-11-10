import React from 'react';

import {cn} from '@/lib/utils';
import {CheckBoxProps} from '@/types/common';
import {View} from 'react-native';
import {Icon} from '../Icon';

export const CheckBox = (props: CheckBoxProps): React.ReactNode => {
  const {isChecked, onChecked, variant, className, ...rest} = props;

  return (
    <View
      {...rest}
      className={cn(
        `flex justify-center items-center h-5 w-5 rounded-[6px] border-[1.5px] border-indigo-700 ${
          variant === 'outlined' ? '' : isChecked && 'bg-indigo-700'
        }`,
        className,
      )}
      onTouchEnd={() => onChecked(!isChecked)}>
      {isChecked && (
        <Icon
          name="check"
          size={17}
          color={variant === 'filled' ? 'white' : '#5738c2'}
        />
      )}
    </View>
  );
};
