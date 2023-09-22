import { useTranslation } from 'react-i18next';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import notFound from '../img/page-not-found.png';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <img style={{ margin: '0 auto' }} src={notFound} alt="Page not found" />
      <GoBackBtn style={{ margin: '2rem auto', fontSize: '1rem' }}>
        {t('vacancies.back')}
      </GoBackBtn>
    </>
  );
};

export default NotFound;
