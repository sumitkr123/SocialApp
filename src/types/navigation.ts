import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Auth: undefined;
  BottomNavBar: undefined;
};

export type RootBottomTabParamList = {
  Home: undefined;
  Explore: undefined;
  CreatePost: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type RootAuthStackParamList = {
  Login: undefined;
  Register: undefined;
  OTP: {primary_email: string; reset_pass?: boolean} | undefined;
  ForgotPassword: undefined;
  ResetPassword:
    | {
        reset_pass?: boolean | undefined;
      }
    | undefined;
};

export type LoginProps = CompositeScreenProps<
  NativeStackScreenProps<RootAuthStackParamList, 'Login'>,
  NativeStackScreenProps<RootStackParamList>
>;

export type RegisterProps = NativeStackScreenProps<
  RootAuthStackParamList,
  'Register'
>;

export type HomeProps = NativeStackScreenProps<RootBottomTabParamList, 'Home'>;
