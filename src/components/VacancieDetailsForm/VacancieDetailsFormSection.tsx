import SectionContainer from '../SectionContainer/SectionContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import Form from '../Form/Form';
import { VacancySection } from '../VacancyInfo/VacancyInfo-styled';
import {
  VacancyFormContainer,
  VacancyFormInfo,
} from './VacancieDetailsFormSection-styled';

const VacancieDetailsFormSection = () => {
  return (
    <VacancySection>
      <SectionContainer>
        <VacancyFormContainer>
          <VacancyFormInfo>
            <SectionTitle>
              Respond to the vacancy by filling out the form!
            </SectionTitle>
            <p>Please provide only your valid contact details</p>
          </VacancyFormInfo>
          <Form
            lightTheme={true}
            style={{
              padding: '2rem',
              border: '2px solid transparent',
              boxShadow: '0px 12px 27px -3px rgba(0,0,0,0.74)',
              borderRadius: '2rem',
            }}
          />
        </VacancyFormContainer>
      </SectionContainer>
    </VacancySection>
  );
};

export default VacancieDetailsFormSection;
