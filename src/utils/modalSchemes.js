import * as yup from 'yup';

export const bookingModalSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email address is a required field'),
  phone: yup
    .string()
    .matches(
      /^(?:\+?\d{12}|\d{10})$/,
      'Phone number must contain 10 or 12 digits'
    )
    .required('Phone is required'),
});
