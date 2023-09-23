import { useForm } from 'react-hook-form';
import Input from './Input/Input';
import Button from '../Button/Button';
import { StyledForm, Wrapper } from './Form-styled';
import { StyledCheckbox } from './Input/Input-styled';
import { yupResolver } from '@hookform/resolvers/yup';
import useValidationSchema from './useValidationSchema';
import { nanoid } from 'nanoid';
import { CSSProperties, FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import sendEmail from './sendEmail';

export interface FormFields {
  name: string;
  surname: string;
  phone: string;
  comment: string | undefined;
  policy: boolean | undefined;
}

interface FormProps {
  style?: CSSProperties;
  lightTheme?: boolean;
  vacancyName?: string | undefined;
}

const inputIds = {
  name: nanoid(),
  surname: nanoid(),
  phone: nanoid(),
  email: nanoid(),
  comment: nanoid(),
  policy: nanoid(),
};

const Form: FC<FormProps> = ({
  style,
  lightTheme = false,
  vacancyName = '',
}) => {
  const { validationSchema } = useValidationSchema();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(validationSchema),
  });

  const { t } = useTranslation();
  const [isDisabled, setisDisabled] = useState(true);

  const allFieldsValue = watch();

  useEffect(() => {
    const setBtnDisabled = () => {
      if (allFieldsValue.policy) {
        setisDisabled(false);
      } else {
        setisDisabled(true);
      }
    };

    setBtnDisabled();
  }, [allFieldsValue]);

  const onSubmit = async (data: FormFields) => {
    await sendEmail(data, vacancyName);
    reset();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)} style={style}>
        <Wrapper style={{ display: 'flex', gap: '2rem' }}>
          <Input
            id={inputIds.name}
            value={allFieldsValue.name}
            type="text"
            placeholder=""
            label={t('main.contactUs.form.fields.name')}
            {...register('name')}
            errors={errors}
            lightTheme={lightTheme}
          />
          <Input
            id={inputIds.surname}
            type="text"
            placeholder=""
            {...register('surname')}
            label={t('main.contactUs.form.fields.surname')}
            value={allFieldsValue.surname}
            errors={errors}
            lightTheme={lightTheme}
          />
        </Wrapper>
        <Input
          id={inputIds.phone}
          type="tel"
          placeholder=""
          {...register('phone')}
          label={t('main.contactUs.form.fields.phone')}
          value={allFieldsValue.phone}
          errors={errors}
          lightTheme={lightTheme}
        />
        <Input
          id={inputIds.comment}
          type="text"
          placeholder=""
          {...register('comment')}
          value={allFieldsValue.comment}
          label={t('main.contactUs.form.fields.comment')}
          errors={errors}
          lightTheme={lightTheme}
        />
        <div
          style={{
            width: '1005',
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            padding: '0 1rem',
          }}
        >
          <StyledCheckbox
            type="checkbox"
            id={inputIds.policy}
            {...register('policy')}
            lightTheme={lightTheme}
          ></StyledCheckbox>
          <label
            htmlFor={inputIds.policy}
            style={{
              fontSize: '0.8rem',
              color: !lightTheme ? '#fff' : '#000',
              cursor: 'pointer',
            }}
          >
            {t('main.contactUs.form.fields.policy')}
          </label>
        </div>
        <Button
          type="submit"
          disabled={isDisabled}
          variant="form"
          lightTheme={lightTheme}
          style={{
            margin: '0 auto',
          }}
        >
          {t('main.contactUs.form.btnText')}
        </Button>
      </StyledForm>
    </>
  );
};

export default Form;
