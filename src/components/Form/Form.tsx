import { useForm } from 'react-hook-form';
import Input from './Input/Input';
import Button from '../Button/Button';
import { StyledForm } from './Form-styled';

interface FormProps {
  name: string;
  surname: string;
  phone: string;
  comment: string;
}

const Form = () => {
  const { register, handleSubmit, reset } = useForm<FormProps>();

  const onSubmit = (data: FormProps) => {
    console.log(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'flex', gap: '2rem' }}>
      <Input type="text" placeholder="Name" {...register('name')} />
      <Input type="text" placeholder="Surname" {...register('surname')} />
      </div>{' '}
      <Input type="tel" placeholder="Phone Number" {...register('phone')} />
      <Input
        type="text"
        placeholder="Comment or review"
        {...register('comment')}
      />
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
