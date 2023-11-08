import React from 'react';

import {MaterialCommunityIconsType} from '@/lib/utils';
import {
  KeyboardTypeOptions,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';
import {CustomIconProps} from '../Icon';

type InputProps = {
  icon?: (props: CustomIconProps) => React.ReactNode;
  iconName?: keyof MaterialCommunityIconsType;
  type?: 'text' | 'email' | 'password' | 'number';
  disabled?: boolean;
  placeholder?: string;
  inputStyle?: TextStyle;
  contentVisible?: boolean;
} & TextInputProps;

export const Input = (props: InputProps): React.ReactNode => {
  const {type, contentVisible} = props;

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
        keyType = 'visible-password';
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
    if (contentVisible) {
      return false;
    } else if (type === 'password') {
      if (contentVisible === false) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }, [type, contentVisible]);

  return (
    <View>
      <TextInput
        keyboardType={keyBoardType}
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  );
};

/**
 * <Input
 * icon={<Icon name="account" color="black" size={25} />}
 * iconName={"account"}
 * type="email"
 * disabled={true}
 * placeholder={"helque"}
 * className="bg-red-500"
 * inputStyle={}
 * />
 */
