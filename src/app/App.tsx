import React from 'react';

import {ThemeProvider} from '@/providers/ThemeProvider';
import {Routes} from '@/routes';
import {Platform} from 'react-native';
import {PERMISSIONS, requestMultiple} from 'react-native-permissions';

const App = (): React.ReactNode => {
  React.useMemo(async () => {
    const askingPerMissions = async () => {
      if (Platform.OS === 'android') {
        try {
          const statuses = await requestMultiple([
            PERMISSIONS.ANDROID.CAMERA,
            PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
            PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
            PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
          ]);

          console.log('ANDROID Camera', statuses[PERMISSIONS.ANDROID.CAMERA]);
          console.log(
            'ANDROID Media Images',
            statuses[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES],
          );
          console.log(
            'ANDROID Read Storage',
            statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
          );
          console.log(
            'ANDROID Write Storage',
            statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE],
          );
        } catch (error) {
          console.log('ANDROID Error', error);
        }
      }
      if (Platform.OS === 'ios') {
        try {
          const statuses = await requestMultiple([
            PERMISSIONS.IOS.CAMERA,
            PERMISSIONS.IOS.MEDIA_LIBRARY,
            PERMISSIONS.IOS.PHOTO_LIBRARY,
          ]);

          console.log('IOS Camera', statuses[PERMISSIONS.IOS.CAMERA]);
          console.log(
            'IOS Media Images',
            statuses[PERMISSIONS.IOS.MEDIA_LIBRARY],
          );
          console.log(
            'IOS Read Storage',
            statuses[PERMISSIONS.IOS.PHOTO_LIBRARY],
          );
        } catch (error) {
          console.log('IOS Error', error);
        }
      }
    };

    await askingPerMissions();
  }, []);

  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
