import { useTranslation } from 'react-i18next';
import Form from '../Form/Form';
import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Section, SubTitle } from './ContactUs.styled';

const ContactUs = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <SectionContainer>
        <SectionTitle style={{ color: '#fff' }}>
          {t('main.contactUs.title')}
        </SectionTitle>
        <SubTitle>{t('main.contactUs.subtitle')}</SubTitle>
        <Form
          style={{
            padding: '2rem',
            borderRadius: '2rem',
            // backgroundColor: '  rgba(34, 32, 32, 0.4)',
            // backdropFilter: 'blur(10px)',
          }}
        />
      </SectionContainer>
    </Section>
  );
};

export default ContactUs;
