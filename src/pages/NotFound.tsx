import { useNavigate } from 'react-router-dom';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import notFound from '../img/page-not-found.png';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <img style={{ margin: '0 auto' }} src={notFound} alt="Page not found" />
      <GoBackBtn style={{ margin: '2rem auto', fontSize: '1rem' }} onClick={() => navigate(-1)}>
        Go back to previous page
      </GoBackBtn>
    </>
  );
};

export default NotFound;
