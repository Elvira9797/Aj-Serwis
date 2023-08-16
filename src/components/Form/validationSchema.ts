import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters long')
    .max(35, 'Name must be no more than 35 characters long'),
  surname: yup
    .string()
    .required('Surname is required')
    .min(2, 'Surname must be at least 2 characters long')
    .max(35, 'Surname must be no more than 35 characters long'),
  phone: yup
    .string()
    .required('Phone number is required')
    .min(6, 'Phone number must be at least 6 characters long')
    .max(18, 'Phone number must be no more than 18 characters long'),
  comment: yup
    .string()
    .required('Comment or review is required')
    .min(10, 'Comment or review must be at least 10 characters long')
    .max(250, 'Comment or review must be no more than 250 characters long'),

  policy: yup.boolean().required(),
});

export default validationSchema;
