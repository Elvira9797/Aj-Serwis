import { useForm } from 'react-hook-form';
import Input from './Input/Input';
import Button from '../Button/Button';
import { StyledForm } from './Form-styled';
import { StyledCheckbox } from './Input/Input-styled';

interface FormProps {
  name: string;
  surname: string;
  phone: string;
  comment: string;
  policy: boolean;
}

const Form = () => {
  const { register, handleSubmit, reset, watch } = useForm<FormProps>();

  const onSubmit = (data: FormProps) => {
    console.log(data);
    reset();
  };

  const allFieldsValue = watch();

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Input
          type="text"
          placeholder=""
          label="Name"
          {...register('name')}
          value={allFieldsValue.name}
        />
        <Input
          type="text"
          placeholder=""
          {...register('surname')}
          label="Surname"
          value={allFieldsValue.surname}
        />
      </div>
      <Input
        type="tel"
        placeholder=""
        {...register('phone')}
        label="Phone Number"
        value={allFieldsValue.phone}
      />
      <Input
        type="text"
        placeholder=""
        {...register('comment')}
        value={allFieldsValue.comment}
        label="Comment or Review"
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
        <StyledCheckbox type="checkbox" id={'policy'} {...register('policy')} />
        <label htmlFor="policy" style={{ fontSize: '0.8rem' }}>
          Я висловлюю згоду на обробку наданих мною персональних даних в
          контактній формі для цілей рекрутингу для агенції Top-Staff SP. o. o.
          *
        </label>
      </div>
      <Button
        type="submit"
        variant="secondary"
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
