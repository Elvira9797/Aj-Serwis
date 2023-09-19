import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import Form from '../Form/Form';
import {
  StyledFormContainer,
  StyledFormInfo,
  StyledFormSection,
} from './VacancieDetailsFormSection-styled';
import { useTranslation } from 'react-i18next';

const VacancieDetailsFormSection = () => {
  const {t} = useTranslation()

  return (
    <StyledFormSection>
      <SectionContainer>
        <StyledFormContainer>
          <StyledFormInfo>
            <SectionTitle>{t('vacancyDetails.vacancyForm.title')}</SectionTitle>
            <p>{t('vacancyDetails.vacancyForm.subtitle')}</p>
          </StyledFormInfo>
          <Form
            lightTheme={true}
            style={{
              padding: '2rem',
              border: '2px solid transparent',
              boxShadow: '0px 12px 27px -3px rgba(0,0,0,0.74)',
              borderRadius: '2rem',
            }}
          />
        </StyledFormContainer>
      </SectionContainer>
    </StyledFormSection>
  );
};

export default VacancieDetailsFormSection;
