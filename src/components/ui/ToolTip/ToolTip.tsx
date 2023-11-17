import React from 'react';

import {useTheme} from '@/providers/ThemeProvider';
import {Text} from 'react-native';
import Tooltip from 'rn-tooltip';

type ToolTipProps = {
  text: string;
  children?: React.ReactNode;
};

export const ToolTip = (props: ToolTipProps): React.ReactNode => {
  const {text, children} = props;

  const {isThemeDark} = useTheme();

  return (
    <Tooltip
      backgroundColor={isThemeDark ? 'white' : '#2e2e2d'}
      withOverlay={false}
      actionType="longPress"
      popover={
        <Text className="font-redhatmedium text-white dark:text-black">
          {text}
        </Text>
      }>
      {children}
    </Tooltip>
  );
};
