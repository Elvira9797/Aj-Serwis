import {} from './ContactUs.styled';
import Button from '../Button/Button';

const ContactUs = () => {
  const onClick = () => {
    console.log('Click');
  };

  return (
    <div>
      ContactUs
      <Button variant="secondary" size="lg" onClick={onClick}>
        Click me!
      </Button>
    </div>
  );
};

export default ContactUs;
