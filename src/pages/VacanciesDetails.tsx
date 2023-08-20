import { useParams } from 'react-router-dom';
import { vacancies } from '../common/vacanciesArr';
import SectionContainer from '../components/SectionContainer/SectionContainer';
import Form from '../components/Form/Form';
import VacancyInfo from '../components/VacancyInfo/VacancyInfo';
import {
  VacancyFormContainer,
  VacancyFormInfo,
  VacancySection,
} from '../components/VacancyInfo/VacancyInfo-styled';

const VacanciesDetails = () => {
  const { vacancieId } = useParams();

  const getCurrentVacancy = () => {
    return vacancies.find(vacancy => vacancy.vacancieId === vacancieId);
  };

  const currentVacancy = getCurrentVacancy();

  return (
    <>
      <VacancySection>
        <SectionContainer>
          <VacancyInfo vacancy={currentVacancy} />
        </SectionContainer>
      </VacancySection>
      <VacancySection style={{ backgroundColor: '#f7f9fb' }}>
        <SectionContainer>
          <VacancyFormContainer>
            <VacancyFormInfo>
              <h2>Respond to the vacancy by filling out the form!</h2>
              <p>Please provide only your valid contact details</p>
            </VacancyFormInfo>
            <Form
              lightTheme={true}
              style={{
                padding: '2rem',
                borderRadius: '2rem',
                backgroundColor: '#e5eef7',
              }}
            />
          </VacancyFormContainer>
        </SectionContainer>
      </VacancySection>
    </>
  );
};

export default VacanciesDetails;
