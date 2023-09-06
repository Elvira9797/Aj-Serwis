import { SubTitle } from '../ContactUs/ContactUs.styled';
import Form from '../Form/Form';
import Map from '../Map/Map';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import { ContactFormSection, Container } from './ContactsFormSection-styled';

const ContactsFormSection = () => {
  return (
    <ContactFormSection style={{ paddingTop: '30px' }}>
      <SectionContainer>
        <div>
          <SectionTitle>Contact Us!</SectionTitle>
          <SubTitle style={{ color: '#000' }}>Lorem Ipsum</SubTitle>
        </div>
        <Container>
          <Form lightTheme={true} />
          <Map />
        </Container>
      </SectionContainer>
    </ContactFormSection>
  );
};

export default ContactsFormSection;
