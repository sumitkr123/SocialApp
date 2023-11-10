import React from 'react';

import {Button} from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormField,
  FormInput,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import {RegistrationFormValidationSchema} from '@/lib/validations';
import {useTheme} from '@/providers/ThemeProvider';
import {MaterialCommunityIconsType} from '@/types/common';
import {RegisterProps} from '@/types/navigation';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {ScrollView, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as yup from 'yup';

export const Register = ({
  route,
  navigation,
}: RegisterProps): React.ReactNode => {
  const {isThemeDark} = useTheme();

  const form = useForm<yup.InferType<typeof RegistrationFormValidationSchema>>({
    resolver: yupResolver(RegistrationFormValidationSchema),
    defaultValues: {
      username: '',
      password: '',
      acceptedConditions: false,
      email: '',
      fullname: '',
      repeatPassword: '',
    },
    mode: 'all',
  });

  const FormInputList: Array<{
    name: keyof yup.InferType<typeof RegistrationFormValidationSchema>;
    label?: string;
    placeholder?: string;
    required?: boolean;
    type: 'text' | 'email' | 'password' | 'number' | 'checkbox' | 'radio';
    iconName?: keyof MaterialCommunityIconsType;
  }> = [
    {
      name: 'fullname',
      label: 'Full name',
      placeholder: 'Name Surname',
      required: true,
      type: 'text',
    },
    {
      name: 'username',
      label: 'Username',
      placeholder: 'dummy_user123',
      required: true,
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'email@email.com',
      required: true,
      type: 'email',
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: '**********',
      required: true,
      type: 'password',
      iconName: 'key',
    },
    {
      name: 'repeatPassword',
      label: 'Repeat password',
      placeholder: '**********',
      required: true,
      type: 'password',
      iconName: 'key',
    },
    {
      name: 'acceptedConditions',
      type: 'checkbox',
      label: 'I accept the terms and conditions',
      required: true,
    },
  ];

  const onSubmit = async (
    data: yup.InferType<typeof RegistrationFormValidationSchema>,
  ) => {
    console.log(data, 'data');
  };

  return (
    <View className="flex flex-1 items-center bg-indigo-600 dark:bg-slate-200">
      <View className="my-10 flex flex-col items-center w-full">
        <Text
          className="font-redhatbold text-gray-200 dark:text-indigo-600"
          style={{fontSize: wp(9)}}>
          Connected
        </Text>
        <Text
          className="font-redhatmedium text-slate-300 dark:text-slate-400"
          style={{fontSize: wp(3.8)}}>
          Your favourite social network
        </Text>
      </View>
      <View className="flex-1 w-full bg-white dark:bg-gray-900 rounded-t-[40px] pt-10">
        <Form {...form}>
          <ScrollView className="px-10" showsVerticalScrollIndicator={false}>
            <Text
              className="font-redhatmedium text-black dark:text-white mb-10"
              style={{fontSize: wp(8.2)}}>
              Create an account
            </Text>

            {FormInputList.map(item => {
              return (
                <FormField
                  key={item.name}
                  name={item.name}
                  control={form.control}
                  render={({field}) => {
                    return (
                      <FormItem className="flex flex-col gap-3 mb-8">
                        {item.type !== 'checkbox' && (
                          <FormLabel
                            className="text-black dark:text-white font-redhatmedium"
                            style={{fontSize: wp(4.5)}}>
                            {item.label}
                            {item.required && (
                              <Text className="text-red-700">{'*'}</Text>
                            )}
                          </FormLabel>
                        )}

                        <FormControl>
                          <FormInput
                            type={item.type}
                            label={item.label}
                            iconName={item.iconName}
                            iconColor={'#393a3b'}
                            inputStyle={{
                              fontSize: wp(4.2),
                            }}
                            placeholder={item.placeholder}
                            placeholderTextColor={
                              isThemeDark ? 'white' : 'black'
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage
                          className="text-red-600 font-redhatbold"
                          style={{fontSize: wp(3.8)}}
                        />
                      </FormItem>
                    );
                  }}
                />
              );
            })}
            <Button
              title="Sign up"
              variant="filled"
              className="mt-2"
              style={{height: hp(8.5)}}
              textProps={{
                style: {
                  fontSize: hp(2.45),
                },
                className: 'font-redhatbold',
              }}
              onPress={form.handleSubmit(onSubmit)}
            />
            <View
              className="flex flex-row flex-1 items-center justify-center gap-1 pb-5 mt-5"
              onTouchEnd={() => {
                navigation.goBack();
              }}>
              <Text
                className="font-redhatmedium text-black dark:text-white"
                style={{fontSize: hp(2.1)}}>
                Already have an account?
              </Text>
              <Text
                className="font-redhatbold text-indigo-600"
                style={{fontSize: hp(2.1)}}>
                Log in
              </Text>
            </View>
          </ScrollView>
        </Form>
      </View>
    </View>
  );
};
