import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[a-zA-Zа-яА-ЯҐґЄєІіЇї]+$/, 'Only letters are allowed')
    .min(2, 'Name must be at least 2 characters long')
    .max(35, 'Name must be no more than 35 characters long')
    .trim(),

  surname: yup
    .string()
    .required('Surname is required')
    .matches(/^[a-zA-Zа-яА-ЯҐґЄєІіЇї]+$/, 'Only letters are allowed')
    .min(2, 'Surname must be at least 2 characters long')
    .max(35, 'Surname must be no more than 35 characters long')
    .trim(),

  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[0-9+()-]+$/, 'Only numbers are allowed')
    .min(6, 'Phone number must be at least 6 characters long')
    .max(18, 'Phone number must be no more than 18 characters long')
    .trim(),

  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format')
    .trim(),

  comment: yup
    .string()
    .optional()
    .max(250, 'Comment must be no more than 250 characters long')
    .trim(),

  policy: yup.boolean().oneOf([true], 'Field must be checked'),
});

export default validationSchema;
