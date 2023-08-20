import { useForm } from 'react-hook-form';
import Input from './Input/Input';
import Button from '../Button/Button';
import { StyledForm, Wrapper } from './Form-styled';
import { StyledCheckbox } from './Input/Input-styled';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validationSchema';
import { nanoid } from 'nanoid';
import { CSSProperties, FC } from 'react';

interface FormFields {
  name: string;
  surname: string;
  phone: string;
  comment: string;
  policy: boolean;
}

interface FormProps {
  style?: CSSProperties;
  lightTheme?: boolean;
}

const inputIds = {
  name: nanoid(),
  surname: nanoid(),
  phone: nanoid(),
  comment: nanoid(),
  policy: nanoid(),
};

const Form: FC<FormProps> = ({ style, lightTheme = false }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormFields) => {
    console.log(data);
    reset();
  };

  const allFieldsValue = watch();

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} style={style}>
      <Wrapper style={{ display: 'flex', gap: '2rem' }}>
        <Input
          id={inputIds.name}
          value={allFieldsValue.name}
          type="text"
          placeholder=""
          label="Name"
          {...register('name')}
          errors={errors}
          lightTheme={lightTheme}
        />
        <Input
          id={inputIds.surname}
          type="text"
          placeholder=""
          {...register('surname')}
          label="Surname"
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
        label="Phone Number"
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
        label="Comment or Review"
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
          I consent to the processing of the personal data provided by me in the
          contact form for the purposes of recruiting for the agency AJ Serwis
        </label>
      </div>
      <Button
        type="submit"
        variant="primary"
        size="lg"
        style={{
          margin: '0 auto',
        }}
      >
        Submit
      </Button>
    </StyledForm>
  );
};

export default Form;
