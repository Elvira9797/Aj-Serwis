import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import notFound from '../img/page-not-found.png';

const NotFound = () => {
  return (
    <>
      <img style={{ margin: '0 auto' }} src={notFound} alt="Page not found" />
      <GoBackBtn style={{ margin: '2rem auto', fontSize: '1rem' }} >
        Go back to main page
      </GoBackBtn>
    </>
  );
};

export default NotFound;
