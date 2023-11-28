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
import {RegistrationFormValidationSchema} from '@/lib/validations';
import {useTheme} from '@/providers/ThemeProvider';
import {FormInputListItemType, FormInputListType} from '@/types/common';
import {RegisterProps} from '@/types/navigation';
import {StaticTexts} from '@/utils';
import {yupResolver} from '@hookform/resolvers/yup';
import {ControllerRenderProps, useForm} from 'react-hook-form';
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

  const FormInputList: FormInputListType<
    typeof RegistrationFormValidationSchema
  > = [
    {
      name: 'fullname',
      label: StaticTexts.SignUpScreen.Input1,
      placeholder: StaticTexts.SignUpScreen.Input1PH,
      required: true,
      type: 'text',
    },
    {
      name: 'username',
      label: StaticTexts.SignUpScreen.Input2,
      placeholder: StaticTexts.SignUpScreen.Input2PH,
      required: true,
      type: 'text',
    },
    {
      name: 'email',
      label: StaticTexts.SignUpScreen.Input3,
      placeholder: StaticTexts.SignUpScreen.Input3PH,
      required: true,
      type: 'email',
    },
    {
      name: 'password',
      label: StaticTexts.SignUpScreen.Input4,
      placeholder: StaticTexts.SignUpScreen.Input4PH,
      required: true,
      type: 'password',
      iconFamily: 'Entypo',
      iconName: 'key',
    },
    {
      name: 'repeatPassword',
      label: StaticTexts.SignUpScreen.Input5,
      placeholder: StaticTexts.SignUpScreen.Input5PH,
      required: true,
      type: 'password',
      iconFamily: 'Entypo',
      iconName: 'key',
    },
    {
      name: 'acceptedConditions',
      type: 'checkbox',
      label: StaticTexts.SignUpScreen.ACPTC,
      required: true,
    },
  ];

  const onSubmit = async (
    data: yup.InferType<typeof RegistrationFormValidationSchema>,
  ) => {
    console.log(data, 'data');
  };

  const _renderFormInput = (
    item: FormInputListItemType<typeof RegistrationFormValidationSchema>,
    field: ControllerRenderProps<
      {
        fullname: string;
        username: string;
        email: string;
        password: string;
        repeatPassword: string;
        acceptedConditions: boolean;
      },
      | 'fullname'
      | 'username'
      | 'email'
      | 'password'
      | 'repeatPassword'
      | 'acceptedConditions'
    >,
  ) => {
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
            {StaticTexts.SignUpScreen.Subtitle}
          </Text>
        </View>
        <View className="flex-1 w-full bg-white dark:bg-gray-900 rounded-t-[40px] pt-10">
          <Form {...form}>
            <ScrollView className="px-10" showsVerticalScrollIndicator={false}>
              <Text
                className="font-redhatmedium text-black dark:text-white mb-10"
                style={{fontSize: wp(8.2)}}>
                {StaticTexts.SignUpScreen.ContentHeader}
              </Text>

              {FormInputList.map(
                (
                  item: FormInputListItemType<
                    typeof RegistrationFormValidationSchema
                  >,
                ) => {
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
                },
              )}

              <Button
                title={StaticTexts.Signup}
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
                  {StaticTexts.SignUpScreen.AlreadyHaveAc1}
                </Text>
                <Text
                  className="font-redhatbold text-indigo-600"
                  style={{fontSize: hp(2.1)}}>
                  {StaticTexts.SignUpScreen.AlreadyHaveAc2}
                </Text>
              </View>
            </ScrollView>
          </Form>
        </View>
      </View>
    </ScreenWrapper>
  );
};
