import React from 'react';

import {Button} from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import {Input} from '@/components/ui/Input';
import {MaterialCommunityIconsType} from '@/lib/utils';
import {LoginFormValidationSchema} from '@/lib/validations';
import {useTheme} from '@/providers/ThemeProvider';
import {LoginProps} from '@/types/navigation';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {ScrollView, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as yup from 'yup';

export const Login = ({route, navigation}: LoginProps): React.ReactNode => {
  const {isThemeDark} = useTheme();

  const form = useForm<yup.InferType<typeof LoginFormValidationSchema>>({
    resolver: yupResolver(LoginFormValidationSchema),
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'all',
  });

  const FormInputList: Array<{
    name: keyof yup.InferType<typeof LoginFormValidationSchema>;
    label?: string;
    placeholder?: string;
    required?: boolean;
    type: 'text' | 'email' | 'password' | 'number';
    iconName?: keyof MaterialCommunityIconsType;
  }> = [
    {
      name: 'username',
      label: 'Username',
      placeholder: 'dummy_user123',
      required: true,
      type: 'text',
      iconName: 'account',
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: '*******',
      required: true,
      type: 'password',
      iconName: 'key',
    },
  ];

  const onSubmit = async (
    data: yup.InferType<typeof LoginFormValidationSchema>,
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
      <View className="flex-1 w-full bg-white dark:bg-black rounded-t-[40px] pt-10">
        <ScrollView className="px-10" showsVerticalScrollIndicator={false}>
          <Text
            className="font-redhatmedium text-black dark:text-white mb-10"
            style={{fontSize: wp(9.5)}}>
            Log in
          </Text>

          <Form {...form}>
            {FormInputList.map(item => {
              return (
                <FormField
                  key={item.name}
                  name={item.name}
                  control={form.control}
                  render={({field}) => {
                    return (
                      <FormItem className="flex flex-col gap-3 mb-8">
                        <View className="flex flex-row flex-1z items-center justify-between">
                          <FormLabel
                            className="text-black dark:text-white font-redhatmedium"
                            style={{fontSize: wp(5)}}>
                            {item.label}
                            {item.required && (
                              <Text className="text-red-700">{'*'}</Text>
                            )}
                          </FormLabel>
                          {item.name === 'password' && (
                            <Text
                              className="text-indigo-600 font-redhatmedium"
                              style={{fontSize: hp(1.9)}}
                              onPress={() => {}}>
                              Forgot your password?
                            </Text>
                          )}
                        </View>

                        <FormControl>
                          <Input
                            type={item.type}
                            iconName={item.iconName}
                            iconColor={'#393a3b'}
                            inputStyle={{
                              fontSize: wp(4.2),
                            }}
                            placeholder={item.placeholder}
                            placeholderTextColor={
                              isThemeDark ? 'white' : 'black'
                            }
                            onChangeText={field.onChange}
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
              title="Log in"
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
          </Form>
        </ScrollView>
        <View className="flex flex-row flex-1 items-center justify-center gap-1 pb-5">
          <Text
            className="font-redhatmedium text-black dark:text-white"
            style={{fontSize: hp(2.1)}}>
            Don't have an account?
          </Text>
          <Text
            className="font-redhatbold text-indigo-600"
            style={{fontSize: hp(2.1)}}>
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};
