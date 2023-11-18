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
import {ScreenWrapper} from '@/components/ui/ScreenWrapper';
import {LoginFormValidationSchema} from '@/lib/validations';
import {useTheme} from '@/providers/ThemeProvider';
import {
  AntDisignIconsType,
  EntypoIconsType,
  FeatherIconsType,
  IoniIconsType,
  MaterialCommunityIconsType,
} from '@/types/common';
import {LoginProps} from '@/types/navigation';
import {StaticTexts} from '@/utils';
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
    iconFamily?:
      | 'AntDesign'
      | 'Entypo'
      | 'Feather'
      | 'Ionicons'
      | 'MaterialCommunity';
    iconName?:
      | keyof AntDisignIconsType
      | keyof EntypoIconsType
      | keyof FeatherIconsType
      | keyof IoniIconsType
      | keyof MaterialCommunityIconsType;
  }> = [
    {
      name: 'username',
      label: StaticTexts.LoginScreen.Input1,
      placeholder: StaticTexts.LoginScreen.Input1PH,
      required: true,
      type: 'text',
      iconFamily: 'MaterialCommunity',
      iconName: 'account',
    },
    {
      name: 'password',
      label: StaticTexts.LoginScreen.Input2,
      placeholder: StaticTexts.LoginScreen.Input2PH,
      required: true,
      type: 'password',
      iconFamily: 'Entypo',
      iconName: 'key',
    },
  ];

  const onSubmit = async (
    data: yup.InferType<typeof LoginFormValidationSchema>,
  ) => {
    console.log(data, 'data');
    navigation.replace('BottomNavBar');
  };

  const _renderFormInput = (item: any, field: any) => {
    let fieldBlock: React.ReactNode = <></>;
    if (item.iconFamily && item.iconName) {
      fieldBlock = (
        <FormInput
          type={item.type}
          label={item.label}
          family={item.iconFamily}
          iconName={item.iconName}
          iconColor={'#393a3b'}
          inputStyle={{
            fontSize: wp(4.2),
          }}
          placeholder={item.placeholder}
          placeholderTextColor={isThemeDark ? 'white' : 'black'}
          {...field}
        />
      );
    } else {
      fieldBlock = (
        <FormInput
          type={item.type}
          label={item.label}
          inputStyle={{
            fontSize: wp(4.2),
          }}
          placeholder={item.placeholder}
          placeholderTextColor={isThemeDark ? 'white' : 'black'}
          {...field}
        />
      );
    }
    return fieldBlock;
  };

  return (
    <ScreenWrapper>
      <View className="flex flex-1 items-center bg-indigo-600 dark:bg-slate-200">
        <View className="my-10 flex flex-col items-center w-full">
          <Text
            className="font-redhatbold text-gray-200 dark:text-indigo-600"
            style={{fontSize: wp(9)}}>
            {StaticTexts.AppName}
          </Text>
          <Text
            className="font-redhatmedium text-slate-300 dark:text-slate-400"
            style={{fontSize: wp(3.8)}}>
            {StaticTexts.LoginScreen.Subtitle}
          </Text>
        </View>
        <View className="flex-1 w-full bg-white dark:bg-gray-900 rounded-t-[40px] pt-10">
          <Form {...form}>
            <ScrollView className="px-10" showsVerticalScrollIndicator={false}>
              <Text
                className="font-redhatmedium text-black dark:text-white mb-10"
                style={{fontSize: wp(8.2)}}>
                {StaticTexts.LoginScreen.ContentHeader}
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
                          <View className="flex flex-row flex-1z items-center justify-between">
                            <FormLabel
                              className="text-black dark:text-white font-redhatmedium"
                              style={{fontSize: wp(4.5)}}>
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
                                {StaticTexts.LoginScreen.ForgotPass}
                              </Text>
                            )}
                          </View>

                          <FormControl>
                            {_renderFormInput(item, field)}
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
                title={StaticTexts.Login}
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
                className="flex flex-row flex-1 items-center justify-center gap-1 mt-20 pb-5"
                onTouchEnd={() => {
                  navigation.navigate('Register');
                }}>
                <Text
                  className="font-redhatmedium text-black dark:text-white"
                  style={{fontSize: hp(2.1)}}>
                  {StaticTexts.LoginScreen.DontHaveAc1}
                </Text>
                <Text
                  className="font-redhatbold text-indigo-600"
                  style={{fontSize: hp(2.1)}}>
                  {StaticTexts.LoginScreen.DontHaveAc2}
                </Text>
              </View>
            </ScrollView>
          </Form>
        </View>
      </View>
    </ScreenWrapper>
  );
};
