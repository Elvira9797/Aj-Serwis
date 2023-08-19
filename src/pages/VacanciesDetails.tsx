import { useParams } from 'react-router-dom';
import { vacancies } from '../common/vacanciesArr';
import SectionContainer from '../components/SectionContainer/SectionContainer';
import Form from '../components/Form/Form';
import VacancyInfo from '../components/VacancyInfo/VacancyInfo';

const VacanciesDetails = () => {
  const { vacancieId } = useParams();

  const getCurrentVacancy = () => {
    return vacancies.find(vacancy => vacancy.vacancieId === vacancieId);
  };

  const currentVacancy = getCurrentVacancy();

  return (
    <>
      <section style={{ padding: '8rem 0 90px 0' }}>
        <SectionContainer>
          <VacancyInfo vacancy={currentVacancy} />
        </SectionContainer>
      </section>
      <section style={{ backgroundColor: '#f7f9fb', padding: '90px' }}>
        <SectionContainer>
          <div
            style={{
              display: 'flex',
              gap: '3rem',
            }}
          >
            <div
              style={{
                flexBasis: '100%',
                display: 'flex',
                justifyContent: 'center',

                flexDirection: 'column',
              }}
            >
              <h2
                style={{
                  textAlign: 'start',
                  marginBottom: '2rem',
                  fontSize: '2rem',
                }}
              >
                Respond to the vacancy by filling out the form!
              </h2>
              <p style={{ textAlign: 'start', fontSize: '1.2rem' }}>
                Please provide only your valid contact details
              </p>
            </div>
            <Form
              lightTheme={true}
              style={{
                padding: '2rem',
                borderRadius: '2rem',
                backgroundColor: '#e5eef7',
              }}
            />
          </div>
        </SectionContainer>
      </section>
    </>
  );
};

export default VacanciesDetails;
