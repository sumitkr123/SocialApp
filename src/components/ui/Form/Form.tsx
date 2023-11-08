import React from 'react';

import {cn} from '@/lib/utils';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import {Text, TextProps, View, ViewProps} from 'react-native';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

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

type FormItemContextValue = {
  id: string;
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

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
};
