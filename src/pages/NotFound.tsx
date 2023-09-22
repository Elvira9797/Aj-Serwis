import { useTranslation } from 'react-i18next';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import notFound from '../img/page-not-found.png';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <img style={{ margin: '0 auto' }} src={notFound} alt="Page not found" />
      <GoBackBtn
        style={{ margin: '2rem auto', fontSize: '1rem' }}
        onClick={() => navigate('/')}
      >
        {t('vacancies.back')}
      </GoBackBtn>
    </>
  );
};

export default NotFound;
