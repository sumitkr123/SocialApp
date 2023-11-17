import React from 'react';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from 'react-native-toast-message';

const toastConfig = {
  success: (
    props: React.JSX.IntrinsicAttributes & BaseToastProps,
  ): React.ReactNode => (
    <BaseToast
      {...props}
      style={{borderLeftColor: '#07e02f', height: hp(10)}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontFamily: 'redhatdisplay_bold',
        fontSize: 16,
        fontWeight: '400',
      }}
      text2Style={{
        fontFamily: 'redhatdisplay_medium',
        fontSize: 17,
        fontWeight: '400',
      }}
    />
  ),
  error: (
    props: React.JSX.IntrinsicAttributes & BaseToastProps,
  ): React.ReactNode => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: '#d62404', height: hp(10)}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontFamily: 'redhatdisplay_bold',
        fontSize: 16,
        fontWeight: '400',
      }}
      text2Style={{
        fontFamily: 'redhatdisplay_medium',
        fontSize: 17,
        fontWeight: '400',
      }}
    />
  ),
  info: (
    props: React.JSX.IntrinsicAttributes & BaseToastProps,
  ): React.ReactNode => (
    <BaseToast
      {...props}
      style={{borderLeftColor: '#0978ed', height: hp(10)}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontFamily: 'redhatdisplay_bold',
        fontSize: 16,
        fontWeight: '400',
      }}
      text2Style={{
        fontFamily: 'redhatdisplay_medium',
        fontSize: 17,
        fontWeight: '400',
      }}
    />
  ),
  warning: (
    props: React.JSX.IntrinsicAttributes & BaseToastProps,
  ): React.ReactNode => (
    <BaseToast
      {...props}
      style={{borderLeftColor: '#e88f00', height: hp(10)}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontFamily: 'redhatdisplay_bold',
        fontSize: 16,
        fontWeight: '400',
      }}
      text2Style={{
        fontFamily: 'redhatdisplay_medium',
        fontSize: 17,
        fontWeight: '400',
      }}
    />
  ),
};

export const CustomToast = (): React.ReactNode => {
  return <Toast config={toastConfig} />;
};
