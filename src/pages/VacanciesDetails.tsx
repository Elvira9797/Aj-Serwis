import { useNavigate, useParams } from 'react-router-dom';
import { vacancies } from '../common/vacanciesArr';
import SectionContainer from '../components/SectionContainer/SectionContainer';
import Form from '../components/Form/Form';
import VacancyInfo from '../components/VacancyInfo/VacancyInfo';
import {
  VacancyFormContainer,
  VacancyFormInfo,
  VacancySection,
} from '../components/VacancyInfo/VacancyInfo-styled';
import Button from '../components/Button/Button';

const VacanciesDetails = () => {
  const { vacancieId } = useParams();
  const navigate = useNavigate();
  const getCurrentVacancy = () => {
    return vacancies.find(vacancy => vacancy.vacancieId === vacancieId);
  };

  const currentVacancy = getCurrentVacancy();

  return (
    <>
      <VacancySection>
        <SectionContainer>
          <Button variant="primary" onClick={() => navigate(-1)}>
            Go Back
          </Button>
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
