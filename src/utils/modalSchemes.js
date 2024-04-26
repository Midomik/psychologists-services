import * as yup from 'yup';

export const bookingModalSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email address is a required field'),
  phone: yup
    .string()
    .matches(/^(?:\+?\d{12}|\d{10})$/, 'Phone must contain 10 or 12 digits')
    .required('Phone is required'),
});

export const signUpModalSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email address is a required field'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
      'Password needs uppercase, lowercase, and number.'
    ),
});

export const signInModalSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email address is a required field'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
      'Password needs uppercase, lowercase, and number.'
    ),
});
