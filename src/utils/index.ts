export const nameRegex = /^[a-zA-Z0-9\s]{2,}$/;
export const userNameRegex = /^[a-zA-Z0-9@#_.\s]{2,}$/;
export const phoneRegex = /^[6-9]\d{9}$/;
export const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

export const StaticTexts = {
  AppName: 'Vibely',
  Login: 'Log in',
  Signup: 'Sign up',
  LoginScreen: {
    Header: 'Vibely',
    Subtitle: 'Your favourite social network',
    ContentHeader: 'Log in',
    Input1: 'Username',
    Input1PH: 'dummy_user123',
    Input2: 'Password',
    Input2PH: '*******',
    ForgotPass: 'Forgot your password?',
    DontHaveAc1: "Don't have an account?",
    DontHaveAc2: 'Sign Up',
  },
  SignUpScreen: {
    Header: 'Vibely',
    Subtitle: 'Your favourite social network',
    ContentHeader: 'Create an account',
    Input1: 'Full name',
    Input1PH: 'Name Surname',
    Input2: 'Username',
    Input2PH: 'dummy_user123',
    Input3: 'Email',
    Input3PH: 'email@email.com',
    Input4: 'Password',
    Input4PH: '*******',
    Input5: 'Repeat password',
    Input5PH: '*******',
    ACPTC: 'I accept the terms and conditions',
    AlreadyHaveAc1: 'Already have an account?',
    AlreadyHaveAc2: 'Log in',
  },
};
