import AntDisignIcons from '@/lib/AntDesign.json';
import EntypoIcons from '@/lib/Entypo.json';
import FeatherIcons from '@/lib/Feather.json';
import IoniIcons from '@/lib/Ionicons.json';

import MaterialCommunityIcons from '@/lib/MaterialCommunityIcons.json';

import {ControllerRenderProps, FieldPath, FieldValues} from 'react-hook-form';
import {
  ColorValue,
  PressableProps,
  TextInputProps,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';

export type AntDisignIconsType = typeof AntDisignIcons;
export type EntypoIconsType = typeof EntypoIcons;
export type MaterialCommunityIconsType = typeof MaterialCommunityIcons;
export type FeatherIconsType = typeof FeatherIcons;
export type IoniIconsType = typeof IoniIcons;

export type CommonIconProps = {
  size?: number;
  color?: number | ColorValue;
} & IconProps;

export type CustomIconProps = (
  | {family: 'AntDesign'; name: keyof AntDisignIconsType}
  | {family: 'Entypo'; name: keyof EntypoIconsType}
  | {family: 'Feather'; name: keyof FeatherIconsType}
  | {family: 'Ionicons'; name: keyof IoniIconsType}
  | {family: 'MaterialCommunity'; name: keyof MaterialCommunityIconsType}
) &
  CommonIconProps;

export type ButtonProps = {
  title?: string;
  disabled?: boolean;
  textProps?: TextProps;
  customWidget?: React.ReactNode;
  isLoading?: boolean;
  variant?: 'outlined' | 'filled';
  className?: string | undefined;
  btnClassName?: string | undefined;
  rippleColor?: ColorValue;
} & PressableProps;

export type CheckBoxProps = {
  isChecked: boolean;
  onChecked: (...event: any[]) => void;
  variant: 'outlined' | 'filled';
} & ViewProps;

export type CommonProps = {
  icon?: React.ReactNode;
  family?:
    | 'AntDesign'
    | 'Entypo'
    | 'Feather'
    | 'Ionicons'
    | 'MaterialCommunity';
  iconName?:
    | keyof AntDisignIconsType
    | keyof EntypoIconsType
    | keyof FeatherIconsType
    | keyof MaterialCommunityIconsType
    | keyof IoniIconsType;
  iconSize?: number;
  iconColor?: ColorValue;
  disabled?: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
} & TextInputProps;

export type InputProps = (
  | {type: 'text'}
  | {type: 'password'; contentVisible?: boolean; wantEye?: boolean}
  | {type: 'email'}
  | {type: 'number'}
) &
  CommonProps;

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

export type FormItemContextValue = {
  id: string;
};

export type FormInputProps = {
  label?: string;
  type: 'text' | 'email' | 'password' | 'number' | 'checkbox' | 'radio';
} & ControllerRenderProps<any> &
  Omit<InputProps, 'type' | 'onChange'>;
