import { useParams } from 'react-router-dom';
import { vacancies } from '../common/vacanciesArr';
import SectionContainer from '../components/SectionContainer/SectionContainer';
import Form from '../components/Form/Form';

const VacanciesDetails = () => {
  const { vacancieId } = useParams();

  const getCurrentVacancy = () => {
    return vacancies.find(vacancy => vacancy.vacancieId === vacancieId);
  };

  const currentVacancy = getCurrentVacancy();

  return (
    <SectionContainer>
      <img src={currentVacancy?.image} alt={currentVacancy?.position} />
      <p>{currentVacancy?.city}</p>
      <p>{currentVacancy?.salary}</p>
      <p>{currentVacancy?.fullInfo}</p>
      <h1>{currentVacancy?.position}</h1>
      <div style={{ backgroundColor: '#0f0f0f2f' }}>
        <Form />
      </div>
    </SectionContainer>
  );
};

export default VacanciesDetails;
