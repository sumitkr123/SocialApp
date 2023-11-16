import React from 'react';

import {cn} from '@/lib/utils';
import {useTheme} from '@/providers/ThemeProvider';
import {
  FormFieldContextValue,
  FormInputProps,
  FormItemContextValue,
} from '@/types/common';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import {Text, TextProps, View, ViewProps} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {CheckBox} from '../Checkbox';
import {Input} from '../Input';

const Form = FormProvider;

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{name: props.name}}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const {getFieldState, formState} = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const {id} = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const FormItem = React.forwardRef<View, ViewProps>(
  ({className, ...props}, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{id}}>
        <View ref={ref} className={'space-y-2' + className} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = 'FormItem';

const FormLabel = React.forwardRef<Text, TextProps>(
  ({className, ...props}, ref) => {
    const {error, formItemId} = useFormField();

    return (
      <Text
        id={formItemId}
        ref={ref}
        className={
          error ? cn('text-red-500 dark:text-red-900', className) : className
        }
        {...props}
      />
    );
  },
);
FormLabel.displayName = 'FormLabel';

const FormControl = React.forwardRef<View, ViewProps>(({...props}, ref) => {
  const {error, formItemId, formDescriptionId, formMessageId} = useFormField();

  return (
    <View
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = 'FormControl';

const FormDescription = React.forwardRef<Text, TextProps>(
  ({className, ...props}, ref) => {
    const {formDescriptionId} = useFormField();

    return (
      <Text
        ref={ref}
        id={formDescriptionId}
        className={cn('text-sm text-slate-500 dark:text-slate-400', className)}
        {...props}
      />
    );
  },
);
FormDescription.displayName = 'FormDescription';

const FormMessage = React.forwardRef<Text, TextProps>(
  ({className, children, ...props}, ref) => {
    const {error, formMessageId} = useFormField();
    const body = error ? String(error?.message) : children;

    if (!body) {
      return null;
    }

    return (
      <Text
        ref={ref}
        id={formMessageId}
        className={cn(
          'text-sm font-medium text-red-500 dark:text-red-900',
          className,
        )}
        {...props}>
        {body}
      </Text>
    );
  },
);
FormMessage.displayName = 'FormMessage';

const FormInput = React.forwardRef<React.ReactElement, FormInputProps>(
  (
    {label, children, type, family, iconName, placeholder, onChange, ...props},
    _ref,
  ) => {
    let fieldblock: React.ReactNode = <></>;

    const {isThemeDark} = useTheme();

    switch (type) {
      case 'checkbox':
        fieldblock = (
          <View
            className="flex flex-row items-center"
            onTouchEnd={() => onChange(!props.value)}>
            <CheckBox
              onChecked={onChange}
              isChecked={props.value}
              variant="outlined"
            />
            <Text
              className="text-black dark:text-white font-redhatmedium ml-2"
              style={{fontSize: wp(4.5)}}>
              {label}
            </Text>
          </View>
        );
        break;

      case 'radio':
        fieldblock = <></>;
        break;

      default:
        fieldblock = (
          <Input
            type={type}
            family={family}
            iconName={iconName}
            iconColor={'#393a3b'}
            inputStyle={{
              fontSize: wp(4.2),
            }}
            placeholder={placeholder}
            placeholderTextColor={isThemeDark ? 'white' : 'black'}
            onChangeText={onChange}
            {...props}
          />
        );
        break;
    }

    return fieldblock;
  },
);
FormInput.displayName = 'FormInput';

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormInput,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
};
