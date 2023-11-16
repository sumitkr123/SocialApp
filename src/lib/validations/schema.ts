import {mailRegex, nameRegex, passwordRegex, userNameRegex} from '@/utils';
import * as yup from 'yup';

export const LoginFormValidationSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('**Username is required.')
    .matches(nameRegex, {message: '**Please enter a valid name.'}),
  password: yup.string().trim().required('**Password is required.'),
});

export const RegistrationFormValidationSchema = yup.object().shape({
  fullname: yup
    .string()
    .trim()
    .required('**Full-name is required.')
    .matches(nameRegex, {message: '**Please enter a valid name.'}),
  username: yup
    .string()
    .trim()
    .required('**Username is required.')
    .matches(userNameRegex, {message: '**Please enter a valid name.'}),
  email: yup
    .string()
    .trim()
    .required('**Email is required.')
    .matches(mailRegex, {message: '**Please enter a valid email address.'}),
  password: yup
    .string()
    .trim()
    .required('**Password is required.')
    .matches(passwordRegex, {
      message:
        '**A password should be of eight characters, and should consist one letter,one number and special character.',
    }),
  repeatPassword: yup
    .string()
    .trim()
    .required('**Password is required.')
    .oneOf([yup.ref('password')], 'Both passwords must be same.'),
  acceptedConditions: yup
    .boolean()
    // .oneOf([true], '**Please accept the terms and conditions.')
    .default(false),
});
