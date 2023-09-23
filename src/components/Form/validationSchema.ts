import i18next from 'i18next';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required(i18next.t('main.contactUs.form.errors.name.required'))
    .matches(
      /^[a-zA-Zа-яА-ЯҐґЄєІіЇї]+$/,
      i18next.t('main.contactUs.form.errors.name.matches')
    )
    .min(2, i18next.t('main.contactUs.form.errors.name.min'))
    .max(35, i18next.t('main.contactUs.form.errors.name.max'))
    .trim(),
  surname: yup
    .string()
    .required(i18next.t('main.contactUs.form.errors.surname.required'))
    .matches(
      /^[a-zA-Zа-яА-ЯҐґЄєІіЇї]+$/,
      i18next.t('main.contactUs.form.errors.surname.matches')
    )
    .min(2, i18next.t('main.contactUs.form.errors.surname.min'))
    .max(35, i18next.t('main.contactUs.form.errors.surname.max'))
    .trim(),
  phone: yup
    .string()
    .required(i18next.t('main.contactUs.form.errors.phone.required'))
    .matches(
      /^[0-9+()-]+$/,
      i18next.t('main.contactUs.form.errors.phone.matches')
    )
    .min(6, i18next.t('main.contactUs.form.errors.phone.min'))
    .max(18, i18next.t('main.contactUs.form.errors.phone.max'))
    .trim(),
  comment: yup
    .string()
    .optional()
    .max(250, i18next.t('main.contactUs.form.errors.comment.max'))
    .trim(),

  policy: yup.boolean().oneOf([true]),
});

export { formSchema };
