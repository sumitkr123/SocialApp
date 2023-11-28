import React from 'react';

import {PreferencesContext} from '@/contexts/ThemeContext';
import {useColorScheme} from 'nativewind';
import {useColorScheme as useDeviceColorScheme} from 'react-native';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const useTheme = () => React.useContext(PreferencesContext);

export const ThemeProvider = (props: ThemeProviderProps): React.ReactNode => {
  const {colorScheme: nativeColorScheme, toggleColorScheme} = useColorScheme();

  const colorScheme = useDeviceColorScheme();

  const isThemeDark = React.useMemo(() => {
    return nativeColorScheme === 'dark';
  }, [nativeColorScheme]);

  const {children} = props;

  const toggleTheme = React.useCallback(() => {
    toggleColorScheme();
  }, [isThemeDark, nativeColorScheme]);

  React.useEffect(() => {
    if (isThemeDark !== (colorScheme === 'dark')) {
      toggleTheme();
    }
  }, [colorScheme, isThemeDark]);

  return (
    <PreferencesContext.Provider value={{isThemeDark, toggleTheme}}>
      {children}
    </PreferencesContext.Provider>
  );
};
