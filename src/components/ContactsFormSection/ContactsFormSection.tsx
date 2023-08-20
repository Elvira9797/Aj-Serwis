import { SubTitle, Title } from '../ContactUs/ContactUs.styled';
import Form from '../Form/Form';
import Map from '../Map/Map';
import SectionContainer from '../SectionContainer/SectionContainer';
import { Container } from './ContactsFormSection-styled';

const ContactsFormSection = () => {
  return (
    <section style={{padding: '30px 0'}}>
      <SectionContainer>
        <div>
          <Title style={{ color: '#000' }}>Contact Us!</Title>
          <SubTitle style={{ color: '#000' }}>Lorem Ipsum</SubTitle>
        </div>
        <Container>
          <Form lightTheme={true} />
          <Map />
        </Container>
      </SectionContainer>
    </section>
  );
};

export default ContactsFormSection;
