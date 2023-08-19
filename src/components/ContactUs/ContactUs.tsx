import Form from '../Form/Form';
import SectionContainer from '../SectionContainer/SectionContainer';
import { Section, SubTitle, Title } from './ContactUs.styled';

const ContactUs = () => {
  return (
    <Section>
      <SectionContainer>
        <Title>Contact Us!</Title>
        <SubTitle>
          We will be glad if you leave your info to contact with us!
        </SubTitle>
        <Form
          style={{
            padding: '2rem',
            borderRadius: '2rem',
            backgroundColor: '  rgba(34, 32, 32, 0.4)',
            backdropFilter: 'blur(10px)',
          }}
        />
      </SectionContainer>
    </Section>
  );
};

export default ContactUs;
