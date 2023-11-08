import React from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import {Icon} from '@/components/ui/Icon';
import {Input} from '@/components/ui/Input';
import {LoginFormValidationSchema} from '@/lib/validations/LoginValidationSchema';
import {useTheme} from '@/providers/ThemeProvider';
import {LoginProps} from '@/types/navigation';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {ScrollView, Text, TextInput, View} from 'react-native';
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
    type?: 'text' | 'email' | 'password' | 'number';
  }> = [
    {
      name: 'username',
      label: 'Username',
      placeholder: 'dummy_user123',
      required: true,
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: '*******',
      required: true,
    },
  ];

  return (
    <View className="flex flex-1 items-center bg-indigo-600 dark:bg-black">
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
      <View className="flex-1 w-full bg-white dark:bg-indigo-700 rounded-t-[40px]  py-10">
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
                        <FormLabel
                          className="text-black dark:text-white font-redhatmedium"
                          style={{fontSize: wp(5)}}>
                          {item.label}
                          <Icon
                            name="home-city-outline"
                            color={'black'}
                            size={25}
                          />
                        </FormLabel>
                        <FormControl>
                          <TextInput
                            style={{
                              height: hp(8),
                              fontSize: wp(4.2),
                            }}
                            placeholder={item.placeholder}
                            placeholderTextColor={
                              isThemeDark ? 'white' : 'black'
                            }
                            className="border-gray-700 dark:border-white border-[1px] rounded-lg text-black dark:text-white font-redhatmedium px-2"
                            onChangeText={field.onChange}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage
                          className="text-red-600 font-redhatbold"
                          style={{fontSize: wp(3.6)}}
                        />
                      </FormItem>
                    );
                  }}
                />
              );
            })}
          </Form>
          <Input
            type="password"
            style={{height: wp(10), borderWidth: 1}}
            contentVisible={false}
          />
        </ScrollView>
      </View>
    </View>
  );
};
