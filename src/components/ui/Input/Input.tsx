import React from 'react';

import {MaterialCommunityIconsType, cn} from '@/lib/utils';
import {useTheme} from '@/providers/ThemeProvider';
import {
  ColorValue,
  InputModeOptions,
  KeyboardTypeOptions,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Icon} from '../Icon';

type PassInputProps = {
  type: 'password';
  contentVisible?: boolean;
  wantEye?: boolean;
};

type SimpleInputProps = {
  type: 'text';
};

type EmailInputProps = {
  type: 'email';
};

type NumberInputProps = {
  type: 'number';
};

type CommonProps = {
  icon?: React.ReactNode;
  iconName?: keyof MaterialCommunityIconsType;
  iconSize?: number;
  iconColor?: ColorValue;
  disabled?: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
} & TextInputProps;

type InputProps = (
  | SimpleInputProps
  | PassInputProps
  | EmailInputProps
  | NumberInputProps
) &
  CommonProps;

export const Input = React.forwardRef(
  (props: InputProps, ref): React.ReactNode => {
    const {
      type,
      disabled,
      style,
      inputStyle,
      className,
      icon,
      iconName,
      iconSize,
      iconColor,
    } = props;

    const [visiblePass, setVisiblePass] = React.useState(
      type === 'password' && props.contentVisible
        ? props.contentVisible
        : false,
    );

    const {isThemeDark} = useTheme();

    const keyBoardType = React.useMemo(() => {
      let keyType: KeyboardTypeOptions = 'default';
      switch (type) {
        case 'email':
          keyType = 'email-address';
          break;

        case 'number':
          keyType = 'numeric';
          break;

        case 'password':
          keyType = 'default';
          break;

        default:
          break;
      }

      return keyType;
    }, [type]);

    const textContentType = React.useMemo(() => {
      let textType:
        | 'none'
        | 'URL'
        | 'addressCity'
        | 'addressCityAndState'
        | 'addressState'
        | 'countryName'
        | 'creditCardNumber'
        | 'emailAddress'
        | 'familyName'
        | 'fullStreetAddress'
        | 'givenName'
        | 'jobTitle'
        | 'location'
        | 'middleName'
        | 'name'
        | 'namePrefix'
        | 'nameSuffix'
        | 'nickname'
        | 'organizationName'
        | 'postalCode'
        | 'streetAddressLine1'
        | 'streetAddressLine2'
        | 'sublocality'
        | 'telephoneNumber'
        | 'username'
        | 'password'
        | 'newPassword'
        | 'oneTimeCode' = 'name';

      switch (type) {
        case 'email':
          textType = 'emailAddress';
          break;

        case 'number':
          textType = 'telephoneNumber';
          break;

        case 'password':
          textType = 'password';
          break;

        default:
          break;
      }

      return textType;
    }, [type]);

    const secureTextEntry = React.useMemo(() => {
      if (type === 'password') {
        if (visiblePass === false) {
          return true;
        } else {
          return false;
        }
      }
    }, [type, props, visiblePass]);

    const inputMode = React.useMemo(() => {
      let newInputMode: InputModeOptions = 'text';

      switch (type) {
        case 'email':
          newInputMode = 'email';
          break;

        case 'number':
          newInputMode = 'numeric';
          break;

        case 'password':
          newInputMode = 'text';
          break;

        default:
          break;
      }

      return newInputMode;
    }, [type]);

    const _renderIcon = React.useCallback(() => {
      let fielblock: React.ReactNode = <></>;

      if (iconName) {
        fielblock = (
          <Icon
            name={iconName}
            size={iconSize || 25}
            color={iconColor ? iconColor : isThemeDark ? 'white' : 'black'}
          />
        );
      }
      if (icon) {
        fielblock = icon;
      }
      if (icon && iconName) {
        fielblock = icon;
      }

      return fielblock;
    }, [icon, iconName, iconSize, iconColor, isThemeDark]);

    const _renderEyeIcon = React.useCallback(() => {
      let fielblock: React.ReactNode = <></>;

      if (type === 'password') {
        fielblock = (
          <Icon
            name={'eye'}
            size={iconSize || 25}
            color={iconColor ? iconColor : isThemeDark ? 'white' : 'black'}
            onPress={() => {
              setVisiblePass(prev => !prev);
            }}
          />
        );
      }
      if (type === 'password' && props.wantEye === false) {
        fielblock = <></>;
      }

      return fielblock;
    }, [type, props, iconColor, iconSize]);

    return (
      <View
        style={[{height: hp(8)}, style]}
        className={cn(
          'flex flex-row w-full border-gray-400 items-center dark:border-white border-[1.5px] rounded-lg px-2',
          className,
        )}>
        {_renderIcon()}
        <TextInput
          editable={!disabled}
          style={[
            {flex: 1, marginLeft: 8},
            !icon && !iconName && {marginLeft: 0},
            inputStyle,
          ]}
          className="text-black dark:text-white"
          keyboardType={keyBoardType}
          textContentType={textContentType}
          secureTextEntry={secureTextEntry}
          inputMode={inputMode}
          {...props}
        />
        {_renderEyeIcon()}
      </View>
    );
  },
);
