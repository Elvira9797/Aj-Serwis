import Form from '../Form/Form';
import SectionContainer from '../SectionContainer/SectionContainer';
import { Container, Section, SubTitle, Title } from './ContactUs.styled';

const ContactUs = () => {
  return (
    <Section>
      <SectionContainer>
        <Title>Contact Us!</Title>
        <SubTitle>
          We will be glad if you leave your info to contact with us!
        </SubTitle>
        <Form />
      </SectionContainer>
    </Section>
  );
};

export default ContactUs;
