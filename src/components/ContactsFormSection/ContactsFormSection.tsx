import { useTranslation } from 'react-i18next';
import Form from '../Form/Form';
import Map from '../Map/Map';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import { ContactFormSection, Container } from './ContactsFormSection-styled';

const ContactsFormSection = () => {
  const { t } = useTranslation();
  return (
    <ContactFormSection style={{ paddingTop: '30px' }}>
      <SectionContainer>
        <div>
          <SectionTitle>{t('contacts.contactForm.title')}</SectionTitle>
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
