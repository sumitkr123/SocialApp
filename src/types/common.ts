import {MaterialCommunityIcons} from '@/utils';
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

export type MaterialCommunityIconsType = typeof MaterialCommunityIcons;

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

export type PassInputProps = {
  type: 'password';
  contentVisible?: boolean;
  wantEye?: boolean;
};

export type SimpleInputProps = {
  type: 'text';
};

export type EmailInputProps = {
  type: 'email';
};

export type NumberInputProps = {
  type: 'number';
};

export type CommonProps = {
  icon?: React.ReactNode;
  iconName?: keyof MaterialCommunityIconsType;
  iconSize?: number;
  iconColor?: ColorValue;
  disabled?: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
} & TextInputProps;

export type InputProps = (
  | SimpleInputProps
  | PassInputProps
  | EmailInputProps
  | NumberInputProps
) &
  CommonProps;

export type CustomIconProps = {
  name: keyof MaterialCommunityIconsType;
  size?: number;
  color?: number | ColorValue;
} & IconProps;

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
